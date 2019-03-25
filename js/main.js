// Sat u hederu
function Vreme() {
  time = new Date();
  cas = time.getHours();
  minuti = time.getMinutes();
  sekunde = time.getSeconds();
  
  vremence = ((cas > 12) ? cas - 12 : cas);
  vremence += ((minuti < 10) ? ":0" : ":") + minuti;
  vremence += ((sekunde < 10) ? ":0" : ":") + sekunde;
  vremence += ((cas >= 12) ? " PM" : " AM");
  document.vremeForma.cifre.value = vremence;
  setTimeout("Vreme()", 1000);
}

// Rekli su o hrani
function Citati() {
  quotes = new Array(7);
  authors = new Array(7);
  quotes[0] = "Život je kombinacija magije i paste.";
  authors[0] = "Federiko Felini";
  quotes[1] = "Čovek treba da jede da bi živeo, a ne da živi da bi jeo.";
  authors[1] = "Molijer";
  quotes[2] = "So su rodili najčistiji roditelji: sunce i more.";
  authors[2] = "Pitagora";
  quotes[3] = "Niko ne može da misli kako treba, voli kako treba i spava kako treba ako nije večerao kako treba.";
  authors[3] = "Virdžinija Vulf";
  quotes[4] = "Bolje je pojesti koricu hleba u miru, nego pun sto hrane uz puno briga.";
  authors[4] = "Ezop";
  quotes[5] = "Neka vaša hrana bude lek, a vaš lek vaša hrana.";
  authors[5] = "Hipokrat";
  quotes[6] = "Razuman se hrani da živi, a lud živi samo da se hrani i goji.";
  authors[6] = "Meša Selimović";
  
  //izracunavanje slucajnog broja, izmedju 0 i 1. string.indexOf(traziString, [odPozicije]). Ovaj metod vraća broj pozicije na kojoj je prvi put pronađen argument tipa String traziString. U slučaju da se traženi string ne nalazi u početnom stringu kao rezultat se vraća vrednost -1. Ako postoji i drugi argument odPozicije, tada će se pretraga izvršavati od zadate pozicije.
  index = Math.floor(Math.random() * quotes.length); // Metod floor() zaokružuje broj do najbližeg celog broja i vraća rezultat.
  
  document.getElementById("citat").innerHTML = quotes[index]
  document.getElementById("autor").innerHTML = authors[index]
}

// kontakt forma
function proveri()  {
  let testIme = /^[a-zA-Z '-]{2,50}$/g;
  let testMail = /^[a-z0-9]+_?([.]?[a-z0-9]+)*@[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,6}$/g;
  let testTelefon = /^06\d{1}\/\d{3}\-\d{3,4}$/g;
  let testKomentar = /^((\w\d\s[.,-])?[^<>]){2,}$/g
  
  let ime = document.forma.ime.value;
  let email = document.forma.email.value;
  let telefon = document.forma.telefon.value;
  let komentar = document.forma.komentar.value;
  
  let rezultatIme = ime.match(testIme);
  let rezultatMail = email.match(testMail);
  let rezultatTelefon = telefon.match(testTelefon); 
  let rezultatKomentar = komentar.match(testKomentar);
  
  if (rezultatIme == null)
  {
    alert("Niste uneli ime i prezime.");
    document.forma.ime.focus();
  }
  else if(rezultatMail == null)
  {
    alert("Niste uneli e-mail.");
    document.forma.email.focus();
  }
  else if(rezultatTelefon == null)
  {
    alert("Niste uneli telefon.");
    document.forma.telefon.focus();
  }  
  else if(rezultatKomentar == null)
  {
    alert("Niste uneli komentar.");
    document.forma.komentar.focus();
  }  
  else {
    alert("Uspešno ste nas kontaktirali.")
    document.forma.submit();
    document.forma.reset();
  } 
}

// spisak za kupovinu
const cvarci = {
  "ime": "Domaći čvarci i mast",
  "masnoca": 5,
  "soCvarci": 2,
}

const zacin = {
  "ime": "Suvi začin",
  "zelenVeza": 3,
  "celerKoren": 1,
  "persunList": 1,
  "celerList": 1,
}

const bataci = {
  "ime": "Pileći bataci sa povrćem",
  "batak": 6,
  "krompir": 300,
  "sargarepa": 300,
  "grasak": 300,
  "kremCorba": 1,
  "soBataci": 1,
  "zacinBataci": 1,
}

const mlinci = {
  "ime": "Mlinci sa piletinom i spanaćem",
  "beloMeso": 1,
  "mlinaca": 0.5,
  "spanac": 300,
  "pavlakaKuvanje": 0.5,
  "soMlinci": 1,
}

const cokoTorta = {
  "ime": "Najbrža čokoladna torta",
  "piskoteCoko": 315,
  "slag": 250,
  "cokoMleko": 0.5,
  "mlekoCoko": 2,
}

const vocnaTorta = {
  "ime": "Najlepša voćna torta",
  "piskoteVoce": 315,
  "pavlakaKisela": 1,
  "pavlakaSlatka": 0.5,
  "mixVoce": 400,
  "mlekoVoce": 2,
}

const domaciCvarci = `
<div>
<h3><em>${cvarci.ime}</em></h3>
<p>Sastojci:</p>
<p>Masnoća: ${cvarci.masnoca} kg</p>
<p>So: ${cvarci.soCvarci} kafene kašičice</p>
</div>
`

const suviZacin = `
<div>
<h3><em>${zacin.ime}</em></h3>
<p>Sastojci:</p>
<p>Veza zeleni: ${zacin.zelenVeza} kom</p>
<p>Celer: ${zacin.celerKoren} kom</p>
<p>Peršunov list: ${zacin.persunList} kom</p>
<p>Celerov list: ${zacin.celerList} kom</p>
</div>
`

const pileciBataci = `
<div>
<h3><em>${bataci.ime}</em></h3>
<p>Sastojci:</p>
<p>Pileći batak sa karabatakom: ${bataci.batak} kom</p>
<p>Krompir: ${bataci.krompir} g</p>
<p>Šargarepa: ${bataci.sargarepa} g</p>
<p>Grašak: ${bataci.grasak} g</p>
<p>Krem čorba od pečuraka: ${bataci.kremCorba} kom</p>
<p>So: ${bataci.soBataci} kafena kašičica</p>
<p>Suvi začin: ${bataci.zacinBataci} kafena kašičica</p>
</div>
`

const mlinciPiletina = `
<div>
<h3><em>${mlinci.ime}</em></h3>
<p>Sastojci:</p>
<p>Pileće belo meso: ${mlinci.beloMeso} kom</p>
<p>Mlinci: ${mlinci.mlinaca} kg</p>
<p>Spanać: ${mlinci.spanac} g</p>
<p>Pavlaka za kuvanje: ${mlinci.pavlakaKuvanje} l</p>
<p>So: ${mlinci.soMlinci} kafena kašičica</p>
</div>
`

const cokoladnaTorta = `
<div>
<h3><em>${cokoTorta.ime}</em></h3>
<p>Sastojci:</p>
<p>Piškote: ${cokoTorta.piskoteCoko} g</p>
<p>Šlag krem: ${cokoTorta.slag} g</p>
<p>Čokoladno mleko: ${cokoTorta.cokoMleko} l</p>
<p>Mleko: ${cokoTorta.mlekoCoko} dl</p>
</div>
`

const tortaVocna = `
<div>
<h3><em>${vocnaTorta.ime}</em></h3>
<p>Sastojci:</p>
<p>Piškote: ${vocnaTorta.piskoteVoce} g</p>
<p>Kisela pavlaka: ${vocnaTorta.pavlakaKisela} čaša</p>
<p>Slatka pavlaka: ${vocnaTorta.pavlakaSlatka} l</p>
<p>Mix crveno voće: ${vocnaTorta.mixVoce} g</p>
<p>Mleko: ${vocnaTorta.mlekoVoce} dl</p>
</div>
`

function spisak() {
  
  let prvi = document.getElementById("jedan").value; // prvi uneseni iznos, ako nije broj postavlja 0
  drugi = parseInt(document.getElementById("dva").value, 10) || 0,
  treci = parseInt(document.getElementById("tri").value, 10) || 0,
  cetvrti = parseInt(document.getElementById("cetiri").value, 10) || 0,
  peti = parseInt(document.getElementById("pet").value, 10) || 0,
  sesti = parseInt(document.getElementById("sest").value, 10) || 0;
  
  if (prvi == 1) document.getElementById("spisakCvarci").innerHTML = domaciCvarci + "<br>";
  if (drugi == 1) document.getElementById("spisakZacin").innerHTML = suviZacin + "<br>";
  if (treci == 1) document.getElementById("spisakBataci").innerHTML = pileciBataci + "<br>";
  if (cetvrti == 1) document.getElementById("spisakMlinci").innerHTML = mlinciPiletina + "<br>";
  if (peti == 1) document.getElementById("spisakCokoTorta").innerHTML = cokoladnaTorta + "<br>";
  if (sesti == 1) document.getElementById("spisakVocnaTorta").innerHTML = tortaVocna + "<br>";
}