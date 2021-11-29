const JournalData = {
	data() {
		return {
			requests: {
                searchTerm : null
            },
            searchResults : false
		}
	},

	methods: {

        searchData(e){
        	e.preventDefault()
            $(".searcharea").hide(),
            this.searchResults = !this.searchResults
        }
	}

}

Vue.createApp(JournalData).mount('#app');
// Vue.createApp().mount();