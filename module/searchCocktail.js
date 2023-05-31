//fetch för att söka drink
let mainWrapper = document.getElementById("main-wrapper");
//let drinkSection = document.querySelector("#drink-section")
export let search = document.getElementById("search-drink");
export let searchBtn = document.getElementById("drink-search")

export function searchCocktail(drink) {
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
export function displaySearchCocktail(cocktail) {
    mainWrapper.innerHTML = "";
    let main = document.createElement("main");

    let article = document.createElement("article");
    article.classList.add("product-detail");

    let title = document.createElement("h3");
    let thumbnail = document.createElement("img");

    let instructions = document.createElement("p")

 

    /** kan vara ett alternativ 
     let coctails = [];
     for(i=0; i < 15 ; i++) {
        document.createElement("div");
        document.createElement("span");
        coctails.classList.add("infodrink");
        coctails.push()
     }
     
     */
     let ingredient = cocktail.drinks[0];
    
    let ingredient1 = document.createElement("div");
    let ingredient2 = document.createElement("div");
    let ingredient3 = document.createElement("div");
    let ingredient4 = document.createElement("div");
    let ingredient5 = document.createElement("div");
    let ingredient6 = document.createElement("div");
    let ingredient7 = document.createElement("div");
    let ingredient8 = document.createElement("div");
    let ingredient9 = document.createElement("div");
    let ingredient10 = document.createElement("div");
    let ingredient11 = document.createElement("div");
    let ingredient12 = document.createElement("div");
    let ingredient13 = document.createElement("div");
    let ingredient14 = document.createElement("div");
    let ingredient15 = document.createElement("div");

    let measure1 = document.createElement("span");
    let measure2 = document.createElement("span");
    let measure3 = document.createElement("span");
    let measure4 = document.createElement("span");
    let measure5 = document.createElement("span");
    let measure6 = document.createElement("span");
    let measure7 = document.createElement("span");
    let measure8 = document.createElement("span");
    let measure9 = document.createElement("span");
    let measure10 = document.createElement("span");
    let measure11 = document.createElement("span");
    let measure12 = document.createElement("span");
    let measure13 = document.createElement("span");
    let measure14 = document.createElement("span");
    let measure15 = document.createElement("span");

    ingredient1.classList.add("infodrink");
    ingredient2.classList.add("infodrink");
    ingredient3.classList.add("infodrink");
    ingredient4.classList.add("infodrink");
    ingredient5.classList.add("infodrink");
    ingredient6.classList.add("infodrink");
    ingredient7.classList.add("infodrink");
    ingredient8.classList.add("infodrink");
    ingredient9.classList.add("infodrink");
    ingredient10.classList.add("infodrink");
    ingredient11.classList.add("infodrink");
    ingredient12.classList.add("infodrink");
    ingredient13.classList.add("infodrink");
    ingredient14.classList.add("infodrink");
    ingredient15.classList.add("infodrink");
    instructions.classList.add("infodrink");


    thumbnail.width = "400";
    thumbnail.height = "400";
    thumbnail.src = cocktail.drinks[0].strDrinkThumb;
    instructions.innerHTML = cocktail.drinks[0].strInstructions
    title.innerHTML = cocktail.drinks[0].strDrink;


    //Hur kan man effektivisera denna koden? så att det inte blir massa kod?
    ingredient1.innerHTML = cocktail.drinks[0].strIngredient1;
    ingredient2.innerHTML = cocktail.drinks[0].strIngredient2;
    ingredient3.innerHTML = cocktail.drinks[0].strIngredient3;
    ingredient4.innerHTML = cocktail.drinks[0].strIngredient4;
    ingredient5.innerHTML = cocktail.drinks[0].strIngredient5;
    ingredient6.innerHTML = cocktail.drinks[0].strIngredient6;
    ingredient7.innerHTML = cocktail.drinks[0].strIngredient7;
    ingredient8.innerHTML = cocktail.drinks[0].strIngredient8;
    ingredient9.innerHTML = cocktail.drinks[0].strIngredient9;
    ingredient10.innerHTML = cocktail.drinks[0].strIngredient10;
    ingredient11.innerHTML = cocktail.drinks[0].strIngredient11;
    ingredient12.innerHTML = cocktail.drinks[0].strIngredient12;
    ingredient13.innerHTML = cocktail.drinks[0].strIngredient13;
    ingredient14.innerHTML = cocktail.drinks[0].strIngredient14;
    ingredient15.innerHTML = cocktail.drinks[0].strIngredient15;

    measure1.innerHTML = cocktail.drinks[0].strMeasure1;
    measure2.innerHTML = cocktail.drinks[0].strMeasure2;
    measure3.innerHTML = cocktail.drinks[0].strMeasure3;
    measure4.innerHTML = cocktail.drinks[0].strMeasure4;
    measure5.innerHTML = cocktail.drinks[0].strMeasure5;
    measure6.innerHTML = cocktail.drinks[0].strMeasure6;
    measure7.innerHTML = cocktail.drinks[0].strMeasure7;
    measure8.innerHTML = cocktail.drinks[0].strMeasure8;
    measure9.innerHTML = cocktail.drinks[0].strMeasure9;
    measure10.innerHTML = cocktail.drinks[0].strMeasure10;
    measure11.innerHTML = cocktail.drinks[0].strMeasure11;
    measure12.innerHTML = cocktail.drinks[0].strMeasure12;
    measure13.innerHTML = cocktail.drinks[0].strMeasure13;
    measure14.innerHTML = cocktail.drinks[0].strMeasure14;
    measure15.innerHTML = cocktail.drinks[0].strMeasure15;



    ingredient1.append(measure1)
    ingredient2.append(measure2)
    ingredient3.append(measure3)
    ingredient4.append(measure4)
    ingredient5.append(measure5)
    ingredient6.append(measure6)
    ingredient7.append(measure7)
    ingredient8.append(measure8)
    ingredient9.append(measure9)
    ingredient10.append(measure10)
    ingredient11.append(measure11)
    ingredient12.append(measure12)
    ingredient13.append(measure13)
    ingredient14.append(measure14)
    ingredient15.append(measure15)



    article.append(title, thumbnail, instructions,ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7,
        ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15,instructions);
    main.append(article);

    mainWrapper.append(main);
}