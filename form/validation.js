var vm = new Vue({
    el: '#app',
    data: {
        title: 'Ashiap',
        description: 'Ashiapp control VueJS',
        authors: 'Dion',
        price: 7500,
        categories: [],
        options: [{
                text: 'Graphics Programming',
                value: '01'
            },
            {
                text: 'Mobile Application Development',
                value: '02'
            },
            {
                text: 'Virtual and Augmented Reality',
                value: '03'
            }
        ],
        errors: []
    },
    methods: {
        submitForm(event) {
            this.errors = []

            if (this.title.length < 3) {
                this.errors.push('Title minimal 3 karakter!')
                this.$refs.title.select()
            }
            if (this.description.length > 500) {
                this.errors.push('Description maximal 500 karakter!')
                this.$refs.description.select()
            }
            if (this.authors.length < 3) {
                this.errors.push('Authors minimal 3 karakter!')
                this.$refs.authors.select()
            }
            if (this.price < 0) {
                this.errors.push('Price tidak boleh minus!')
                this.$refs.price.select()
            }
            if (this.categories.length === 0) {
                this.errors.push('Pilih minimal 1 category!')
                this.$refs.categories.focus()
            }

            if (this.errors.length === 0) {
                alert('Terima kasih telah mengirim data dengan benar!')
                // persiapkan data
                let formData = new FormData()
                formData.append('title', this.title)
                formData.append('description', this.description)
                formData.append('authors', this.authors)
                formData.append('price', this.price)
                formData.append('categories', this.categories)
            }

        }
    },
})