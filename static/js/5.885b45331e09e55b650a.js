webpackJsonp([5],{"0yK0":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("vMJZ"),i={data:function(){return{avatar:"",loading:!1}},methods:{getAvatar:function(){var t=this;this.loading=!0,n.a.getInfo().then(function(a){var e=a.data;t.avatar=e.avatar_url}).then(function(){return t.loading=!1}).catch(function(t){return console.log("获取头像失败"+t)})}},mounted:function(){this.getAvatar()}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"正在加载中...","element-loading-spinner":"el-icon-loading"}},[e("el-card",{attrs:{shadow:"never"}},[e("div",{staticClass:"about"},[e("img",{attrs:{src:t.avatar,alt:"头像"}}),t._v(" "),e("div",[e("p",[e("b",[t._v("基本信息")])]),t._v(" "),e("ul",[e("li",[t._v("姓名: wsy")]),t._v(" "),e("li",[t._v("出生日期: 1995-7-14")]),t._v(" "),e("li",[t._v("籍贯: 云南")]),t._v(" "),e("li",[t._v("现居地: 成都")]),t._v(" "),e("li",[t._v("职业: web前端工程师")]),t._v(" "),e("li",[t._v("兴趣: 运动 音乐")])]),t._v(" "),e("p",[e("b",[t._v("联系作者")])]),t._v(" "),e("ul",[e("li",[t._v("Email: shyee-wsy@outlook.com")]),t._v(" "),e("li",[t._v("Github: https://github.com/Shyee-wsy")])])])])])],1)},staticRenderFns:[]};var o=e("VU/8")(i,l,!1,function(t){e("8oQm")},null,null);a.default=o.exports},"8oQm":function(t,a){}});
//# sourceMappingURL=5.885b45331e09e55b650a.js.map