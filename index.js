var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue JS !!',
        teks: 'Semangat Pagi Indonesia',
        name: 'Dion',
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        pesan: 'Anda memuat halaman ini pada jam ' + new Date().toLocaleString()
    }
})

var vm = new Vue({
    data: {
        message: 'Hello world dion!'
    }
})
vm.$mount('#app3')

var vm2 = new Vue({
    el: '#app4',
    data: {
        message: "<span style='color:red'>Hellow Dion</span>",
    }
})

Vue.config.silent = true
var vm3 = new Vue({
    el: '#app5',
    data: {
        message: "",
        class_h1: "",
    }
})