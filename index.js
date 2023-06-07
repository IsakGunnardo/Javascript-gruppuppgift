const header = document.getElementById("header")
const container = document.getElementById("container");
const randomBtn = document.getElementById("randomBtn");
const searchBtn = document.getElementById("searchBtn");
const homeBtn = document.getElementById("homeBtn");
const aboutUs = document.getElementById("aboutUs");
const contact = document.getElementById("contact");
const cocktailDiv = document.getElementById("cocktailDiv");

//Skapar modal för about us och contact
let aboutModal = document.getElementById("about-us-div");
let aboutUsBtn = document.getElementById("aboutUs");
let contactModal = document.getElementById("contact-div");
let contactBtn = document.getElementById("contact");
let closeAboutUs = document.getElementById("closeaboutus");
let closeContact = document.getElementById("closecontact");


// Skapar scroll funktionen
let scrollBtn = document.getElementById("scrollBtn");





// variabel för antalet sökningar på drinkar
let timesSearched = 0;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

const urlRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const urlName = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";


//////// menu ///////////
hamburger.addEventListener("click", e => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener( "click", () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}))

/////////// INITIATION FUNCTIONS     //////////////

HomePageCoctails()
scrollInitiation()

////// EVENTS ////////

searchBtn.addEventListener("click", e => {
  e.preventDefault()
  cleanSlate(container)
 
  let form = document.createElement("form")
  header.append(form)
  //få input fältet i headern att bara komma upp en gång och försvina när man klickar på annan knapp i menyn
  
  let searchInput = document.createElement("input")
  searchInput.type = "text"; 
  searchInput.placeholder = "Mojito... Martini... etc";
  let searchDrinkBtn = document.createElement("button")
  searchDrinkBtn.innerText= "Search Cocktail"
  searchDrinkBtn.classList.add("drinkBtn")

  form.append(searchInput, searchDrinkBtn)
  //cleanSlate fungerar inte med coctailDiv för att få bort andra drinkar vid ny sökning
  searchDrinkBtn.addEventListener("click", e => {
    e.preventDefault()
    cleanSlate(container)
    if (searchInput.value !== "") {
    getCocktailByName(searchInput.value);
  } 
  /*else{
    let article = document.createElement("article")
    cocktailDiv.append(article)
    
    let information = document.createElement("h3")
    drinkName.innerHTML = "Serch for a drink"
 
}*/
// removes defult drink GG
searchInput.value = "";
searchInput.innerHTML = "";
  
// after 9 drinks the user is connected to the AA meeting page
  timesSearched++;
  if (timesSearched > 9) {
    window.location.href = "https://alcoholics-anonymous.eu/meetings/?tsml-region=sweden";
  } 
  
});
})
// get a random coctail
randomBtn.addEventListener("click", e => {
  cleanSlate(container)
  getCocktailRandom()
  //skapar en till get a random coctail knapp som ska vissas när hamburgermenyn är öppen 
   let randomBtn2 = document.createElement("button")
  //randomBtn2.classList.add("randomBtn2")
  header.append(randomBtn2)
 randomBtn2.addEventListener("click", () => {
   cleanSlate(container)
    getCocktailRandom()});
    
homeBtn.addEventListener("click", e => {
  HomePageCoctails()
})

})


/// scroll event ////
window.addEventListener("scroll", () => {
  scrollFunction();
});

scrollBtn.addEventListener("click", () => {
  differentBrowserFunction();
});
///////

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

 // event that opens up the entire recipe for the selected drink
      article.addEventListener("click", () => {        
        cleanSlate(cocktailDiv)
        getACoctail(drink)
      });

    })

}

///// event som kopplas till fetchen för att skriva ut drink recept 
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

///// SCROLL FUNCTION //////

function scrollInitiation() {
  if (!scrollBtn) {
    scrollBtn = document.createElement("div");
    scrollBtn.id = "scrollBtn";
    scrollBtn.classList.add("scrollbutton");
    container.appendChild(scrollBtn);
    //scrollBtn.textContent = "⬆"
    //document.body.style.backgroundImage = " url('https://media.istockphoto.com/id/1462737515/vector/hand-drawn-arrow-up-symbol-funny-concept-with-a-stickman-holding-icon-cartoon-style-design.jpg?s=612x612&w=0&k=20&c=WvsOQ6IMyDBBFojI1S39w59oQ2Nd2BRFRdzo8rxjAAI=')";
    scrollBtn.style.width = "50px";
    scrollBtn.style.height = "50px";
    scrollBtn.style.backgroundSize = "contain";
    scrollBtn.style.backgroundPosition = "bottom right";
    scrollBtn.style.backgroundRepeat = "no-repeat";
    scrollBtn.style.backgroundSize = "50px 50px";
    scrollBtn.style.display = "none";
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    scrollBtn.style.display = "block"
  } else {
    scrollBtn.style.display = "none";
  }  
}

function differentBrowserFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;  
}
///////////////////////////////
 



//modal kod


aboutUsBtn.addEventListener("click", e =>{
  aboutModal.style.display = "block"
});

closeAboutUs.addEventListener("click", e =>{
  aboutModal.style.display = "none"
})

window.addEventListener("click", e =>{
  if(e.target == aboutModal){
    aboutModal.style.display = "none"
  }});

  contactBtn.addEventListener("click", e =>{
    contactModal.style.display = "block"
  });

  closeContact.addEventListener("click", e =>{
    contactModal.style.display = "none"

  });

 












