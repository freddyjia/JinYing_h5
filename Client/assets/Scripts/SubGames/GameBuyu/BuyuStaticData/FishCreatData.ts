export default class FishCreatData {
    public readonly fishKey: string
    public readonly groupsId: number
    public readonly groupId: number
    public readonly fishIdInGroup: number
    public readonly pathId: number
    public readonly swimTime: number
    public readonly iszhy: boolean;
    public readonly zhyFishKey: string;
    public readonly zhyGroupMark: number;
    public readonly zhyConfig: any;

    constructor(fishKey: string, groupsId: number, groupId: number, fishIdInGroup: number, pathId: number, swimTime: number,
        iszhy = false, zhyFishKey = "", zhyGroupMark = -1, zhyConfig = null) {
        this.fishKey = fishKey
        this.groupsId = groupsId
        this.groupId = groupId
        this.fishIdInGroup = fishIdInGroup
        this.pathId = pathId
        this.swimTime = swimTime
        this.iszhy = iszhy
        this.zhyFishKey = zhyFishKey
        this.zhyGroupMark = zhyGroupMark
        this.zhyConfig = zhyConfig
    }
    public Copy(fishKey: string, groupsId: number, iszhy = false, zhyFishKey = "", zhyGroupMark = -1, zhyConfig: any = null): FishCreatData {
        return new FishCreatData(fishKey, groupsId, this.groupId, this.fishIdInGroup, this.pathId, this.swimTime,
            iszhy, zhyFishKey, zhyGroupMark, zhyConfig)
    }
}