import Global from "../../Global/Global";
import MessageCenter from "../../MVCFramework/MessageCenter";
import Model from "../../MVCFramework/Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import { EmptyReq } from "../../Protos/Common";
import { MatchServerMsgDefine, VipMsgDefine } from "../../Protos/MessageDefine";
import { VipInfoListPush, ExchangeIntegralRecordPush, IntegralDetailPush, ExchangeIntegralGoldResult } from "../../Protos/Vip";
import MessageNames from "../MessageNames";


export default class ModelVip extends Model {
  public VipInfoList: VipInfoListPush;
  public Xima_getInfo: ExchangeIntegralRecordPush;
  public Xima_info: IntegralDetailPush;
  public isVip: boolean;
  public Init() {
    this.ListenMsg();
  }
  private ListenMsg() {
    //  TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall)
    TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, VipMsgDefine.MSG_PUSH_VIP_INFO_UPDATE, (data) => {
      let res = VipInfoListPush.decode(data);
      this.UPdataVipInfo(res);
      MessageCenter.SendMessage(MessageNames.VipUpdateVipDate)
    })
    // TCPNetwork.GetInstance().ListenMsg(TCPSessionID.Hall, VipMsgDefine.MSG_PUSH_INTEGRAL_UPDATE, (data) => {
    //   let res = IntegralDetailPush.decode(data);
    //   cc.log("返点洗马明细更新", res);
    //   this.Xima_info = res;
    //   MessageCenter.SendMessage(MessageNames.VipUpdateRebateDetail)
    //   // MessageCenter.SendMessage(MessageNames.VipUpdateVipDate)
    // })

  }
  //获取vip信息
  public Req_VipListInfo(successback: () => void) {
    let req = EmptyReq.create();
    let sendData = EmptyReq.encode(req).finish();
    TCPNetwork.GetInstance().Send(TCPSessionID.Hall, VipMsgDefine.MSG_REQ_VIP_INFO, sendData, (data) => {
      let res = VipInfoListPush.decode(data);
      this.UPdataVipInfo(res);
      successback();
    }, (err) => {

    });

  }
  //请求最近三天积分领取记录明细
  public Req_DetailInfo_FanDian_Get() {
    let req = EmptyReq.create();
    let sendData = EmptyReq.encode(req).finish();
    TCPNetwork.GetInstance().Send(TCPSessionID.Hall, VipMsgDefine.MSG_REQ_GET_INTEGRAL_DETAIL, sendData, (data) => {
      let res = ExchangeIntegralRecordPush.decode(data);
      cc.log("返点领取明细", res);
      this.Xima_getInfo = res;
      MessageCenter.SendMessage(MessageNames.VIPUpdateReceivingRecords);

    }, (err) => {

    })

  }
  //请求最近三天返点明细 洗码返点明细
  public Req_DetailInfo_FanDian() {
    let req = EmptyReq.create();
    let sendData = EmptyReq.encode(req).finish();
    TCPNetwork.GetInstance().Send(TCPSessionID.Hall, VipMsgDefine.MSG_REQ_INTEGRAL_DETAIL, sendData, (data) => {
      let res = IntegralDetailPush.decode(data);
      cc.log("返点洗马明细", res);
      this.Xima_info = res;
      MessageCenter.SendMessage(MessageNames.VipUpdateRebateDetail);
      //successback();
    }, (err) => {

    })
  }
  //领取返点
  public Req_EXCHANGE_INTEGRAL(successback: () => void, errorfunc: (err) => void) {
    let req = EmptyReq.create();
    let sendData = EmptyReq.encode(req).finish();

    TCPNetwork.GetInstance().Send(TCPSessionID.Hall, VipMsgDefine.MSG_REQ_EXCHANGE_INTEGRAL, sendData, (data) => {
      let res = ExchangeIntegralGoldResult.decode(data);
      cc.log("领取返点", res);
      if (res.isSuc) {
        this.VipInfoList.interalValue = res.interalValue;
        this.VipInfoList.alreadyGetRebateCount = res.alreadyGetRebateCount;
        this.UPdataVipInfo(this.VipInfoList);
        MessageCenter.SendMessage(MessageNames.VipUpdateVipDate);
        successback();
      } else {
        errorfunc(res.tips);
      }
    },
      (err) => {

      })
  }
  public UPdataVipInfo(res: VipInfoListPush) {
    this.VipInfoList = res;
    if (this.VipInfoList.vipLevel != 0) {
      this.isVip = true;
    } else {
      this.isVip = false;
    }
    Global.PlayerInfo.vipLv = this.VipInfoList.vipLevel;
  }


}