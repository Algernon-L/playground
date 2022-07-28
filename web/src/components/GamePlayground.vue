<template>
    <div class="GamePlayground">
        <GameMap />
    </div>
</template>

<script>
import GameMap from './GameMap.vue'
export default {
    components:{
        GameMap,
    }
}
</script>

<style scoped>
div.GamePlayground{
    width: 60vw;
    height: 70vh;
    margin: 40px auto;
}
</style>