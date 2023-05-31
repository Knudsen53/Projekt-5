console.log("Mit contact script virker");


////////////////////////////////Add employees/////////////////////////////////////////
const employeeContainer = document.getElementById("contactImgContainer");

const employeeList = [
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
    },

];

const addEmployeeToDOM = (name, title, image_url) => {
    employeeContainer.innerHTML += `
    <div class="imgContainerItems">
        <img src="${image_url}" alt="Billede af medarbejder ${name}">
        <div class="imgContainerText">
            <p>${name}</p>
            <p>${title}</p>
        </div>
    </div>
    `;
}

for (let i = 0; i < employeeList.length; i++){
    const employee = employeeList[i];
    addEmployeeToDOM(employee.navn, employee.titel, employee.img);
}
