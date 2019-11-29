﻿//类型允许的潜觉杀，前面的数字是官方数据的类型编号，后面的杀是自己做的图片中的潜觉序号
var type_allowable_latent = {
    "0":[], //0进化
    "12":[], //12觉醒
    "14":[], //14强化
    "15":[], //15卖钱
    "9":[],//特殊保护
    "1":[17,18,19,20,21,22,23,24], //1平衡
    "2":[20,24],//2体力
    "3":[18,22],//3回复
    "4":[20,24],//4龙
    "5":[19],//5神
    "6":[19,23],//6攻击
    "7":[17],//7恶魔
    "8":[17,20,21,24],//8机械
}
//仿GM_xmlhttpRequest函数v1.3
if (typeof(GM_xmlhttpRequest) == "undefined") {
    var GM_xmlhttpRequest = function(GM_param) {
        var xhr = new XMLHttpRequest(); //创建XMLHttpRequest对象
        xhr.open(GM_param.method, GM_param.url, true);
        if (GM_param.responseType) xhr.responseType = GM_param.responseType;
        if (GM_param.overrideMimeType) xhr.overrideMimeType(GM_param.overrideMimeType);
        xhr.onreadystatechange = function() //设置回调函数
            {
                if (xhr.readyState === xhr.DONE) { //请求完成时
                    if (xhr.status === 200 && GM_param.onload) //正确加载时
                    {
                        GM_param.onload(xhr);
                    }
                    if (xhr.status !== 200 && GM_param.onerror) //发生错误时
                    {
                        GM_param.onerror(xhr);
                    }
                }
            }
        //添加header
        for (var header in GM_param.headers) {
            xhr.setRequestHeader(header, GM_param.headers[header]);
        }
        //发送数据
        xhr.send(GM_param.data ? GM_param.data : null);
    }
}
//数字补前导0
function PrefixInteger(num, length)
{  
	return (Array(length).join('0') + num).slice(-length); 
}
//获取URL参数
function getQueryString(name,url) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var search = url || window.location.search.substr(1);
	var r = search.match(reg);
    if (r != null)
    {
        return decodeURIComponent(r[2]);
    }else
    {
        return null;
    }
}

//数组去重
/* https://www.cnblogs.com/baiyangyuanzi/p/6726258.html
* 实现思路：获取没重复的最右一值放入新数组。
* （检测到有重复值时终止当前循环同时进入顶层循环的下一轮判断）*/
function uniq(array){
    var temp = [];
    var l = array.length;
    for(var i = 0; i < l; i++) {
        for(var j = i + 1; j < l; j++){
            if (array[i] === array[j]){
                i++;
                j = i;
            }
        }
        temp.push(array[i]);
    }
    return temp;
}
//计算用了多少潜觉格子
function usedHole(latent)
{
	return latent.reduce(function(previous,current){
		return previous + (current>= 12?2:1);
	},0);
}
//计算队伍中有多少个该觉醒
function awokenCountInFormation(formationTeam,ak,solo)
{
    var allAwokenCount = formationTeam.reduce(function(fc,fm){
        return fc + awokenCountInTeam(fm,ak,solo);
    },0)
    return allAwokenCount;
}
//计算队伍中有多少个该觉醒
function awokenCountInTeam(team,awokenIndex,solo)
{
    var formationAwokenCount = team.reduce(function(tc,tm,isAssist){
        var teamAwokenCount = tm.reduce(function(c,m){
            let Card = Cards[m.id];
            if (m.id<=0)
            { //如果是特殊情况的
                return c;
            }
            let cdAwoken = Card.awakenings; //这个怪物的觉醒数据
            let cdSAwoken = Card.superAwakenings; //这个怪物的超觉醒数据
            if ((!cdAwoken && !cdSAwoken) || (isAssist && cdAwoken.indexOf(49)<0))
            { //如果没有觉醒和超觉醒 || （如果是辅助队 &&第一个不是武器觉醒）
                return c;
            }
            //启用的觉醒数组片段
            let enableAwoken = cdAwoken.slice(0,m.awoken);
            //相同的觉醒数
            let hasAwoken = enableAwoken.filter(function(a){return a == awokenIndex;}).length;
            //如果是单人，有超觉醒，且超觉醒id和计数的id相同
            if (solo && cdSAwoken && (cdSAwoken[m.sawoken] == awokenIndex))
            {
                hasAwoken++;
            }
            return c + hasAwoken;
        },0);
        return tc + teamAwokenCount;
    },0)
    return formationAwokenCount;
}
//返回可用的怪物名称
function returnMonsterNameArr(m,lsList)
{
	var monNameArr = lsList.map(function(lc){ //取出每种语言
		return m.name[lc];
	}).filter(function(ln){ //去掉空值和问号
		return (ln?(ln.length>0):false) && !/^(?:초월\s*)?\?+/.test(ln);
	});
	if (monNameArr.length < 1) //如果本来的列表里没有名字
	{
		for (var nc in m.name)
		{ //循环所有名字
			var theName = m.name[nc]; //当前的名字
			if (!/^(?:초월\s*)?\?+/.test(theName)) //如果不是问号
			{
				monNameArr.push(theName);
			}
		}
		if (monNameArr.length < 1) monNameArr.push("????"); //如果还没有，默认名是问号
	}
	return monNameArr;
}
//Code From pad-rikuu
function valueAt(level, maxLevel, curve) {
    const f = maxLevel === 1 ? 1 : (level - 1) / (maxLevel - 1);
    return curve.min + (curve.max - curve.min) * Math.pow(f, curve.scale);
}
//计算怪物的能力
function calculateAbility(monid,level,plus,awoken,latent,weaponId,weaponAwoken)
{
    if (monid == undefined) monid = 0;
    if (level == undefined) level = 1;
    if (plus == undefined) plus = [0,0,0];
    if (awoken == undefined) awoken = 0;
    if (latent == undefined) latent = [];
    
	let m = Cards[monid]; //怪物数据
    if (monid ==0 || m==undefined) return null;
	var plusAdd = [10,5,3]; //加值的增加值
	var awokenAdd = [ //对应加三维觉醒的序号与增加值
		[{index:1,value:500},{index:65,value:-5000}],
		[{index:2,value:100},{index:66,value:-1000}],
		[{index:3,value:200},{index:67,value:-2000}]
	];
	var latentAdd = [ //对应加三维潜在觉醒的序号与增加比例
		[{index:1,scale:0.015},{index:12,scale:0.03},{index:25,scale:0.045}],
		[{index:2,scale:0.01},{index:12,scale:0.02},{index:26,scale:0.03}],
		[{index:3,scale:0.1},{index:12,scale:0.2},{index:27,scale:0.3}]
    ];
	var abilitys = m.ability.map(function(ab,idx){
        var n_base = Math.round(valueAt(level,m.maxLv,ab));
		//var n_base = Math.round((ab[1]-ab[0])*(level-1)/98+ab[0]); //99级以内的增加
		if (level>99) //110级的增加
		{ //100到110级有11级，将m.a110的成长比率平均分配到这11级内
			n_base = Math.round(ab.max + ab.max*(m.a110/100)*(level-99)/11);
		}
        var n_plus = plus[idx]*plusAdd[idx]; //加值增加量
        var awokenList = m.awoken.slice(0,awoken); //储存生效的觉醒
        if (weaponId)
        {
            var weapon = Cards[weaponId]; //武器的怪物数据
            var weaponAwokenList = weapon.awoken.slice(0,weaponAwoken);
            if (weaponAwokenList.indexOf(49)>=0)
                awokenList = awokenList.concat(weaponAwokenList);
        }
        var n_awoken = awoken
            ?Math.round(awokenAdd[idx].reduce(function(previous,aw){
                    var awokenCount = awokenList.filter(function(a){return a==aw.index;}).length; //每个潜觉的数量
                    return previous + aw.value * awokenCount; //无加值与觉醒的基础值，乘以那么多个潜觉的增加倍数
                },0))
            :0;
        var n_latent = latent
            ?Math.round(latentAdd[idx].reduce(function(previous,la){
                    var latentCount = latent.filter(function(l){return l==la.index;}).length; //每个潜觉的数量
                    return previous + n_base * la.scale * latentCount; //无加值与觉醒的基础值，乘以那么多个潜觉的增加倍数
                },0))
            :0;
        //console.log("基础值：%d，加蛋值：%d，觉醒x%d增加：%d，潜觉增加：%d",n_base,n_plus,awokenCount,n_awoken,n_latent);
        var reValue = n_base + n_plus + n_awoken + n_latent;
        if (idx<2 && reValue<1) reValue = 1; //HP和ATK最低为1
		return reValue;
	})
	return abilitys;
}