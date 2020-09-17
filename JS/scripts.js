//Organizing the code for assigments/ 

let repository = [
	{
		name: "Bulbasar", 
		hight: 2.04, 
		type: ["Grass", "poison"]	
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
 
// Using if statment to specify pokemons by size /

for (let i=0; i < repository.length; i++){
	if (repository[i].hight <= 1.5){
		console.log (repository[i].name + " " + repository[i].type + " is small pokemon! ");
		document.write (repository[i].name + " is small pokemon! </br>" );
	} else if (repository[i].hight > 1.5 && repository[i].hight <= 2){
		console.log (repository[i].name + " " + repository[i].type + " is avarege pokemon! ")
		document.write (repository[i].name + " is avarege pokemon! </br>");
	} else {
		console.log (repository[i].name + " " + repository[i].type + " is HUGE pokemon!!! ")
		document.write (repository[i].name + " is BIG pokemon!!!! </br>");
	}
}