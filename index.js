const container = document.getElementById("container");
const searchInput = document.getElementById("searchCocktail");
const randomBtn = document.getElementById("randomBtn");
const searchBtn = document.getElementById("searchBtn");
const homeBtn = document.getElementById("homeBtn");
const aboutUs = document.getElementById("aboutUs");
const contact = document.getElementById("contact");
const cocktailDiv = document.getElementById("cocktailDiv");
let timesSearched = 0;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

const urlRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const urlName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

hamburger.addEventListener("click", e => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

HomePageCoctails()

////// EVENTS ////////

searchBtn.addEventListener("click", e => {
  cleanSlate(container)

  if (searchInput.value !== "") {
    getCocktailByName(searchInput.value);
  }

  searchInput.value = "";
  searchInput.innerHTML = "";

  timesSearched++;
  if (timesSearched > 9) {
    window.location.href = "https://alcoholics-anonymous.eu/meetings/?tsml-region=sweden";
  }

})

randomBtn.addEventListener("click", e => {
  cleanSlate(cocktailDiv)
  getCocktailRandom()
})

homeBtn.addEventListener("click", e => {
  HomePageCoctails()
})

//let homePageDrinks = document.getElementsByClassName("homePageDrinks");

/*cocktailDiv.addEventListener("click", e => {
  //if (e.target.tagName === "article") {
  cleanSlate(cocktailDiv)
  getCocktailByName("GG")
  console.log("hej")

  //}

})*/



///////// FUNCTIONS /////////
function HomePageCoctails() {
  cleanSlate(cocktailDiv)

  homepagefetch("Foxy Lady");
  homepagefetch("Turf Cocktail");
  homepagefetch("Apricot Lady");
  homepagefetch("Mojito");
  homepagefetch("Planter’s Punch");
  homepagefetch("Orangeade");
  homepagefetch("Gin Fizz")
  homepagefetch("Shot-gun")
  homepagefetch("Margarita")
}

function cleanSlate(clearHtml) {
  clearHtml.innerHTML = "";
}
function getCocktailRandom() {
  fetch(urlRandom)
    .then(response => {
      if (response.status !== 200) {
        alert("error")
      }
      return response.json()
    })
    .then(drinks => {

      getACoctail(drinks)

    })
    .catch(err => {
      console.log(err);
    })
    cleanSlate(container);
}

function getCocktailByName(namn) {
  fetch(urlName + namn)
    .then(response => {
      if (response.status !== 200) {
        alert("error")
      }
      return response.json()
    })
    .then(drink => {
      console.log(drink);
      getACoctail(drink)
    })
    .catch(err => {
      console.log(err);
    })
}

function homepagefetch(namn) {
  fetch(urlName + namn)
    .then(response => {
      if (response.status !== 200) {
        alert("error")
      }
      return response.json()
    })
    .then(drink => {      
      let article = document.createElement("article")

      article.addEventListener("click", () => {        
        cleanSlate(cocktailDiv)
        getACoctail(drink)
      });
      cocktailDiv.append(article)
      article.classList.add("homePageDrinks")


      let drinkName = document.createElement("h3")
      drinkName.innerHTML = drink.drinks[0].strDrink;

      let img = document.createElement("img");
      img.src = drink.drinks[0].strDrinkThumb;
      img.classList.add("homePageImg")

      let drinkRecipe = document.createElement("div")
      drinkRecipe.classList.add("drinkRecipe")


      article.append(drinkName, img, drinkRecipe)


    })

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
  instructions.innerHTML = drink.drinks[0].strInstructions
  drinkRecipe.appendChild(instructions);
}







