let mainWrapper = document.getElementById("main-wrapper");
//drink 1 fetch
function getMargarita() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=blue margarita')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }

                response.json().then(function (data) {
                     console.log(data)
                    displayMargaritaCocktail(data)
                });
            }
        )
        .catch(function (err) {
            console.log("fetch Error :-S", err);
        })
      

}

getMargarita()
let margaritaSec = document.getElementById("drink1");
function displayMargaritaCocktail(cocktail) {
    margaritaSec.
    console.log(cocktail.drinks[0].strDrink);

    margaritaSec.innerHTML = "";
    console.log(cocktail.drinks[0].strDrink);


    let drinkName = document.createElement("h2");
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    margaritaSec.appendChild(drinkName);
mainWrapper.append(margaritaSec)
    let img = document.createElement("img");
    img.src = cocktail.drinks[0].strDrinkThumb;

    margaritaSec.appendChild(img)

    img.width= "200"
    img.height= "200"
}


//drink 2 fetch
function getGG() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=GG')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }

                response.json().then(function (data) {
                     console.log(data)
                    displayGGCocktail(data)
                });
            }
        )
        .catch(function (err) {
            console.log("fetch Error :-S", err);
        })
      

}

getGG()
let ggSec = document.getElementById("drink2");
function displayGGCocktail(cocktail) {
    ggSec.
    console.log(cocktail.drinks[0].strDrink);

    ggSec.innerHTML = "";
    console.log(cocktail.drinks[0].strDrink);


    let drinkName = document.createElement("h2");
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    ggSec.appendChild(drinkName);
    
mainWrapper.append(ggSec)
    let img = document.createElement("img");
    img.src = cocktail.drinks[0].strDrinkThumb;

    ggSec.appendChild(img)

    img.width= "200"
    img.height= "200"
}

//drink 3 fetch
function getABC() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ABC')
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

getABC()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

}
//drink 4 fetch
function getArizonaTwister() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Arizona Twister')
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

getArizonaTwister()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

}

//drink 5 fetch
function getTurfCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Turf Cocktail')
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

getTurfCocktail()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

}

//drink 6 fetch
function getApricotLady() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Apricot Lady')
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

getApricotLady()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

}

//drink 7 fetch

function getMojito() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Mojito')
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

getMojito()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

}

//drink 8 fetch
function getAdamSunrise() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Adam Sunrise')
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

getAdamSunrise()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

}

//drink 9 fetch
function getOrangeade() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Orangeade')
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

getOrangeade()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

}

//fetch för att söka drink
let search = document.getElementById("search-drink");
let searchBtn = document.getElementById("drink-search")

function getRandomCocktail(drink) {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ drink)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log("Looks like there was a problem. Status Code: " + response.status);
                    return;
                }

                response.json().then(function (data) {
                    // console.log(data)
                    displayRandomCocktail(data)
                });
            }
        )
        .catch(function (err) {
            console.log("fetch Error :-S", err);
        })
        searchBtn.addEventListener("click", ()=>{

            getRandomCocktail(search.value)
        })
       
}

getRandomCocktail()
let drinkSection = document.querySelector("#drink-section")

function displayRandomCocktail(cocktail) {

    drinkSection.innerHTML = "";
    console.log(cocktail.drinks[0].strDrink);


    let drinkName = document.createElement("h2");
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    drinkSection.appendChild(drinkName);

    let img = document.createElement("img");
    img.src = cocktail.drinks[0].strDrinkThumb;

    drinkSection.appendChild(img)

    img.width= "200"
    img.height= "200"
}

/*
//Get random cocktail/*
let randomBtn = document.getElementById()
function getMargarita() {
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

getMargarita()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

}*/

