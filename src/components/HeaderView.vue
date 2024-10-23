<script setup>
    const title = import.meta.env.VITE_APP_NAME
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
    import { faMobileRetro } from "@fortawesome/free-solid-svg-icons"
</script>

<template>
    <div class="header">
        <h1>
            <FontAwesomeIcon :icon="faMobileRetro" /> {{ title }}
        </h1>
    </div>
</template>

<style>
    .header {
        border: none;
        border-radius: 8px;
        padding: 10px;
        background-color: var(--green-bg-color);
        text-align: center;
        color: #fff;
        font-weight: bold;
    }
</style>