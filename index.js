//////// DOM VARIABLER  ////////

const header = document.getElementById("header");
const container = document.getElementById("container");
const randomBtn = document.getElementById("randomBtn");
const searchBtn = document.getElementById("searchBtn");
const homeBtn = document.getElementById("homeBtn");
const aboutUs = document.getElementById("aboutUs");
const contact = document.getElementById("contact");
const cocktailDiv = document.getElementById("cocktailDiv");
const form = document.getElementById("search-form");
const x = window.matchMedia("(max-width: 1500px)")

////////  VARIABLER FOR MODAL   ////////

let aboutModal = document.getElementById("about-us-div");
let aboutUsBtn = document.getElementById("aboutUs");
let contactModal = document.getElementById("contact-div");
let contactBtn = document.getElementById("contact");
let closeAboutUs = document.getElementById("closeaboutus");
let closeContact = document.getElementById("closecontact");


//////// VARIABEL FOR SCROLL BUTTON ////////

let scrollBtn = document.getElementById("scrollBtn");


//////// VARIABEL DRINK COUNT ////////
let timesSearched = 0;

//////// VARIABLER FOR HAMBURGER MENU ////////
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

//////// VARIABLER TO FETCH URL ////////
const urlRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const urlName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

//////// INITIATION FUNCTIONS     ////////

HomePageCoctails()
scrollInitiation()


//////// EVENT HAMBURGER ///////////
hamburger.addEventListener("click", e => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})
//////// CLOSE LINKS ////////
document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}))

////////         MODAL EVENTS.              ////////

aboutUsBtn.addEventListener("click", e => {
  aboutModal.style.display = "block"
});

closeAboutUs.addEventListener("click", e => {
  aboutModal.style.display = "none"
})

window.addEventListener("click", e => {
  if (e.target == aboutModal) {
    aboutModal.style.display = "none"
  }
});

contactBtn.addEventListener("click", e => {
  contactModal.style.display = "block"
});

closeContact.addEventListener("click", e => {
  contactModal.style.display = "none"

});

window.addEventListener("click", e => {
  if (e.target == contactModal) {
    contactModal.style.display = "none"
  }
});



//////// EVENT SEARCH BUTTON ////////
//////// home button        ////////
document.querySelector(".logo").addEventListener(("click"), e => {
  cleanSlate(container)
  cleanSlate(form)
  HomePageCoctails()
});

homeBtn.addEventListener("click", e => {
  cleanSlate(form)
  cleanSlate(container)
  HomePageCoctails()

})

searchBtn.addEventListener("click", e => {
  e.preventDefault()
  cleanSlate(container)
  cleanSlate(form)
  searchForm() 

})


//////// EVENT RANDOM BUTTON, GET A RANDOM COCKTAIL //////// 

randomBtn.addEventListener("click", e => {
  cleanSlate(container)
  cleanSlate(form)
  getCocktailRandom() //connect fetchen

  if (x.matches) {
    randomDrinkBtn()
  }

})


//////// SCROLL EVENT ////////

window.addEventListener("scroll", () => {
  scrollFunction();
});

scrollBtn.addEventListener("click", () => {
  differentBrowserFunction();
});


///////// FUNCTIONS /////////

//////// FUNCTION FOR A RANDOM DRINK. CLEARS AND CREATES ////////
// 1 Malin
function randomDrinkBtn() {
  cleanSlate(form)
   let randomDrinkBtn2 = document.createElement("button")
   form.append(randomDrinkBtn2)
   randomDrinkBtn2.innerText = "Get a random Cocktail"
   randomDrinkBtn2.classList.add("drinkBtn", "randomDrinkBtn2")
   randomDrinkBtn2.style.width = "300px"
 
   randomDrinkBtn2.addEventListener("click", e => {
     cleanSlate(container)
     getCocktailRandom() //connect fetchen
     if (x.matches) {
       randomDrinkBtn()
     }
   })
 
 }

 function getCocktailRandom() {
  fetch(urlRandom)
    .then(response => {
      if (response.status !== 200) {//200 Code that displays that code works T_T
        alert("error")
      }
      return response.json()
    })
    .then(drinks => getACoctail(drinks)) // kallar på funktionen som skappar drinken
    .catch(err => {
      console.log(err);
    })
}
//// HOMEPAGE FETCH FOR THE SELECTED DRINKS              /////
/// FETCH FOR RANDOM DRINKS AND SEARCH OPTION FOR DRINKS ////
//2 - modaler Matias
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

function cleanSlate(clearHtml) { //Clears HTML -_-
  clearHtml.innerHTML = "";
}
 //

// 3 Isak


function getCocktailByName(namn) {
  fetch(urlName + namn)
    .then(response => {
      if (response.status !== 200) {
        alert("error")
      }
      return response.json()
    })
    .then(drink => getACoctail(drink))
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
      container.append(article)

      //////// EVENT THAT OPENS UP THE ENTIRE RECIPE FOR THE SELECTED DRINK //////// 

      article.addEventListener("click", () => {
        cleanSlate(container)
        getACoctail(drink)
      });

    })

}



//////// FUNCTION TO FETCH INFORMATION AND CREATE ELEMENTS WITH DOM PAST A FOR LOOP  ////////

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

  //////// FOR LOOP GOES THROUGH 15 I SINCE THE FETCH HAVE 15 DIFFERENT INGRIDIENTS AND 15 MEASURMENTS AS MAX VALUE     ////////
  //////// CREATE DIV AND SPANS FOR AS LONG AS THE FETCH INFORMATION GIVE US. SO LONG AS THERE IS A INGRIDIENT AND      ////////
  //////// A MEASURMENT AVALIABLE IT WILL DOM CREATE AND APPEND THEM TO DRINKRECIPE. FINALY PUT EM OUT ON THE WEBSITE   ////////

  for (let i = 1; i <= 15; i++) {
    let ingredient = drink.drinks[0]['strIngredient' + i];


    let measure = drink.drinks[0]['strMeasure' + i];



    if (ingredient && measure) {
      let row = document.createElement('div');
      row.classList.add('row' + i);
      drinkRecipe.appendChild(row);

      let ingredientElement = document.createElement("span");
      ingredientElement.innerHTML = "<br>" + ingredient;
      ingredientElement.style= "text-decoration: underline; font-size: 22px;"
      drinkRecipe.appendChild(ingredientElement);

      let measureElement = document.createElement("span");
      measureElement.innerHTML =  ":  " + measure;
      drinkRecipe.appendChild(measureElement);
      
    }

  }
  let instructions = document.createElement("div")
  instructions.innerHTML = "<br> <br>" + drink.drinks[0].strInstructions + "<br>"
  drinkRecipe.appendChild(instructions);
}

//////// FUNCTION TO SEARCH FOR A DRINK ////////
// 4 simon
function searchForm() {

  let searchInput = document.createElement("input")
  searchInput.type = "text";
  searchInput.placeholder = "Mojito... Martini... etc";
 
  let searchDrinkBtn = document.createElement("button")
  searchDrinkBtn.innerText = "Search Cocktail"
  searchDrinkBtn.classList.add("drinkBtn")

  form.append(searchInput, searchDrinkBtn)

  searchDrinkBtn.addEventListener("click", e => {
    e.preventDefault()
    cleanSlate(container)
    
    if (searchInput.value !== "") {
      getCocktailByName(searchInput.value);
    }
    else if (searchInput.value === "") {
      let article = document.createElement("article")
      container.append(article)      

      let information = document.createElement("h3")
      information.innerHTML = "You need to search for a drink! If you are too drunk? Don't worry, just press the random drink button ;)"
      article.append(information)

    }    
    //////// CLEAR THE SITE AND INPUT VALUE   ////////

    searchInput.value = "";
    searchInput.innerHTML = "";

    ////////  AFTER 9 DRINKS THE USER IS FORWARDED TO A AA METING PAGE  ////////

    timesSearched++;
    if (timesSearched > 9) {
      window.location.href = "https://alcoholics-anonymous.eu/meetings/?tsml-region=sweden";
    }


  });
}

 
////////  SCROLL FUNCTION, CREATES A SCROLL ICON. IF scrollBtn   ////////               
////////    IS FALSE/NOT DEFINED, THE IF STATMENT WILL RUN      ////////
//5 Philip
function scrollInitiation() {
  if (!scrollBtn) {
    scrollBtn = document.createElement("div");
    scrollBtn.id = "scrollBtn";
    scrollBtn.classList.add("scrollbutton");
    container.appendChild(scrollBtn);
    scrollBtn.textContent = "⬆";
  }
}

////////   SCROLLBTN WILL EITHER DISPLAY OR NOT. DEPENDS IF              ////////
////////  THE SCROLLPOSITION IS LARGER THEN 90px. SCROLLTOP IS         ////////
////////  A BUILT IN, IT MEASURE THE VERTICAL POSITION FOR AN ELEMENT ////////

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    scrollBtn.style.display = "block"
  } else {
    scrollBtn.style.display = "none";
  }
  container.appendChild(scrollBtn);

}

////////   TO RESET THE VIEWING DISPLAY FOR THE USER.  ////////
////////   DIFFERENT BROWSERS HAVE DIFFERENT COMMANDS.  ////////

function differentBrowserFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
  container.appendChild(scrollBtn);  
}













