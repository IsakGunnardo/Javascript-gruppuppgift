let mainWrapper = document.getElementById("main-wrapper");



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

getCocktail("Arizona Twister");
getCocktail("Turf Cocktail");
getCocktail("Apricot Lady");
getCocktail("Mojito");
getCocktail("Adam Sunrise");
getCocktail("Orangeade");

function displayCocktailList(cocktail) {
    let cocktailDiv = document.createElement("div")

        console.log(cocktail.drinks[0].strDrink);

    cocktailDiv.innerHTML = "";
    console.log(cocktail.drinks[0].strDrink);


    let drinkName = document.createElement("h2");
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    cocktailDiv.appendChild(drinkName);

    let img = document.createElement("img");
    img.src = cocktail.drinks[0].strDrinkThumb;
    cocktailDiv.appendChild(img)

    mainWrapper.append(cocktailDiv)

    img.width = "200"
    img.height = "200"
}


//fetch för att söka drink
let search = document.getElementById("search-drink");
let searchBtn = document.getElementById("drink-search")

function searchCocktail(drink) {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }

                response.json().then(function (data) {
                    // console.log(data)
                    displaySearchCocktail(data)
                });
            }
        )
        .catch(function (err) {
            console.log("fetch Error :-S", err);
        })
    searchBtn.addEventListener("click", () => {

        searchCocktail(search.value)
    })

}

searchCocktail()
let drinkSection = document.querySelector("#drink-section")

function displaySearchCocktail(cocktail) {

    drinkSection.innerHTML = "";
    console.log(cocktail.drinks[0].strDrink);


    let drinkName = document.createElement("h2");
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    drinkSection.appendChild(drinkName);

    let img = document.createElement("img");
    img.src = cocktail.drinks[0].strDrinkThumb;

    drinkSection.appendChild(img)

    img.width = "200"
    img.height = "200"
}


//Get random cocktail/*
let randomBtn = document.getElementById("random-btn")
function getRandomCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }

                response.json().then(function (data) {
                     console.log(data)
                    displayRandomCocktail(data)
                });
            }
        )
        .catch(function (err) {
            console.log("fetch Error :-S", err);
        })
      
        
}

randomBtn.addEventListener("click",() => {
    getRandomCocktail();
    displayRandomCocktail(cocktail)
})


function displayRandomCocktail(cocktail) {
    drinkSection.innerHTML = "";
    console.log(cocktail.drinks[0].strDrink);


    let drinkName = document.createElement("h2");
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    drinkSection.appendChild(drinkName);

    let img = document.createElement("img");
    img.src = cocktail.drinks[0].strDrinkThumb;

    drinkSection.appendChild(img)

    img.width = "200"
    img.height = "200"
}