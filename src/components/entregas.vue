<template>
    <div id="entrega">
        <label for="fname"> <font face="Century Gothic">Nombre: </font> </label>
        <input type="text" id="fname" name="fname" v-model="nombre"><br><br>
        <label for="fresp"><font face="Century Gothic">  Responsable: </font> </label>
        <input type="text" id="fresp" name="fresp" v-model="responsable"><br><br>
        <label for="fdesc"><font face="Century Gothic"> Descripcion:</font> </label>
        <input type="text" id="fdesc" name="fdesc" v-model="descripcion"><br><br>
        <label for="ffecha"> <font face="Century Gothic">Fecha: </font></label>
        <input type="date" id="ffecha" name="ffecha" v-model="fecha"><br><br>
        <label for="fvers"><font face="Century Gothic"> Version: </font> </label>
        <input type="number" id="fvers" name="fvers" v-model="version"><br><br>
        <nav2>
            <form v-on:submit.prevent="deleteEntrega">
                <button type="submit"><font face="Century Gothic"> Eliminar </font> </button>
            </form>
        </nav2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'entrega',
    data: function (){
        return {
        nombre: "",
        reponsable: "",
        descripcion: "",
        fecha: "",
        version: "",
        }
    },
    created: function(){
        this.nombre = this.$route.params.nombre
        this.responsable = this.$route.params.responsable
        this.descripcion = this.$route.params.descripcion
        this.fecha = this.$route.params.fecha
        this.version = this.$route.params.version
        let self = this
        axios.get("https://pyme-backend-g3m4-9.herokuapp.com/entregas/Objetivo1/")
        .then((result) => {
        self.nombre = result.data.nombre
        self.responsable = result.data.responsable
        self.descripcion = result.data.descripcion
        self.fecha = result.data.fecha
        self.version = result.data.version
        })
        .catch((error) => {
        alert("No hay entregas asociadas al objetivo");
        });
    },
    methods:{
        deleteEntrega: function(){
            axios.delete("https://pyme-backend-g3m4-9.herokuapp.com/entregas/eliminar/Objetivo1")
                .then((result) => {
                    alert("Entrega Eliminada");
                    
                })
                .catch((error) => {
                      alert("No existen Entregas");
                });
        },
        updateEntrega: function(){
            var xfname = document.getElementById("fname").value
            var xfresp = document.getElementById("fresp").value
            var xfdesc = document.getElementById("fdesc").value
            var xffecha = document.getElementById("ffecha").value
            var xfvers = document.getElementById("fvers").value
            var ent_in = {
                objetivo: "Objetivo1",
                nombre: xfname,
                responsable: xfresp,
                descripcion: xfdesc,
                fecha: xffecha,
                version: xfvers
            }
            axios.put("https://pyme-backend-g3m4-9.herokuapp.com/entregas/actualizar", ent_in)
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
#entrega{
    width:100%;
    height:100%;
    display:grind;
    justify-content:center;
    align-items:center;
}
#entrega nav2 button{
    color: rgb(255, 255, 255);
    background:  #9c5411;
    border-radius: 5px;
    border-color: rgba(59, 30, 47, 0.781);
    padding: 10px 20px;
    cursor: pointer;
}
</style>