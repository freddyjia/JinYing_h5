import { Cell } from "../../Components/ListView";
const {ccclass, property} = cc._decorator;

@ccclass
export default class CellPlayerRank extends Cell { 
    public xiazhu:cc.Label;
    public huosheng:cc.Label;
    public jinbi:cc.Label;
    public playerName:cc.Label;
    public headFrame:cc.Sprite;
    public head:cc.Sprite;
    public headmask:cc.Sprite;
    public playerTag:cc.Node;
    public playerTagRich:cc.Node;
    public Rank:cc.Label;
    public normalBack:cc.Node;
    

}