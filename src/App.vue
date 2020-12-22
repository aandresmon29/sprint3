<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo2.png" width= "100" style = "margin: 20px;">
      <h1><font face="Century Gothic"> Proyecto PyME </font></h1>
        <nav>
          <h2> <font face="Century Gothic"> Empresa XYZ de Desarrollo</font></h2>
          <button v-if=true ><font face="Century Gothic"> Cerrar Sesión </font> </button>
        </nav>
    </div>
    <div class="menu">
      <a href="Objetivos">Objetivos</a>
      <a href="Necesidades">Necesidades</a>
      <a href="Equipo">Equipo</a>
      <a href="Riesgo">Riesgo</a>
      <a href="Presupuesto">Presupuesto</a>
      <a href="Planeacion">Planeación</a>
      <a href="Fasefin">Fase Final</a>
    </div>
    <div class="main-component">
      <ul><h1> <font face="Century Gothic"> Objetivo #1 del Proyecto </font> </h1></ul>
        <ul><nav>
          <button v-on:click="task"><font face="Century Gothic">Tareas </font></button>
          <button v-on:click="deadl"> <font face="Century Gothic">Deadline </font> </button>
          <button v-on:click="init"><font face="Century Gothic">Entregas </font> </button>
        </nav></ul>
        <router-view> </router-view>
    </div>
    <div class="footer">
      <a href="Directorio.html"><font face="Century Gothic">Directorio</font></a>
      <a href="Contactos.html"><font face="Century Gothic">Contáctenos </font></a>
      <a href="Documentos.html"><font face="Century Gothic">Documentos de Interés </font></a>
    </div> 

  </div> 

</template>

<script>
import Entregas from './components/entregas.vue'

export default {
  name: 'header',
  components: {
    Entregas
  },
  methods: {
    init: function(){
      if(this.$route.name != "entrega"){
      let username = localStorage.getItem("current_entrega")
      this.$router.push({name: "entrega", params:{username:username}})
      }
    },
    task: function(){
      if(this.$route.name != "tarea"){
      let username = localStorage.getItem("current_tarea")
      this.$router.push({name: "tarea", params:{username:username}})
      }
    },
    deadl: function(){
      if(this.$route.name != "dline"){
      let username = localStorage.getItem("current_dline")
      this.$router.push({name: "dline", params:{username:username}})
      }
    }
  }
}
</script>

<style>
.header{
  margin: 20px auto;
  padding: 0;
  width: 100%;
  height: 15vh;
  min-height: 100px; 
  background-color: rgba(214, 133, 11, 0.986);
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header nav {
  height: 100%;
  width: 45%;
  justify-content: center; 
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header nav button{
  color: #E5E7E9;
  background: #64343681;
  border: 2.5 px solid #e5e7e9c4;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.header h2{
  margin: 50px;
  font-size: 16px;
  color: rgba(250, 250, 250, 0.733);
  justify-content: center; 
  align-items: center;
}
.menu {
  background: #caaf96;
  text-align: center;
  border-radius: 5px;
  padding: 10px 20px;
}
.menu a{
  color: #ffffff;
  background: #da812f;
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
}
.main-component{
  height: 55vh;
  margin: 0;
  padding: 0%;
  background: #FDFEFE ;
  display: grind;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.main-component h1{
  width: 100%;
  height: 100%;
  display: flex; 
  font-size: 24px;
  justify-content: center; 
  align-items: center;
}
.main-component nav button{
  color: #ffffff;
  background: #9c5411;
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.main-component hr{
  display: grind; 
  font-size: 24px;
  justify-content: center; 
  align-items: center;
}
.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px; 
  background-color: rgba(214, 133, 11, 0.986); 
  color: #E5E7E9;
  display: flex;
  align-items: center;
}
.footer a{
  width: 100%;
  height: 100%;
  display: flex; 
  font-size: 15px;
  color: rgb(255, 255, 181);
  justify-content: center; 
  align-items: center;
}
</style>
