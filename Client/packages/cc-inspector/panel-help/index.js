const Fs=require("fire-fs"),Electron=require("electron"),GoogleAnalytics=Editor.require("packages://cc-inspector/core/GoogleAnalytics.js");Editor.Panel.extend({style:Fs.readFileSync(Editor.url("packages://cc-inspector/panel-help/index.css"),"utf-8"),template:Fs.readFileSync(Editor.url("packages://cc-inspector/panel-help/index.html"),"utf-8"),$:{},ready(){GoogleAnalytics.init(),GoogleAnalytics.eventCustom("[help] panel-open-help"),this.plugin=new window.Vue({el:this.shadowRoot,created(){let e=Editor.url("packages://cc-inspector/package.json");if(Fs.existsSync(e)){let t=JSON.parse(Fs.readFileSync(e,"utf-8"));t.version&&(this.version=t.version)}},init(){},data:{version:"2.0.0"},methods:{onBtnClickDevProcess(){Electron.shell.openExternal("https://github.com/tidys/CocosCreatorPlugins/projects/1"),GoogleAnalytics.eventCustom("[help] 开发计划")},onStopTouchEvent(e){e.preventDefault(),e.stopPropagation()},onBtnClickHelpDoc(){Electron.shell.openExternal("https://tidys.github.io/plugin-docs-oneself/docs/cc-inspector-v2/readme.html"),GoogleAnalytics.eventDoc()},onBtnClickTellMe(){Electron.shell.openExternal("http://wpa.qq.com/msgrd?v=3&uin=774177933&site=qq&menu=yes"),GoogleAnalytics.eventQQ()},onBtnClickMorePlugin(){Electron.shell.openExternal("https://github.com/tidys/CocosCreatorPlugins"),GoogleAnalytics.eventCustom("[help] 更多插件")},onBtnClickJoinQQGroup(){Electron.shell.openExternal("https://jq.qq.com/?_wv=1027&k=5goXSzL"),GoogleAnalytics.eventCustom("[help] 加入QQ群")}}})},messages:{}});