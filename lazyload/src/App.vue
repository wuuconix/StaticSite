<template>
    <div class="outer">
        <img v-for="index in 100" :src="default_src" :key="index" :ref="setImgList">
    </div>
</template>

<script>

export default {
    data() {
        return {
            imgList: [],
            handle_scroll_d: this.debounce(this.handle_scroll2, 200),
            default_src: "https://tvax1.sinaimg.cn/large/007kZ47kgy1gqizz0ipr0g30f008f7wj.gif",
            observer: new IntersectionObserver(this.handle_observe)
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handle_scroll_d)
        window.scrollTo(0, 1)
        // Array.from(this.imgList).forEach(item => this.observer.observe(item))
    },
    methods: {
        handle_scroll() {
            let top = document.documentElement.scrollTop //页面上界
            let bottom = document.documentElement.scrollTop + document.documentElement.clientHeight //页面下界
            for(let i = 0; i < this.imgList.length; i++) {
                let img = this.imgList[i]
                let imgTop = img.offsetTop //图片的上边界
                let imgBottom = img.offsetTop + img.height //图片下界
                if (img.src == this.default_src && imgBottom >= top && imgTop <= bottom) {
                    img.src = "https://conix.ml/?no-store=1"
                }
            }
        },
        handle_scroll2() {
            for(let i = 0; i < this.imgList.length; i++) {
                let img = this.imgList[i]
                let imgRelativeTop = img.getBoundingClientRect().top
                if (img.src == this.default_src && imgRelativeTop >= -img.height && imgRelativeTop <= document.documentElement.clientHeight) { //出现在视窗中
                    img.src = "https://conix.ml/?no-store=1"
                }
            }
        },
        debounce(fn, interval) {
            let timer = null
            return (...args) => {
                let context = this
                if (timer)
                    clearTimeout(timer)
                timer = setTimeout(() => {
                    fn.apply(context, args)
                }, interval)
            }
        },
        setImgList(el) {
            if (el)
                this.imgList.push(el)
        },
        handle_observe(changes) {
            for (let i = 0; i < changes.length; i++) {
                let change = changes[i]
                if (change.isIntersecting) {
                    const imgEle = change.target
                    imgEle.src = "https://conix.ml/?no-store"
                    this.observer.unobserve(imgEle)
                }
            }
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
        max-width: 980px;
        min-width: 200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    }
    img {
        width: 80%;
        margin: 30vh auto;
    }
    img:nth-child(1) {
        margin-top: 50vh;
        transform: translateY(-50%);
    }
</style>