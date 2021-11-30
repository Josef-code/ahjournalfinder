const JournalData = {
	data() {
		return {
			requests: {
                searchTerm : null
            },
            searchResults : false,
            searchOutput: []
		}
	},

	methods: {

        searchData(e){
        	e.preventDefault(),
            // $(".searcharea").hide(),
            this.searchResults = !this.searchResults,
            axios
            .get('https://api.elsevier.com/content/search/sciencedirect?query=' + this.requests.searchTerm + '&apiKey=7f59af901d2d86f78a1fd60c1bf9426a')
            .then(response => (console.log(response.data['search-results']['entry'])));
        }
	}

}

Vue.createApp(JournalData).mount('#app');
// Vue.createApp().mount();