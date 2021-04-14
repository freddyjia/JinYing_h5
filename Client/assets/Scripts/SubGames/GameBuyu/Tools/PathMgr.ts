class Quaternion {
    public x: number
    public y: number
    public z: number
    public w: number
}


export class NewGroupData {
    public FrontPosition: cc.Vec3
    public PathList = new Array<number>()
    public GroupDataArray = new Array<GroupDataNew>()
}

export class GroupDataNew {
    public FishIndex: number
    public FishScaling: number
    public SpeedScaling: number
    public ActionSpeed: number
    public ActionUnite: boolean
    public FishNum: number
    public PosList = new Array<cc.Vec3>()
}

class LinearNodeData {
    public EventType: number
    public Times: number
    public x: number
    public y: number
    public z: number
    /*public qx: number
    public qy: number
    public qz: number
    public qw: number*/
    public ts: number
    /*public nodeIdx: number*/
}

export class PathLinearInterpolator {

    private InvShortMaxValue = 1 / 32767

    public m_MaxTimeScaling: number
    public m_MinPos: cc.Vec3
    public m_RangePos: cc.Vec3
    public m_MinRot: Quaternion
    public m_RangeRot: Quaternion
    public m_MaxDistance: number
    public m_SampleMaxDistance: number
    public m_HasPathEvent: boolean
    public nodeCount: number
    public m_NodeList = new Array<LinearNodeData>()
    public sampleCount: number
    public m_SplineDataList = new Array<LinearNodeData>()
    public m_SplineDataListLen: number = 0

    private outsideInfo_buf1 = new PathInfo()
    private outsideInfo_buf2 = new PathInfo()

    private GetSplineDataUnzip(idx, outsideInfo: PathInfo) {
        outsideInfo.Clear()
        let node = this.m_SplineDataList[idx]
        outsideInfo.posX = node.x * this.InvShortMaxValue
        outsideInfo.posY = node.y * this.InvShortMaxValue
        outsideInfo.posZ = node.z * this.InvShortMaxValue
        outsideInfo.posX = outsideInfo.posX * this.m_RangePos.x + this.m_MinPos.x
        outsideInfo.posY = outsideInfo.posY * this.m_RangePos.y + this.m_MinPos.y
        outsideInfo.posZ = outsideInfo.posZ * this.m_RangePos.z + this.m_MinPos.z
        outsideInfo.timeScaling = node.ts * this.InvShortMaxValue * this.m_MaxTimeScaling
    }

    public SetPathInfo(time: number, ousideInfo: PathInfo) {
        ousideInfo.Clear()
        let t = this.m_SplineDataListLen * time

        if (t < 0) {
            cc.error("跑过的时间小于0!!!")

            t = 0  //容错!!

        }


        if (t > 1) {
            t--
        }
        let idx = Math.floor(t)
        t -= idx
        if (idx < this.m_SplineDataListLen - 1) {
            this.GetSplineDataUnzip(idx, this.outsideInfo_buf1)
            this.GetSplineDataUnzip(idx + 1, this.outsideInfo_buf2)
            ousideInfo.posX = t * this.outsideInfo_buf2.posX + (1 - t) * this.outsideInfo_buf1.posX
            ousideInfo.posY = t * this.outsideInfo_buf2.posY + (1 - t) * this.outsideInfo_buf1.posY
            ousideInfo.posZ = t * this.outsideInfo_buf2.posZ + (1 - t) * this.outsideInfo_buf1.posZ
            ousideInfo.timeScaling = t * this.outsideInfo_buf2.timeScaling + (1 - t) * this.outsideInfo_buf1.timeScaling
            let lerp = new cc.Vec2(this.outsideInfo_buf2.posX - this.outsideInfo_buf1.posX, this.outsideInfo_buf1.posY - this.outsideInfo_buf2.posY)
            let rot = Math.atan2(lerp.y, lerp.x) * (180 / Math.PI)
            ousideInfo.rot = rot
        } else {
            this.GetSplineDataUnzip(this.m_SplineDataListLen - 1, this.outsideInfo_buf1)
            this.GetSplineDataUnzip(this.m_SplineDataListLen - 2, this.outsideInfo_buf2)
            ousideInfo.posX = this.outsideInfo_buf1.posX
            ousideInfo.posY = this.outsideInfo_buf1.posY
            ousideInfo.posZ = this.outsideInfo_buf1.posZ
            ousideInfo.timeScaling = this.outsideInfo_buf1.timeScaling
            let lerp = new cc.Vec2(this.outsideInfo_buf1.posX - this.outsideInfo_buf2.posX, this.outsideInfo_buf1.posY - this.outsideInfo_buf2.posY)
            ousideInfo.rot = Math.atan2(lerp.y, lerp.x) * (180 / Math.PI)
        }
    }

}

class FlowTimeData2 {
    public GroupID: number//鱼群id
    public Probability: number//出现概率
    public StartTime: number//开始时间
    public EndTime: number//结束时间
    public ClearAll: number | boolean//是否清场
    public LaunchInterval: number//鱼群的发射间隔
    public MaxCount: number//鱼群发射最大次数
}

export class PathInfo {
    public rot: number
    public timeScaling: number
    public posX: number
    public posY: number
    public posZ: number

    public Clear() {
        this.rot = 0
        this.timeScaling = 0
        this.posX = 0
        this.posY = 0
        this.posZ = 0
    }

}

class FlowGroupData {
    public GroupID: number //鱼群id
    public MaxCount: number //最大次数
    public Probability: number //出现概率，权重规则
}

class FishFlow {
    public LauncherInterval: number//间隔
    public LoopCount: number//循环次数
    public MaxTime: number//总流程时间
    public isYuZhen: boolean
    public FlowTimeList = new Array<FlowTimeData2>()
    public FlowGroupList = new Array<FlowGroupData>()
}

export default class PathMgr {

    private static ConfigPath = 'SubGames/BuYu/Config/NewFishDatas'
    private contentArr: string[]
    private curReadIndex = -1
    private m_PathInterpList = new Array<PathLinearInterpolator>()
    private m_PathInterpListInv = new Array<PathLinearInterpolator>()
    private m_Groups = new Array<NewGroupData>()
    private m_flows = new Array<FishFlow>()
    private boxs = new Array<cc.Vec2>()
    private boxOffer = new Array<cc.Vec2>()
    private bulletBoxs = new Array<cc.Vec2>()
    private initCom = false

    private ReadNumber(): number {
        return Number(this.contentArr[++this.curReadIndex])
    }

    private ReadInt() {
        return this.ReadNumber()
    }

    private ReadShort() {
        return this.ReadNumber()
    }

    private ReadFloat() {
        return this.ReadNumber()
    }

    private ReadByte() {
        return this.ReadNumber()
    }

    private ReadVec3(): cc.Vec3 {
        return new cc.Vec3(this.ReadNumber(), this.ReadNumber(), this.ReadNumber())
    }

    private ReadBool(): boolean {
        let val = this.contentArr[++this.curReadIndex]
        if (val.indexOf("f") != -1 || val.indexOf("F") != -1) {
            return false
        } else {
            return true
        }
    }

    private ReadQuaternion(): Quaternion {
        let q = new Quaternion()
        q.x = this.ReadNumber()
        q.y = this.ReadNumber()
        q.z = this.ReadNumber()
        q.w = this.ReadNumber()
        return q
    }

    private ReadPathData(): PathLinearInterpolator {
        let pi = new PathLinearInterpolator()
        pi.m_MaxTimeScaling = this.ReadFloat();
        pi.m_MinPos = this.ReadVec3();
        pi.m_RangePos = this.ReadVec3();
        //pi.m_MinRot = this.ReadQuaternion();
        //pi.m_RangeRot = this.ReadQuaternion();
        pi.m_MaxDistance = this.ReadFloat();
        pi.m_SampleMaxDistance = this.ReadFloat();
        pi.m_HasPathEvent = this.ReadBool();
        let nodeCount = this.ReadInt();
        for (let i = 0; i < nodeCount; i++) {
            let node = new LinearNodeData()
            node.EventType = this.ReadByte();
            node.Times = this.ReadInt();
            pi.m_NodeList.push(node)
        }
        let sampleCount = this.ReadInt()
        for (let i = 0; i < sampleCount; i++) {
            let node = new LinearNodeData()
            node.x = this.ReadShort();
            node.y = this.ReadShort();
            /*node.z = this.ReadShort();*/
            // node.qx = this.ReadShort();
            // node.qy = this.ReadShort();
            // node.qz = this.ReadShort();
            // node.qw = this.ReadShort();
            node.ts = this.ReadShort();
            /*node.nodeIdx = this.ReadShort();*/
            pi.m_SplineDataList.push(node)
            pi.m_SplineDataListLen++
        }
        return pi
    }


    public ReadDatas(): NewGroupData {
        let data = new NewGroupData()
        data.FrontPosition = this.ReadVec3();//鱼群的父级位置
        let pathcout = this.ReadShort();
        for (let i = 0; i < pathcout; i++) {
            let pathIndex = this.ReadShort();
            data.PathList.push(pathIndex)
        }
        let dataArrayCount = this.ReadShort();
        for (let i = 0; i < dataArrayCount; i++) {
            let group = new GroupDataNew()
            data.GroupDataArray.push(group)
            group.FishIndex = this.ReadByte();//id
            let posCount = this.ReadShort();
            group.FishScaling = this.ReadFloat();//鱼比例大小

            group.SpeedScaling = this.ReadFloat();//移动速度
            group.ActionSpeed = this.ReadFloat();//动作速度
            group.ActionUnite = this.ReadBool();//动作是否一致
            group.FishNum = this.ReadInt();
            for (let i = 0; i < posCount; i++) {
                group.PosList.push(this.ReadVec3());
            }
        }
        return data
    }

    private ReadFlow(): FishFlow {
        let ff = new FishFlow()
        ff.LauncherInterval = this.ReadFloat();//间隔
        ff.LoopCount = this.ReadInt();//循环次数
        ff.MaxTime = this.ReadInt();//总流程时间
        ff.isYuZhen = this.ReadBool();
        let timeCount = this.ReadInt();
        for (let i = 0; i < timeCount; i++) {
            let timeData = new FlowTimeData2()
            timeData.GroupID = this.ReadInt();//鱼群id
            timeData.Probability = this.ReadInt();//出现概率
            timeData.StartTime = this.ReadFloat();//开始时间
            timeData.EndTime = this.ReadFloat();//结束时间
            timeData.ClearAll = this.ReadBool();//是否清场
            if (timeData.ClearAll == false) {
                timeData.ClearAll = false
                timeData.LaunchInterval = this.ReadFloat();//鱼群的发射间隔
                timeData.MaxCount = this.ReadInt();//鱼群发射最大次数
            }
            ff.FlowTimeList.push(timeData)
        }
        //纯概率鱼群
        let dataCount = this.ReadInt();
        for (let i = 0; i < dataCount; i++) {
            let data = new FlowGroupData()
            data.GroupID = this.ReadInt();//鱼群id
            data.MaxCount = this.ReadInt();//最大次数
            data.Probability = this.ReadInt();//出现概率，权重规则
            ff.FlowGroupList.push(data)
        }
        return ff
    }

    private Deserialization(content: string) {
        this.contentArr = content.split("|")
        let PathCount = this.ReadInt()
        for (let i = 0; i < PathCount; i++) {
            this.m_PathInterpList.push(this.ReadPathData())//正常路径
            this.m_PathInterpListInv.push(this.ReadPathData())//翻转路径
        }

        let GroupCount = this.ReadInt();//解析鱼群
        for (let i = 0; i < GroupCount; i++) {
            let b = this.ReadByte()
            if (b == 1) {//鱼群随机路径群

            } else {
                this.m_Groups.push(this.ReadDatas())
            }
        }


        //解析流程
        let flowCount = this.ReadInt();
        for (let i = 0; i < flowCount; i++) {
            let ff = this.ReadFlow()
            this.m_flows.push(ff)
        }

        //解析鱼碰撞盒大小
        let boxCount = this.ReadInt();
        for (let i = 0; i < boxCount; i++) {
            this.boxs.push(new cc.Vec2(this.ReadFloat(), this.ReadFloat()))
            this.boxOffer.push(new cc.Vec2(this.ReadFloat(), this.ReadFloat()))
        }

        //--子弹碰撞盒大小
        let bulletCount = this.ReadInt();
        for (let i = 0; i < bulletCount; i++) {
            this.bulletBoxs.push(new cc.Vec2(this.ReadFloat(), this.ReadFloat()))
        }

        //是否解析正确
        let End_Magic = this.ReadInt()
        if (End_Magic == 732425123) {
            console.log("解析完成");
            this.initCom = true
        } else {
            console.error("解析异常");
        }
        this.fCallback(this.initCom)
    }


    private ReadPath() {
        cc.loader.loadRes(PathMgr.ConfigPath, cc.TextAsset, (newError: Error, datas: cc.TextAsset) => {
            if (newError) {
                cc.error("解析路径出错!!!", newError)
                this.fCallback(false)
                return
            }
            this.Deserialization(datas.text)
        })

    }

    private fCallback: (succ: boolean) => void

    public Init(fCallback: (succ: boolean) => void) {
        this.fCallback = fCallback
        this.ReadPath()
    }

    private static _intence: PathMgr;

    public static intence(): PathMgr {
        if (PathMgr._intence == null) {
            PathMgr._intence = new PathMgr()
        }
        return PathMgr._intence
    }

    public GetPath(index: number, isInv: boolean): PathLinearInterpolator {
        if (isInv) {
            return this.m_PathInterpListInv[index]
        } else {
            return this.m_PathInterpList[index]
        }

    }

    public GetGroupDatas(idx: number): NewGroupData {
        return this.m_Groups[idx]
    }

    public GetFishBoxSize(idx: number): cc.Vec2 {
        let val = this.boxs[idx]
        return new cc.Vec2(val.x, val.y)
    }

    public GetFishBoxOff(idx: number): cc.Vec2 {
        let val = this.boxOffer[idx]
        return new cc.Vec2(val.x, val.y)
    }

}