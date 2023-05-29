console.log("Mit contact script virker");

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


