var vm = new Vue({
    el: '#app',
    data: {
        keyword: '',
        books: [
            'C++ High Performance',
            'Mastering Linux Security and Hardening',
            'Python Programming Blueprints',
            'Mastering PostgreSQL 10',
        ]
    },
    computed: {
        filterBooks() {
            return this.books.filter((book) => {
                return book.includes(this.keyword)
            })
        }
    }
})