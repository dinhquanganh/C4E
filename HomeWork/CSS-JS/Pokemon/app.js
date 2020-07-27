const pokemonAdd = document.getElementById('pokemon-add');
const input = document.getElementById('input');

async function getPokemInfo(pokeId) {
    const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`); 
    const pokeData = await respone.json();
    const pokeName = pokeData.name;
    const pokeContain = document.getElementById('pokemon-container');
            // let x = document.createElement("img");
            // console.log(pokeData.sprites.front_default);
            // x.setAttribute("src", pokeData.sprites.front_default );
            // document.body.appendChild(x);
            // console.log(pokeData.sprites.front_shiny);
    pokeContain.innerHTML+=
    `<div class="one-pokemon">
        <div class="pokemon-name">${pokeName}</div>
        <img src=${pokeData.sprites.front_default} alt="a">
    </div>`;
}
button.addEventListener('click',() => {
    getPokemInfo(Number(input.value));
});
    