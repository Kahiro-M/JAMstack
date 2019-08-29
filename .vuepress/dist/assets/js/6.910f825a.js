(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{187:function(n,t,s){"use strict";s.r(t);var e=s(0),i=Object(e.a)({},function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"_99分99秒は何時間何分何秒？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_99分99秒は何時間何分何秒？","aria-hidden":"true"}},[n._v("#")]),n._v(" 99分99秒は何時間何分何秒？")]),n._v(" "),s("p",[n._v("...わかりづれぇ")]),n._v(" "),s("h2",{attrs:{id:"時分秒に変換"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#時分秒に変換","aria-hidden":"true"}},[n._v("#")]),n._v(" 時分秒に変換")]),n._v(" "),s("p",[n._v("あまりにもわかりづらいので、変換するプログラムを用意しました。")]),n._v(" "),s("div",{staticClass:"language-.js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('class TimeConvert{\n  constructor(hour,min,sec){\n    this.hour = hour;\n    this.min = min;\n    this.sec = sec;\n  }\n\n  fixTime(){\n    //一時保管用の秒数に変換後、時→分→秒の順に整形する。\n    var tmpHour = this.hour;\n    var tmpMin = this.min;\n    var tmpSec = this.sec;\n\n    //秒数に変換\n    var tmpTime = this.conv2sec(tmpHour,tmpMin,tmpSec);\n\n    //時に整形\n    this.hour = this.conv2hour(0,0,tmpTime);\n    //一時保管用の秒数を更新（時に整形した分を差し引く）\n    tmpTime = tmpTime - this.hour*3600;\n\n    //分に整形\n    this.min = this.conv2min(0,0,tmpTime);\n    //一時保管用の秒数を更新（分に整形した分を差し引く）\n    tmpTime = tmpTime - this.min*60;\n\n    //秒に整形（小数などの整理）\n    this.sec = this.conv2sec(0,0,tmpTime);\n\n    //結果表示\n    console.log(this.hour,"h",this.min,"m",this.sec,"s");\n  }\n\n  conv2hour(inH,inM,inS){\n    return Math.floor(inH + inM/60 + inS/(60*60));\n  }\n\n  conv2min(inH,inM,inS){\n    return Math.floor(inH*60 + inM + inS/60);\n  }\n\n  conv2sec(inH,inM,inS){\n    return Math.floor(inH*60*60 + inM*60 + inS);\n  }\n}\n')])])]),s("h2",{attrs:{id:"やってみる"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#やってみる","aria-hidden":"true"}},[n._v("#")]),n._v(" やってみる")]),n._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('//変換クラスをnewするときに変換したい時間をセット。\n> a = new TimeConvert(0,99,59)\n\n//セットした値が入っているか確認。\n> a\nTimeConvert {hour: 0, min: 99, sec: 59}\nhour: 0\nmin: 99\nsec: 59\n\n//変換関数実行。\n> a.fixTime()\n1 "h" 39 "m" 59 "s"\n')])])]),s("p",[s("strong",[n._v("でました！")]),n._v(" "),s("strong",[n._v("99分59秒 = 1時間39分59秒です！")])]),n._v(" "),s("p",[n._v("暗算ができないときにどうぞ！")]),n._v(" "),s("h3",{attrs:{id:"ちなみに"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ちなみに","aria-hidden":"true"}},[n._v("#")]),n._v(" ちなみに...")]),n._v(" "),s("p",[n._v("タイトルにある"),s("strong",[n._v("99分99秒")]),n._v("ですが、")]),n._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('> b = new TimeConvert(0,99,99)\n> b.fixTime()\n1 "h" 40 "m" 39 "s"\n')])])]),s("p",[s("strong",[n._v("1時間40分39秒です！")])])])},[],!1,null,null,null);t.default=i.exports}}]);