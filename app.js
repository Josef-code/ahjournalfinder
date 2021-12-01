const JournalData = {
	data() {
		return {
			requests: {
                searchTerm : null
            },
            searchResults : false,
            totalResults: [],
  			posts : [],
            searchOutput: []
		}
	},

	methods: {

        searchData(e){
        	e.preventDefault(),
            // $(".searcharea").hide(),
            this.searchResults = !this.searchResults,
            // axios
            // .get('https://api.elsevier.com/content/search/sciencedirect?query=' + this.requests.searchTerm + '&apiKey=7f59af901d2d86f78a1fd60c1bf9426a')
            // .then(response => (
            // 	console.log(response.data),
            // 	this.totalResults = response.data["search-results"]["opensearch:totalResults"],
            // 	this.authors = response.data
            // ));
            axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => (
             console.log(response.data),
             this.posts = response.data
            ));
        }
	}

}

Vue.createApp(JournalData).mount('#app');
// Vue.createApp().mount();