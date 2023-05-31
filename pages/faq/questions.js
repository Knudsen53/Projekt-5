const formSubmissions = []; //laver et tomt array og gemmer i konstanten formsubmissions
let timerId;

function handleSubmit(event) { //laver en funktion haldet handlesubmit, den tager ét parameter (event). Alt nedenstående, til linje er alt sammen inde i den her funktion.
  event.preventDefault();       //lidt i tvivl om den her, aldrig set det før. men noget med at den stopper siden i at refresh når der trykkes på submit - tror jeg.. chatgpt hjalp

  const navn = document.getElementById('navn').value;                //
  const efternavn = document.getElementById('efternavn').value;      //
  const emne = document.getElementById('emne').value;                //  Disse 5 linjer: Der laves 5 konstante variabler som indeholder værdien af et element hentet fra dommen.
  const email = document.getElementById('email').value;              //  const email (en konstant kaldet email laves)      = (tildelingsoperator)     document.getelementbyId("email").value (Vi går ind i dommen og hiver fat elementet med id "email" og tager værdien af det element)
  const beskrivelse = document.getElementById('beskrivelse').value;  //

  const formData = {  //Der laves et objekt, kan ses ved {}, som hedder Formdata. der indeholder værdierne navn, efternavn, emne, email og beskrivelse (de passer med at de før blev lavet nogle variabler med de her navne)
    navn,
    efternavn,
    emne,
    email,
    beskrivelse
  };

  formSubmissions.push(formData); // Objektet formdata, skubbes til det tomme array formsubmissions

  document.getElementById('navn').value = '';         //Værdien på disse elementer sættes til '' - altså tom
  document.getElementById('efternavn').value = '';
  document.getElementById('emne').value = '';
  document.getElementById('email').value = '';
  document.getElementById('beskrivelse').value = '';

  if (formSubmissions.length >= 2) {                                    //tjekker om længden af formsubmission er højere eller det samme som 2 (basically tjekker om der er mere end 1 ting i listen formsubmissions.)
    alert('Du har nået max antal sendte formulare.');       //Hvis der er mere end én ting i formsubmission kør denne alert

    startTimer();                                                       //og kør funktionen starttimer()  -  () betyder at vi kalder en funktion
  } else {                                                              //Hvis der ikke er mere end én ting i formsubmission så:
    alert('Formularen er sendt');                              //kør denne alert
  }

  displaySubmissions();      //Vi kalder funktionen displaysubmissions
}

function displaySubmissions() {     //funktion displaysubmissions laves
  const submissionsList = document.getElementById('submissions-list');  //henter elementet i dommen med id 'submissions-list' og gemmer i konstanten submissionsList
  submissionsList.innerHTML = '';                                               //sætter indholdet af submissionslist til tom

  if (formSubmissions.length === 0) {     //Tjekker om denne statement er sand: hvis længden af formsubmissions er af typen og værdien 0 (=== sammenligningsoperator)
    submissionsList.innerHTML = 'No submissions yet.';            //hvis den statement er sand, så sættes 'No submissions yet.' ind i submissionslist html
  } else {                                                        //Hvis den statement ikke er sand:
    for (let i = 0; i < formSubmissions.length; i++) {            //Så køres et loop: overall looper igennem længden formsubmissions fra index plads 0 og efter hver gennemgang af loopet tilføj 1 til i.
      const submission = formSubmissions[i];                       //når loopet kører så gemmes værdien på plads [i] i konstanten submission. [i] starter på 0, og for hver gang vi går igennem loopet tilføjes der 1 til i. anden gennemgang er 1, tredje gennemgang er 2. Den kører først hele blokken fra linje 48 til 52 før [i] forstørres.
      const listItem = document.createElement('li');        //laver et li element og gemmer referencen til det i konstanten listitem
      listItem.textContent = `${submission.navn} ${submission.efternavn}: ${submission.emne}`; // Basically står der: document.createElement('li').textcontent - som siger at hvad end der står i elementet li laves til text og så sætter vi tekst i det element som hentes fra formsubmissions   ${submission.navn} henter navn fra formsubmissions (på linje 48 er formsubmissions med data gemt i en variabel kaldet submission)
      submissionsList.appendChild(listItem);            //giv elementet 'submissions-list' et child som er det vi lavede på linje 50.
    }
  }
}

function startTimer() {
  const resetTime = 3;
  let timeRemaining = resetTime;

  alert(`Maximum submissions will reset in ${timeRemaining} seconds.`);


  document.getElementById('submit-btn').disabled = true;

  timerId = setInterval(() => {
    timeRemaining--;

    alert(`Maximum submissions will reset in ${timeRemaining} seconds.`);

    if (timeRemaining === 0) {
      clearInterval(timerId);
      formSubmissions.length = 0;
      document.getElementById('submit-btn').disabled = false;
      alert('Maximum submissions have been reset. You can now submit the form.');
    }
  }, 300);
}

document.getElementById('submit-btn').addEventListener('click', handleSubmit);
