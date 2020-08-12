Vue.component('btn-menu', {
  template: '#BtnMenu',
  props: {
    st: {
      default: function(){
        return './'
      }
    },
    menus: {
      default: function () {
        return [{
            id: 999,
            title: '第0课',
            message: 'Vue总结-课堂回顾',
            url: 'index0.html'
          }, {
            id: 0,
            title: '第1-4课',
            message: 'Vue初体验: el挂载，data数据',
            url: 'index1-4.html'
          },
          {
            id: 1,
            title: '第5课',
            message: 'v-for列表展示',
            url: 'index5.html'
          },
          {
            id: 2,
            title: '第6课',
            message: 'v-on:click计数器counter++',
            url: 'index6.html'
          },
          {
            id: 3,
            title: '第7-8课 ',
            message: 'v-on使用方法@click以及methods',
            url: 'index7-8.html'
          },
          {
            id: 4,
            title: '第9-10课 ',
            message: 'Vue生命周期、钩子',
            url: 'index9-10.html'
          },
          {
            id: 5,
            title: '第11-12课 ',
            message: 'Mustache语法（双大括号）',
            url: 'index11-12.html'
          },
          {
            id: 6,
            title: '第13-19课',
            message: '差值操作&动态绑定属性[v-once,v-html,v-text,v-pre,v-cloak,v-bind,v-on]',
            url: 'index13-19.html'
          },
          {
            id: 7,
            title: '第20-24课',
            message: 'Vue计算属性[setter和getter,缓存]',
            url: 'index20-24.html'
          },
          {
            id: 8,
            title: '第25-28课',
            message: 'ES6语法[let/var,const,对象的字面量增强写法]',
            url: 'index25-28.html'
          },
          {
            id: 9,
            title: '第29-31课',
            message: 'Vue的事件监听[v-on基本语法&语法糖，v-on参数传递，v-on修饰符.stop,.prevent,.[keyCode|keyAlias],.once]',
            url: 'index29-31.html'
          },
          {
            id: 10,
            title: '第32-35课',
            message: '[v-if,v-else-if,v-else],条件渲染案例：切换用户登录方式input复用小问题，v-show的使用以及和v-if的区别',
            url: 'index32-35.html'
          },
          {
            id: 11,
            title: '第36-39课',
            message: '数组操作：v-for遍历数组,v-for遍历对象,v-for绑定和非绑定key的区别,数组中哪些方法是响应式的',
            url: 'index36-39.html'
          },
          {
            id: 12,
            title: '作业回顾实现',
            message: '鼠标指向点击列表中的一项时，文字变红色',
            url: 'homework17k39.html'
          },
          {
            id: 13,
            title: '第40-44课',
            message: '图书购物车案例,javaScript高阶函数的使用',
            url: 'index40-44.html'
          },
          {
            id: 14,
            title: '第45-50课',
            message: 'v-model的使用和基本原理:[结合radio,checkbox,select类型使用,值绑定,修饰符.lazy,.number,.trim]',
            url: 'index45-50.html'
          },
          {
            id: 15,
            title: '第51-57课',
            message: '组件化[组件化的实现和使用步骤，全局组件和局部组件，父子件和子组件的区分，注册组件的语法糖写法，组件的模板抽离写法，为什么组件data必须是函数]',
            url: 'index51-57.html'
          },
          {
            id: 16,
            title: '第58-62课',
            message: '父子组件通信[父传子props，props驼峰标志，子传父（自定义事件）]',
            url: 'index58-62.html'
          },
          {
            id: 17,
            title: '第63-65课',
            message: '父子组件通信案例[v-bind,@input,$emit][v-model,watch]',
            url: 'index63-65.html'
          },
          {
            id: 18,
            title: '第66-67课',
            message: '第66-67课 父访问子-children-refs,子访问父-parent-root',
            url: 'index66-67.html'
          },
          {
            id: 19,
            title: '第68-71课',
            message: '第68-71课 slot插槽[基本使用，具名插槽,作用域插槽]',
            url: 'index68-71.html'
          },
          {
            id: 20,
            title: '第72-74课',
            message: '第72-74课 模块化开发基础',
            url: 'index72-74.html'
          },
          {
            id: 21,
            title: '第75-81课',
            message: '第75-81课 webpack[介绍，安装，配置(css,style,less,img,ES6转ES5)]',
            url: 'index75-81.html'
          },
          {
            id: 22,
            title: '第82-89课',
            message: '第82-89课 webpack使用Vue的配置',
            url: 'index82-89.html'
          },
          {
            id: 23,
            title: '第89-98课',
            message: '第89-98课 Vue ClI脚手架 箭头函数使用和this',
            url: 'index89-98.html'
          },
          {
            id: 24,
            title: '第99-115课',
            message: '第99-115课 vue-router[安装配置使用，router-link，懒加载，路由嵌套，参数传递，router和route，导航守卫]',
            url: 'index99-115.html'
          },
          {
            id: 25,
            title: '第116-124课',
            message: '第116-124课 keep-alive,TabBar案例',
            url: 'index116-124.html'
          },
          {
            id: 26,
            title: '第125-128课 Promise[使用，三种状态，链式调用，all方法]',
            message: '',
            url: 'index125-128.html'
          },
          {
            id: 27,
            title: '第129-140课',
            message: '第129-140课 Vuex[安装使用store,State,Getters,Mutations,Actions,Modules]',
            url: 'index129-140.html'
          },
          {
            id: 28,
            title: '第课',
            message: '',
            url: 'index.html'
          },
          {
            id: 29,
            title: '第课',
            message: '',
            url: 'index.html'
          },
          {
            id: 30,
            title: '第课',
            message: '',
            url: 'index.html'
          },
          {
            id: 31,
            title: '第课',
            message: '',
            url: 'index.html'
          },
          {
            id: 32,
            title: '第课',
            message: '',
            url: 'index.html'
          },
        ]

      }
    }
  }
})