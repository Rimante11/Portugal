console.log("Portugal projekt!");

const loginButton = document.querySelector("#loginBtn");
const userName = document.querySelector("#username");
const passWord = document.querySelector("#psw");
const loginContainer = document.querySelector(".loginContainer");
//hämtar popupen
const closePopupenBtn = document.querySelector(".closeX");
const popUp = document.querySelector(".bg-modal");
popUp.style.display = "none";
const closePop = document.querySelector("#closePop");
const popContent = document.querySelector("#popCont");

//cities
const placeToSee1 = document.querySelector("#placeToSee1");

//first second pages
const firstPage = document.querySelector(".firstPage");
const secondPage = document.querySelector(".secondPage");
secondPage.style.display = "none";


function nextPage(){
  //window.location.href="/andra.html";
   console.log(userName.value);
  if(userName.value === "Lucas" && passWord.value == "PT2022"){
    firstPage.style.display = "none";
    secondPage.style.display = "block";
    //window.location.href="/andra.html";
    console.log("Login succesful");
  }else{
    alert("Username or password is incorect!");
  } 
  
  //console.log(username.value);
}


let citiesList = document.querySelector("#cities");
citiesList.style.display = "none";

function tuggleMenu(){
  if(citiesList.style.display === "none"){
    citiesList.style.display = "block";
  }else{
    citiesList.style.display = "none";
  }

}

//popup toggle
function closePopup() {
  popUp.style.display = "none";
}


//Lisnon popup
function popupLisbon() {
  citiesList.style.display = "none";
  popUp.style.display = "block";

  popContent.innerHTML = `
      <div class="closeX" id="closePop" onclick="closePopup()">+</div>
      <img src="/pictures/sardine.png" alt="sun" class="sardine">
      <h2>Lisbon</h2>

      <ul id="citiesToSee">
          <li class="toseeList">Instituto Superior de Agronomia</li>
          <li class="toseeList">Florist Pequeno Jardim ( 3 Juni köpa blommor att prova göra blommors krona, 12min från hemma, öppet 10:00-20:00)</li>
          <li class="toseeList">Manteigaria (Pastel de nato godaste!!! 1,2km från hemma 18min promenad)</li>
          <li class="toseeList">"Feira da Ladra" 4 Juni, 9:00-18:00 ("Thieves Market" 19 min från hemma)</li>
          <li class="toseeList">The Manipedi - Nail Spa 15:45 bookad tid 4 Juni (2km, 28min från hemma)</li>
          <li class="toseeList">Retrosaria Rosa Pomar (yarn butik, 1km uppåt våran hem)</li>
          <li class="toseeList">351 shop (portugesisk klädd marke)</li>
          <li class="toseeList">EXTRA: visit Sintra (kanske 6/7 JUNI, ta med usb lights med powerbank)</li>
          <li class="toseeList">Lägga till om glömde nånting</li>
          <li class="toseeList">Lägga till om glömde nånting</li>
          <li class="toseeList">Lägga till om glömde nånting</li>

      </ul>
  `
}

function popupCascais() {
  citiesList.style.display = "none";
  popUp.style.display = "block";

  popContent.innerHTML = `
      <div class="closeX" id="closePop" onclick="closePopup()">+</div>
      <img src="/pictures/pluduriuoja.jpg" alt="sun" class="pluduriuoja">
      <h2>Cascais</h2>

      <ul id="citiesToSee">
          
          <li class="toseeList">Ta en promenad i vackra stan</li>
          <li class="toseeList">Museu Condes de Castro Guimarães (Gratis entre) </li>
          <li class="toseeList">Museu Condes de Castro Guimarães (Gratis entre)</li>
          <li class="toseeList">Boca do Inferno</li>
          <li class="toseeList">Praia do Guincho</li>
          <li class="toseeList">Åka till Sintra</li>
          <li class="toseeList">Praia da Adraga</li>

      </ul>
  `
}

function popupEvora() {
  citiesList.style.display = "none";
  popUp.style.display = "block";

  popContent.innerHTML = `
      <div class="closeX" id="closePop" onclick="closePopup()">+</div>
      <img src="/pictures/fly.png" alt="sun" class="fly">
      <h2>Evora</h2>

      <ul id="citiesToSee">
          
          <li class="toseeList">Ta en promenad i vackra stan</li>
          <li class="toseeList">Évora Roman Temple</li>
          <li class="toseeList"> Évora Cathedral</li>
          <li class="toseeList">Évora University</li>
          <li class="toseeList">Historic Centre</li>
          <li class="toseeList">Capela dos Ossos</li>
          <li class="toseeList">Smaka - Açorda is a kind of paste made with garlic, olive oil and vinegar and served with poached egg over slices of bread</li>
          <li class="toseeList">Praia Fluvial da Amieira (besöka)</li>
          <li class="toseeList">HÄMTA FÖDELSEDAGENS PRESENT !!! (Fråga om den till din fru)</li>
      </ul>
  `
}

function popupMilfontes() {
  citiesList.style.display = "none";
  popUp.style.display = "block";

  popContent.innerHTML = `
      <div class="closeX" id="closePop" onclick="closePopup()">+</div>
      <img src="/pictures/birds.png" alt="sun" class="loveme">
      <h2>Milfontes</h2>

      <ul id="citiesToSee">
          
          <li class="toseeList">Koppla av och njuta livet i nuet!</li>
          <li class="toseeList">Badda</li>
          <li class="toseeList">Sola</li>
          <li class="toseeList">Skrata</li>
          <li class="toseeList">Älska</li>
          <li class="toseeList">Äta</li>
          <li class="toseeList">Dansa</li>
          <li class="toseeList">m.m.</li> 
          
      </ul>
  `
}

function popupAmando() {
  citiesList.style.display = "none";
  popUp.style.display = "block";

  popContent.innerHTML = `
      <div class="closeX" id="closePop" onclick="closePopup()">+</div>
      <img src="/pictures/wale.jpg" alt="sun" class="loveme">
      <h2>Praia do Amando</h2>

      <ul id="citiesToSee">
          
          <li class="toseeList">Koppla av</li>
          <li class="toseeList">Sola och bada</li>
          <li class="toseeList">Microbar Carrapateira - plats att käka</li>  
      </ul>
  `
}

function popupAtalaia() {
  citiesList.style.display = "none";
  popUp.style.display = "block";

  popContent.innerHTML = `
      <div class="closeX" id="closePop" onclick="closePopup()">+</div>
      <img src="/pictures/meduza.png" alt="sun" class="loveme">
      <h2>Ponto da Atalaia</h2>

      <ul id="citiesToSee">
          
          <li class="toseeList">Koppla av</li>
          <li class="toseeList">Sola och bada</li>
          <li class="toseeList">Microbar Carrapateira - plats att käka</li>
          <li class="toseeList">Ta hand om varandra</li>  
      </ul>
  `
}

function popupLagos() {
  citiesList.style.display = "none";
  popUp.style.display = "block";

  popContent.innerHTML = `
      <div class="closeX" id="closePop" onclick="closePopup()">+</div>
      <img src="/pictures/sangria.png" alt="sun" class="loveme">
      <h2>Lagos / Faro</h2>

      <ul id="citiesToSee">
        <li class="toseeList">Ponta da Piedade</li>   
        <li class="toseeList">Praia do Camilo</li>  
        <li class="toseeList">Meia Praia</li>  
        <li class="toseeList">Praia de Dona Ana</li>  
        <li class="toseeList">Igreja de Santo António</li>  
        <li class="toseeList">Igreja do Carmo Faro</li>  
        <li class="toseeList">Praia de Faro</li>  
        <li class="toseeList">Palácio de Estói</li>  
      </ul>
  `
}

function popupBraga() {
  citiesList.style.display = "none";
  popUp.style.display = "block";

  popContent.innerHTML = `
      <div class="closeX" id="closePop" onclick="closePopup()">+</div>
      <img src="/pictures/cock.png" alt="sun" class="loveme">
      <h2>Braga</h2>

      <ul id="citiesToSee">
          
          <li class="toseeList">Bom Jesus do Monte</li>
          <li class="toseeList">Praça da República </li>
          <li class="toseeList">Gården av Santa Barbara</li>  
          <li class="toseeList">Sanctuary of Our Lady of Sameiro</li> 
          <li class="toseeList">Raio Palace</li> 
          <li class="toseeList">Chapel of São Frutuoso</li> 
          <li class="toseeList">Arco da Porta Nova</li>  
          <li class="toseeList">Vinho Verde</li>  
      </ul>
  `
}

function popupPorto() {
  citiesList.style.display = "none";
  popUp.style.display = "block";

  popContent.innerHTML = `
      <div class="closeX" id="closePop" onclick="closePopup()">+</div>
      <img src="/pictures/house.png" alt="sun" class="loveme">
      <h2>Porto</h2>

      <ul id="citiesToSee">
          <li class="toseeList">The Miradouro da Vitoria</li>
          <li class="toseeList">Ribeira, Baixa och Bolhao districts</li>
          <li class="toseeList">Äta pastel de nato - Confeitaria do Balhao</li>
          <li class="toseeList">Mercado do Balhao</li> 
          <li class="toseeList">Livraria Leloo, Portos finnaste bibliotek</li> 
          <li class="toseeList">Titta på solnedgång från Esplanada do Teleferico</li> 
      </ul>
  `
}

function popupHome() {
  citiesList.style.display = "none";
  popUp.style.display = "block";

  popContent.innerHTML = `
      <div class="closeX" id="closePop" onclick="closePopup()">+</div>
      <img src="/pictures/heart.png" alt="sun" class="loveme">
      <h2>Home</h2>

      <ul id="citiesToSee">
          
          <li class="toseeList">Vi åker hem!</li>
          <li class="toseeList">Älskar varandra mer!</li>
          <li class="toseeList">Kysser varandra me!</li>   
          <li class="toseeList">Älskar livet mer!</li>
      </ul>
  `
}