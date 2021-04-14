import View from "../../MVCFramework/View";
import Extension from "../../Tools/Extension";
import Util from "../../Tools/Util";

export class ViewRoleInfoData {

    public head: string
    public headBox: string
    public worldPos: string
    public name: string
    public gold: string


    //设置对齐 设置值就表示勾选Widget上对应的top，bottom，left，right
    public top: number | null = null
    public bottom: number | null = null
    public left: number | null = null
    public right: number | null = null

}

export class ViewRoleNodeSlotData {
    public head: string;
    public headBox: string;
    public location: string;
    public name: string;
    /**
     * 玩家金币数量，这个值后期显示的时候会处理，所以传值时直接使用原始值，不要格式化
     */
    public gold: string;

    public slot: cc.Node;
    public slotParent: cc.Node;
}

export default class ViewRoleInfo extends View {

    private widget: cc.Widget
    private imgHeadIcon: cc.Sprite
    private imgHeadBox: cc.Sprite
    private txtUserName: cc.Label
    private txtTxtWorldPos: cc.Label
    private txtGoldNumText: cc.Label
    private btnClose: cc.Button


    public Construction(trans, datas: ViewRoleInfoData = null) {

        this.widget = Extension.SearchNode(trans, "AlignPanel").getComponent(cc.Widget)
        this.widget.isAlignTop

        this.imgHeadBox = Extension.SearchSprite(trans, "HeadBox")
        this.imgHeadIcon = Extension.SearchSprite(trans, "HeadIcon")

        this.txtUserName = Extension.SearchTxt(trans, "UserName")
        this.txtTxtWorldPos = Extension.SearchTxt(trans, "TxtWorldPos")
        this.txtGoldNumText = Extension.SearchTxt(trans, "GoldNumText")

        this.btnClose = Extension.SearchBtn(trans, "BtnClose")
        Util.SetClickAction(this.btnClose, () => {
            this.BtnClose(this)
        })

        if (datas != null) {
            this.Flush(datas)
        }

    }

    private BtnClose(outside: ViewRoleInfo) {
        outside.Hide()
    }


    private Flush(datas: ViewRoleInfoData) {
        if (datas.top != null) {
            this.widget.isAlignTop = true
            this.widget.top = datas.top
        } else {
            this.widget.isAlignTop = false
        }

        if (datas.bottom != null) {
            this.widget.isAlignBottom = true
            this.widget.bottom = datas.bottom
        } else {
            this.widget.isAlignBottom = false
        }

        if (datas.left != null) {
            this.widget.isAlignLeft = true
            this.widget.left = datas.left
        } else {
            this.widget.isAlignLeft = false
        }

        if (datas.right != null) {
            this.widget.isAlignRight = true
            this.widget.right = datas.right
        } else {
            this.widget.isAlignRight = false
        }

        this.widget.updateAlignment()

        this.txtGoldNumText.string = Util.formatGoldText(datas.gold, false);
        this.txtUserName.string = datas.name.toString()
        this.txtTxtWorldPos.string = datas.worldPos.toString()

        let headAtlas = "MainGame/Atlas/Head"
        Extension.DirGetAbSprite(this.imgHeadIcon, headAtlas, datas.head)
        Extension.DirGetAbSprite(this.imgHeadBox, headAtlas, datas.headBox)

    }

    public FlushDataBySlot(datas: ViewRoleNodeSlotData) {
        let nodeParent = datas.slotParent;
        let node = datas.slot;
        this.widget.isAlignRight = false;
        this.widget.isAlignTop = false;
        this.widget.isAlignRight = false;
        this.widget.isAlignBottom = false;

        let worldPos = nodeParent.convertToWorldSpaceAR(node.position);
        this.widget.node.position = this.node.children[0].convertToNodeSpaceAR(worldPos);

        this.txtGoldNumText.string = Util.formatGoldText(datas.gold, false);
        this.txtUserName.string = datas.name.toString();
        this.txtTxtWorldPos.string = datas.location.toString();

        let headAtlas = "MainGame/Atlas/Head";


        Extension.DirGetAbSprite(this.imgHeadIcon, headAtlas, datas.head);
        Extension.DirGetAbSprite(this.imgHeadBox, headAtlas, datas.headBox);
    }
}