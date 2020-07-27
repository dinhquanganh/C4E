const pokemonAdd = document.getElementById('pokemon-add');
const input = document.getElementById('input');
const pokeContain = document.getElementById('pokemon-container');
const deletePoke = document.getElementsByClassName('del');

pokeContain.innerHTML = localStorage.getItem('pokePoin')

button.addEventListener('click', async function getPokemInfo(pokeId) {
    if (Number(input.value) <= 807 & Number(input.value) > 0) {
        getPokemInfo(Number(input.value));
    }

    async function getPokemInfo(pokeId) {
        const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        const pokeData = await respone.json();
        const pokeName = pokeData.name;
        pokeContain.innerHTML +=
            `<div class="one-pokemon">
        <div class="pokemon-name">${pokeName}</div>
        <img src=${pokeData.sprites.front_default} alt="a">
        <button class ="del">DELETE</button>
        </div>`;
        let htmlText = pokeContain.innerHTML;
        localStorage.setItem('pokePoin', htmlText);
    };


});

pokeContain.addEventListener('click', (e) => {
    if (e.target.classList.contains('del')) {
        e.target.parentElement.remove();
        htmlText = pokeContain.innerHTML;
        localStorage.setItem('pokePoin', htmlText);
    }
});