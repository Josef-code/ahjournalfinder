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
   
    template: 
        `<section class="searcharea">
            <div class="container">
                <nav class="nav" style="margin-top: 10px;">
                <img src="./ahlogo.jpg" height="60px">	
                </nav>

                <!--- Search area --->
                <div class="input-section">
                    <div class="search-holder">
                        <img src="./searchimage.svg" height="100px">
                        <h2>academic<strong>hive</strong> <span class="logo-text">Journal Finder</span></h2>
                        <form @submit="searchData" method="GET">
                            <input type="text" name="search" placeholder="Journal keywords" v-model="requests.searchTerm">
                            <input type="submit" name="submit" value="Search">
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section class="resultarea">
            <div class="container">
            <div class="card" style="width: 50%;">
              <div class="card-body">
                <h5 class="card-title">{{this.requests.searchTerm}}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
            </div>
        </section>
        `

})

app.mount('#app');