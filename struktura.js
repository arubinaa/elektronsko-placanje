function myFunction() {
    document.getElementById("myMenu").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.menu')) {
      var menu = document.getElementsByClassName("menu-content");
      var i;
      for (i = 0; i < menu.length; i++) {
        var openMenu = menu[i];
        if (openMenu.classList.contains('show')) {
          openMenu.classList.remove('show');
        }
      }
    }
  }

  function checkPsw(){
    var x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function checkPsw1(){
  var x = document.getElementById("unospsw");
if (x.type === "password") {
  x.type = "text";
} else {
  x.type = "password";
}
}

function checkPsw2(){
  var x = document.getElementById("unospsw2");
if (x.type === "password") {
  x.type = "text";
} else {
  x.type = "password";
}
}
  
function prvaTarifnaGrupa () {
            
  let  mjernoMjesto =document.getElementById('mjernoMjesto').value;
  let aktivnaEnergija = document.getElementById('aktivnaEnergija').value;
  let obnovljiviIzvori = document.getElementById('obnovljiviIzvori').value;
  let iznosBezPdv = mjernoMjesto*(4.80) + aktivnaEnergija*(0.1346) + obnovljiviIzvori*(0.0042);
  let iznosSaPdv = iznosBezPdv * 0.17;
  let obracun = iznosBezPdv + iznosSaPdv;
  
 document.getElementById("demo").innerHTML= "Ukupna potrošnja energije za prvu tarifnu grupu: " + obracun.toFixed(2) + " KM";
}

function drugaTarifnaGrupa () {

  let  mjernoMjesto =document.getElementById('mjernoMjesto').value;
  let obnovljiviIzvori = document.getElementById('obnovljiviIzvori').value;
  let vecaTarifa = document.getElementById('vecaTarifa').value;
  let manjaTarifa = document.getElementById('manjaTarifa').value;
  let bezPdv = mjernoMjesto*(4.80) + obnovljiviIzvori*(0.1346) + vecaTarifa*(0.1682) + manjaTarifa*(0.0841);
  let saPdv = bezPdv*(0.17);
  let obracun = bezPdv + saPdv;
  document.getElementById("demo1").innerHTML= "Ukupna potrošnja energije za drugu tarifnu grupu: " + obracun.toFixed(2) + " KM";
}


var registracija = [];

function getClientsFromStorage() {
  return JSON.parse(sessionStorage.getItem('registracija'))
}
  function setClientsToStorage(registracija){
  sessionStorage.setItem('registracija', JSON.stringify(registracija))
}

function registruj(){
  var registracija=[];
  var registrovaniKorisnici=JSON.parse(sessionStorage.getItem('registracija'));
  if (registrovaniKorisnici!=null) registracija=registrovaniKorisnici;

  var korisnik={
    ime:document.getElementById("ime").value,
    prezime:document.getElementById("prezime").value,
    unoskorime:document.getElementById("unoskorime").value,
    email:document.getElementById ("email").value,
    adresa:document.getElementById ("adresa").value,
    brojtel:document.getElementById ("brojtel").value,
    unospsw:document.getElementById ("unospsw").value,
    unospsw2:document.getElementById ("unospsw2").value
  }

  registracija.push(korisnik);
  console.log(registracija);
  setClientsToStorage(registracija);
  document.getElementById("divreg").innerHTML="Uspješna registracija! Za plaćanje računa idite na prijavu.";
  
}

function prijavise(){
  let imeKorisnika = document.getElementById("korime").value;
  let pswKorisnika = document.getElementById("psw").value;
  console.log(getClientsFromStorage());
  var result=find(pswKorisnika);
  if (result===undefined){
    document.getElementById("div1").innerHTML="Prijava nije uspješna! Provjerite unesene podatke.";
  }else window.location="uplatnica.html";
}

function find(pswKorisnika){
  var clientsFromStorage = getClientsFromStorage();
  if (clientsFromStorage!=null){
    return clientsFromStorage.find(korisnik=>korisnik.unospsw==pswKorisnika)
  }else return undefined
}

const uplata = [];

  function uplati(){
  let ime  = document.getElementById("ime").value;
  let adresa = document.getElementById("adresa").value;
  let racun=document.getElementById("racun").value;
  let referenca =document.getElementById ("referenca").value;
  let iznos =document.getElementById ("iznos").value;
  let datum =document.getElementById ("datum").value;

  let korisnik = ime + " " + adresa + " " + racun + " " + referenca + " " + iznos + " " + datum;
  uplata.push(korisnik);
  console.log(uplata);
}
