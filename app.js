console.info("app.js loaded");

document.addEventListener("prechange", function (event) {
    document - querySelector("ons-toolbar .center")
    innerHTML = event.tabItem.getAttribute("label");
});




function getRandomCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
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
}

getRandomCocktail()

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

    let drinkSection = document.querySelector("#drink-section")

    let drinkName = document.createElement("h2");
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    drinkSection.appendChild(drinkName);

    let img = document.createElement("img");
    img.src = cocktail.drinks[0].strDrinkThumb;

    drinkSection.appendChild(img)


//row1
    let row1 = document.createElement("div")
    row1.classList.add("row1")
    drinkSection.appendChild(row1)

    let ingredient1 = document.createElement("p");
    ingredient1.innerHTML = cocktail.drinks[0].strIngredient1;

    let measure1 = document.createElement("p");
    measure1.innerHTML = cocktail.drinks[0].strMeasure1

    row1.appendChild(ingredient1);
    row1.appendChild(measure1);
//row2
    let row2 = document.createElement("div")
    row2.classList.add("row2")
    drinkSection.appendChild(row2)

    let ingredient2 = document.createElement("p");
    ingredient2.innerHTML = cocktail.drinks[0].strIngredient2;

    let measure2 = document.createElement("p");
    measure2.innerHTML = cocktail.drinks[0].strMeasure2

    row2.appendChild(ingredient2);
    row2.appendChild(measure2);
//row3
    let row3 = document.createElement("div")
    row3.classList.add("row3")
    drinkSection.appendChild(row3)

    let ingredient3 = document.createElement("p");
    ingredient3.innerHTML = cocktail.drinks[0].strIngredient3;

    let measure3 = document.createElement("p");
    measure3.innerHTML = cocktail.drinks[0].strMeasure3

    row3.appendChild(ingredient3);
    row3.appendChild(measure3);
//row4
    let row4 = document.createElement("div")
    row4.classList.add("row4")
    drinkSection.appendChild(row4)

    let ingredient4 = document.createElement("p");
    ingredient4.innerHTML = cocktail.drinks[0].strIngredient4;

    let measure4 = document.createElement("p");
    measure4.innerHTML = cocktail.drinks[0].strMeasure4

    row4.appendChild(ingredient4);
    row4.appendChild(measure4);
//row5
    let row5 = document.createElement("div")
    row5.classList.add("row5")
    drinkSection.appendChild(row5)

    let ingredient5 = document.createElement("p");
    ingredient5.innerHTML = cocktail.drinks[0].strIngredient5;

    let measure5 = document.createElement("p");
    measure5.innerHTML = cocktail.drinks[0].strMeasure5

    row5.appendChild(ingredient5);
    row5.appendChild(measure5);
//row6
let row6 = document.createElement("div")
row6.classList.add("row6")
drinkSection.appendChild(row6)

    let ingredient6 = document.createElement("p");
    ingredient6.innerHTML = cocktail.drinks[0].strIngredient6;

    let measure6 = document.createElement("p");
    measure6.innerHTML = cocktail.drinks[0].strMeasure6

    row6.appendChild(ingredient6);
    row6.appendChild(measure6);
//row7
let row7 = document.createElement("div")
row7.classList.add("row7")
drinkSection.appendChild(row7)

    let ingredient7 = document.createElement("p");
    ingredient7.innerHTML = cocktail.drinks[0].strIngredient7;

    let measure7 = document.createElement("p");
    measure7.innerHTML = cocktail.drinks[0].strMeasure7

    row7.appendChild(ingredient7);
    row7.appendChild(measure7);
//row8
let row8 = document.createElement("div")
row8.classList.add("row8")
drinkSection.appendChild(row8)

    let ingredient8 = document.createElement("p");
    ingredient8.innerHTML = cocktail.drinks[0].strIngredient8;

    let measure8 = document.createElement("p");
    measure8.innerHTML = cocktail.drinks[0].strMeasure8

    row8.appendChild(ingredient8);
    row8.appendChild(measure8);
//row9
let row9 = document.createElement("div")
row9.classList.add("row9")
drinkSection.appendChild(row9)

    let ingredient9 = document.createElement("p");
    ingredient9.innerHTML = cocktail.drinks[0].strIngredient9;

    let measure9 = document.createElement("p");
    measure9.innerHTML = cocktail.drinks[0].strMeasure9

    row9.appendChild(ingredient9);
    row9.appendChild(measure9);
//row10
let row10 = document.createElement("div")
row10.classList.add("row10")
drinkSection.appendChild(row10)

    let ingredient10 = document.createElement("p");
    ingredient10.innerHTML = cocktail.drinks[0].strIngredient10;

    let measure10 = document.createElement("p");
    measure10.innerHTML = cocktail.drinks[0].strMeasure10

    row10.appendChild(ingredient10);
    row10.appendChild(measure10);
//row11
let row11 = document.createElement("div")
row11.classList.add("row11")
drinkSection.appendChild(row11)

    let ingredient11 = document.createElement("p");
    ingredient11.innerHTML = cocktail.drinks[0].strIngredient11;

    let measure11 = document.createElement("p");
    measure11.innerHTML = cocktail.drinks[0].strMeasure11

    row11.appendChild(ingredient11);
    row11.appendChild(measure11);
//row12
let row12 = document.createElement("div")
row12.classList.add("row12")
drinkSection.appendChild(row12)

    let ingredient12 = document.createElement("p");
    ingredient12.innerHTML = cocktail.drinks[0].strIngredient12;

    let measure12 = document.createElement("p");
    measure12.innerHTML = cocktail.drinks[0].strMeasure12

    row12.appendChild(ingredient12);
    row12.appendChild(measure12);
//row13
let row13 = document.createElement("div")
row13.classList.add("row13")
drinkSection.appendChild(row13)

    let ingredient13 = document.createElement("p");
    ingredient13.innerHTML = cocktail.drinks[0].strIngredient13;

    let measure13 = document.createElement("p");
    measure13.innerHTML = cocktail.drinks[0].strMeasure13

    row13.appendChild(ingredient13);
    row13.appendChild(measure13);
//row14
let row14 = document.createElement("div")
row14.classList.add("row14")
drinkSection.appendChild(row14)

    let ingredient14 = document.createElement("p");
    ingredient14.innerHTML = cocktail.drinks[0].strIngredient14;

    let measure14 = document.createElement("p");
    measure14.innerHTML = cocktail.drinks[0].strMeasure14

    row14.appendChild(ingredient14);
    row14.appendChild(measure14);
//row15
let row15 = document.createElement("div")
row15.classList.add("row15")
drinkSection.appendChild(row15)

    let ingredient15 = document.createElement("p");
    ingredient15.innerHTML = cocktail.drinks[0].strIngredient15;

    let measure15 = document.createElement("p");
    measure15.innerHTML = cocktail.drinks[0].strMeasure15

    row15.appendChild(ingredient15);
    row15.appendChild(measure15);
}