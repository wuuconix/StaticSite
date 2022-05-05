<template>
    <div class="outer" :style="style">
        <h1> 您已点击 {{ count }} 次 </h1>
        <div class="inner">
            <button @click="normal_click">正常点击</button>
            <button @click="throttle_click">节流点击</button>
            <button @click="debounce_click">防抖点击</button>
            <button @click="throttle_de_click">加强版节流点击</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            count: 0,
            tc: this.throttle2(this.normal_click, 1000),
            dc: this.debounce(this.normal_click, 1000),
            tdc: this.throttle_de(this.normal_click, 1000),
            style: "background: rgba(0, 0, 0, 0.5)"
        }
    },
    methods: {
        throttle(fn, interval) { //节流函数
            let flag = true
            return function(...args) {
                let context = this
                if (flag) {
                    flag = false
                    setTimeout(() => {
                        fn.apply(context, args)
                        flag = true
                    }, interval)
                }
            };
        },
        throttle2(fn, interval) { //第二种节流函数的实现
            let last = 0;
            return function (...args) {
                let now = +new Date();
                if  (now - last < interval)
                    return;
                last = now;
                fn.apply(this, args)
            }
        },
        debounce(fn, delay) { //防抖函数
            let timer = null
            return function (...args) {
                let context = this
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    fn.apply(context, args)
                }, delay)
            }
        },
        throttle_de(fn, delay) { //加强版节流。或者我觉得更贴切是加强版防抖
            let last = 0, timer = null;
            return function (...args) {
                let context = this;
                let now = new Date();
                if(now - last < delay){
                    if (timer) {
                        clearTimeout(timer);
                    }
                    timer = setTimeout(function() {
                        last = now;
                        fn.apply(context, args);
                    }, delay);
                } else {
                    console.log("直接运行！")
                    last = now;
                    fn.apply(context, args);
                }
            }
        },
        normal_click() {
            this.style = `background: rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`
            this.count++
        },
        throttle_click() {
            this.tc()
        },
        debounce_click() {
            this.dc()
        },
        throttle_de_click() {
            this.tdc()
        }
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    div.outer {
        width: 100%;
        margin-top: -10vh;
        height: 110vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    div.inner {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button {
        font-size: 16px;
        line-height: 16px;
        width: 120px;
        height: 50px;
        margin: 30px 20px;
    }
</style>