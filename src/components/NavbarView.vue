<script setup>    
    import { RouterLink } from "vue-router"
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
    import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons"        
</script>

<template>
    <nav>
        <RouterLink to="/" class="link" active-class="currentPage">
            <FontAwesomeIcon :icon="faHome" /> Home
        </RouterLink>
        <RouterLink to="/about" class="link" active-class="currentPage">
            <FontAwesomeIcon :icon="faInfoCircle" /> About
        </RouterLink>
    </nav>
</template>

<style scoped>
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
    }
    .link {
        list-style-type: none;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        margin-left: 5px;
    }
    a {
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
    }
    .currentPage {
        background-color: var(--green-bg-color);
    }
</style>