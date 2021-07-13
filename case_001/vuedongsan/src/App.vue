<template>
    <div class="menu">
        <!-- <a v-for="item in 3" :key="item">Home</a> -->
        <a v-for="(item, idx) in menus" :key="idx">{{ item }}</a>
    </div>
    <div v-for="(item, idx) in products" :key="idx">
        <h4>{{ item.name }}</h4>
        <p>{{ item.price }}만원</p>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            price1: 60,
            price2: 70,
            스타일: "color : blue",
            // products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
            products: [
                { name: "역삼동원룸", price: 70 },
                { name: "천호동원룸", price: 50 },
                { name: "마포구원룸", price: 60 },
            ],
            menus: ["Home", "Shop", "About"],
        };
    },
    components: {},
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}

.menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
}
.menu a {
    color: white;
    padding: 10px;
}
</style>
