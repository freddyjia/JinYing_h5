import {DealInfo} from "../../Protos/QiangZhuangNiuNiu";
import QNNClickCardData from "./QNNClickCardData";

export default class QNNDatasFunc {
    public fGetLocalPlayerPos
    public fGetLocalPlayerUId
    public fReqQiangZhuang
    public fReqTouzhu
    public fGetBankerId: () => string
    public fGetBankerPos: () => number
    public fExitRoom
    public fGetDealInfoByPos: (pos: number) => DealInfo | null
    public fReqFanpai: () => void

    public fClickCard: (datas: QNNClickCardData) => void
    public fGetClickCardCnt: () => number
    public fIsIndexCardSelect: (indexForm0: number) => boolean
    public fGetAllSizeTypeByClickSort: () => Array<number>
    public fHasNiu: (pos: number, cardKey: string) => boolean
    public fShouldStandCard: (pos: number, cardKey: string) => boolean

    public fIsUIdJoinCurGame: (uId: string) => boolean
    public fIsReadyJoin: (pos: number) => boolean
    public fPosInGame: (pos: number) => boolean
    public fIsAbsPosJoinCurGame: (pos: number) => boolean
    public fPos2UId: (pos: number) => string | null
    public fIsPosInRoom: (pos: number) => boolean
    public fGetFinalRoomStatus: () => number
    public fGIsByStander: () => boolean


}