<template>
    <div id="tarea">
        <label for="fname">   Nombre: </label>
        <input type="text" id="fname" name="fname" v-model="nombre"><br><br>
        <label for="furg">   Urgencia:  </label> 
        <select id="furg" name="furg" v-model="urgencia">
                <option value="1">alta</option>
                <option value="2">media</option>
                <option value="3">baja</option>
        </select> <br><br>
        <label for="fimp">Importancia: </label>
        
        <select id="fimp" name="fimp" v-model="importancia">
                <option value="1">alta</option>
                <option value="2">media</option>
                <option value="3">baja</option>           
        
        </select> <br><br>
        <label for="fdeadl"> Deadline:  </label>
        <input type="date" id="fdeadl" name="fdeadl" v-model="deadline"><br><br>
        <nav2>
            <form v-on:submit.prevent="updateTarea">
                <button type="submit"> Actualizar  </button>
            </form><br>
            <form v-on:submit.prevent="deleteTarea">
                <button type="submit">Eliminar</button>
            </form>             
        </nav2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'tarea',
    data: function (){
        return {
        nombre: "",
        urgencia: "",
        importancia: "",
        deadline: ""
        }
    },
    created: function(){
        this.nombre = this.$route.params.nombre
        this.urgencia = this.$route.params.urgencia
        this.importancia = this.$route.params.importancia
        this.deadline = this.$route.params.deadline
        let self = this
        axios.get("https://pyme-backend-g3m4-9.herokuapp.com/tareas/Objetivo1/")
        .then((result) => {
        self.nombre = result.data.nombre
        self.urgencia = result.data.urgencia
        self.importancia = result.data.importancia
        self.deadline = result.data.deadline
        })
        .catch((error) => {
        alert("No hay tareas asociadas al objetivo");
        });
    },
    methods:{
        deleteTarea: function(){
            axios.delete("https://pyme-backend-g3m4-9.herokuapp.com/tareas/eliminar/Objetivo1")
                .then((result) => {
                    alert("Tarea Eliminada");
                })
                .catch((error) => {
                      alert("No existe Tareas");
                });
        },
        updateTarea: function(){
            var xfname = document.getElementById("fname").value
            var xfurg = document.getElementById("furg").value
            var xfimp = document.getElementById("fimp").value
            var xfdeadl = document.getElementById("fdeadl").value
            var task_in = {
                objetivo: "Objetivo1",
                nombre: xfname,
                urgencia: xfurg,
                importancia: xfimp,
                deadline: xfdeadl
            }
            axios.put("https://pyme-backend-g3m4-9.herokuapp.com/tareas/actualizar", task_in)
                .then((result) => {
                    alert("Actualizacón Realizada");
                })
                .catch((error) => {
                      alert("Actualización no registrada");
                });
        }
    },
}
</script>

<style>
#tarea{
    width:100%;
    height:100%;
    display:grind;
    justify-content:center;
    align-items:center;
}
#tarea nav2 button{
    color: rgb(255, 255, 255);
    background:  #9c5411;
    border-radius: 10px;
    border-color: rgba(49, 45, 48, 0.781);
    padding: 10px 20px;
    cursor: pointer;
    display: inline;
}
</style>