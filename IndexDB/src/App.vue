<template>
    <div class="grid">
        <Image v-for="(src, index) in srcs" :src="src" :class="getClass(index)" :key="index"></Image>
    </div>
</template>

<script>
import localforage from 'localforage'
import Image from './components/Image.vue'

export default {
    data() {
        return {
            srcs: []
        }
    },
    components: {
        Image
    },
    methods: {
        getClass(index) {
            let row = Math.floor(index / 5)
            let column = Math.floor(index % 5)
            return { [`row${row + 1}`]: true, [`column${column + 1}`]: true}
        }
    },
    mounted() {
        localforage.getItem("imgNum").then(res => {
            if (res === null) {
                console.log("第一次加载页面 开始fetch图片")
                let saveImg = async () => {
                    for (let i = 1; i <= 20; i++) {
                        await fetch("https://conix.ml/?no-store=1")
                            .then(res => res.blob())
                            .then(res => {
                                localforage.setItem(String(i), res)
                                let url = URL.createObjectURL(res)
                                this.srcs.push(url)
                            })
                            .then(() => {
                                console.log(`保存图片${i}成功`)
                            })
                    }
                }
                saveImg()
                localforage.setItem("imgNum", 20)
            } else {
                console.log("检测到IndexDB中的图片")
                let getImg = async () => {
                    for (let i = 1; i <= 20; i++) {
                        await localforage.getItem(String(i)).then(res => {
                            let url = URL.createObjectURL(res)
                            this.srcs.push(url)
                        })
                    }
                }
                getImg()
            }
        })
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    div.grid {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: repeat(5, 20vw);
        grid-template-rows: repeat(4, 25vh);
        overflow: hidden;
    }
    .row1 {
        grid-row: 1 / 2;
    }
    .row2 {
        grid-row: 2 / 3;
    }
    .row3 {
        grid-row: 3 / 4;
    }
    .row4 {
        grid-row: 4 / -1;
    }
    .col1 {
        grid-column: 1 / 2;
    }
    .col2 {
        grid-column: 2 / 3;
    }
    .col3 {
        grid-column: 3 / 4;
    }
    .col4 {
        grid-column: 4 / 5;
    }
    .col5 {
        grid-column: 5 / -1;
    }
    Image {
        width: 20%;
    }
</style>