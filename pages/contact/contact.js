console.log("Mit contact script virker");

let fancybox = document.getElementById("contactImgContainer");

const listen = [
    {
        navn: "Anton",
        titel: "HR Manager",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ96es-kWDzgeioyXfNtqKaVdJFPEQa9IMDw&usqp=CAU"
    },
    {
        navn: "Andy",
        titel: "HR Assistent",
        img: "https://pbs.twimg.com/media/Fr5_59xWAAoYAT6.jpg"
    },
    {
        navn: "Agnete",
        titel: "HR Assistent",
        img: "https://pbs.twimg.com/media/Fr5_59xWAAoYAT6.jpg"
    },
    {
        navn: "Amanda",
        titel: "Markething Manager",
        img: "https://pbs.twimg.com/media/Fr5_59xWAAoYAT6.jpg"
    },
    {
        navn: "Anya",
        titel: "Markething Assistent",
        img: "https://pbs.twimg.com/media/Fr5_59xWAAoYAT6.jpg"
    },
    {
        navn: "Antoinette",
        titel: "Bager",
        img: "https://pbs.twimg.com/media/Fr5_59xWAAoYAT6.jpg"
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


