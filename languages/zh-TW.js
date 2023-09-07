﻿{
const _localTranslating = {
	webpage_title: `龍族拼圖${teamsCount}人隊伍圖製作`,
	title_blank: "輸入隊伍標題",
	detail_blank: "輸入説明",
	force_reload_data: "強制刷新數據",
	request_input: tp`請輸入${'info'}`,
	status_message: {
		loading_check_version: "正在檢查數據版本，請稍候……",
		loading_mon_info: "正在加載怪物數據，請稍候……",
		loading_skill_info: "正在加載技能數據，請稍候……",
		prepare_capture: "正在準備截圖，請稍候……",
	},
	link_read_message: {
		success: tp`發現 ${'type'} 格式。`,
		need_user_script: `由於 PADDB 跨域，您需要在用戶腳本管理器內安裝輔助腳本以支持此功能。`,
		user_script_link: `輔助腳本的鏈接`,
		type: {
			"PADDF": "智龍急速陣型",
			"PDC": "PDC",
			"PADDB": "PADDB",
		},
		error: {
			0: "未知錯誤",
			1: "不支持的格式",
			2: "無隊伍數據",
			3: "錯誤的 JSON 格式",
			4: "錯誤的 網址 格式",
		},
		paddb_success: `操作成功`,
		paddb_unauthorized: `認證失敗（賬號或密碼錯誤）`,
	},
	sort_name:{
		sort_none: "無",
		sort_id: "怪物ID",
		sort_attrs: "屬性",
		sort_evoRootId: "進化樹",
		sort_evoRoot_Attrs : "進化根怪物的屬性",
		sort_rarity: "稀有度",
		sort_cost: "消耗",
		sort_mp: "MP",
		sort_skillLv1: "技能最大冷卻時間",
		sort_skillLvMax: "技能最小冷卻時間",
		sort_evoSkillLastCD: "技能最小冷卻時間（最終進化）",
		sort_hpMax120: "最大 HP",
		sort_atkMax120: "最大攻擊",
		sort_rcvMax120: "最大回復",
		sort_hpMax120_awoken: "最大 HP（+覺醒）",
		sort_atkMax120_awoken: "最大攻擊（+覺醒）",
		sort_rcvMax120_awoken: "最大回復（+覺醒）",
		sort_abilityIndex_awoken: "最大加權能力指數（+覺醒）",
	},
	skill_parse: {
		skill: {
			error: tp`😫技能解析發生錯誤，請將角色 ID 反饋給開發者。`,
			unknown: tp`未知的技能類型：${'type'}`, //type
			active_turns: tp`${'turns'} 回合內，${'skills'}`, //turns, skills
			delay_active_turns: tp`${`icon`}【${'turns'}回合以後生效】:${'skills'}`,
			random_skills: tp`隨機發動以下技能：${'skills'}`, //skills
			evolved_skills: tp`技能使用後會進化為下一階段：${'skills'}`, //skills
			evolved_skills_loop: tp`${`icon`}使用後返回第一階段`,
			damage_enemy: tp`對${'target'}造成${'damage'}的${'attr'}傷害${'times'}${'totalDamage'}`, //target, damage, attr
			damage_enemy_times: tp`×${'times'}`,
			damage_enemy_count: tp`(共${'damage'})`,
			vampire: tp`${'damage_enemy'}，並${'icon'}回復傷害值${'heal'}的HP`, //target, damage, attr
			delay: tp`延遲敵人的攻擊${'icon'}`, //icon
			mass_attack: tp`所有攻擊變為${'icon'}全體攻擊`,
			leader_change: tp`${'icon'}將${'target'}換為隊長，再次使用則換回來`,
			no_skyfall: tp`${'icon'}天降的寶珠不會消除`,
			self_harm: tp`${'icon'}${'stats'}減少${'value'}`,
			heal: tp`${'icon'}回復 ${'value'} 的 ${'stats'}`,
			unbind: tp`${'stats'}狀態減少 ${'turns'} 回合`,
			unbind_normal: tp`${'icon'}封鎖`,
			unbind_awakenings: tp`${'icon'}覺醒無效`,
			unbind_matches: tp`${'icon'}無法消除寶珠`,
			bind_skill: tp`${'icon'}自身無法使用技能`,
			defense_break: tp`${'icon'}敵方的防禦力減少${'value'}`,
			poison: tp`${'icon'}使${'target'}中毒，每回合損失${'belong_to'} ${'value'} 的 ${'stats'}`,
			time_extend: tp`${'icon'}寶珠移動時間 ${'value'}`,
			follow_attack: tp`${'icon'}消除寶珠的回合，以${'belong_to'}${'value'}的傷害追打${'target'}（計算防禦力）`,
			follow_attack_fixed: tp`追加${'damage'}的${'attr'}傷害`,
			auto_heal_buff: tp`行動結束後${'icon'}回復${'value'}的${'stats'}`,
			auto_heal: tp`${'icon'}消除寶珠的回合，回復${'belong_to'}${'value'}的${'stats'}`,
			ctw: tp`${'icon'}${'time'}內時間停止，可以任意移動寶珠${'addition'}`,
			ctw_addition: tp`，達成${'cond'}時，${'skill'}`,
			gravity: tp`${'icon'}造成${'target'}${'value'}的傷害`,
			resolve: tp`${'icon'}如${'stats'}≧${'min'}，受到單一次致命攻擊時，將會以1點 HP 生還`,
			board_change: tp`全畫面的寶珠變為${'orbs'}`,
			skill_boost: tp`自身以外成員的技能冷卻儲備${'icon'}${'turns_min'}${'turns_max'}`,
			skill_boost_range: tp`~${'turns'}`,
			add_combo: tp`結算時連擊數增加${'value'}${'icon'}`,
			fixed_time: tp`【${'icon'}操作時間固定${'value'}】`,
			min_match_length: tp`【限定≥${'matchable'}珠才能消除】`,
			drop_refresh: tp`${'icon'}全板刷新`,
			drum: tp`寶珠移動和消除的聲音變成太鼓達人的音效`,
			auto_path: tp`顯示${'matchesNumber'}連擊的${'icon'}轉珠路徑指引`,
			counter_attack: tp`受到${'target'}攻擊時，${'chance'}進行受到傷害${'value'}的${'attr'}${'icon'}反擊`,	
			change_orbs: tp`${'from'}→${'to'}`,
			generate_orbs: tp`${'exclude'}生成${'orbs'}各${'value'}個`,
			fixed_orbs: tp`在${'position'}產生${'orbs'}`,
			orb_drop_increase: tp`${'orbs'}的掉落率提高到${'prob'}`,
			orb_drop_increase_flag: tp`${'prob'}幾率掉落${'flag'}狀態${'orbs'}${'value'}`,
			orb_thorn: tp`，每次碰到減少${'value'}`,
			attr_absorb: tp`${'icon'}屬性吸收`,
			combo_absorb: tp`${'icon'}連擊吸收`,
			damage_absorb: tp`${'icon'}傷害吸收`,
			damage_void: tp`${'icon'}傷害無效`,
			void_enemy_buff: tp`敵人的 ${'buff'} 無效化`,
			change_attribute: tp`將${'target'}變為${'attrs'}`,
			set_orb_state_enhanced: tp`${'icon'}強化${'orbs'}（每顆寶珠效力增加${'value'}）`,
			set_orb_state_locked: tp`將${'orbs'}${'icon'}鎖定${'value'}`,
			set_orb_state_unlocked: tp`${'icon'}解除${'orbs'}的鎖定狀態`,
			set_orb_state_bound: tp`無法消除${'orbs'}`,
			rate_multiply: tp`作為隊長進入地下城時，${'rate'}變為${'value'}`,
			rate_multiply_drop: tp`${'icon'}怪物蛋掉落率`,
			rate_multiply_coin: tp`${'icon'}金幣掉落率`,
			rate_multiply_exp: tp`${'icon'}等級經驗倍率`,
			reduce_damage: tp`${'condition'}受到的${'attrs'}傷害${'chance'}${'icon'}減少${'value'}`,
			power_up: tp`${'condition'}${'targets'}${'target'}${'each_time'}${'value'}${'reduceDamage'}${'additional'}`,
			power_up_targets: tp`${'attrs_types'}的 `,
			henshin: tp`變身為${'cards'}`,
			random_henshin: tp`隨機變身為${'cards'}`,
			void_poison: tp`消除${'poison'}時不會受到毒傷害`,
			skill_proviso: tp`${'condition'}才能發動後續效果`,
			impart_awoken: tp`賦予${'attrs_types'}額外的${'awakenings'}`,
			obstruct_opponent: tp`對${'target'}施加敵對技能效果：${'skills'}`,
			obstruct_opponent_after_me: tp`排名比自身低的對手`,
			obstruct_opponent_before_me: tp`排名比自身高的對手`,
			obstruct_opponent_designated_position: tp`第${'positions'}排位的對手`,
			increase_damage_cap: tp`${'targets'}的${'icon'}傷害上限提升到${'cap'}`,
			board_jamming_state: tp`在${'position'}生成${'icon'}${'state'}${'size'}${'count'}${'comment'}`,
			board_size_change: tp`板面大小改變為${'icon'}${'size'}`,
			remove_assist: tp`${'icon'}移除自身的輔助寵物（直到地下城結束）`,
			prediction_falling: tp`盤面上可以${'icon'}預知寶珠掉落`,
		},
		power: {
			unknown: tp`[ 未知能力提升: ${'type'} ]`,
			scale_attributes: tp`${'orbs'}中${'min'}種屬性同時攻擊時${'stats'}${'bonus'}`,
			scale_attributes_bonus: tp`，每多1種${'bonus'}，最大${'max'}種時${'stats_max'}`,
			scale_combos: tp`${'min'}連擊以上時${'stats'}${'bonus'}`,
			scale_combos_bonus: tp`，每多1連擊${'bonus'}，最大${'max'}連擊時${'stats_max'}`,
			scale_match_attrs: tp`${'matches'}中${'min'}串匹配時${'stats'}${'bonus'}`,
			scale_match_attrs_bonus: tp`，每多1串${'bonus'}，最大${'max'}串時${'stats_max'}`,
			scale_match_length: tp`${'in_once'}相連消除${'min'}個${'orbs'}時${'stats'}${'bonus'}`,
			scale_match_length_bonus: tp`，每多1個${'bonus'}，最大${'max'}個時${'stats_max'}`,
			scale_remain_orbs: tp`剩餘寶珠 ≤ ${'max'} 時${'stats'}${'bonus'}`,
			scale_remain_orbs_bonus: tp`，每少1個${'bonus'}，最少${'min'}個時${'stats_max'}`,
			scale_cross: tp`以十字形式消除5個${'orbs'}時${'each_time'}${'stats'}`,
			scale_state_kind: tp`以隊伍中[${'awakenings'}${'attrs'}${'types'}]的數量提升，每個${'stats'}`,
		},
		cond: {
			unknown: tp`[ 未知條件 ]`,
			hp_equal: tp`${'hp'} == ${'min'} 時`,
			hp_less_or_equal: tp`${'hp'} ≤ ${'max'} 時`,
			hp_greater_or_equal: tp`${'hp'} ≥ ${'min'} 時`,
			hp_belong_to_range: tp`${'hp'} ∈ [${'min'},${'max'}] 時`,
			use_skill: tp`使用技能時`,
			multi_player: tp`協力時`,
			remain_orbs: tp`剩餘寶珠 ≤ ${'value'} 時`,
			exact_combo: tp`剛好${'value'}連擊時`,
			exact_length: tp`剛好${'value'}`,
			exact_match_length: tp`相連消除${'length'}${'orbs'}時，`,
			exact_match_enhanced: tp`並且其中包含至少一個強化寶珠`,

			compo_type_card: tp`隊伍中同時存在 ${'ids'} 時`,
			compo_type_series: tp`隊員組成全為 ${'ids'} 合作時`,
			compo_type_evolution: tp`隊員組成全為 ${'ids'} 進化時`,
			compo_type_team_total_rarity: tp`隊伍的總★稀有度 ≤${'rarity'} 時`,
			compo_type_team_same_rarity: tp`隊伍的稀有度都為${'rarity'}時`,

			stage_less_or_equal: tp`${'stage'} ≤ ${'max'} 時`, //地下城層數
			stage_greater_or_equal: tp`${'stage'} ≥ ${'min'} 時`,

			orbs_less_or_equal: tp`盤面上 ${'orbs'} ≤ ${'max'} 時`, //盤面上珠子數
			orbs_greater_or_equal: tp`盤面上 ${'orbs'} ≥ ${'min'} 時`,

			L_shape: tp`以L字形式消除5個${'orbs'}時`,
			heal: tp`以${'orbs'}回復${'heal'}${'stats'}時`,
		},
		position: {
			top: tp`上方第${'pos'}橫行`,
			bottom: tp`下方第${'pos'}橫行`,
			left: tp`左方第${'pos'}豎列`,
			right: tp`右方第${'pos'}豎列`,
			random: tp`隨機位置`,
			shape: tp`指定位置`,
		},
		value: {
			unknown: tp`[ 未知數值: ${'type'}]`, //type
			const: tp`${'value'}${'unit'}`,
			const_to: tp`到${'value'}`,
			mul_percent: tp`${'value'}%`,
			mul_times: tp`×${'value'}倍`,
			mul_of_percent: tp`${'stats'}的${'value'}%`,
			mul_of_times: tp`${'stats'}×${'value'}倍`,
			hp_scale: tp`${'hp'}為100%時${'min'}，${'hp'}為1時${'max'}`,
			random_atk: tp`${'atk'}×${'min'}${'max'}倍`,
			prob: tp`有${'value'}幾率`,
			x_awakenings: tp`${'awakenings'}數量×${'value'}`,
			size: tp`${'width'}×${'height'}`,
			pos: tp`${'x'}×${'y'}`,
		},
		target: {
			unknown: tp`未知目標`,
			self: tp`角色自身`,
			team: tp`隊伍`,
			team_last: tp`隊伍最後一位隊員`,
			team_leader: tp`隊長`,
			sub_members: tp`隊員`,
			leader_self: tp`左邊隊長`,
			leader_helper: tp`右邊隊長`,
			collab_id: tp`合作ID為${'id'}的角色`,
			gacha_id: tp`抽蛋ID為${'id'}的角色`,
			enemy: tp`敵人`,
			enemy_all: tp`敵方全體`,
			enemy_one: tp`敵方1體`,
			enemy_attr: tp`${'attr'}敵人`,
			the_attr: tp`該組寶珠對應屬性`,
		},
		stats: {
			unknown: tp`[ 未知狀態: ${'type'}]`, //type
			maxhp: tp`最大HP`,
			hp: tp`HP`,
			chp: tp`當前HP`,
			atk: tp`攻擊力`,
			rcv: tp`回復力`,
			teamhp: tp`隊伍總HP`,
			teamatk: tp`隊伍${'attrs'}總攻擊力`,
			teamrcv: tp`隊伍回復力`,
			cstage: tp`當前地下城層數`,
		},
		unit: {
			orbs: tp`個`,
			times: tp`次`,
			seconds: tp`秒`,
			point: tp`點`,
			turns: tp`回合`,
		},
		word: {
			comma: tp`，`, //逗號
			semicolon: tp`； `, //分號
			slight_pause: tp`、`, //頓號
			range_hyphen: tp`~`, //範圍連字符
			in_once: tp`同時`,
			evo_type_pixel: tp`像素進化`,
			evo_type_reincarnation: tp`轉生或超轉生進化`,
			evo_type_unknow: tp`未知進化: ${'type'}`,
			affix_attr: tp`${'cotent'}屬性`, //詞綴-屬性
			affix_orb: tp`${'cotent'}寶珠`, //詞綴-寶珠
			affix_type: tp`${'cotent'}類型`, //詞綴-類型
			affix_awakening: tp`${'cotent'}覺醒`, //詞綴-覺醒
			affix_exclude: tp`${'cotent'}以外`, //詞綴-屬性
			each_time: tp`每一次`,
			different: tp`不同`,
			same: tp`相同`,
		},
		attrs: {
			[0]: tp`${'icon'}火`,
			[1]: tp`${'icon'}水`,
			[2]: tp`${'icon'}木`,
			[3]: tp`${'icon'}光`,
			[4]: tp`${'icon'}暗`,
			[5]: tp`${'icon'}回復力`,
			[6]: tp`${'icon'}空`,
			all: tp`所有`,
			self: tp`${'icon'}自身屬性`,
			fixed: tp`${'icon'}無視防禦固定`,
		},
		orbs: {
			[0]: tp`${'icon'}火`,
			[1]: tp`${'icon'}水`,
			[2]: tp`${'icon'}木`,
			[3]: tp`${'icon'}光`,
			[4]: tp`${'icon'}暗`,
			[5]: tp`${'icon'}回復`,
			[6]: tp`${'icon'}干擾`,
			[7]: tp`${'icon'}毒`,
			[8]: tp`${'icon'}劇毒`,
			[9]: tp`${'icon'}炸彈`,
			enhanced: tp`${'icon'}強化`,
			locked: tp`${'icon'}鎖定`,
			nail: tp`${'icon'}釘子`,
			thorn: tp`${'icon'}荊棘`,
			_5color: tp`${'icon'}5色`,
			_6color: tp`${'_5color'}+${'orb_rcv'}`,
			all: tp`所有`,
			any: tp`任何${'cotent'}`,
		},
		board: {
			clouds: tp`${'icon'}雲`,
			immobility: tp`${'icon'}封條`,
			roulette: tp`${'icon'}輪盤位`,
			deep_dark: tp`${'icon'}超暗闇`,
			roulette_time: tp`每${'duration'}變換`,
			roulette_attrs: tp`只會出現${'orbs'}`,
		},
		types: {
			[0]: tp`${'icon'}進化用`,
			[1]: tp`${'icon'}平衡`,
			[2]: tp`${'icon'}體力`,
			[3]: tp`${'icon'}回復`,
			[4]: tp`${'icon'}龍`,
			[5]: tp`${'icon'}神`,
			[6]: tp`${'icon'}攻擊`,
			[7]: tp`${'icon'}惡魔`,
			[8]: tp`${'icon'}機械`,
			[9]: tp`${'icon'}特別保護`,
			[12]: tp`${'icon'}能力覺醒用`,
			[14]: tp`${'icon'}強化合成用`,
			[15]: tp`${'icon'}販賣用`,
		},
		awokens: {
			[0]: tp`${'icon'}未知覺醒`,
			[1]: tp`${'icon'}HP+`,
			[2]: tp`${'icon'}攻擊+`,
			[3]: tp`${'icon'}回復+`,
			[4]: tp`${'icon'}火盾`,
			[5]: tp`${'icon'}水盾`,
			[6]: tp`${'icon'}木盾`,
			[7]: tp`${'icon'}光盾`,
			[8]: tp`${'icon'}暗盾`,
			[9]: tp`${'icon'}自回`,
			[10]: tp`${'icon'}防封`,
			[11]: tp`${'icon'}防暗`,
			[12]: tp`${'icon'}防廢`,
			[13]: tp`${'icon'}防毒`,
			[14]: tp`${'icon'}火+`,
			[15]: tp`${'icon'}水+`,
			[16]: tp`${'icon'}木+`,
			[17]: tp`${'icon'}光+`,
			[18]: tp`${'icon'}暗+`,
			[19]: tp`${'icon'}手指`,
			[20]: tp`${'icon'}心解`,
			[21]: tp`${'icon'}S+`,
			[22]: tp`${'icon'}火橫`,
			[23]: tp`${'icon'}水橫`,
			[24]: tp`${'icon'}木橫`,
			[25]: tp`${'icon'}光橫`,
			[26]: tp`${'icon'}暗橫`,
			[27]: tp`${'icon'}U`,
			[28]: tp`${'icon'}SX`,
			[29]: tp`${'icon'}心+`,
			[30]: tp`${'icon'}協力`,
			[31]: tp`${'icon'}龍殺`,
			[32]: tp`${'icon'}神殺`,
			[33]: tp`${'icon'}惡魔殺`,
			[34]: tp`${'icon'}機殺`,
			[35]: tp`${'icon'}平衡殺`,
			[36]: tp`${'icon'}攻擊殺`,
			[37]: tp`${'icon'}體力殺`,
			[38]: tp`${'icon'}回復殺`,
			[39]: tp`${'icon'}進化殺`,
			[40]: tp`${'icon'}覺醒殺`,
			[41]: tp`${'icon'}強化殺`,
			[42]: tp`${'icon'}賣錢殺`,
			[43]: tp`${'icon'}7c`,
			[44]: tp`${'icon'}5色破防`,
			[45]: tp`${'icon'}心追`,
			[46]: tp`${'icon'}全體 HP `,
			[47]: tp`${'icon'}全體回復`,
			[48]: tp`${'icon'}破無效`,
			[49]: tp`${'icon'}武器`,
			[50]: tp`${'icon'}方塊心追`,
			[51]: tp`${'icon'}5色溜`,
			[52]: tp`${'icon'}大防封`,
			[53]: tp`${'icon'}大手指`,
			[54]: tp`${'icon'}防雲`,
			[55]: tp`${'icon'}防封條`,
			[56]: tp`${'icon'}大S+`,
			[57]: tp`${'icon'}上血`,
			[58]: tp`${'icon'}下血`,
			[59]: tp`${'icon'}L盾`,
			[60]: tp`${'icon'}L解鎖`,
			[61]: tp`${'icon'}10c`,
			[62]: tp`${'icon'}c珠`,
			[63]: tp`${'icon'}語音`,
			[64]: tp`${'icon'}獎勵增加`,
			[65]: tp`${'icon'}HP -`,
			[66]: tp`${'icon'}攻擊-`,
			[67]: tp`${'icon'}回復-`,
			[68]: tp`${'icon'}大防暗`,
			[69]: tp`${'icon'}大防廢`,
			[70]: tp`${'icon'}大防毒`,
			[71]: tp`${'icon'}掉廢`,
			[72]: tp`${'icon'}掉毒`,
			[73]: tp`${'icon'}火串`,
			[74]: tp`${'icon'}水串`,
			[75]: tp`${'icon'}木串`,
			[76]: tp`${'icon'}光串`,
			[77]: tp`${'icon'}暗串`,
			[78]: tp`${'icon'}十字`,
			[79]: tp`${'icon'}3色`,
			[80]: tp`${'icon'}4色`,
			[81]: tp`${'icon'}5色`,
			[82]: tp`${'icon'}12珠`,
			[83]: tp`${'icon'}附加龍類型`,
			[84]: tp`${'icon'}附加神類型`,
			[85]: tp`${'icon'}附加惡魔類型`,
			[86]: tp`${'icon'}附加機械類型`,
			[87]: tp`${'icon'}附加平衡類型`,
			[88]: tp`${'icon'}附加攻擊類型`,
			[89]: tp`${'icon'}附加體力類型`,
			[90]: tp`${'icon'}附加回復類型`,
			[91]: tp`${'icon'}副屬性變火`,
			[92]: tp`${'icon'}副屬性變水`,
			[93]: tp`${'icon'}副屬性變木`,
			[94]: tp`${'icon'}副屬性變光`,
			[95]: tp`${'icon'}副屬性變暗`,
			[96]: tp`${'icon'}大U`,
			[97]: tp`${'icon'}大5色溜`,
			[98]: tp`${'icon'}大自回`,
			[99]: tp`${'icon'}大火+`,
			[100]: tp`${'icon'}大水+`,
			[101]: tp`${'icon'}大木+`,
			[102]: tp`${'icon'}大光+`,
			[103]: tp`${'icon'}大暗+`,
			[104]: tp`${'icon'}大心+`,
			[105]: tp`${'icon'}S-`,
			[106]: tp`${'icon'}浮游`,
			[107]: tp`${'icon'}大7c`,
			[108]: tp`${'icon'}大L解鎖`,
			[109]: tp`${'icon'}大破無效`,
			[110]: tp`${'icon'}大十字`,
			[111]: tp`${'icon'}大10c`,
			[112]: tp`${'icon'}大3色`,
			[113]: tp`${'icon'}大4色`,
			[114]: tp`${'icon'}大5色`,
			[115]: tp`${'icon'}大心解`,
			[116]: tp`${'icon'}3火橫`,
			[117]: tp`${'icon'}3水橫`,
			[118]: tp`${'icon'}3木橫`,
			[119]: tp`${'icon'}3光橫`,
			[120]: tp`${'icon'}3暗橫`,
			[121]: tp`${'icon'}大火串`,
			[122]: tp`${'icon'}大水串`,
			[123]: tp`${'icon'}大木串`,
			[124]: tp`${'icon'}大光串`,
			[125]: tp`${'icon'}大暗串`,
			[126]: tp`${'icon'}阿姆斯特朗迴旋加速噴氣式阿姆斯特朗炮`,
		}
	},
};

deepMerge(localTranslating, _localTranslating);
}
localisation(localTranslating);

//大數字縮短長度
Number.prototype.bigNumberToString = BigNumberToStringLocalise(['', '萬', '億', '兆', '京', '垓', '秭', '穰', '溝', '澗', '正', '載'], 4);
