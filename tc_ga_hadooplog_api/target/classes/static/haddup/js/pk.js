//设置默认时间
var old
var newtime
today()

function today() {
  var today = new Date();
  var y = today.getFullYear();
  //	today.setMonth(today.getMonth()-1)
  var m = today.getMonth() + 1;
  var d = today.getDate();
  if (m >= 1 && m < 10) {
    m = "0" + m
  }
  if (d >= 1 && d < 10) {
    d = "0" + d
  }
  old = y + "-" + m + "-" + d;
  var newtoday = new Date();
  var newy = newtoday.getFullYear();
  var newm = newtoday.getMonth() + 1;
  var newd = newtoday.getDate();
  if (newm >= 1 && newm < 10) {
    newm = "0" + newm
  }
  if (newd >= 1 && newd < 10) {
    newd = "0" + newd
  }
  newtime = newy + "-" + newm + "-" + newd;
}
var times = old + "~" + newtime

////layui配置
// layui.use(['element', 'laydate', 'table'], function () {
var element = layui.element;
var laydate = layui.laydate;
var table = layui.table;
element.init();
//日历配置
var now = new Date();
laydate.render({
  elem: '#datatimes',
  //		type:'datetime',//日期可选时分秒
  range: '~', //日期范围选择
  lang: 'en', //国际化
  format: 'yyyy-MM-dd',
  theme: 'riqi', //自定义类名
  value: old + ' ~ ' + newtime,
  max: 'now',
  trigger: 'click',
  done: function (res) {
    times = res
  }
});
// });
//区服下拉多选
change()

function change() {
  $.ajax({
    type: "get",
    url: serverURL + "queryAreas",
    async: true,
    success: function (obj) {
      $('#district_service').multiselect("destroy")
      for (var i = 0; i < obj.rows.length; i++) {
        $("#district_service").append("<option value='" + obj.rows[i].areaid + "'>" + obj.rows[i].areaname + "</option>");
      };
      $("#district_service").each(function () {
        $(this).find("option").attr("selected", "selected")
      })
      $('#district_service').multiselect({
        buttonWidth: '73%',
        nonSelectedText: '请选择',
        maxHeight: 200,
        numberDisplayed: 2,
        includeSelectAllOption: true,
        selectAllText: '全选/全不选', //全选按钮显示的文本
        nSelectedText: '项被选中',
        allSelectedText: '已选中所有区服',
        enableFiltering: false, //搜索框
      });
      //onchannel()
    }
  });
}
//渠道号下拉赋值
function onchannel() {
  $.ajax({
    type: "get",
    url: channelURL + "queryField",
    async: true,
    data: {
      type: 2
    },
    success: function (obj) {
      for (var i = 0; i < obj.rows.length; i++) {
        $("#channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
      };
      // 			$.ajax({
      // 				type: "get",
      // 				url: "http://localhost:8080/FaithLogNew/queryField",
      // 				async: true,
      // 				data: {type: 3},
      // 				success: function(obj) {
      // 					for(var i = 0; i < obj.rows.length; i++) {
      // 						$("#reg_channel").append("<option value='" + obj.rows[i].id + "'>" + obj.rows[i].name + "</option>");
      // 					};
      // //					onread()
      // 				}
      // 			})
    }
  })
}

function onread() {
  $("body").mLoading("show")
  var district_service = $("#district_service").val(); //区服
  var account = $("#accountID").val(); //账号ID
  var datatime = $("#datatimes").val(); //日期
  var roleid = $("#roleID").val(); //角色ID
  var rolename = $("#roleName").val(); //角色名
  var channel = $("#channel").val(); //登录方式
  if (district_service != null) {
    district_service = district_service.join(',')
  };
  table.render({
    elem: '',
    height: 648,
    //url: '../query_PKLog', //数据接口
    text: {
      none: 'No matching records found'
    },
    page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
      layout: ['limit', 'prev', 'page', 'next'] //自定义分页布局
    },
    limit: 20,
    limits: [5, 10, 20, 40],
    where: {
      serverId: district_service,
      accountId: account,
      seDate: times,
      roleId: roleid,
      roleName: rolename,
    },
    response: {
      statusName: 'state',
      msgName: 'message',
      statusCode: true,
      countName: 'total',
      dataName: 'rows'
    },
    request: {
      pageName: 'pageIndex',
      limitName: 'pageSize'
    },
    done: function (res, curr, count) {
      $("table").css("width", "100%");
      $("table tbody tr:even").css("background-color", "rgb(59,59,59)")
      $("body").mLoading("hide");
      if ($(".Recharge .layui-table-body")[0].textContent == "No matching records found") {
        $(".Recharge .layui-table-header").css("overflow-x", "auto")
      }
    },
    unresize: true,
    even: true //开启隔行背景
      ,
    title: '',
    page: true //开启分页
      ,
    cols: [
      [ //表头
        {
          title: "区服号",
          field: 'serverId',
          width: '10%',
        },
        {
          title: "日志时间",
          field: 'logTime',
          width: 200,
        },
        {
          title: "账号ID",
          field: 'accountId',
          width: 200,
        },
        {
          title: "设备号",
          field: 'deviceId',
          width: 280,
        },
        {
          title: "角色ID",
          field: 'roleId',
          width: 250,
        },
        {
          title: "角色名",
          field: 'roleName',
          width: '10%',
        },
        {
          title: "角色等级",
          field: 'roleLevel',
          width: '10%',
        },
        {
          title: "角色战力",
          field: 'rolePower',
          width: '10%',
        },
        {
          title: "角色VIP",
          field: 'roleVip',
          width: '10%',
        },
        {
          title: "职业类型",
          field: 'classType',
          width: '10%',
        },
        {
          title: "比赛阶段",
          field: 'stateValue',
          width: '10%',
          templet: function (row) {
            if (row.stateValue == 0) {
              return '海选淘汰'
            }
            if (row.stateValue == 1) {
              return '进入16强'
            }
            if (row.stateValue == 2) {
              return '16进8 '
            }
            if (row.stateValue == 3) {
              return '8进4'
            }
            if (row.stateValue == 4) {
              return '4进2'
            }
            if (row.stateValue == 5) {
              return '决赛'
            }
          }
        },
        {
          title: "对手ID",
          field: 'oppoGuid',
          width: '10%',
        },
        {
          title: "PK结果",
          field: 'pkResult',
          width: '10%',
          templet: function (row) {
            if (row.pkResult == 0) {
              return '失败'
            }
            if (row.pkResult == 1) {
              return '胜利'
            }
          }
        },
        {
          title: "物品1",
          field: 'itemId1',
          width: '10%',
        },
        {
          title: "物品1数量",
          field: 'itemNum1',
          width: '10%',
        },
        {
          title: "物品2",
          field: 'itemId2',
          width: '10%',
        },
        {
          title: "物品2数量",
          field: 'itemNum2',
          width: '10%',
        },
        {
          title: "物品3",
          field: 'itemId3',
          width: '10%',
        },
        {
          title: "物品3数量",
          field: 'itemNum3',
          width: '10%',
        },
        {
          title: "物品4",
          field: 'itemId4',
          width: '10%',
        },
        {
          title: "物品5",
          field: 'itemId5',
          width: '10%',
        },
        {
          title: "物品5数量",
          field: 'itemNum5',
          width: '10%',
        },
        {
          title: "物品6",
          field: 'itemId6',
          width: '10%',
        },
        {
          title: "物品6数量",
          field: 'itemNum6',
          width: '10%',
        },
        {
          title: "物品7",
          field: 'itemId7',
          width: '10%',
        },
        {
          title: "物品7数量",
          field: 'itemNum7',
          width: '10%',
        },
        {
          title: "物品8",
          field: 'itemId8',
          width: '10%',
        },
        {
          title: "物品8数量",
          field: 'itemNum8',
          width: '10%',
        },
        {
          title: "物品9",
          field: 'itemId9',
          width: '10%',
        },
        {
          title: "物品9数量",
          field: 'itemNum9',
          width: '10%',
        },
        {
          title: "物品10",
          field: 'itemId10',
          width: '10%',
        },
        {
          title: "物品10数量",
          field: 'itemNum10',
          width: '10%',
        },
        // {
        //   title: "IP",
        //   field: 'ip',
        //   width: '10%',
        // },
      ]
    ]
  });
  // })
  $("#datatable").bootstrapTable('destroy');
  var t = $("#datatable").bootstrapTable({
    url: '../query_PKLog',
    method: 'post',
    dataType: "json",
    cache: false,
    contentType: "application/x-www-form-urlencoded", //post请求的话就加上这个句话
    queryParamsType: "",
    striped: true, //设置为 true 会有隔行变色效果
    undefinedText: "0", //当数据为 undefined 时显示的字符
    pagination: true, //分页
    paginationLoop: false, //设置为 true 启用分页条无限循环的功能。
    showToggle: false, //是否显示 切换试图（table/card）按钮
    showColumns: false, //是否显示 内容列下拉框
    pageNumber: 1, //如果设置了分页，首页页码
    // showPaginationSwitch:true,//是否显示 数据条数选择框
    pageSize: 20, //如果设置了分页，页面数据条数
    pageList: [5, 10, 20, 40], //如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。
    paginationPreText: '‹', //指定分页条中上一页按钮的图标或文字,这里是<
    paginationNextText: '›', //指定分页条中下一页按钮的图标或文字,这里是>
    search: false, //显示搜索框
    data_local: "zh-US", //表格汉化
    sidePagination: "server", //服务端处理分页
    queryParams: function (params) { //自定义参数，这里的参数是传给后台的，我这是是分页用的
      return { //这里的params是table提供的
        pageIndex: params.pageNumber, //从数据库第几条记录开始
        pageSize: params.pageSize, //找多少条
        serverId: district_service,
        accountId: account,
        seDate: times,
        roleId: roleid,
        roleName: rolename,
        //				loginType:channel,

      };
    },
    idField: "logId", //指定主键列
    columns: [{
        title: "区服号",
        field: 'serverId',
        align: 'center',
      },
      {
        title: "日志时间",
        field: 'logTime',
        align: 'center',
        width: 150
      },
      {
        title: "账号ID",
        field: 'accountId',
        align: 'center',
        width: 200
      },
      {
        title: "设备号",
        field: 'deviceId',
        align: 'center',
        width: 280
      },
      {
        title: "角色ID",
        field: 'roleId',
        align: 'center',
        width: 250
      },
      {
        title: "角色名",
        field: 'roleName',
        align: 'center',
      },
      {
        title: "角色等级",
        field: 'roleLevel',
        align: 'center',
      },
      {
        title: "角色战力",
        field: 'rolePower',
        align: 'center',
      },
      {
        title: "角色VIP",
        field: 'roleVip',
        align: 'center',
      },
      {
        title: "职业类型",
        field: 'classType',
        align: 'center',
      },
      {
        title: "比赛阶段",
        field: 'stateValue',
        align: 'center',
        formatter: function (value, row, index) {
          if (row.stateValue == 0) {
            return '海选淘汰'
          }
          if (row.stateValue == 1) {
            return '进入16强'
          }
          if (row.stateValue == 2) {
            return '16进8 '
          }
          if (row.stateValue == 3) {
            return '8进4'
          }
          if (row.stateValue == 4) {
            return '4进2'
          }
          if (row.stateValue == 5) {
            return '决赛'
          }
        }
      },
      {
        title: "对手ID",
        field: 'oppoGuid',
        align: 'center',
      },
      {
        title: "PK结果",
        field: 'pkResult',
        align: 'center',
        formatter: function (value, row, index) {
          if (row.pkResult == 0) {
            return '失败'
          }
          if (row.pkResult == 1) {
            return '胜利'
          }
        }
      },
      {
        title: "物品1",
        field: 'itemId1',
        align: 'center',
      },
      {
        title: "物品1数量",
        field: 'itemNum1',
        align: 'center',
      },
      {
        title: "物品2",
        field: 'itemId2',
        align: 'center',
      },
      {
        title: "物品2数量",
        field: 'itemNum2',
        align: 'center',
      },
      {
        title: "物品3",
        field: 'itemId3',
        align: 'center',
      },
      {
        title: "物品3数量",
        field: 'itemNum3',
        align: 'center',
      },
      {
        title: "物品4",
        field: 'itemId4',
        align: 'center',
      },
      {
        title: "物品5",
        field: 'itemId5',
        align: 'center',
      },
      {
        title: "物品5数量",
        field: 'itemNum5',
        align: 'center',
      },
      {
        title: "物品6",
        field: 'itemId6',
        align: 'center',
      },
      {
        title: "物品6数量",
        field: 'itemNum6',
        align: 'center',
      },
      {
        title: "物品7",
        field: 'itemId7',
        align: 'center'
      },
      {
        title: "物品7数量",
        field: 'itemNum7',
        align: 'center',
      },
      {
        title: "物品8",
        field: 'itemId8',
        align: 'center',
      },
      {
        title: "物品8数量",
        field: 'itemNum8',
        align: 'center',
      },
      {
        title: "物品9",
        field: 'itemId9',
        align: 'center',
      },
      {
        title: "物品9数量",
        field: 'itemNum9',
        align: 'center',
      },
      {
        title: "物品10",
        field: 'itemId10',
        align: 'center',
      },
      {
        title: "物品10数量",
        field: 'itemNum10',
        align: 'center',
      },
    ]
  });
  t.on('load-success.bs.table', function (data) {
    $("body").mLoading("hide")
    $(".pull-right").css("display", "block");
    $("#datatable tbody tr").css("background-color", "#323232")
    $("#datatable tbody tr:even").css("background-color", "#3b3b3b")
    $('#datatable').bootstrapTable('resetView', {
      height: '80%'
    });
  });
}

var obj = [
  "转生",
  "复活",
  "解锁背包格子",
  "军团捐献",
  "资源找回",
  "成长基金",
  "红包",
  "膜拜",
  "学习技能",
  "通过邮件发钱",
  "主界面的转换",
  "背包里的转换",
  "图鉴守护神升星",
  "图鉴守护神升级",
  "信仰点亮",
  "信仰升级",
  "创建军团",
  "舞会领奖",
  "举办舞会",
  "军团buff",
  "军团清除世界招募cd",
  "补领福利",
  "副本完成奖励",
  "精灵升级",
  "精灵单个猎取",
  "精灵十连猎取",
  "冥想",
  "竞技场付费挑战",
  "完成任务",
  "任务刷星",
  "传送",
  "元素之心单个获取",
  "元素之心精炼",
  "元素之心升级",
  "副本扫荡",
  "买物品",
  "物品追加",
  "物品进阶",
  "神装再造",
  "合成",
  "物品升级",
  "翅膀升级自动买",
  "翅膀升级",
  "翅膀升星自动买",
  "翅膀升星",
  "注魂",
  "注灵",
  "翎羽升级自动买",
  "翎羽升级",
  "翎羽升星自动买",
  "翎羽升星",
  "物品洗练",
  "坐骑升级自动买",
  "坐骑升级",
  "坐骑解锁",
  "坐骑幻化",
  "祈福单次",
  "祈福十连",
  "称号升级",
  "gm指令",
  "翅膀幻化",
  "符文保值回收",
  "花费金币聊天",
  "物品续费",
  "物品礼包购买",
  "购买buff药",
  "宝石升级",
  "拍卖购买",
  "拍卖竞标",
  "物品回收",
  "军团加火",
  "军团提升技能",
  "火种购买标志位",
  "火种升级",
  "火种位置升级",
  "副本增加buff",
  "精灵开格子",
  "精灵幻化",
  "开启天赋",
  "离婚",
  "宝藏抽奖",
  "神装合成",
  "竞技场扫荡",
  "云购购买",
  "解锁仓库格子",
  "信仰符文升级",
  "信仰符文保值分解",
  "军团仓库积分",
  "购买VIP特权物品",
  "图鉴升级",
  "限时小额充值",
  "购买跨服天梯次数",
  "神翎之心升级",
  "技能书保值回收",
]

var only = [
  "전환",
  "부활",
  "가방 활성 칸",
  "길드 기부",
  "자원 회수",
  "성장 기금",
  "레드 패킷",
  "응원",
  "배운 스킬",
  "우편을 통해 금액 발송",
  "메인 화면의 전환",
  "가방 내부의 전환",
  "도감 수호신 별승급",
  "도감 수호신 승급",
  "페이스 빛",
  "페이스 승급",
  "길드 생성",
  "무도회 보상",
  "무도회 개최",
  "길드buff",
  "길드 세계 모집 제거cd",
  "보상 혜택",
  "던전 클리어 보상",
  "정령 승급",
  "정령 1개 얻기",
  "정령 10개 얻기",
  "명상",
  "경기장 지불 도전",
  "임무 완료",
  "임무 초기화",
  "전송",
  "원소의 심장 1개 획득",
  "원소의 심장 정련",
  "원소의 심장 승급",
  "던전 소탕",
  "물품 사기",
  "물품 추가",
  "물품 단계승급",
  "신의장비 제조",
  "합성",
  "물품 승급",
  "날개 승급 자동구매",
  "날개 승급",
  "날개 별승급 자동구매",
  "날개 별승급",
  "주혼",
  "주령",
  "날개 승급 자동구매",
  "날개 승급",
  "날개 별승급 자동구매",
  "날개 별승급",
  "물품 제련",
  "탈것 승급 자동구매",
  "탈것 승급",
  "탈것 활성",
  "탈것 환화",
  "축복 1회",
  "축복 10회",
  "타이틀 승급",
  "gm명령",
  "날개 환화",
  "룬 회수 보호",
  "골드 이용 대화",
  "물품 추가 요금",
  "물품 쿠폰 구매",
  "buff포션 구매",
  "보석 승급",
  "경매 구매",
  "경매 입찰",
  "물품 회수",
  "길드 불 추가",
  "길드 스킬 승급",
  "불씨 구매표시 자리",
  "불씨승급",
  "불씨 위치 승급",
  "던전 buff증가",
  "정령 칸 열기",
  "정령 환화",
  "특성 오픈",
  "이혼",
  "보물 뽑기",
  "신의장비 합성",
  "경기장 소탕",
  "운송 구매",
  "창고 칸 활성",
  "페이스 룬 승급",
  "페이스 룬 분해",
  "길드 창고 포인트",
  "VIP특권 물품 구매",
  "도감 승급",
  "限时小额充值",
  "购买跨服天梯次数",
  "神翎之心升级",
  "技能书保值回收",
]