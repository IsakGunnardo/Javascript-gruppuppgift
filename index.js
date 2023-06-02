const container = document.getElementById("container");
const searchInput = document.getElementById("searchCoctail");
const randomBtn = document.getElementById("randomBtn");
const searchBtn = document.getElementById("searchBtn");
const homeBtn = document.getElementById("homeBtn");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

const urlRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const urlName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

hamburger.addEventListener ("click", e => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

HomePageCoctails()

////// EVENTS ////////

searchBtn.addEventListener("click", e => {
    cleanslate(container)
    getCocktailByName(searchInput.value)
    searchInput.innerHTML = "";   
})

randomBtn.addEventListener("click", e => {
    cleanslate(container)
    getCocktailRandom()    
})
homeBtn.addEventListener("click", e => {
  HomePageCoctails()   
})

///////// FUNCTIONS /////////

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
    .then(drink => {
      getACoctail(drink)
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

function getACoctail(drink) {

    let article = document.createElement("article")
    container.append(article)
    
    let drinkName = document.createElement("h3")
    drinkName.innerHTML = drink.drinks[0].strDrink;

    let img = document.createElement("img");
    img.src = drink.drinks[0].strDrinkThumb;
    
    let drinkRecipe = document.createElement("div")     
        drinkRecipe.classList.add("drinkRecipe")

    article.append(drinkName, img, drinkRecipe)  

 for (let i = 1; i <= 15; i++) {
          let ingredient = drink.drinks[0]['strIngredient' + i];
          let measure = drink.drinks[0]['strMeasure' + i];
          if (ingredient && measure) {
            let row = document.createElement('div');
             row.classList.add('row' + i);
             drinkRecipe.appendChild(row);

            let ingredientElement = document.createElement("p");
            ingredientElement.innerHTML = ingredient;
            drinkRecipe.appendChild(ingredientElement);

            let measureElement = document.createElement("p");
             measureElement.innerHTML = measure;
            drinkRecipe.appendChild(measureElement);     
  } 
 
}         
   let instructions = document.createElement("div")
    instructions.innerHTML= drink.drinks[0].strInstructions
    drinkRecipe.appendChild(instructions);
}  



  
        

