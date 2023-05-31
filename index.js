const container = document.getElementById("container");
let searchInput = document.getElementById("searchCoctail");
let randomBtn = document.getElementById("randomBtn");
let searchBtn = document.getElementById("searchBtn");
let homeBtn = document.getElementById("homeBtn");

let urlRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
let urlName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

HomePageCoctails()

searchBtn.addEventListener("click", e => {
    cleanslate(container)
    getCocktailByName(searchInput.value)
   
})

randomBtn.addEventListener("click", e => {
    cleanslate(container)
    getCocktailRandom()
   
})
homeBtn.addEventListener("click", e => {
    cleanslate(container)
    getCocktailByName("Foxy Lady");
    getCocktailByName("Turf Cocktail");
    getCocktailByName("Apricot Lady");
    getCocktailByName("Mojito");
    getCocktailByName("Planter’s Punch");
    getCocktailByName("Orangeade");
    getCocktailByName("Gin Fizz")
    getCocktailByName("Shot-gun")
    getCocktailByName("Margarita")
   
})

function cleanslate(clearHtml) {
    clearHtml.innerHTML= "";
}
function getCocktailRandom() {
    fetch(urlRandom)
    .then(response => {
      if (response.status !== 200) {
        alert ("error")
      }
      return response.json()
    })
    .then(drinks => {
      console.log(drinks);
      getACoctail(drinks)
    })
    .catch(err => {
      console.log(err);
    })
  }
  function getCocktailByName(namn) {
    fetch(urlName + namn)
    .then(response => {
      if (response.status !== 200) {
        alert ("error")
      }
      return response.json()
    })
    .then(drinks => {
      console.log(drinks);
      getACoctail(drinks)
    })
    .catch(err => {
      console.log(err);
    })
  }



function HomePageCoctails() {
    cleanslate(container)
    getCocktailByName("Foxy Lady");
    getCocktailByName("Turf Cocktail");
    getCocktailByName("Apricot Lady");
    getCocktailByName("Mojito");
    getCocktailByName("Planter’s Punch");
    getCocktailByName("Orangeade");
    getCocktailByName("Gin Fizz")
    getCocktailByName("Shot-gun")
    getCocktailByName("Margarita")
    

}
function getACoctail(drink, style) {


    let article = document.createElement("article")
    container.append(article)
     article.style = "background: lightblue;"
    let drinkName = document.createElement("h3")
    drinkName.innerHTML = drink.drinks[0].strDrink;

    let img = document.createElement("img");
    img.src = drink.drinks[0].strDrinkThumb;
    
    let drinkRecipe = document.createElement("div")
    drinkRecipe.style = style
    

    article.append(drinkName, img, drinkRecipe)

    let ingredient1 = document.createElement("div")
    ingredient1.innerHTML= drink.drinks[0].strIngredient1
    let ingredient2 = document.createElement("div")
    ingredient2.innerHTML= drink.drinks[0].strIngredient2
    let ingredient3 = document.createElement("div")
    ingredient3.innerHTML= drink.drinks[0].strIngredient3
    let ingredient4 = document.createElement("div")
    ingredient4.innerHTML= drink.drinks[0].strIngredient4
    let ingredient5 = document.createElement("div")
    ingredient5.innerHTML= drink.drinks[0].strIngredient5
    let ingredient6 = document.createElement("div")
    ingredient6.innerHTML= drink.drinks[0].strIngredient6
    let ingredient7 = document.createElement("div")
    ingredient7.innerHTML=  drink.drinks[0].strIngredient7
    let ingredient8 = document.createElement("div")
    ingredient8.innerHTML= drink.drinks[0].strIngredient8

  

    let measure1 = document.createElement("div")
    measure1.innerHTML= drink.drinks[0].strMeasure1
    let measure2 = document.createElement("div")
    measure2.innerHTML= drink.drinks[0].strMeasure2
    let measure3 = document.createElement("div")
    measure3.innerHTML= drink.drinks[0].strMeasure3 
    let measure4 = document.createElement("div")
    measure4.innerHTML= drink.drinks[0].strMeasure4 
    let measure5 = document.createElement("div")
    measure5.innerHTML= drink.drinks[0].strMeasure5 
    let measure6 = document.createElement("div")
    measure6.innerHTML= drink.drinks[0].strMeasure6 
    let measure7 = document.createElement("div")
    measure7.innerHTML= drink.drinks[0].strMeasure7 
    let measure8 = document.createElement("div")
    measure8.innerHTML= drink.drinks[0].strMeasure8 

    let instructions = document.createElement("div")
    instructions.innerHTML= drink.drinks[0].strInstructions

     drinkRecipe.append(ingredient1,measure1, ingredient2, measure2, ingredient3, measure3 ,ingredient4, measure4 ,
        ingredient5, measure5 ,ingredient6, measure6 ,ingredient7, measure7 ,ingredient8,measure8, instructions)
       //har en ide att slippa göra domen för att displaya bara start bilden och namnet på drinken. 
       //vill istället att man ska kunna välja style dipslay none och flippa mellan display none block när man vill från denna funktion 
       //provade att sätta parmetern och bara då skirva in none när man vill när man skriver ut funktionen men verkade inte funka 
        drinkRecipe.style.display = style
        
}

//ett alternativ kan också vara att dela upp koden över i två funktioner och kalla på den ena funktionen i den andra. 
//man vill inte alltid ha hela receptet så de kan var aen funktion där man också kallar på den andra funktionen 