import View from "../../MVCFramework/View";
import XTween from "../../Tools/XTween/XTween";
import { HistoryCardInfo, WinStatus } from "../../Protos/LongHuDou";
import Util from "../../Tools/Util";
import XTweener from "../../Tools/XTween/Base/XTweener";
import NodeUtil from "../../Tools/NodeUtil";
import ccC from "../../Tools/ccC";
//红黑和龙虎的记录//
export enum SANXIAOLU_TYPE {
    DA_YAN_ZAI = 1,
    XIAO_LU = 2,
    XIAO_QIANG = 3,
}

export default class ViewGameRecord extends View
{ 
    private tweenerArray: { [key: number]: XTweener}  = {};
    private nextItemsNodeArray: { [key: number]: cc.Node } = {};
 
    private zhupanLastItem:cc.Node = null;
    private daluLastItem:cc.Node = null;
    private daLuStateData:Array<any>;

    private winRateSlider:cc.Slider; 
    private leftWinRateNum:cc.Label; 
    private rightWinRateNum:cc.Label; 
    private leftRateNode:cc.Node; 
    private rightRateNode:cc.Node; 
    private topTrend:cc.Node; 

    private nextBtn1:cc.Button;
    private nextBtn2:cc.Button;
    
    private zhuPanColItemList:Array<cc.Node> = [];
    private zhuPanItemList:Array<cc.Node> = [];
 
    private daLuToggleList:Array<Array< cc.Node>>  = [];

    //这个是
    private daYanZaiToggleList:Array<Array<cc.Toggle>> = [];
    private xiaoLuToggleList:Array<Array<cc.Toggle>>  = [];
    private xiaoQiangToggleList:Array<Array<cc.Toggle>> = [];


    private xiaoLuColItemList:Array<cc.Node>= [];
    private xiaoQiangColItemList:Array<cc.Node>= [];
    private daYanZaiColItemList:Array<cc.Node>= [];

    private MAX_TWENTY_COUNT = 20;
    private MAX_ZHUPAN_COLUMN_COUNT = 10;
    private MAX_DALU_COLUMN_COUNT = 40;
    private MAX_SANXIAOLU_COLUMN_COUNT = 20;
    private MAX_RECORD_ROW_COUNT = 6;
    private NEXT_DAYANZAI_TOGGLE_STR = "DaYanZaiLuIcon";
    private NEXT_XIAOLU_TOGGLE_STR = "XiaoLuIcon";
    private NEXT_XIAOQIANG_TOGGLE_STR = "XiaoQiangLuIcon";
    // 大路上真实以显示的列数
    private REAL_DALU_COL_INDEX = 0
    // 大眼仔路真实已显示的列数
    private REAL_DAYANZAI_COL_INDEX = 0
    // 小路真实已显示的列数
    private REAL_XIAOLU_COL_INDEX = 0
    // 小强路.......
    private REAL_XIAOQIANG_COL_INDEX = 0
 
    private nextDayan1:cc.Toggle;
    private nextXiaoQiang1:cc.Toggle;
    private nextXiaoLu1:cc.Toggle;

    private nextDayan2:cc.Toggle;
    private nextXiaoQiang2:cc.Toggle;
    private nextXiaoLu2:cc.Toggle;
    //珠盘
    private ZhuPanColPanel:cc.Node; 
    private ZhuPanLuColItem:cc.Node; 
    private ZhuPanStatePanel:cc.Node; 
    private ZhuPanLuStateItem:cc.Node; 
    
    //接下來一個開關動畫
    private nextRedDaYanZaiToggle:cc.Toggle;
    private nextBlackDaYanZaiToggle:cc.Toggle;
    private nextRedXiaoLuToggle:cc.Toggle;
    private nextBlackXiaoLuToggle:cc.Toggle;
    private nextRedXiaoQiangToggle:cc.Toggle;
    private nextBlackXiaoQiangToggle:cc.Toggle;
    private lastDaLuColCount:number;
    //接下來一個開關動畫

    //大路
    private daLuScrollRect:cc.Node; 
    private daLuColPanel:cc.Node; 
    private daLuColItem:cc.Node; 

    //大眼仔
    private daYanZaiScrollRect:cc.Node; 
    private daYanZaiColPanel:cc.Node; 
    private daYanZaiColItem:cc.Node; 

    //小路
    private xiaoLuScrollRect:cc.Node; 
    private xiaoLuColPanel:cc.Node; 
    private xiaoLuColItem:cc.Node; 
    
    //小强
    private xiaoQiangScrollRect:cc.Node; 
    private xiaoQiangColPanel:cc.Node; 
    private xiaoQiangColItem:cc.Node; 

    private daYanZaiStateDataList = [];
    private xiaoLuStateDataList = [];
    private xiaoQiangStateDataList = [];
    private dayanzaiLastItem :any;
    private xiaoluLastItem :any;
    private xiaoqiangLastItem :any;
    private isFirstTimeComming = true;
    public OnAwake()
    { 
        this.winRateSlider = this.FindTransform("WinRateSlider").getComponent((cc.Slider));
        this.leftRateNode = this.FindTransform("leftRateNode") ;
        this.rightRateNode = this.FindTransform("rightRateNode") ;
        this.leftWinRateNum = this.FindTransform("leftWinRateNum").getComponent((cc.Label));
        this.rightWinRateNum = this.FindTransform("rightWinRateNum").getComponent((cc.Label));
        this.topTrend =  this.FindTransform("topTrend") ;

        this.nextBtn1 = this.FindTransform("xiaju1Btn").getComponent((cc.Button));
        this.nextBtn2 = this.FindTransform("xiaju2Btn").getComponent((cc.Button));

     
        this.nextDayan1 =  cc.find("DaYanZaiLuIcon", this.nextBtn1.node ).getComponent((cc.Toggle)) ;
        this.nextXiaoQiang1 = cc.find("XiaoQiangLuIcon", this.nextBtn1.node).getComponent((cc.Toggle)) ;
        this.nextXiaoLu1 = cc.find("XiaoLuIcon", this.nextBtn1.node).getComponent((cc.Toggle)) ;


        this.nextDayan2 =  cc.find("DaYanZaiLuIcon", this.nextBtn2.node ).getComponent((cc.Toggle)) ;
        this.nextXiaoQiang2 = cc.find("XiaoQiangLuIcon", this.nextBtn2.node).getComponent((cc.Toggle)) ;
        this.nextXiaoLu2 = cc.find("XiaoLuIcon", this.nextBtn2.node).getComponent((cc.Toggle)) ;


        // 珠盘路内容
        this.ZhuPanColPanel =  this.FindTransform("ZhuPanColPanel") ;
        this.ZhuPanLuColItem =  this.FindTransform("ZhuPanLuColItem") ;
        this.ZhuPanStatePanel =  this.FindTransform("ZhuPanStatePanel") ;
        this.ZhuPanLuStateItem =  this.FindTransform("ZhuPanLuStateItem") ;


        this.daLuColPanel = this.FindTransform("DaLuColPanel")
        this.daLuColItem = this.FindTransform("DaLuItem")
        
        this.xiaoLuColItem = this.FindTransform("XiaoLuItem");
        this.xiaoQiangColItem = this.FindTransform("XiaoQiangLuItem");
        this.xiaoLuColPanel = this.FindTransform("XiaoLuColPanel");
        this.xiaoQiangColPanel = this.FindTransform("XiaoQiangLuColPanel");

        this.daYanZaiColPanel = this.FindTransform("daYanZaiColPanel");
        this.daYanZaiColItem = this.FindTransform("daYanZaiColItem");


        this.nextBlackDaYanZaiToggle =NodeUtil.SearchToggle (this.nextBtn1.node, this.NEXT_DAYANZAI_TOGGLE_STR);
        this.nextBlackXiaoLuToggle = NodeUtil.SearchToggle(this.nextBtn1.node,this. NEXT_XIAOLU_TOGGLE_STR);
        this.nextBlackXiaoQiangToggle = NodeUtil.SearchToggle(this.nextBtn1.node, this.NEXT_XIAOQIANG_TOGGLE_STR);

        this.nextRedDaYanZaiToggle = NodeUtil.SearchToggle(this.nextBtn2.node, this.NEXT_DAYANZAI_TOGGLE_STR);
        this.nextRedXiaoLuToggle = NodeUtil.SearchToggle(this.nextBtn2.node, this.NEXT_XIAOLU_TOGGLE_STR);
        this.nextRedXiaoQiangToggle = NodeUtil.SearchToggle(this.nextBtn2.node, this.NEXT_XIAOQIANG_TOGGLE_STR);
        this.InitRecordViewData();
        // //togglist 数组都是从1开始
        this.SanXiaoLuCommonInit(this.daYanZaiToggleList,this.daYanZaiColItemList,this.daYanZaiColItem,this.daYanZaiColPanel);
        this.SanXiaoLuCommonInit(this.xiaoLuToggleList,this.xiaoLuColItemList,this.xiaoLuColItem,this.xiaoLuColPanel);
        this.SanXiaoLuCommonInit(this.xiaoQiangToggleList,this.xiaoQiangColItemList,this.xiaoQiangColItem,this.xiaoQiangColPanel);
    }


    ///初始化记录信息//
    public InitRecordViewData()
    { 
        this.leftWinRateNum.string  = "50%";
        this.rightWinRateNum.string = "50%";
        this.winRateSlider.progress = 0.5;

        for (let index = 1; index <= this.MAX_ZHUPAN_COLUMN_COUNT; index++) {
            let colItem = Util.GetOrCreateItem(this.ZhuPanColPanel,index-1); 
            this.zhuPanColItemList.push(colItem);
        }
        this.ZhuPanStatePanel.setSiblingIndex( this.ZhuPanStatePanel.childrenCount-1);
        for (let index = 0; index < this.MAX_DALU_COLUMN_COUNT; index++) {
            let colItem = Util.GetOrCreateItem(this.daLuColPanel,index);
            let arr = [];

            for (let j = 1; j <= this.MAX_RECORD_ROW_COUNT; j++) {
                let daluItem = colItem.children[j];
                daluItem.name = index+"#dalu#"+j;
                arr.push(daluItem);
            }
            colItem.active = true;
            this.daLuToggleList.push(arr);
        }
    }

    //初始化珠盘路
    public InitView(dataList:Array<any>)
    {  
        if(dataList== null || dataList.length == 0)
        {
            this.ClearAllData();
            return;
        }
        this.REAL_DALU_COL_INDEX = 0;
        this.REAL_DAYANZAI_COL_INDEX = 0;
        this.REAL_XIAOLU_COL_INDEX = 0;
        this.REAL_XIAOQIANG_COL_INDEX = 0;

        this.CloseNextItem();
        this.OpenNextButtonInteractable(false);
        for (let index = 0; index <  this.ZhuPanStatePanel.childrenCount; index++) {
            const element =  this.ZhuPanStatePanel.children[index];
            element.active = false;
        }
        //this.victoryList = dataList;
        this.HideAllArray(this.zhuPanItemList);
        this.zhupanLastItem = null;
 
        for (let index = 0; index < dataList.length; index++) {
            const element = dataList[index];
            let item = this.zhuPanItemList[index];
            if(item == null)
            {
                item = this.ZhuPanStatePanel.children[index];
                this.zhuPanItemList.push(item);
            }
      
            item.active = true;
            let winStatus = dataList[index]   ;
            for (let k = 0; k < 3; k++) {
                item.children[k].active = false;
            }

            switch(winStatus)
            {
                case 1:
                    item.children[1].active = true;
                break;
                case 2:
                    item.children[0].active = true;
                break;
                case 3:
                    item.children[2].active = true;
                break;
            }

            this.zhupanLastItem  = item;
        }

        this.daluLastItem  = this.InitDalu(dataList);
        this.daYanZaiStateDataList = [];
        this.xiaoLuStateDataList = [];
        this.xiaoQiangStateDataList = [];

        this.dayanzaiLastItem = this.InitSanXiaoLu(SANXIAOLU_TYPE.DA_YAN_ZAI, this.daYanZaiStateDataList, this.daYanZaiToggleList);
        this.xiaoluLastItem = this.InitSanXiaoLu(SANXIAOLU_TYPE.XIAO_LU, this.xiaoLuStateDataList, this.xiaoLuToggleList);
        this.xiaoqiangLastItem = this.InitSanXiaoLu( SANXIAOLU_TYPE.XIAO_QIANG ,this.xiaoQiangStateDataList, this.xiaoQiangToggleList);

        this.ChangeNextButtonImage();
        Util.PerformWithDelay( this.isFirstTimeComming ?0.85:0.05,()=>{
            if(this.tweenerArray[0]!=null || this.isButtonDoingWork)//没有动画在播
            {
                return;
            }
            if(this.zhupanLastItem!=null)
            {
                this.OpenAnimator(this.zhupanLastItem,true,0);
            }
            if(this.daluLastItem!=null)
            {
                this.OpenAnimator(this.daluLastItem,true,1);
            } 
            if(this.dayanzaiLastItem!=null)
            {
                this.OpenAnimator(this.dayanzaiLastItem.node,true,2);
            }
            if(this.xiaoluLastItem!=null)
            {
                this.OpenAnimator(this.xiaoluLastItem.node,true,3);
            }
            if(this.xiaoqiangLastItem!=null)
            {
                this.OpenAnimator(this.xiaoqiangLastItem.node,true,4);
            }
        })
        this.OpenNextButtonInteractable(true);
        this.isButtonDoingWork = false;
        this.isFirstTimeComming = false;
    }

    public PrintV(luType:SANXIAOLU_TYPE)
    {
        switch(luType)
        {
            case SANXIAOLU_TYPE.DA_YAN_ZAI:
            return "大眼仔路";
            break;
            case SANXIAOLU_TYPE.XIAO_LU:
            return "小路";
            break;
            case SANXIAOLU_TYPE.XIAO_QIANG:
            return "小强路";
            break;
        }
    }

    //大路item状态
    public OpenDaLuItemState(item:cc.Node,state:number)
    {
        NodeUtil.SearchChild(item,"BackGround").active = state == WinStatus.BlackWinStatus;
        NodeUtil.SearchChild(item,"Checkmark").active = state == WinStatus.RedWinStatus;
        NodeUtil.SearchChild(item,"PeaceNum").active = false;
        item.active = true;
        return item;
    }

    public InitDalu(dataList:Array<any>)
    {
        for (let index = 0; index < this.daLuToggleList.length; index++) {
            let daluArray =this.daLuToggleList[index];
            for (let kk = 0; kk < daluArray.length; kk++) {
                const element = daluArray[kk];
                if(element!=null)
                {
                    element.active = false;
                    cc.find("PeaceNum",element).getComponent((cc.Label)).string = "0";
                }
            }
        }

        this.daLuStateData = [];
        let previousWinStatus = WinStatus.BlackWinStatus;
        let colIndex = 0;
        let rowIndex = 0;
        let specialColIndex = 0;
        let hasTurned = false;
        let lastItem:any;
        let dataColIndex = 0 ;

        for (let index = 0; index < dataList.length; index++) {
            const element = dataList[index];
            let curWinStatus = element;
         
            if(index == 0)
            {
                previousWinStatus = curWinStatus;
                if(curWinStatus != WinStatus.EqualWinStatus)
                {
                    //如果第一句是和局,大路直接跳过不显示 
                    let item = this.daLuToggleList[colIndex][rowIndex];
                    lastItem = this.OpenDaLuItemState(item,curWinStatus);
                    this.REAL_DALU_COL_INDEX = colIndex;
                    this.daLuStateData[dataColIndex ] = [];
                    this.daLuStateData[dataColIndex ].push(curWinStatus);
                }
            }
            else
            {
                if(previousWinStatus == curWinStatus)
                {
                    if(curWinStatus == WinStatus.EqualWinStatus)
                    {
                        if( this.daLuStateData.length >0)
                        {
                            let lable:cc.Label = cc.find("PeaceNum",lastItem).getComponent((cc.Label));
                            lable.string = (new Number(lable.string).valueOf()) +1+"";    
                            lable.node.active = true;   
                        }                  
                    }
                    else
                    {
                        let item = null;
                        if(hasTurned)
                        {
                            item = this.daLuToggleList[specialColIndex][rowIndex];
                            if(rowIndex == 0)
                            {
                                this.REAL_DALU_COL_INDEX = specialColIndex;
                            }
                            specialColIndex++;
                        }
                        else
                        {
                            rowIndex++;
                            if(rowIndex > 5)//0-5是总共六个
                            {
                                hasTurned = true;
                                specialColIndex = colIndex + 1;
                                rowIndex = 5;
                                item = this.daLuToggleList[specialColIndex][rowIndex];
                            }
                            else
                            {
                                item = this.daLuToggleList[colIndex][rowIndex];
                                if(item.active)
                                {
                                    hasTurned = true;
                                    specialColIndex = colIndex +1;
                                    rowIndex--;
                                    item = this.daLuToggleList[specialColIndex][rowIndex];

                                }
                                else
                                {
                                    this.REAL_DALU_COL_INDEX = colIndex;
                                    item = this.daLuToggleList[colIndex][rowIndex];
                                }

                            }
                        }
                        lastItem = this.OpenDaLuItemState(item, curWinStatus)
                        this.daLuStateData[dataColIndex].push(curWinStatus);
                    }
                }
                else
                {
                    if(curWinStatus == WinStatus.EqualWinStatus)
                    { 
                        let lable:cc.Label = cc.find("PeaceNum",lastItem).getComponent((cc.Label));
                        lable.string = (new Number(lable.string).valueOf()) +1+"";    
                        lable.node.active = true; 
                    }
                    else
                    {
                        previousWinStatus = curWinStatus;
                        hasTurned = false;
                        rowIndex = 0;
                        if(this.daLuStateData.length >0)
                        {
                            dataColIndex = dataColIndex + 1;
                            this.REAL_DALU_COL_INDEX++;
                        }
                        this.daLuStateData[dataColIndex] = [];
                        if(this.REAL_DALU_COL_INDEX<0)
                        {
                            this.REAL_DALU_COL_INDEX = 0;
                        }
                        colIndex = this.REAL_DALU_COL_INDEX;

                        let item = this.daLuToggleList[colIndex][rowIndex]
                        lastItem = this.OpenDaLuItemState(item, curWinStatus)
                        this.daLuStateData[dataColIndex].push(curWinStatus);
                    }
                }
            }
        }
        return lastItem;
    }


    //设置公共的小路
    public SanXiaoLuCommonInit(toggleArray:Array<Array<cc.Toggle>>,colItemList:Array<cc.Node>,colItem:cc.Node,colPanel:cc.Node)
    {
        for (let index = 1; index  <= this.MAX_SANXIAOLU_COLUMN_COUNT; index++) {
            let colItem = Util.GetOrCreateItem(colPanel,index-1);
            let rotCol1  = cc.find("RateCol1",colItem);
            let toggleList:Array<cc.Toggle> = [];
            let maxIndex  =(index - 1)*2+1;
            for (let k = 0; k < this.MAX_RECORD_ROW_COUNT; k++) {
                let item = rotCol1.children[k];
                item.name = maxIndex+"##"+(k+1);
                toggleList.push(item.getComponent((cc.Toggle)));
            }
            toggleArray[maxIndex] = toggleList;
            let toggleList1 :Array<cc.Toggle>= [];
            let rotCol2  = cc.find("RateCol2",colItem);
            maxIndex  =(index - 1)*2+2;
            for (let k = 0; k < this.MAX_RECORD_ROW_COUNT; k++) {
                let item = rotCol2.children[k];
                item.name = maxIndex+"##"+(k+1);
                toggleList1.push(item.getComponent((cc.Toggle)));
            }

            toggleArray[maxIndex] = toggleList1;
            colItem.active = true;
            colItem.setSiblingIndex(colItem.parent.childrenCount-1);
            colItemList.push(colItem);
        }
    }

  

    //初始化三小路
    public InitSanXiaoLu(luType:SANXIAOLU_TYPE,stateDataList:any,toggleArray:Array<Array<cc.Toggle>>,)
    {
        //stateDataList 进来的时候都是[]//
        let str = this.PrintV(luType);
        for (let index = 0; index < toggleArray.length; index++) {
            const element = toggleArray[index];
            if(element == null)
                continue;
            for (let k = 0; k < element.length; k++) {
                const toggle = element[k];
                toggle.node.active = false;
            }
        }
        //1.从大路第二列第二行开始看，如果第二列第二行没有数据，就从第三列第一行开始看
        //2.如果从第二列第二行开始看， 就看前面一列第二行有没有对应的点， 如果有，就记录为红点，有规律；如果没有，就是蓝点无规律
        let offset = luType;
        let startColIndex = luType; //当前路需要开始的列数//
        let startRowIndex = 1;


        let arrDaluTemp =  this.daLuStateData;
        // for (let index = 0; index < this.daLuStateData.length; index++) {
        //     const element = this.daLuStateData[index];
        //     arrDaluTemp[index] = element;
        // }
        ////cc.error(arrDaluTemp);
        if(this.daLuStateData.length <= startColIndex)//起码就要luType列 才有小路的展示//
        { 
            //cc.error(this.daLuStateData.length +"####为什么返回了？？？？####"+startColIndex);
            return;
        }


        let previous = false;
        let curState = false;
        let dataColIndex = 1;

        let saveFirstColData = ()=>{
            stateDataList[dataColIndex] = [];
            let curList = arrDaluTemp[startColIndex];
            let compareList = arrDaluTemp[startColIndex - offset];//第一列//

            if (startRowIndex == 0 )// 是从第lutype+1 的第0行开始的数据  第三行了 startColIndex是2 // 
            {
                curState = arrDaluTemp[ startColIndex  - offset -1].length == arrDaluTemp[startColIndex - 1].length;//如果数量一样多 则为true 红色
                previous = curState;
                stateDataList[dataColIndex].push(curState);
                startRowIndex++;
                ////cc.error("startRowIndex--------------------"+startRowIndex);
            }
            else//是从第lutype 的第0行开始的数据//
            {
                let compareItem = compareList[startRowIndex];
                curState =    compareItem != null;//如果有数据
                previous = curState
                stateDataList[dataColIndex].push(curState);
                startRowIndex++;
                ////cc.error(dataColIndex + "startRowIndex--------------------" + startRowIndex);
                ////cc.error("@@@@@@@@@"+stateDataList[dataColIndex].length);
            }
            ////cc.error(startRowIndex+"外边参数"+curList.length) ;   

            //第二三行（或以上），先看前面一列有没有对应的点，如果有标红，如果没有， 第 三 行（或以上）再看当前列和上一列的数量差，如果大于等于2也标红。
            ////cc.error(str+"参数"+startRowIndex+"$$$$$$$$$$"+ curList.length); 
            for (let index = startRowIndex; index < curList.length; index++) {
              
                let compareItem = compareList[index];
                if (compareItem) 
                {
                    curState = true; //默认标红
                    if (previous != curState) //如果与前一列的同行
                    {
                        dataColIndex = dataColIndex + 1; 
                        stateDataList[dataColIndex] = []; //没有规律-》换行 不可能两个红的并行挨着//
                        previous = curState; 
                    }
                    stateDataList[dataColIndex].push(curState);
                }     
                else
                {
                    curState = index - compareList.length >= 1;//如果看到第三行，就看前面一行有没有对应的点，如果没有，并且空格大于等于2个以上，依然还是记红
                    if (previous != curState)  
                    {
                        dataColIndex = dataColIndex + 1;
                        stateDataList[dataColIndex] = [];
                        previous = curState;
                    }
                    stateDataList[dataColIndex].push(curState);
                }
            }
            startColIndex++;
        };
 
        //--- type 1: 大眼仔路，2: 小路，3: 小强路
        let daluData = arrDaluTemp[startColIndex][startRowIndex];//从大路第startColIndex列第2行开始看
        if (daluData == null)
        { 
            startColIndex = startColIndex + 1;//1.从大路第startColIndex列第2行开始看，如果没有数据，就从第startColIndex+1列第一行开始看(列数+1)
            startRowIndex = 0;
    
            if (arrDaluTemp[startColIndex] != null ) 
            {   
                daluData = arrDaluTemp[startColIndex][startRowIndex];
                if (daluData == null)  
                { 
                    return;//startColIndex+1列第一行 [[依然没有 返回]]
                }
                else
                    saveFirstColData();//将真实列数和行数开始位置给这个接口
            }
            else
            {
                ////cc.error("|||没有 返回|||"+startColIndex);
                return;
            }
        } 
        else
        {
            saveFirstColData();//将真实列数和行数开始位置给这个接口
        }
        // //cc.error(curState+"@@@@@@@@"+previous);
        // //cc.error(str+"####################%%%%%%%%############"+startColIndex);
        // //cc.error(stateDataList);

        let Len = arrDaluTemp.length;

        for (let index = startColIndex; index < Len; index++) {
            const curList = arrDaluTemp[index];
            let compareList = arrDaluTemp[index - offset];
            for (let rowIndex = 0; rowIndex < curList.length; rowIndex++) {
                if(rowIndex==0)
                {
                    curState =  arrDaluTemp[index  - offset -1 ].length == arrDaluTemp[index - 1].length;
                    if(previous != curState )
                    {
                        dataColIndex = dataColIndex + 1;
                        stateDataList[dataColIndex] = [];
                        previous = curState;
                    }
                    stateDataList[dataColIndex].push(curState);
                }
                else
                {
                    let compareItem = compareList[rowIndex];
                    if(compareItem!=null)
                    {
                        curState = true;
                        if (previous != curState) 
                        {
                            dataColIndex = dataColIndex + 1;
                            stateDataList[dataColIndex] = [];
                            previous = curState;
                        }
                        stateDataList[dataColIndex].push(curState);
                    }
                    else
                    {
                        curState = false;
                        if (rowIndex -  compareList.length >= 1)
                            curState = true;
                        if (previous != curState )
                        {
                            dataColIndex = dataColIndex + 1;
                            stateDataList[dataColIndex] = [];
                            previous = curState;
                        }
                        stateDataList[dataColIndex].push(curState);
                    }
                }
            }
        }

        // //cc.error(str+"####################初始化珠盘路############3");
        // //cc.error(stateDataList);
        
        return this.InitSanXiaoLuUIItem( stateDataList, toggleArray, luType);
    }   

    //大厅模块
    public InitSanXiaoLuUIItem(stateDataList:any,toggleList:Array<Array<cc.Toggle>>,type:any)
    {
        let realColIndex = 0;
        let specialColIndex = 1;
        let lastItem;
 

        for (let index = 1; index < toggleList.length; index++) {
            const element = toggleList[index];
            for (let kk = 0; kk < element.length; kk++) {
                const e = element[kk];
                e.node.active = false;
            }
        }

        for (let index = 1; index < stateDataList.length; index++) {
            const data = stateDataList[index];
            let realRowIndex = 0;

            realColIndex++;
            if(toggleList[realColIndex] == null)
            {
                this.AddNewSanXiaoLuColItemCommon( type, toggleList , index)
            }
            let turnIndex = 6;
 
            for (let ll = 0; ll < toggleList[realColIndex].length; ll++) {
                const element = toggleList[realColIndex][ll];
                if(element.node.active)
                {
                    turnIndex = ll;
                    break;
                }
            }
            specialColIndex = index;
            //let indexK = 0;

            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                let item:cc.Toggle = null;
                if (index >= turnIndex) 
                {
                    //--- 说明数据长度已经超过了可以显示的长度，需要拐弯了，拐弯的行号是 turnIndex -1
                    specialColIndex = specialColIndex + 1;
                    realRowIndex = turnIndex - 1;
                    item = toggleList[specialColIndex][realRowIndex];
                    if (realRowIndex == 0)  
                        realColIndex = realColIndex + 1;  
                }
                else
                {
                    item = toggleList[realColIndex][index];
                }
                item.node.active = true;
                item.isChecked = element;   
                lastItem = item;
                //indexK++;
            }

            // data.forEach(element => {
               
            // });
        }
 
        if(type == SANXIAOLU_TYPE.DA_YAN_ZAI)
        {
            this.REAL_DAYANZAI_COL_INDEX = realColIndex;
        }
        else if( type == SANXIAOLU_TYPE.XIAO_LU)
        {
            this.REAL_XIAOLU_COL_INDEX = realColIndex;
        }
        else
        {
            this.REAL_XIAOQIANG_COL_INDEX = realColIndex;
        }
        return lastItem;
    }

    ///
    public CloseNextItem()
    {
        if(this.tweenerArray == null)
            return;
       

        for(let eventid in this.tweenerArray){
            const element =  this.tweenerArray[eventid];
            if(element!=null)
            {
                element.Finish(); 
            }
        }

        for(let eventid in this.nextItemsNodeArray)
        {
            let message = this.nextItemsNodeArray[eventid];

            if( message!= null)
            {
                message.scale = 1;
                if(this.isButtonDoingWork)
                message.active = false;
            }
        }

        ////cc.error(this.nextItemsNodeArray);
        this.nextItemsNodeArray = {};
        this.tweenerArray = {};
    }

    ///
    public OpenNextButtonInteractable(ok:boolean)
    {
        this.nextBtn1.interactable = ok;
        this.nextBtn2.interactable = ok;
    }
    private isButtonDoingWork = false;

    ///
    private ShowNextItem(i1:boolean,i2:boolean,i3:boolean)
    {  
        for(let eventid  in this.nextItemsNodeArray)
        {
            let message = this.nextItemsNodeArray[eventid];
            if( message!= null)
            {
                switch (eventid)
                { 
                    case "2":
                        message.getComponent(cc.Toggle).isChecked = i1;
                    case "3":
                        message.getComponent(cc.Toggle).isChecked = i2;
                    case "4":
                        message.getComponent(cc.Toggle).isChecked = i3;
                    break;
                }
                message.active = true;
                this.OpenAnimator(message,true,new Number(eventid).valueOf());
            }
        }

    }

    //打开节点动画 程序自己来做一个//
    private OpenAnimator(item:cc.Node,open:boolean = true,index:number = -1)
    { 
        if(index <0)
            return;
        if(!open && this.tweenerArray[index]!=null)
        {
            item.scale = 1;
            this.tweenerArray[index].Finish();
            return;
        }
        if(!open)
        {
            return;
        }

        let scaleTween = XTween.DoScale(item,cc.Vec2.ONE,new cc.Vec2(0.1,0.1),0.3,3,true);
        scaleTween.SetFinishCallback(()=>{
            if(this.isButtonDoingWork)
            {
                this.CloseNextItem();
                this.OpenNextButtonInteractable(true);
                this.isButtonDoingWork = false;
            }
        }
        );
        scaleTween.Play();
        this.tweenerArray[index] = scaleTween;
        this.nextItemsNodeArray[index] = item;
        return scaleTween;
    }


    ///三小路添加一组新的数据
    public AddNewSanXiaoLuColItemCommon(luType:SANXIAOLU_TYPE,toggleArray:Array<Array<cc.Toggle>>,index:number = 0)
    {
        let colPanel = null;
        let colList = null;

        switch(luType)
        {
            case SANXIAOLU_TYPE.DA_YAN_ZAI:
                colPanel = this.daYanZaiColPanel;
                colList = this.daYanZaiColItemList;
            break;
            case SANXIAOLU_TYPE.XIAO_LU:
                colPanel = this.xiaoLuColPanel;
                colList = this.xiaoLuColItemList;
            break;
            case SANXIAOLU_TYPE.XIAO_QIANG:
                colPanel = this.xiaoQiangColPanel;
                colList = this.xiaoQiangColItemList;
            break;
        }
        let newItem = Util.GetOrCreateItem(colPanel,index);
       
        for (let index = 1; index <= 2; index++) {
            const RateCol = cc.find("RateCol"+index,newItem);
            let list:Array<cc.Toggle> = [];
            for (let k = 0; k < this.MAX_RECORD_ROW_COUNT; k++) {
                const element = RateCol.children[k].getComponent(cc.Toggle);
                list.push(element);
            }
            toggleArray[toggleArray.length] = (list);
        }
    }
 
    //设置滑动条值。
    public SetRateSlideValue(leftVal:number,rightVal:number)
    {
        ////cc.error(leftVal+"#####SetRateSlideValue#####"+rightVal);
        this.leftWinRateNum.string  =leftVal  + "%";
        this.rightWinRateNum.string =rightVal + "%";
        
        let tweener = XTween.DoValue(this.winRateSlider.node,(val)=>{
            this.leftRateNode.width = 960 * (val+0.125);
            this.winRateSlider.progress  = val;
        },this.winRateSlider.progress,leftVal == rightVal?0.5:leftVal/100,0.6,1,false);

        tweener.Play();
    }

    
    
    //龙虎vs黑红
    public NextRedWinAction()
    {
        this.CloseNextItem();
        this.nextItemsNodeArray = this.GetNextStateItem(WinStatus.RedWinStatus);
        this.ShowNextItem(this.nextRedDaYanZaiToggle.isChecked, this.nextRedXiaoLuToggle.isChecked,this.nextRedXiaoQiangToggle.isChecked);
        this.OpenNextButtonInteractable(false);

        this.isButtonDoingWork = true;
    }

    //
    public NextBlackWinAction()
    {
        this.CloseNextItem();
        this.nextItemsNodeArray = this.GetNextStateItem(WinStatus.BlackWinStatus);
        this.ShowNextItem(this.nextBlackDaYanZaiToggle.isChecked, this.nextBlackXiaoLuToggle.isChecked, this.nextBlackXiaoQiangToggle.isChecked);
        this.OpenNextButtonInteractable(false);
        this.isButtonDoingWork = true;
    }

 

 


    public GetNextStateItem(state)
    { 
        let returnArray: { [key: number]: cc.Node } = {};
        let zhupanluItemCount = this.zhuPanItemList.length;
        let zhupanLast:cc.Node = this.zhuPanItemList[zhupanluItemCount-1];
        if(zhupanLast == null || zhupanLast.active )
        {
            zhupanLast = Util.GetOrCreateItem(this.ZhuPanStatePanel,zhupanluItemCount);
            this.zhuPanItemList.push(zhupanLast);
        }

        let openIndex = 0;
        if( state == WinStatus.BlackWinStatus )
            openIndex = 0;
        else if (state == WinStatus.RedWinStatus )
            openIndex = 1;
        else
            openIndex = 2;

        for (let index = 1; index <= 3; index++) {
            if (index - 1 == openIndex)  
            {
                zhupanLast.children[index - 1].active = true;
            }
            else
            {
                zhupanLast.children[index - 1].active = false;
            }
        }    
        returnArray[ 0 ] = zhupanLast;

        let getXiaoLuItem = (stateDataList, toggleList, open, realColIndex)=>{
            let lastDataList = [];
            let lastColCount = 0
            let lastData = null;

            if (stateDataList.length > 0 ){
                lastDataList = stateDataList[stateDataList.length -1];
                lastColCount =  lastDataList.length;
                lastData = lastDataList[lastColCount-1];
            }
            //cc.error(toggleList);
            //cc.error(lastColCount+"$$$$$$$$$$$$getXiaoLuItem");
            //cc.error(lastData);

            let item;
            let result;
            if (open == lastData ) 
            {
                if (lastColCount + 1 > 5 ) {
                    //cc.error((realColIndex + 1 )+"###########!");
                    item = toggleList[realColIndex + 1][5];
                }
                else{

                    //cc.error((lastColCount + 1 )+"###########!!!");
                    item = toggleList[realColIndex][lastColCount] ;
                }
            }
            else
            {
                //cc.error((realColIndex + 1 )+"###########!!!!!!");
                item = toggleList[realColIndex + 1][0]
            }

            if( typeof(open) == "number")  
            { 
                //cc.error("helloworld");
                //cc.error(item);
                this.OpenDaLuItemState(item,open);
                result = item;
            }
            else
                result = item;
            return result;
        };

        if(state != WinStatus.EqualWinStatus)
        {
            let dayanzaiOpen = false;
            let xiaoluOpen = false;
            let xiaoqiangOpen = false;
    
            let dayanzaiActive = false;
            let xiaoluActive = false;
            let xiaoqiangActive = false;
            if(state == WinStatus.RedWinStatus)
            {
                dayanzaiOpen = this.nextRedDaYanZaiToggle.isChecked;
                xiaoluOpen = this.nextRedXiaoLuToggle.isChecked;
                xiaoqiangOpen = this.nextRedXiaoQiangToggle.isChecked;
                dayanzaiActive = this.nextRedDaYanZaiToggle.node.active;
                xiaoluActive = this.nextRedXiaoLuToggle.node.active;
                xiaoqiangActive = this.nextRedXiaoQiangToggle.node.active;
            }
            else
            {
                dayanzaiOpen = this.nextBlackDaYanZaiToggle.isChecked;
                xiaoluOpen = this.nextBlackXiaoLuToggle.isChecked;
                xiaoqiangOpen = this.nextBlackXiaoQiangToggle.isChecked;
                dayanzaiActive = this.nextBlackDaYanZaiToggle.node.active;
                xiaoluActive = this.nextBlackXiaoLuToggle.node.active;
                xiaoqiangActive = this.nextBlackXiaoQiangToggle.node.active;
            }
            let daluItem = null;
            if (this.daLuStateData)
            {
                daluItem = getXiaoLuItem(this.daLuStateData, this.daLuToggleList, state, this.REAL_DALU_COL_INDEX);
            }
            let dayanzaiItem = null;
            if (this.daYanZaiStateDataList && dayanzaiActive)  
            {
                // //cc.error(this.REAL_DAYANZAI_COL_INDEX+"$$$$大眼仔$$$$"+dayanzaiOpen);
                // //cc.error(this.daYanZaiStateDataList);
                dayanzaiItem = getXiaoLuItem(this.daYanZaiStateDataList, this.daYanZaiToggleList, dayanzaiOpen, this.REAL_DAYANZAI_COL_INDEX);
            }
            let xiaoluItem = null;
            if (this.xiaoLuStateDataList && xiaoluActive )
                xiaoluItem = getXiaoLuItem(this.xiaoLuStateDataList, this.xiaoLuToggleList, xiaoluOpen, this.REAL_XIAOLU_COL_INDEX);
   
            let xiaoqiangItem = null;
            if (this.xiaoQiangStateDataList && xiaoqiangActive)  
                xiaoqiangItem = getXiaoLuItem(this.xiaoQiangStateDataList, this.xiaoQiangToggleList, xiaoqiangOpen, this.REAL_XIAOQIANG_COL_INDEX);
       
            returnArray[ 1 ]  = (daluItem);

            if(dayanzaiItem!=null)
                dayanzaiItem = dayanzaiItem.node;
            if(xiaoluItem!=null)
                xiaoluItem = xiaoluItem.node;
            if(xiaoqiangItem!=null)
                xiaoqiangItem = xiaoqiangItem.node;
          
            returnArray[ 2 ] = dayanzaiItem;
            returnArray[ 3 ] = xiaoluItem;
            returnArray[ 4 ] = xiaoqiangItem;
        }
        
        return returnArray;
    }


    public MMPrint(text:any )
    {
        //cc.error(text);
    }
     
 
    private ChangeNextButtonImage()
    { 
        this.lastDaLuColCount = this.daLuStateData.length;
 
        if(this.lastDaLuColCount == 0)
        {
            this.nextRedDaYanZaiToggle.node.active = (false)
            this.nextBlackDaYanZaiToggle.node.active = (false)
            this.nextRedXiaoLuToggle.node.active = (false)
            this.nextBlackXiaoLuToggle.node.active = (false)
            this.nextRedXiaoQiangToggle.node.active = (false)
            this.nextBlackXiaoQiangToggle.node.active = (false)
            return;
        }

        let lastDaLuColList = this.daLuStateData[this.lastDaLuColCount-1];
        if(lastDaLuColList == null)
            return;


        let lastDaLuRowCount = lastDaLuColList.length-1;
        let lastDaLuRowItem = lastDaLuColList[lastDaLuRowCount];
     
        let newRowIndex = 1

        let  hasData1= false; 
        let  hasData2= false;
        let  hasData3 = false;  


        if(this.lastDaLuColCount >=2)
        {
            hasData1 = true;
        }
        if(this.lastDaLuColCount >=3)
        {
            hasData2 = true;
        }
        if(this.lastDaLuColCount >=4)
        {
            hasData3 = true;
        }

        this.nextRedDaYanZaiToggle.node.active =(hasData1);
        this.nextBlackDaYanZaiToggle.node.active =(hasData1);
        this.nextRedXiaoLuToggle.node.active =(hasData2);
        this.nextBlackXiaoLuToggle.node.active =(hasData2);
        this.nextRedXiaoQiangToggle.node.active =(hasData3);
        this.nextBlackXiaoQiangToggle.node.active =(hasData3);
        this.MMPrint(this.daLuStateData)
        this.MMPrint("$$$$$"+hasData1+"$$$$$"+hasData2+"$$$$$"+hasData3);
      

        let SameColCompare = (type,rowIndex)=>{
            let state = false
            let limitCol = type + 1
            let offset = type  
            let compareList = this.daLuStateData[this.lastDaLuColCount - offset -1]//9
            let compareItem = compareList[rowIndex]
            this.MMPrint(this.lastDaLuColCount+"--------SameColCompare111####--------"+offset)
            this.MMPrint(limitCol+"--------SameColCompare2222####--------");
            if (this.lastDaLuColCount >= limitCol){ 
                    if (compareItem!=null)  
                    {
                        state = true;
                    }
                    else
                    {
                        state = false;
                        this.MMPrint(compareList.length+"--------SameColCompare333####--------"+rowIndex)
                        if (rowIndex - compareList.length >= 1)  
                            state = true   ;
                    }
                }
            else
            {
                state = false;
            }

            return state;
        };

        let  DiffColCompare = (type)=>{
            let state = false
            let limitCol = type + 1
            let offset = type

            this.MMPrint(limitCol+"--------DiffColCompare--------"+this.lastDaLuColCount)
            if (this.lastDaLuColCount >= limitCol )
            {
                state =(this.daLuStateData[this.lastDaLuColCount-1].length == this.daLuStateData[this.lastDaLuColCount - offset  -1].length )
            }
            return state

        }

        let i1 = false;
        let i2 = false;
        let i3 = false;

        let  GetStateResult = (state)=>{

            if (lastDaLuRowItem == state)  
            {
                this.MMPrint(lastDaLuRowItem+"=="+state);
                newRowIndex = lastDaLuRowCount + 1;
                this.MMPrint(lastDaLuRowItem+"--------GetStateResultSSSS--------"+newRowIndex);
                this.MMPrint("--------GetStateResultSSSS--------"+state);

                if (hasData1 )  
                    i1 = SameColCompare( SANXIAOLU_TYPE.DA_YAN_ZAI, newRowIndex);
                if (hasData2 )  
                    i2 = SameColCompare( SANXIAOLU_TYPE.XIAO_LU, newRowIndex);
                if (hasData3 )  
                    i3 = SameColCompare( SANXIAOLU_TYPE.XIAO_QIANG, newRowIndex);
            }
            else
            {
                this.MMPrint(lastDaLuRowItem+"!="+state);
                newRowIndex = 1;
                this.MMPrint(lastDaLuRowItem+"--------GetStateResultDDDD--------"+newRowIndex);
                this.MMPrint("--------GetStateResultDDDD--------"+state);
                if (hasData1 )  
                    i1 = DiffColCompare( SANXIAOLU_TYPE.DA_YAN_ZAI);
                if (hasData2 )  
                    i2 = DiffColCompare( SANXIAOLU_TYPE.XIAO_LU);
                if (hasData3 )  
                    i3 = DiffColCompare( SANXIAOLU_TYPE.XIAO_QIANG);
            }
        };

        // 下局红
        this.MMPrint("下局红");
        let tempState = WinStatus.RedWinStatus;
        GetStateResult(tempState);
        this.nextRedDaYanZaiToggle.isChecked = i1;
        this.nextRedXiaoLuToggle.isChecked = i2;
        this.nextRedXiaoQiangToggle.isChecked = i3;
        this.MMPrint("￥￥￥￥"+i1+"￥￥￥￥"+i2+"￥￥￥￥"+i3);

        // 下局黑
        this.MMPrint("下局黑");
        tempState = WinStatus.BlackWinStatus;
        GetStateResult(tempState);

        this.nextBlackDaYanZaiToggle.isChecked = i1;
        this.nextBlackXiaoLuToggle.isChecked = i2;
        this.nextBlackXiaoQiangToggle.isChecked = i3;
        this.MMPrint("￥￥￥￥"+i1+"￥￥￥￥"+i2+"￥￥￥￥"+i3);
    }


    ///显示20场结果//    
    public Show20GameResult(gameResult:Array<number>)
    {
        for (let index = 0; index < this.topTrend.childrenCount; index++) {
            const element = this.topTrend.children[index];
            element.active = false;
        }

        let id = 0;
        for (let index = (gameResult.length<20 ? gameResult.length-1 : 19 ) ; index >=  0; index--)
        {    
            const element = gameResult[index];
            let node = Util.GetOrCreateItem(this.topTrend,id);

            for (let i = 0; i <  node.children.length; i++) {
                node.children[i].active = element == i+1;
            } 
            id++;
        }
    }

    public HideAllArray(array:Array<cc.Node>)
    {
        // array.forEach(element => {
        //     element.active = false;
        // });

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            element.active = false;
        }

    }

    //
    public HideAllTogleArray(array:Array<Array<cc.Toggle>>)
    {
        // array.forEach(element => {
        //     element.forEach(elementx => {
        //         elementx.node.active = false;
        //     });
        // });

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            // element.active = false;
            if(element!=null)
            for (let ii = 0; ii  < element.length; ii ++) {
                const elementX = element[ii];
                elementX.node.active = false;
            }
        }
    }

    public HideAllNodeArray(array:Array<Array<cc.Node>>)
    { 
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            for (let ii  = 0; ii  < element.length; ii ++) {
                const elementX = element[ii ];
                elementX.active = false;
            }
        }
    }

    public ClearAllData()
    {
        this.HideAllArray(this.zhuPanItemList);
        this.HideAllNodeArray(this.daLuToggleList);
        this.HideAllTogleArray(this.daYanZaiToggleList);
        this.HideAllTogleArray(this.xiaoLuToggleList);
        this.HideAllTogleArray(this.xiaoQiangToggleList);

    }
    
    //设置场数//
    public  SetPlayCount(leftCount:number, rightCount:number, peaceCount:number, playCount:number)
    {
        
        
    }

    //显示牌类型list。
    public ShowHHCardTypeList(game:any)
    {

    }

    //显示牌类型list。
    public ShowLHRecordList(recordArray:Array<HistoryCardInfo>)
    {

    }

    //
    public OnHideView()
    {
        this.ClearAllData();
    }
}