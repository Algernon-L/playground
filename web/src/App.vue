<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import $ from 'jquery'
export default{
  components:{
    NavBar
  },
  setup(){
    $.ajax({
      url: "http://127.0.0.1:3000/user/account/token/",
      type: "post",
      data:{
        username: 'ljb',
        password: 'pljb',
      },
      success(resp){
        console.log(resp);
      },
      error(resp){
        console.log(resp);
      }
    })

    $.ajax({
      url: "http://127.0.0.1:3000/user/account/info/",
      type: "get",
      headers:{
        Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkNzA4ZjI3ODkyZmQ0NmM3OGVjMDE2M2E0YmQ1MGNkMSIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY1OTM2NDM5NSwiZXhwIjoxNjYwNTczOTk1fQ.Zqb1Kx_yVRWqhQ1zPgdPIEqXSvw9wUXekQmns8iNcVg"
      },
      success(resp){
        console.log(resp);
      },
      error(resp){
        console.log(resp);
      }
    })


    $.ajax({
      url: "http://127.0.0.1:3000/user/account/register/",
      type: "post",
      data:{
        username: "pxy",
        password: "ppxy",
        confirmedPassword: "ppxy"
      },
      success(resp){
        console.log(resp);
      },
      error(resp){
        console.log(resp);
      }
    })
  }
}
</script>

<style>
body{
  background-image:url("@/assets/images/wallpaper.jpg");
  background-size:cover;
}
</style>
