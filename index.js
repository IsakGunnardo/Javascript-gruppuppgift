let mainWrapper = document.getElementById("main-wrapper");

//let drinkSection = document.querySelector("#drink-section")
let homeBtn = document.querySelector("#home-btn");
import { searchCocktail } from "./module/searchCocktail.js";
import { search } from "./module/searchCocktail.js";
import { searchBtn } from "./module/searchCocktail.js";
import { randomBtn } from "./module/randomCocktail.js";
import { getRandomCocktail } from "./module/randomCocktail.js";
import { displaySearchCocktail } from "./module/searchCocktail.js";

function getCocktail(name) {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }

                response.json().then(function (data) {
                    console.log(data)
                    displayCocktailList(data)
                });
            }
        )
        .catch(function (err) {
            console.log("fetch Error :-S", err);
        })
}
//Få alla 9 drinkar att synas på startsidan just nu syns bara 1 cocktail
getCocktail("Foxy Lady");
getCocktail("Turf Cocktail");
getCocktail("Apricot Lady");
getCocktail("Mojito");
getCocktail("Planter’s Punch");
getCocktail("Orangeade");
getCocktail("Gin Fizz")
getCocktail("Shot-gun")
getCocktail("Margarita")



homeBtn.addEventListener("click", () =>{
    mainWrapper.innerHTML = ""; //yay
    getCocktail("Foxy Lady");
    getCocktail("Turf Cocktail");
    getCocktail("Apricot Lady");
    getCocktail("Mojito");
    getCocktail("Planter’s Punch");
    getCocktail("Orangeade");
    getCocktail("Gin Fizz")
    getCocktail("Shot-gun")
    getCocktail("Margarita")
    
    displayCocktailList(cocktail)

})

function displayCocktailList(cocktail) {

    let main = document.createElement("main");
    main.classList.add("main-home-style")
    let thumbnail = document.createElement("img");

    let title = document.createElement("h3");

    thumbnail.width = "200";
    thumbnail.height = "200";
    thumbnail.src = cocktail.drinks[0].strDrinkThumb;

    title.innerHTML = cocktail.drinks[0].strDrink;
    
    
    main.append(title, thumbnail);

    mainWrapper.append(main);

    //title.addEventListener("click", )
    thumbnail.addEventListener("click", () => {
        displayOneCocktail(cocktail);

       });
    }

function displayOneCocktail(cocktail) {
    console.log("hej")

    let main = document.createElement("main");
    //mainWrapper.append(main)    
    //    main.innerHTML ="";

    let title = document.createElement("h3"); 
    let thumbnail = document.createElement("img");

    let instructions = document.createElement("p");
    let ingredient1 = document.createElement("div");
    
    let measure1 = document.createElement("span");

    
    title.innerHTML = cocktail.drinks[0].strDrink;
    thumbnail.src = cocktail.drinks[0].strDrinkThumb;
    instructions.innerHTML = cocktail.drinks[0].strInstructions;
    ingredient1.innerHTML = cocktail.drinks[0].stringredient1;
    measure1.innerHTML = cocktail.drinks[0].strmeasure1;

    main.append(title, thumbnail,instructions,ingredient1, measure1);

    
}