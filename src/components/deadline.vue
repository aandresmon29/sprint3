<template>
    <div id="dline"> <br>
        <label for="fdeadl"> Deadline: </label>
        <input type="date" id="fdeadl" name="fdeadl" v-model="deadline"><br><br>
        <nav2>
            <form v-on:submit.prevent="updateDeadline">
                <button type="submit">Actualizar</button>
            </form><br>
            <form v-on:submit.prevent="deleteDeadline">
                <button type="submit">Eliminar</button>
            </form>          
        </nav2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'dline',
    data: function (){
        return {
        deadline: ""
        }
    },
    created: function(){
        this.deadline = this.$route.params.deadline
        let self = this
        axios.get("https://pyme-backend-g3m4-9.herokuapp.com/deadline/Objetivo1/")
        .then((result) => {
        self.deadline = result.data.deadline
        })
        .catch((error) => {
        alert("No hay deadline asociada al objetivo");
        });
    },
    methods:{
        deleteDeadline: function(){
            axios.delete("https://pyme-backend-g3m4-9.herokuapp.com/deadline/eliminar/Objetivo1")
                .then((result) => {
                    alert("Deadline Eliminada");
                    
                })
                .catch((error) => {
                      alert("No existe Deadline");
                });
        },
        updateDeadline: function(){
            var xdeadl = document.getElementById("fdeadl").value
            var deadl_in = {
                objetivo: "Objetivo1",
               deadline: xdeadl
            }
            axios.put("https://pyme-backend-g3m4-9.herokuapp.com/deadline/actualizar", deadl_in)
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
#dline{
    width:100%;
    height:100%;
    display:grind;
    justify-content:center;
    align-items:center;
}
#dline nav2 button{
    color: rgb(255, 255, 255);
    background:  #9c5411;
    border-radius: 10px;
    border-color: rgba(59, 30, 47, 0.781);
    padding: 10px 20px;
    cursor: pointer;
    display: inline;
}
</style>