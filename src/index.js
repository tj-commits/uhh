import THImc from './packages/im/index';
// ...如果还有的话继续添加

const components = [
  THImc
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

// /* 支持使用标签的方式引入 */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export default {
  install,
  THImc
}
