//typescript部分
//定义的类

class Test {
    public names: Array<string> = ["小王", "小强", "小张"];
    idx: number = 0;
    GetVisitor(): string {
        this.idx++;
        if (this.idx == this.names.length) {
            this.idx = 0;
        }
        return this.names[this.idx];
    }

}

//VUE部分
import Vue from "vue";
//创建Test对象
let tester = new Test();

export default Vue.extend({
    name: 'Hello',
    data() {
        return {
            marks: tester.GetVisitor(),
        }
    },
    methods:
    {
        changed() {
            this.marks = tester.GetVisitor();
        }
    }
});