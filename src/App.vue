<script setup>
import { ref, reactive } from 'vue'
const titulo = ref('FORMULARIO')
const produto = reactive({
  nome: '',
  idade: 0,
  DataNacimento: 0,
  Sexualidade: '',
  Roobies: [],
  Cidade: ''
})

const Roobies = [
  {
    id: 1,
    nome: 'Estudar'
  },
  {
    id: 2,
    nome: 'Jogar'
  },
  {
    id: 3,
    nome: 'Brincar'
  },
  {
    id: 4,
    nome: 'Cozinhar'
  },
  {
    id: 5,
    nome: 'Ler'
  },
  {
    id: 6,
    nome: 'Treinar'
  },
  {
    id: 7,
    nome: 'Correr'
  },
  {
    id: 8,
    nome: 'Papelaria'
  }
]

const mostrarResultado = ref(false)

function formatarPreco(idade) {
  return `${idade}`
}

function buscarNome(id) {
  return Roobies.find((categoria) => categoria.id === id).nome
}
</script>

<template>
  <h1>{{ titulo }}</h1>

  <div class="altera-titulo">
    <h2>Informe um novo título:</h2>
    <input type="text" v-model="titulo" style="text-align: center" />
  </div>
  <div class="container">
    <div class="formulario">
      <div class="row">
        <label for="">Nome:</label>
        <input type="text" v-model="produto.nome" />
      </div>
      <div class="row">
        <label for="">Idade:</label>
        <input type="number" step="1" min="0" v-model="produto.idade" />
      </div>
      <div class="row">
        <label for="">data de nascimento:</label>
        <input type="date" v-model="produto.DataNacimento" />
      </div>
      <div>
        <label for="">Cidade:</label>
        <input type="text" v-model="produto.Cidade" />
      </div>

      <fieldset>
        <legend>Sexualidade</legend>
        <div class="items-radiobox">
          <input type="radio" value="feminino" v-model="produto.Sexualidade" />
          feminino
          <input type="radio" value="masculino" v-model="produto.Sexualidade" /> Masculino
        </div>
      </fieldset>
      <fieldset>
        <legend>Roobies</legend>
        <div class="items-checkbox">
          <template v-for="categoria in Roobies" :key="categoria.id">
            <input type="checkbox" :value="categoria.id" v-model="produto.Roobies" />
            {{ categoria.nome }}
          </template>
        </div>
      </fieldset>
      <button @click="mostrarResultado = !mostrarResultado">Mostrar</button>
    </div>
  </div>

  <div v-if="mostrarResultado" class="resultado">
    <h2 style="text-align: center; background-color: white; border-radius: 12px; margin-bottom: 15px;">
      Dados do produto
    </h2>
    <p>Nome: {{ produto.nome }}</p>
    <p>Idade: {{ formatarPreco(produto.idade) }}</p>
    <p>Data de nascimento: {{ produto.DataNacimento }}</p>
    <p>Cidade: {{ produto.Cidade }}</p>
    <p>Sexualidade: {{ produto.Sexualidade }}</p>
    <p>Roobies: {{ produto.Roobies }}</p>
    <p v-for="categoria_id in produto.categoria" :key="categoria_id">
      - {{ buscarNome(categoria_id) }}
    </p>
  </div>
</template>

<style scoped>
.altera-titulo {
  background-color: #168100;
  margin: 1rem 2rem;
  border-radius: 20px;
  padding: 0.75rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}
.container {
  display: grid;
  justify-content: flex;
  gap: 2rem;
  margin-top: 1rem;
  padding: 0 2rem;
}

.formulario,
.resultado {
  width: 45vw;
  min-height: 40vh;
  border-radius: 20px;
  padding: 20px;
}

.formulario {
  background-color: #d29696;
}

.formulario .row {
  width: 80%;
  margin: 1.3rem 0;
  display: flex;
  justify-content: space-between;
}

.items-checkbox,
.items-radiobox {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}

.resultado {
  background-color: #98e0aa;
 
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #f1f1f1;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #e1e1e1;
}
h1 {
  text-align: center;
  background-color: green;
  border-radius: 12px;
}
p{
  text-align: center;
  margin-bottom: 5px ;
}
</style>
