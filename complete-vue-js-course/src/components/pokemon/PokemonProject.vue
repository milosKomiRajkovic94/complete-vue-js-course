<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import PokemonCards from './PokemonCards.vue';

const api = "https://pokeapi.co/api/v2/";
const ids = [10, 32, 1];
interface Pokemon {
    id: number;
    name: string;
    sprite: string;
    types: Array<string>;
}
const pokemons = ref<Array<Pokemon>>([]);
const evolutions = ref<Array<Pokemon>>([]);
const selectedId = ref<number | null>(null);

const fetchPokemon = async (idsToFetch = ids) => {
    const response = idsToFetch.map(async id => await fetch(`${api}/pokemon/${id}`));
    const data = await Promise.all(response.map(res => res.then(r => r.json())));
    return data.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.other['official-artwork'].front_default,
        types: pokemon.types.map((typeInfo: { type: { name: string }}) => typeInfo.type.name)
    })) as Array<Pokemon>;
};

const fetchEvolutions = async (pokemon: { id: number }) => {
    selectedId.value = pokemon.id;
    evolutions.value = await fetchPokemon([pokemon.id + 1, pokemon.id + 2]);
}

onBeforeMount(async () => {
    pokemons.value = await fetchPokemon() as unknown as Array<Pokemon>;
    console.log(pokemons.value);
});

</script>

<template>
    <PokemonCards 
        :cards="pokemons" 
        :selectedId="selectedId ?? -1"
        @click="fetchEvolutions"
    />
    <PokemonCards 
        :cards="evolutions" 
        :selectedId="-1"
    />
</template>
