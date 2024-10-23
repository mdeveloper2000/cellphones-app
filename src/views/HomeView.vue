<script setup>
    import { onMounted, ref } from 'vue'
    import { RouterLink } from 'vue-router'
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
    import { faSearch, faMousePointer } from "@fortawesome/free-solid-svg-icons"
    
    const latest = ref([])    
    const allList = ref([])
    const suggestions = ref([])
    const noresults = ref(false)
    const inputSearch = ref('')
    const address = import.meta.env.VITE_APP_SERVER_ADDRESS

    onMounted(async () => {
        await fetch(`${address}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((res) => res.json())
        .then(json => {
            allList.value = json
            latest.value.push(json[json.length - 3])
            latest.value.push(json[json.length - 2])
            latest.value.push(json[json.length - 1])
        })
        .catch((error) => {
            console.log(error)
        })
    })
    const searchCellphone = () => {
        suggestions.value = []
        suggestions.value = allList.value.filter(phone => phone.name.toUpperCase().includes(inputSearch.value.toUpperCase()))
        if(suggestions.value.length === 0) {
            noresults.value = true            
        }
        else {
            noresults.value = false
        }
    }
</script>

<template>
    <section class="search-bar">
        <input type="text" v-model.trim="inputSearch" placeholder="Search the cellphone model" />
        <button type="button" @click="searchCellphone">
           <FontAwesomeIcon :icon="faSearch" /> Search
        </button>
    </section>
    <main>
        <div class="search-area" v-if="suggestions.length > 0">
            <div class="card" v-for="suggestion in suggestions" :key="suggestion.id">
                <RouterLink :to="`/cellphones/${suggestion.id}`">
                    <img :src="'/images/'+ suggestion.image" width="250" height="400">
                    <h1>{{ suggestion.name }}</h1>
                    <h4>
                        <FontAwesomeIcon :icon="faMousePointer" /> Click for more details...
                    </h4>
                </RouterLink>
            </div> <FontAwesomeIcon :icon="faMousePointer" />
        </div>
        <div v-if="noresults" class="message">
            Your search didn't return any results, try another one
        </div>
        <h1 class="header">Latest added cellphones</h1>
        <div class="latest-cellphones" v-cloak>            
            <div class="card" v-for="cellphone in latest" :key="cellphone.id">
                <RouterLink :to="`/cellphones/${cellphone.id}`">
                    <img :src="'/images/'+cellphone.image" width="250" height="400">
                    <h1>{{ cellphone.name }}</h1>
                    <h4>Click for more details...</h4>
                    <h6><FontAwesomeIcon :icon="faMousePointer" :size="'2x'" /></h6>
                </RouterLink>
            </div>            
        </div>
    </main>
</template>

<style scoped>
    [v-cloak] {
        display: none;
    }
    .search-bar {
        display: flex;
        align-items: center;
        justify-content: end;    
    }
    input[type="text"] {
        border-radius: 8px;        
        border: none;
        outline: none;
        padding: 10px 15px;
        width: 300px;
        font-size: 14px;
    }
    button {
        margin-left: 10px;
        background-color: var(--green-bg-color);
        font-size: 14px;
        border: none;
        border-radius: 8px;
        padding: 10px 25px;
        cursor: pointer;
        color: #fff;
        font-weight: bold;
    }
    h1 {
        width: 50%;
        margin: 0 auto;
        margin-top: 20px;
    }
    .latest-cellphones {
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
    }
    .card {
        background-color: var(--green-bg-color);
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        align-items: center;
        padding: 8px;
        text-align: center;
        margin-bottom: 50px;
    }
    .card img {
        mix-blend-mode: multiply;
    }
    .card a {
        text-decoration: none;
        color: #fff;
    }
    .card h4 {
        background-color: #000;
        border-radius: 12px;
        padding: 6px 2px;
    }
    .search-area {
        color: #fff;        
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;        
    }
    .search-area .card {
        margin: 0 auto;
    }
    .suggestion {
        color: #fff;
        font-size: 18px;
        border: 1px solid var(--green-bg-color);
        border-radius: 8px;
        padding: 15px;
        width: 30%;
        margin: 0 auto;
        margin-top: 20px;
    }
    .message {
        color: #fff;
        font-size: 20px;
        background-color: var(--red-bg-color);
        border-radius: 8px;
        padding: 10px;
        margin: 0 auto;
        margin-top: 20px;
        width: 50%;
        text-align: center;
    }
</style>