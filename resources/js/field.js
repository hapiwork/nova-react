Nova.booting((Vue, router, store) => {
  Vue.component('index-nova-react', require('./components/IndexField'))
  Vue.component('detail-nova-react', require('./components/DetailField'))
  Vue.component('form-nova-react', require('./components/FormField'))
})
