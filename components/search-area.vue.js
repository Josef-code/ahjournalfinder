const app = Vue.createApp({})

app.component('search-area', {
    data() {
        return {
            requests: {
                searchTerm : null
            }
        }
    },

    methods: {
        searchData(e){
            $(".searcharea").hide();
            e.preventDefault();
        }
    },
   
   
})

app.mount('#app');