import Global from "./Global/Global";
import { JsGetIP } from "./JsTool/JsGetIP";
import { JsGetUrlParms } from "./JsTool/JsGetUrlParms";
import MessageNames from "./Modules/MessageNames";
import MessageCenter from "./MVCFramework/MessageCenter";
import MVCFramework from "./MVCFramework/MVCFramework";
import AudioManager from "./Manager/AudioManager";
import HttpRequest from "./Network/Http/HttpRequest";
import { JSOpenUrl } from "./JsTool/JSOpenUrl";
import OpenNetworkingUI from "./Tools/OpenNetworkingUI";
import { FullScreenJS } from "./JsTool/FullScreen";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    onLoad() {
        if (Global.showLog == true) {
            cc.error("-->cc.sys.isBrowser " + cc.sys.isBrowser
                + "\n-->cc.sys.browserType  " + cc.sys.browserType
                + "\n -->cc.sys.browserVersion " + cc.sys.browserVersion
                + "\n -->cc.sys.isMobile " + cc.sys.isMobile
                + "\n -->cc.sys.isNative " + cc.sys.isNative
                + "\n -->cc.sys.os " + cc.sys.os
                + "\n -->cc.sys.platform " + cc.sys.platform
                + "\n -->cc.sys.osMainVersion " + cc.sys.osMainVersion
                + "\n -->cc.sys.osVersion " + cc.sys.osVersion
                + "\n -->cc.sys.windowPixelResolution.width " + cc.sys.windowPixelResolution.width
                + "\n -->cc.sys.windowPixelResolution.height " + cc.sys.windowPixelResolution.height);
        }

        // cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
        // cc.view.setDesignResolutionSize(720,1280,cc.ResolutionPolicy.FIXED_WIDTH);
        // FullScreenJS.windowScroll();

        let gameversion = window["GameVersion"]
        if (gameversion == null) {
            gameversion = "1.00";
        }
        console.log("GameVersion " + gameversion);
        Global.gameVersion = gameversion;

        //TODO:

        let protocol = document.location.protocol;
        // let address = "192.168.9.100:6060";
        // let address = "jdtest.tipei.top:46161";
        // let address = "qm.raohaolu.cn:16061";
        // let address = "test.4dcbs9.com:46162";
        // 备用 loginh5.boomss.top:16062
        // let address = "h5login.dhsj888.club:16061";
        // let address = "192.168.9.103:6060";
        let address = "18.166.93.17:6060";
        let url = protocol + "//" + address;

        AudioManager.GetInstance().Init();
        MVCFramework.Init();

        OpenNetworkingUI.Show();

        Global.loginAddress = url;
        JsGetUrlParms.SetUrlParmsToWindow();

        let targetFrame = window["targetFrame"];
        if (targetFrame != null) {
            cc.game.setFrameRate(Number(targetFrame));
        } else {
            cc.game.setFrameRate(50)
        }

        let channel = window["channel"];
        if (channel == null || channel == undefined) {
            channel = "defaultH5";
        }
        Global.channel = channel;
        Global.channel = "jyios_android_officeTest";

        let adapt = Number(window["adapt"]);
        if (isNaN(adapt)) {
            adapt = 0
        }
        Global.adapt = adapt;

        //通过js获取跨域ip
        JsGetIP.JsGet((success: boolean, data: string) => {
            if (success == true) {
                Global.selfIPAddress = data;
                console.log("JsGetIP success " + data);
            }
            else {
                console.log("JsGetIP fail " + data);
            }

            if (Global.isRelease == false) {
                this.StartGame();
                OpenNetworkingUI.Hide();
                return;
            }

            let nocheckip = window["nocheckip"]
            if (nocheckip != null) {
                this.StartGame();
                OpenNetworkingUI.Hide();
                return;
            }

            let filterDic: { [name: string]: string } = {};
            filterDic["ip"] = Global.selfIPAddress;
            filterDic["promoid"] = Global.channel;
            HttpRequest.Post(Global.GetFilterPath(), filterDic, (data) => {

                OpenNetworkingUI.Hide();
                let jsonData = JSON.parse(data);
                if (jsonData["filter"] == true) {
                    // document.location = "https://www.baidu.com";
                    JSOpenUrl.DirectOpen("https://www.baidu.com");
                }
                else {
                    this.StartGame();
                }

            }, (err) => {
                // Toast.Show("网络请求失败");
                OpenNetworkingUI.Hide();
                this.StartGame();
            }, 10000);
        });

        cc.game.on(cc.game.EVENT_HIDE, function () {
            console.log("游戏进入后台");
            Global.isHide = true;
        }, this)
        cc.game.on(cc.game.EVENT_SHOW, function () {
            console.log("游戏进入前台");
            Global.isHide = false;
        }, this)
    }

    private StartGame() {
        // MessageCenter.SendMessage(MessageNames.OpenViewHall,null);

        // return;
        if (Global.isRelease == true) {
            MessageCenter.SendMessage(MessageNames.OpenViewLoginFormal, true);
        }
        else {
            MessageCenter.SendMessage(MessageNames.OpenViewLogin, null);
        }
    }
}
