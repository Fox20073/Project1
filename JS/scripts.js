//Organizing the code for assignment IIFT/ 
var pokemonRepository = (function() {
	var pokemonList= [
		{
			name: "Bulbasar", 
			hight: 2.04, 
			type: ["Grass", " Poison"]	
		},
		{
			name: "Charmander", 
			hight: 2, 
			type: "Fire"
		},
		{
			name: "Squirtle", 
			hight: 1.08, 
			type: "water"
		},
		{
			name: "Pikachu", 
			hight: 1.04,
			type: "Electric"
		}
	];

	function getAll() {
		return pokemonList;
	};

	function add(pokemon) {
		pokemonList.push(pokemon)
	};
	function addListItem (pokemon){
		let pokedexList = document.querySelector(".pokemon-list");
		let listPokedex = document.createElement('li');
		let button = document.createElement("button");

		button.innerText = pokemon.name;
		button.classList.add("button");
		listPokedex.appendChild(button);
		pokedexList.appendChild(listPokedex);

		button.addEventListener("click", function(event){showDetails(pokemon.name);});
	};

	function showDetails(pokemon){
		console.log(pokemon)
	} 


	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem,
		showDetails: showDetails
	};
})();

// Practising with IIFT call




pokemonRepository.add({name: "Psy Duck", hight: 2, type:"Electricity"});



pokemonRepository.add({name: "Pidgey", hight: 1, type:["Flying", "Air"]});

pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon)
});


