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

}

function startTimer() {
    const resetTime = 3;
    let timeRemaining = resetTime;

    alert(`Maximum indsendte formulare vil nulstille om ${timeRemaining} sekunder.`);


    document.getElementById('submit-btn').disabled = true;

    timerId = setInterval(() => {
        timeRemaining--;

        alert(`Maximum indsendte formulare vil nulstille om ${timeRemaining} sekunder.`);

        if (timeRemaining === 0) {
            clearInterval(timerId);
            formSubmissions.length = 0;
            document.getElementById('submit-btn').disabled = false;
            alert('Maximum formulare er nu nulstillet. Du kan nu indsende formulare igen.');
        }
    }, 300);
}

document.getElementById('submit-btn').addEventListener('click', handleSubmit);
