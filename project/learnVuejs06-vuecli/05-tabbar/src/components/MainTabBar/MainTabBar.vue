<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="seagreen">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/homefill.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="seagreen">
        <img slot="item-icon" src="~assets/img/tabbar/form.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/formfill.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="seagreen">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/cartfill.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="seagreen">
        <img slot="item-icon" src="~assets/img/tabbar/people.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/peoplefill.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/TabBar/Tabbar.vue'
  import TabBarItem from 'components/TabBar/TabbarItem.vue'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
  </script>
  
  <style scoped>
    
  </style>
  