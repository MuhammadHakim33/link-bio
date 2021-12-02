// List Data
let data = [
    {
        link: "https://flexiple.com/",
        title: "Sistem Informasi",
        tech: ["CSS", "Bulma"]
    },
    {
        link: "https://dmitripavlutin.com/",
        title: "Sistem",
        tech: ["CSS", "Bulma", "Jqery"]
    },
];

// Looping Object
for(let i = 0; i < data.length; i++) {

    const listContainer = document.getElementById('list-container');
    let box = document.createElement("a");
    box.setAttribute('href', data[i]["link"]);

    box.innerHTML = `
        <div class="header" id="header">
            <h4>${data[i]["title"]}</h4>
        </div>
        <ul class="tech" id="tech${i}">
            <!-- ...... -->
        </ul>
    `;

    listContainer.appendChild(box);

    // Looping array di object "tech"
    for(let j = 0; j < data[i]["tech"].length; j++){
        let techBox = document.createElement("li");
        techBox.innerHTML = `${data[i]["tech"][j]}`;
        document.getElementById(`tech${i}`).appendChild(techBox);
    };
};


