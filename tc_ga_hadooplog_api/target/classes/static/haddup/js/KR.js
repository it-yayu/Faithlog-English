﻿//导航字段
var whole = "총합 분석";
var log = "일일 정보";
var admin = "시스템 관리";
var overallTrend = "整体趋势";
var realTime = "실시간统计";
var Daily_analysis = "데일리分析";
var retention_analysis = "留存分析";
var payment_analysis = "付费分析";
var District_analysis = "서버分析";
var Logout = "접속 정보";
var creat_role = "캐릭터 생성 일지";
var Novice_Guidance = "튜토리얼 일지";
var task_log = "퀘스트 일지";
var Currency = "화폐 변화 일지";
var Grade_change = "레벨 변화 일지";
var Recharging_step = "충전 스텝 일지";
var recharging_query = "충전 일지";
var Treasure_search = "보물 뽑기 기록";
var auction_House = "경매장 기록";
var chat_Log = "채팅 기록";
var guild_Query = "길드 검색日志";
var shopping_mall = "상점 구매 기록";
var Email_extraction = "우편 수령 기록";
var Articles_water = "物品流水日志";
var growthCapital="活动查询日志"
var role_information = "角色信息검색日志";
var user_management = "유저 관리";
var District_service = "서버 관리";
$(".whole").html("<i class='fa fa-fw fa-pie-chart'></i>&nbsp;&nbsp;"+whole);
$(".log").html("<i class='fa fa-fw fa-file-text-o'></i>&nbsp;&nbsp;"+log);
$(".admin").html("<i class='fa fa-fw fa-modx'></i>&nbsp;&nbsp;"+admin);
$(".overallTrend").text(overallTrend);
$(".realTime").text(realTime);
$(".Daily_analysis").text(Daily_analysis);
$(".retention_analysis").text(retention_analysis);
$(".payment_analysis").text(payment_analysis);
$(".District_analysis").text(District_analysis);
// $(".combat_whole").text(District_analysis);///////
$(".Logout").text(Logout);
$(".creat_role").text(creat_role);
$(".Novice_Guidance").text(Novice_Guidance);
$(".task_log").text(task_log);
$(".Currency").text(Currency);
$(".Grade_change").text(Grade_change);
$(".Recharging_step").text(Recharging_step);
$(".recharging_query").text(recharging_query);
$(".Treasure_search").text(Treasure_search);
$(".auction_House").text(auction_House);
$(".chat_Log").text(chat_Log);
$(".guild_Query").text(guild_Query);
$(".shopping_mall").text(shopping_mall);
$(".Email_extraction").text(Email_extraction);
$(".Articles_water").text(Articles_water);
$(".queryActivity").text(queryActivity);
$(".growthCapital").text(growthCapital);
$(".combat_whole").text(combat_whole);
$(".role_information").text(role_information);
$(".user_management").text(user_management);
$(".District_service").text(District_service);

//整体趋势字段
var trend_whole = "整体趋势";
var trend_district = "区服号";
var trend_area = "已选中所有区服";
var trend_alltion ="全选/全不选"; 
var trend_channel = "渠道号";
var trend_time = "日期";
var trend_exclude = "排除数据";
var trend_query = "查询";
var trend_users = "新增用户";
var trend_active = "新增活跃用户";
var trend_payuser = "付费用户";
var trend_paymoney = "付费金额";
var trend_rate = "付费率(%)";
var trend_all = "全部";
var trend_yesterday = "昨天";
var trend_fourteen = "近14天"; 
var trend_help = "帮助";
var trend_export = "导出";
var trend_logintype = "登录方式";
var trend_orders = "渠道空订单";
var trend_regorder = "充值渠道";
var trend_tips1 = "：截止到现在，启动过应用的所有独立用户（去重，以设备为判断标准）";
var trend_tips2 = "：截止到现在，启动过应用的用户（去重）启动过一次的用户即视为活跃用户，包括新用户与老用户";
var trend_tips3 = "：所有付费行为的设备总数";
var trend_tips4 = "：所有充值到该游戏的金额总数（根据不同地区换算不同的货币类型）";
var trend_tips5 = "：累计付费金额/累计用户";
var trend_tips6 = "：一天内充值人数/当天活跃数";
var trend_arpu = "ARPU";
$(".trend_whole").html(trend_whole);
$(".trend_district").html(trend_district);
$(".trend_logintype").html(trend_logintype);
$(".trend_time").html(trend_time);
$(".trend_exclude").html(trend_exclude);
$(".trend_orders").html(trend_orders);
$(".trend_regorder").html(trend_regorder);
$(".trend_query").html(trend_query);
$(".trend_users").html(trend_users);
$(".trend_active").html(trend_active);
$(".trend_payuser").html(trend_payuser);
$(".trend_paymoney").html(trend_paymoney);
$(".trend_rate").html(trend_rate);
$(".trend_all").html(trend_all);
$(".trend_yesterday").html(trend_yesterday);
$(".trend_fourteen").html(trend_fourteen);
$(".trend_export").html(trend_export);
$(".trend_help").html(trend_help);
$(".trend_arpu").html(trend_arpu);
$(".trend_tips1").append(trend_tips1);
$(".trend_tips2").append(trend_tips2);
$(".trend_tips3").append(trend_tips3);
$(".trend_tips4").append(trend_tips4);
$(".trend_tips5").append(trend_tips5);
$(".trend_tips6").append(trend_tips6);

//实时统计字段
var real_whole = "실시간统计";
var real_district = "서버";
var real_area = "选择서버";
var real_channel = "채널 번호";
var real_time = "날짜 검색";
var real_query = "검색";
var real_help = "帮助";
var real_export = "다운로드";
var real_register = "등록";
var real_active_data = "활성화 데이터";
var real_payamount = "결제 금액";
var real_paynumber = "결제한 유저";
var real_downnumber = "첫 결제 유저";
var real_downamount = "첫 결제 금액";
var real_regnumber = "누적 충전 유저 수";
var real_downment_data = "첫 결제 일일 총액";
var real_rate = "결제률(%)";
var real_arpu = "ARPU";
var real_arppu = "ARPPU";
var real_Retain = "R(%)";
var real_change = "更改";

//日报分析字段
var daily_whole = "데일리分析";
var daily_district = "서버";
var daily_area = "选择서버";
var daily_channel = "채널 번호";
var daily_time = "날짜 검색";
var daily_query = "검색";
var daily_reports = "데일리表";
var daily_week_reports = "周报表";
var daily_month_reports = "月报表";
var daily_year_reports = "年报表";
var daily_help = "帮助";
var daily_export = "다운로드";
var daily_register = "등록";
var daily_active_data = "활성화 데이터";
var daily_payamount = "결제 금액";
var daily_paynumber = "결제한 유저";
var daily_downnumber = "첫 결제 유저";
var daily_downamount = "첫 결제 금액";
var daily_regnumber = "누적 충전 유저 수";
var daily_downment_data = "첫 결제 일일 총액";
var daily_rate = "결제률(%)";
var daily_arpu = "ARPU";
var daily_arppu = "ARPPU";
var daily_Retain = "R(%)";
var daily_payrate = "가입 지불비율";
var daily_activerate = "活跃지불 비율";
var daily_device_num = "등록设备数";
var daily_newdevice = "新设备활동 수";
var daily_olddevice = "老设备활동 수";
var daily_newdevice_money = "新设备결제 금액";
var daily_olddevice_money = "老设备결제 금액";
var daily_newdevice_num = "新设备付费인원 수";
var daily_olddevice_num = "老设备付费인원 수";
var daily_newdevice_rate = "新设备지불 비율";
var daily_olddevice_rate = "老设备지불 비율";
var daily_dau = "DAU";
var daily_dnu = "DNU";
var daily_dou = "DOU";

//付费分析
var pay_whole = "付费分析";
var pay_recharge = "충전 랭킹";
var pay_consumption = "소비 랭킹";
var pay_vip = "VIP 분포";
var pay_diamonds = "다이아/루비 소모 분류";
var pay_district = "서버";
var pay_area = "选择서버";
var pay_channel = "채널 번호";
var pay_time = "날짜 검색";
var pay_query = "검색";
var pay_export = "다운로드";
var pay_account = "계정 ID";
var pay_roleID = "캐릭터 ID";
var pay_currentlevel = "현재 레벨";
var pay_viplevel = "VIP레벨";
var pay_rolepower = "캐릭터 전투력";
var pay_diatotal = "첫 충전 다이아 총액";
var pay_first_time = "첫 충전 시간";
var pay_last_time = "마지막 충전 시간";
var pay_contotal = "소비 다이아 총액";
var pay_confirst_time = "첫 소비 시간";
var pay_conlast_time = "마지막 소비 시간";
var pay_number = "인원 수";
var pay_proportion = "차지한 비율";
var pay_moneytype = "화폐 유형";
var pay_dias = "다이아";
var pay_bindingdias = "귀속 다이아";
var pay_contype = "소모 형식";
var pay_content = "소모 내용";
var pay_sumdias = "다이아 수량";
var pay_sumdias_protion = "다이아 수량 대비";
var pay_sumbindingdias = "루비 수량";
var pay_sumbindingdias_protion = "루비 수량 대비";

//区服分析字段
var dis_report = "구간 데이터 보고";
var dis_dose = "서버 별 매일 데이터";
var dis_cumulative = "서버 별 누적 데이터";
var dis_district = "서버";
var dis_area = "选择서버";
var dis_channel = "채널 번호";
var dis_time = "날짜 검색";
var dis_cycle = "주기일기";
var dis_period = "选择周期";
var dis_weekly = "주 보고";
var dis_month = "월 보고";
var dis_query = "검색";
var dis_export = "다운로드";
var dis_actnumber = "활동 수";
var dis_regnumber = "충전 계정 수";
var dis_account_rate = "지불 계정 비율";
var dis_regsum_number = "충전 총액";
var dis_arpu = "ARPU";
var dis_arppu = "ARPPU";
var dis_addnumber = "신규 가입 수";
var dis_addrefill_number = "신규 가입 충전 수";
var dis_addrefill_rate = "신규 가입 지불비율";
var dis_addtotal = "신규 공헌 총액";
var dis_regamount = "충전 총액";
var dis_newregcont = "신규 가입 공헌";
var dis_regnumber = "충전 인원 수";
var dis_newregnumber = "신규 접속 충전 인원수";
var dis_towreg = "2회 지불 인원 수";
var dis_rate = "결제률(%)"
var dis_arpu = "ARPU";
var dis_arppu = "ARPPU";
var dis_newreg_rate = "신규 가입 지불비율";
var dis_newreg_arpu = "신규 가입 arpu";
var dis_newreg_arppu = "신규 가입 arppu";
var dis_opentime = "서버 오픈 시간";
var dis_daynumber = "금일 활동 수";
var dis_cumreg = "누적 가입 수";
var dis_todayreg = "금일 충전";
var dis_todayreg_number = "금일 충전 인원 수";
var dis_cumreg = "누적 충전";
var dis_cumreg_number = "누적 충전 유저 수";
var dis_Retain = "R(%)";
var dis_three_Retain = "3일 잔존율(%)";
var dis_seven_Retain = "7일 잔존율(%)";
var dis_fiften_Retain = "15일 잔존율(%)";
var dis_thirty_Retain = "30일 잔존율(%)";
var dis_fourfif_Retain = "45일 잔존율(%)";
var dis_sixty_Retain = "60일 잔존율(%)";
var dis_ninety_Retain = "90일 잔존율(%)";
var dis_cumltv = "누적 LTV";
var dis_opennum = "서버 오픈 일수";

//登录登出日志
var log_district = "서버";
var log_area = "选择서버";
var log_time = "날짜 검색";
var log_account = "계정 ID";
var log_rank = "레벨 범위";
var log_strakrank = "开始等级";
var log_to = "至"
var log_endrank = "结束等级";
var log_roleID = "캐릭터 ID";
var log_rolename = "캐릭터명";
var log_query = "검색";
var log_report = "다운로드"
var log_logtime = "일일 시간";
var log_device = "기기 넘버";
var log_roleleve = "캐릭터 레벨";
var log_rolepower = "캐릭터 전투력";
var log_ip = "IP 주소";
var log_type = "로그인 유형";
var log_cretime = "생성 시간";
var log_linetime = "온라인 시간";
var log_place_account = "계정을 입력하세요";
var log_place_roleID = "캐릭터ID를 입력하세요";
var log_place_rolename = "캐릭터명을 입력하세요";

//创建角色日志
var cre_district = "서버";
var cre_area = "选择서버";
var cre_time = "날짜 검색";
var cre_account = "계정 ID";
var cre_roleID = "캐릭터 ID";
var cre_rolename = "캐릭터명";
var cre_query = "검색";
var cre_report = "다운로드";
var cre_cretime = "일일 시간";
var cre_device = "기기 넘버";
var cre_roleleve = "캐릭터 레벨";
var cre_rolepower = "캐릭터 전투력";
var cre_ip = "IP 주소";
var cre_occ = "직업";
var cre_place_account = "계정을 입력하세요";
var cre_place_roleID = "캐릭터ID를 입력하세요";
var cre_place_rolename = "캐릭터명을 입력하세요";
var cre_place_ip = "IP주소를 입력하세요";
var cre_place_device = "기기 넘버를 입력하세요";

//新手引导
var nov_district = "서버";
var nov_area = "选择서버";
var nov_time = "날짜 검색";
var nov_stepID = "스텝ID";
var nov_account = "계정 ID";
var nov_roleID = "캐릭터 ID";
var nov_rolename = "캐릭터명";
var nov_query = "검색";
var nov_report = "다운로드";
var nov_cretime = "일일 시간";
var nov_device = "기기 넘버";
var nov_roleleve = "캐릭터 레벨";
var nov_rolepower = "캐릭터 전투력";
var nov_place_account = "계정을 입력하세요";
var nov_place_roleID = "캐릭터ID를 입력하세요";
var nov_place_rolename = "캐릭터명을 입력하세요";
var nov_place_step = "스텝ID를 입력하세요";

//任务日志
var tas_district = "서버";
var tas_area = "选择서버";
var tas_time = "날짜 검색";
var tas_account = "계정 ID";
var tas_roleID = "캐릭터 ID";
var tas_rolename = "캐릭터명";
var tas_tasktype = "퀘스트 유형";
var tas_all = "전체";
var tas_Thread = "메인";
var tas_daily = "일상";
var tas_crusade = "토벌";
var tas_feeder = "서브";
var tas_taskID = "퀘스트ID";
var tas_query = "검색";
var tas_report = "다운로드";
var tas_cretime = "일일 시간";
var tas_device = "기기 넘버";
var tas_roleleve = "캐릭터 레벨";
var tas_rolepower = "캐릭터 전투력";
var tas_operation = "조작 유형";
var tas_place_account = "계정을 입력하세요";
var tas_place_roleID = "캐릭터ID를 입력하세요";
var tas_place_rolename = "캐릭터명을 입력하세요";
var tas_place_task = "퀘스트ID를 입력하세요";

//货币变化字段
var cur_query = "검색";
var cur_report = "다운로드";
var cur_district = "서버";
var cur_area = "选择서버";
var cur_time = "날짜 검색";
var cur_account = "계정 ID";
var cur_roleID = "캐릭터 ID";
var cur_rolename = "캐릭터명";
var cur_moneytype = "화폐 유형";
var cur_device = "기기 넘버";
var cur_place_account = "계정을 입력하세요";
var cur_place_roleID = "캐릭터ID를 입력하세요";
var cur_place_rolename = "캐릭터명을 입력하세요";
var cur_place_device = "기기 넘버를 입력하세요";
var cur_cretime = "일일 시간";
var cur_roleleve = "캐릭터 레벨";
var cur_rolepower = "캐릭터 전투력";
var cur_vippower = "VIP레벨";
var cur_oldnum = "이전 수량";
var cur_newnum = "현재 수량";
var cur_changetype = "변화 유형";
var cur_mode = "변화 방식";
var cur_position = "변화 위치";
var cur_all = "전체";
var cur_expe = "경험치";
var cur_game = "게임 머니";
var cur_bindgame = "귀속 게임 머니";
var cur_diam = "다이아";
var cur_binddiam = "귀속 다이아";
var cur_faith = "페이츠 포인트";
var cur_magic = "마법 수정";
var cur_points = "추가 제작 포인트";
var cur_score = "교환 포인트";
var cur_ling = "영혼 수정";
var cur_powder = "원소 분말";
var cur_guard = "수호 포인트";
var cur_achie = "업적 포인트";
var cur_prest = "명성";
var cur_prayer = "기원 포인트";
var cur_military = "공로";
var cur_glory = "명예 포인트";
var cur_talent = "특성 포인트";
var cur_battle = "어시 포인트";

//等级变化字段
var gra_district = "서버";
var gra_area = "选择서버";
var gra_time = "날짜 검색";
var gra_account = "계정 ID";
var gra_rank = "레벨 범위";
var gra_strakrank = "开始等级";
var gra_to = "至"
var gra_endrank = "结束等级";
var gra_roleID = "캐릭터 ID";
var gra_rolename = "캐릭터명";
var gra_query = "검색";
var gra_report = "다운로드";
var gra_logtime = "일일 시간";
var gra_device = "기기 넘버";
var gra_roleleve = "캐릭터 레벨";
var gra_rolepower = "캐릭터 전투력";
var gra_oldleve = "이전 레벨";
var gra_newleve = "현재 레벨";
var gra_gradeleve = "레벨 업 소모 시간";
var gra_place_account = "계정을 입력하세요";
var gra_place_roleID = "캐릭터ID를 입력하세요";
var gra_place_rolename = "캐릭터명을 입력하세요";

//充值步骤字段
var rec_district = "서버";
var rec_area = "选择서버";
var rec_time = "날짜 검색";
var rec_comdly = "아이템ID";
var rec_empty_order = "渠道비움订单";
var rec_nodisplay = "不显示";
var rec_display = "显示";
var rec_step = "스텝 번호";
var rec_roleID = "캐릭터 ID";
var rec_rolename = "캐릭터명";
var rec_place_comdly = "상품 ID를 입력해 주십시오";
var rec_place_roleID = "캐릭터ID를 입력하세요";
var rec_place_rolename = "캐릭터명을 입력하세요";
var rec_place_step = "请输入스텝 번호";
var rec_logtime = "일일 시간";
var rec_ordernum = "订单编号";
var rec_query = "검색";
var rec_report = "다운로드";

//充值日志字段
var arg_query = "검색";
var arg_report = "다운로드";
var arg_district = "서버";
var arg_area = "选择서버";
var arg_time = "날짜 검색";
var arg_account = "계정 ID";
var arg_roleID = "캐릭터 ID";
var arg_rolename = "캐릭터명";
var arg_empty_order = "渠道비움订单";
var arg_nodisplay = "不显示";
var arg_display = "显示";
var arg_ordernum = "플랫폼 주문 번호";
var arg_place_account = "계정을 입력하세요";
var arg_place_roleID = "캐릭터ID를 입력하세요";
var arg_place_rolename = "캐릭터명을 입력하세요";
var arg_place_order = "请输入플랫폼 주문 번호";
var arg_logtime = "일일 시간";
var arg_device = "기기 넘버";
var arg_roleleve = "캐릭터 레벨";
var arg_ip = "IP 주소";
var arg_vip = "VIP레벨";
var arg_game_order = "게임 내 주문 번호";
var arg_chage_order = "플랫폼 주문 번호";
var arg_order_money = "주문 금액";
var arg_paymeth = "결제 방식";
var arg_rechage = "결제한 플랫폼";
var arg_virtual_num = "구매한 아이템 수량";
var arg_virtual_sum = "아이템 총 수량";
var arg_comdly = "아이템ID";
var arg_first_charge = "是아니오首充";

//宝藏寻宝字段
var tre_query = "검색";
var tre_report = "다운로드";
var tre_district = "서버";
var tre_area = "选择서버";
var tre_time = "날짜 검색";
var tre_account = "계정 ID";
var tre_roleID = "캐릭터 ID";
var tre_rolename = "캐릭터명";
var tre_place_account = "계정을 입력하세요";
var tre_place_roleID = "캐릭터ID를 입력하세요";
var tre_place_rolename = "캐릭터명을 입력하세요";
var tre_extratype = "뽑기 형식";
var tre_all = "전체";
var tre_good = "물품 뽑기";
var tre_rune = "룬 뽑기";
var tre_spirit = "정령 뽑기";
var tre_logtime = "일일 시간";
var tre_current_level = "현재 레벨";
var tre_award = "획득 상품";
var tre_quantity = "획득 수량";
var tre_oldlucky = "이전 행운치";
var tre_newlucky = "현재 행운치";

//拍卖行字段
var auc_query = "검색";
var auc_report = "다운로드";
var auc_district = "서버";
var auc_area = "选择서버";
var auc_time = "날짜 검색";
var auc_logtime = "일일 시간";
var auc_selling_accountid = "판매자 계정 ID";
var auc_selling_roleid = "판매자 캐릭터 ID";
var auc_selling_rolename = "판매자 캐릭터 명";
var auc_selling_rolelevel = "판매자 캐릭터 레벨";
var auc_auction_accountid = "낙찰자 계정 ID";
var auc_auction_roleid = "낙찰자 캐릭터 ID";
var auc_auction_rolename = "낙찰자 캐릭터 명";
var auc_auction_rolelevel = "판매자 캐릭터 레벨";
var auc_moneytype = "화폐 유형";
var auc_prop = "아이템";
var auc_goodnum = "물품 수량";
var auc_auction_status = "경매 상태";
var auc_place_sellaccount = "판매자 계정 ID를 입력하세요";
var auc_place_sellroleid = "판매자 캐릭터 ID를 입력하세요";
var auc_place_sellrolename = "판매자 캐릭터 명을 입력하세요";
var auc_place_auctaccount = "낙찰자 계정 ID를 입력하세요";
var auc_place_auctroleid = "낙찰자 캐릭터 ID를 입력하세요";
var auc_place_auctrolename = "낙찰자 캐릭터 명을 입력하세요";

//聊天字段
var chat_query = "검색";
var chat_report = "다운로드";
var chat_district = "서버";
var chat_area = "选择서버";
var chat_time = "날짜 검색";
var chat_account = "계정 ID";
var chat_roleID = "캐릭터 ID";
var chat_rolename = "캐릭터명";
var chat_type = "채팅 종류";
var chat_all = "전체";
var chat_world = "세계";
var chat_team = "파티";
var chat_legion = "길드";
var chat_private = "귓속말";
var chat_logtime = "일일 시간";
var chat_roleleve = "캐릭터 레벨";
var chat_content = "채팅 내용";
var chat_place_account = "계정을 입력하세요";
var chat_place_roleID = "캐릭터ID를 입력하세요";
var chat_place_rolename = "캐릭터명을 입력하세요";

//工会查询字段
var gud_query = "검색";
var gud_report = "다운로드";
var gud_district = "서버";
var gud_area = "选择서버";
var gud_time = "날짜 검색";
var gud_account = "계정 ID";
var gud_roleID = "캐릭터 ID";
var gud_rolename = "캐릭터명";
var gud_guildname = "길드 이름";
var gud_guildid = "길드 ID";
var gud_guildlevel = "길드 레벨";
var gud_guildcount = "길드 인원수";
var gud_presroleid = "길드장 캐릭터 ID";
var gud_presrolename = "길드장 캐릭터 명";
var gud_place_guildname = "길드 이름을 입력하세요";
var gud_place_presroleid = "길드장 캐릭터 ID를 입력하세요";
var gud_place_presrolename = "길드장 캐릭터 명을 입력하세요";

//商城购买字段
var shop_query = "검색";
var shop_report = "다운로드";
var shop_district = "서버";
var shop_area = "选择서버";
var shop_time = "날짜 검색";
var shop_account = "계정 ID";
var shop_roleID = "캐릭터 ID";
var shop_rolename = "캐릭터명";
var shop_moneytype = "화폐 유형";
var shop_cretime = "일일 시간";
var shop_all = "전체";
var shop_diam = "다이아";
var shop_purple = "루비";
var shop_guldcoin = "골드";
var shop_magic = "마법 수정";
var shop_prest = "명성";
var shop_military = "공로";
var shop_roleleve = "캐릭터 레벨";
var shop_article = "물품 이름";
var shop_number = "수량";
var shop_price = "购买수량";
var shop_place_account = "계정을 입력하세요";
var shop_place_roleID = "캐릭터ID를 입력하세요";
var shop_place_rolename = "캐릭터명을 입력하세요";

//邮件提取字段
var mail_query = "검색";
var mail_report = "다운로드";
var mail_district = "서버";
var mail_area = "选择서버";
var mail_time = "날짜 검색";
var mail_account = "계정 ID";
var mail_roleID = "캐릭터 ID";
var mail_rolename = "캐릭터명";
var mail_cretime = "일일 시간";
var mail_roleleve = "캐릭터 레벨";
var mail_place_account = "계정을 입력하세요";
var mail_place_roleID = "캐릭터ID를 입력하세요";
var mail_place_rolename = "캐릭터명을 입력하세요";
var mail_article = "물품 이름";
var mail_quantity = "획득 수량";
var mail_number = "우편 번호";

//物品流水日志
var art_query = "검색";
var art_report = "다운로드";
var art_district = "서버";
var art_area = "选择서버";
var art_time = "날짜 검색";
var art_account = "계정 ID";
var art_roleID = "캐릭터 ID";
var art_rolename = "캐릭터명";
var art_cretime = "일일 시간";
var art_roleleve = "캐릭터 레벨";
var art_goodsid = "物品ID";
var art_place_account = "계정을 입력하세요";
var art_place_roleID = "캐릭터ID를 입력하세요";
var art_place_rolename = "캐릭터명을 입력하세요";
var art_place_goodsid = "请输入物品ID";
var art_device = "기기 넘버";
var art_rolepower = "캐릭터 전투력";
var art_rolevip = "角色VIP";
var art_changenumber = "变化수량";
var art_surplusnumber = "剩余수량";
var art_changetype = "변화 유형";
var art_changereason = "变化原因";
var art_changeposition = "变化位置";

//角色信息查询字段
var info_query = "검색";
var info_report = "다운로드";
var info_district = "서버";
var info_area = "选择서버";
var info_account = "계정 ID";
var info_roleID = "캐릭터 ID";
var info_rolename = "캐릭터명";
var info_cretime = "일일 시간";
var info_roleleve = "캐릭터 레벨";
var info_rolepower = "캐릭터 전투력";
var info_place_account = "계정을 입력하세요";
var info_place_roleID = "캐릭터ID를 입력하세요";
var info_place_rolename = "캐릭터명을 입력하세요";
var info_diamnum = "다이아数";
var info_equipment = "装备";
var info_backpack = "背包아이템";
var info_ware = "仓库아이템";
var info_email = "邮件";

//用户管理字段
var user_admin = "시스템 유저 관리";
var user_adduser = "新增用户";
var user_index = "번호";
var user_account = "계정";
var user_name = "이름";
var user_operation = "조작";
var user_modify = "수정";
var user_jurisdistion = "권한 배치하기";
var user_resetpwd = "비밀번호 재설정";
var user_delet = "삭제";
var user_add = "新增";
var user_logaccount = "로그인 계정";
var user_logpassworld = "첫 비밀번호";
var user_logname = "유저 성함"
var user_place_logaccount = "계정을 입력하세요";
var user_place_logpassworld = "첫 비밀번호를 입력하세요";
var user_place_logname = "유저 성함을 입력하세요";
var user_determine = "확인";

//区服管理字段
var area_admin = "서버设备管理";
var area_addarea = "신규 서버";
var area_number = "서버 넘버";
var area_name = "서버 이름";
var area_operation = "조작";
var area_modify = "수정";
var area_delet = "삭제";
var area_add = "新增";
var area_determine = "확인";
var area_opentime = "서버 오픈 시간";
var area_place_number = "서버 넘버를 입력하세요";
var area_place_name = "첫 비밀번호를 입력하세요";



