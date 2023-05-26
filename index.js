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
                    displayRandomCocktail(data)
                });
            }
        )
        .catch(function (err) {
            console.log("fetch Error :-S", err);
        })
      

}

getGG()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

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
let search = document.getElementById("src");
let searchBtn = document.getElementById("src-btn")

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
        }).reload(); 
       
}

getRandomCocktail()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);
}