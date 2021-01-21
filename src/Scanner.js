//扫描器
export default class Scanner {
    constructor(templateStr) {
        //指针
        this.position = 0;
        //尾串
        this.tail = templateStr;
        this.templateStr = templateStr
    }
    //扫描{{}}，无返回值
    scan(tag) {
        if (this.tail.indexOf(tag) == 0) {
            //指针后移tag长度
            this.position += tag.length;
            this.tail = this.templateStr.substr(this.position)
        }
    }
    //扫描str，遇到stopTag结束，返回扫描过的str
    scanUntil(stopTag) {
        const pos_strat = this.position
        while (this.tail.indexOf(stopTag) != 0 && !this.eos()) {
            this.position++;
            this.tail = this.templateStr.substr(this.position);
        }
        return this.templateStr.substring(pos_strat, this.position);
    }
    //指针是否结束
    eos() {
        return this.position >= this.templateStr.length
    }
}