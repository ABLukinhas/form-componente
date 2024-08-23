<script setup>
import {ref,reactive,computed} from 'vue';

defineProps(['produto'])

function formatarPreco(idade) {
  return `${idade}`
}

</script>

<template>
    <div>
        <div class="resultado">
             <h2 style="text-align: center; background-color: white; 
                border-radius: 12px; margin-bottom: 15px;"> DADOS
            </h2>

            <p>Nome: {{ produto.nome }}</p>
            <p>Idade: {{ formatarPreco(produto.idade) }}</p>
            <p>Data de nascimento: {{ produto.DataNacimento }}</p>
            <p>Cidade: {{ produto.Cidade }}</p>
            <p>Sexualidade: {{ produto.Sexualidade }}</p>
            <p>Roobies: {{ produto.Roobies }}</p>
            <p v-for="categoria_id in produto.categoria" :key="categoria_id">
            - {{ buscarNome(categoria_id) }} </p>
        </div>
    </div>
</template>

<style scoped>
.resultado {
    background-color: #92eba8 ;
    width: 45vw;
    min-height: 40vh;
    border-radius: 20px;
    padding: 20px
}
p{
  text-align: center;
  margin-bottom: 5px ;
}
</style>