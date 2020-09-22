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

	return {
		getAll: getAll,
		add: add
	};
})();

// Practising with IIFT call

console.log (pokemonRepository.getAll());

pokemonRepository.add({name: "Psy Duck", hight: 2, type:"Electricity"});

console.log (pokemonRepository.getAll());
	
// Using IF ELSE function with forEach() statement amd IIFT
	pokemonRepository.getAll().forEach(function(pokemon) {
		if (pokemon.hight <= 1.5){
			document.write("<p class = pokemon>" + pokemon.name + " hight is " + pokemon.hight + " this is small pokemon.</p>");
		} else if (pokemon.hight > 1.5 && pokemon.hight <= 2) {
			document.write("<p class = pokemon>" + pokemon.name + " hight is " + pokemon.hight +" this is average pokemon.</p>")
		} else {
			document.write("<p class = pokemon>"  + pokemon.name + " hight is " + pokemon.hight +" this is BIG pokemon!!!</p>" )
		}
	});