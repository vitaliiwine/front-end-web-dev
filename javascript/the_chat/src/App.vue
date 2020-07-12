<template>
    <div class="h-100">
        <Navbar/>
        <router-view/>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar'
import "@/assets/style.css"
    export default {
        components: {
            Navbar
        }
    }
</script>