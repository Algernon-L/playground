<template>
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container">
    <router-link class="navbar-brand" :to="{name: 'home'}">Playground</router-link>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :class="route_name == 'pk_index' ? 'nav-link active' : 'nav-link'" aria-current="page" :to="{name: 'pk_index'}">Play</router-link>
        </li>
        <li class="nav-item">
          <router-link :class="route_name == 'record_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'record_index'}">List</router-link>
        </li>
        <li class="nav-item">
          <router-link :class="route_name == 'ranklist_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'ranklist_index'}">Ranklist</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            个人中心
          </a>
          <ul class="dropdown-menu">
            <router-link class="dropdown-item" :to="{name: 'userbot_index'}">Bot</router-link>
            <li><a class="dropdown-item" href="#">exit</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>
</template>

<!--实现点击 高亮-->
<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue';
export default{
  setup(){
    const route = useRoute();
    let route_name = computed(() => route.name)
    return {
      route_name
    }
  }
}

</script>


<style scoped>
</style>