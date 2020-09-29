//Organizing the code for assignment IIFT/ 
var pokemonRepository = (function() {
	var pokemonList= [];
	var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
	let modalContainer = document.querySelector ('#pokemon-modal');

	function add(pokemon) {
		pokemonList.push(pokemon)
	};
	
	function getAll() {
		return pokemonList;
	};

	
	function addListItem (pokemon){
		let pokemonList = document.querySelector(".pokemon-list");
		let listPokemon = document.createElement('li');
		let button = document.createElement("button");

		button.innerText = pokemon.name;
		button.classList.add("button");
		listPokemon.appendChild(button);
		pokemonList.appendChild(listPokemon);

		button.addEventListener("click", function(event){showDetails(pokemon);
		});
	};


	function loadList() {
		return fetch(apiUrl).then(function (response) {
		  return response.json();
		}).then(function (json) {
		  json.results.forEach(function (item) {
			let pokemon = {
			  name: item.name,
			  detailsUrl: item.url
			};
			add(pokemon);
			console.log(pokemon);
		  });
		}).catch(function (e) {
		  console.error(e);
		})
	  };

	  function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function (response) {
		  return response.json();
		}).then(function (details) {
		  // Now we add the details to the item
		  item.imageUrl = details.sprites.front_default;
		  item.height = details.height;
		  item.types = details.types;
		}).catch(function (e) {
		  console.error(e);
		});
	  };

	  function showDetails(pokemon) {
		loadDetails(pokemon).then(function () {
		  showModal(pokemon);
		});
	  };

	  function showModal(pokemon) {
		modalContainer.innerHTML = "";
		let modal = document.createElement('div');
		modal.classList.add("modal");

		let closeButtonElement = document.createElement('button');
		closeButtonElement.classList.add("modal-close");
		closeButtonElement.innerHTML = "Back to Pokedex";
		closeButtonElement.addEventListener('click', hideModal);


		let titleElement = document.createElement('h1');
		titleElement.innerHTML = pokemon.name;

		let containerElement = document.createElement('p');
		containerElement.innerHTML = "Hight is " + pokemon.height;


		let myImage = document.createElement('img');
		myImage.src = pokemon.imageUrl
		
		
		
		modal.appendChild(closeButtonElement);
		modal.appendChild(titleElement);
		modal.appendChild(closeButtonElement);
		modal.appendChild(containerElement);
		modal.appendChild(myImage);
		modalContainer.appendChild(modal);


		modalContainer.classList.add("visible");
	};

	window.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modalContainer.classList.contains('visible')) {
			hideModal();
		}
	});

	
	modalContainer.addEventListener('click', (e) => {
		let target = e.target;
		if (target === modalContainer) {
			hideModal();
		}
	});



	function hideModal() {
		modalContainer.classList.remove('visible'); 
	};


	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails,
		showModal: showModal,
		hideModal: hideModal,
	};
})();

// Practising with IIFT call


pokemonRepository.loadList().then(function() {
	// Now the data is loaded!
	pokemonRepository.getAll().forEach(function(pokemon){
	  pokemonRepository.addListItem(pokemon);
	});
  });

  document.querySelector('.button').addEventListener('click', () => {
	  showModal(pokemon);
  });	

