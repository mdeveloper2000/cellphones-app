<script setup>
    import { onMounted, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faBattery, faMobileScreen, faCamera } from '@fortawesome/free-solid-svg-icons'    
    const route = useRoute()
    const router = useRouter()
    const cellphoneId = route.params.id
    const cellphone = ref('')
    const address = import.meta.env.VITE_APP_SERVER_ADDRESS

    onMounted(async () => {
        await fetch(`${address}${cellphoneId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((res) => res.json())
        .then(json => {
           cellphone.value = json
        })
        .catch((error) => {
            router.push(`/notfound/${cellphoneId}`)
        })
    })
</script>

<template>
    <h1>{{ cellphone.name }}</h1>
    <div class="card">
        <div class="items">
            <div class="item">
                <FontAwesomeIcon :icon="faCamera" :size="'2x'" />
                <span>{{ cellphone.screen }}</span>
            </div>
            <div class="item">
                <FontAwesomeIcon :icon="faBattery" :size="'2x'" />
                <span>{{ cellphone.battery }}</span>
            </div>
            <div class="item">
                <FontAwesomeIcon :icon="faMobileScreen" :size="'2x'" />
                <span>{{ cellphone.screen }}</span>
            </div>            
        </div>        
        <div>
            <img :src="'/images/'+cellphone.image" width="200" height="400">
        </div>        
    </div>
</template>

<style scoped>
    .card {
        background-color: var(--green-bg-color);
        display: flex;
        border-radius: 16px;
        align-items: center;
        justify-content: space-around;
        padding: 8px;
        width: 350px;
        margin: 0 auto;
        margin-bottom: 50px;
    }
    .card img {
        mix-blend-mode: multiply;
    }
    h1 {
        color: #fff;
        text-align: center;
    }
    .items {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;        
        border: 1px solid #fff;
        padding: 10px;
        border-radius: 8px;
    }
    .item span {
        font-size: 20px;
    }
</style>