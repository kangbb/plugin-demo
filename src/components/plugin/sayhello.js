// sayhello.js
import SayHello from './sayhello.vue'
let $vm

export default {
  install (Vue, options) {
    if (!$vm) {
      const SayHelloPlugin = Vue.extend(SayHello)

      $vm = new SayHelloPlugin({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    $vm.show = false

    let sayhello = {
      show (text) {
        $vm.show = true

        $vm.text = text
      },
      hide () {
        $vm.show = false
      }
    }

    // 以下为修改部分
    // if (!Vue.$sayhello) {
    //   Vue.$sayhello = sayhello
    // }

    // Vue.mixin({
    //   created () {
    //     this.$sayhello = sayhello
    //   }
    // })

    Vue.prototype.$sayhello = sayhello
  }
}
