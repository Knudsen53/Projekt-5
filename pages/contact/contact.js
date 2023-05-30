console.log("Mit contact script virker");


////////////////////////////////Add employees/////////////////////////////////////////
let fancybox = document.getElementById("contactImgContainer");

const listen = [
    {
        navn: "Anton",
        titel: "HR Manager",
        img: "../../images/employees/download.jpg"
    },
    {
        navn: "Agnete",
        titel: "HR Assistent",
        img: "../../images/employees/download(1).jpg"
    },
    {
        navn: "Andy",
        titel: "HR Assistent",
        img: "../../images/employees/download(2).jpg"
    },
    {
        navn: "Amanda",
        titel: "Markething Manager",
        img: "../../images/employees/download(3).jpg"
    },
    {
        navn: "Anya",
        titel: "Markething Assistent",
        img: "../../images/employees/download(4).jpg"
    },
    {
        navn: "Antoinette",
        titel: "SoMe Manager",
        img: "../../images/employees/download(5).jpg"
    }
];

const presentpersen = (persen) => {
    fancybox.innerHTML += `
    <div class="imgContainerItems">
        <img src="${persen.img}" alt="Billede af medarbejder ${persen.navn}">
        <div class="imgContainerText">
            <p>${persen.navn}</p>
            <p>${persen.titel}</p>
        </div>
    </div>
    `;
}

for (let i = 0; i < listen.length; i++){
    presentpersen(listen[i]);
}


//////////////////////////////////Color GreenWheels///////////////////////////////////////

// let heading = document.getElementById('greenWheelsHeading');
//
// // Get text of the h1 element
// let text = heading.textContent;
//
// // Convert the text to an array of characters
// let chars = text.split('');
//
// // Create array and add the characters to an array
// let listeafbogstaver = []
// listeafbogstaver.push(chars);
//
// console.log(listeafbogstaver);
//
// // Color index 0 and 5
//
// for (let i = 0; i < listeafbogstaver.length; i++){
//     if (i === "G") || (i === "W"){
//         color that index spot green
//     }
// }


// Replace the target letters with a <span> element and apply the green color
// var modifiedText = chars.map(function(char) {
//     if (char === 'G' || char === 'W') {
//         return '<span class="green-letters">' + char + '</span>';
//     } else {
//         return char;
//     }
// }).join('');
//
// // Update the HTML content of the <h1> element with the modified text
// heading.innerHTML = modifiedText;