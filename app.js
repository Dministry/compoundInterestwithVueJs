new Vue({
    el: "#calculator",
    data: {
        principal: "",
        rate: "",
        nComp: "",
        time: ""
    },
    computed: {
        result: function(){
            const RCPT = (this.rate)/100/this.nComp;
            const x = (1 + RCPT);
            const e = this.nComp * this.time;
            const y = Math.pow(x,e);
            const amount = this.principal * y;
            return amount.toFixed(2);
        }
    }
});
    