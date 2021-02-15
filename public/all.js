async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    
    for (item of data) {
        displayItem(item);
    }
}

function displayItem(item) {
    const dest = document.querySelector(".dataContainer");

    const container = document.createElement('article');
    container.classList.add("data");

    // First Name
    const fname = document.createElement("p");
    fname.classList.add("data__label");
    fname.innerText = "First Name"
    container.appendChild(fname);

    const fnameData = document.createElement("p");
    fnameData.classList.add("data__text");
    fnameData.innerText = item.firstName
    container.appendChild(fnameData);

    // Last Name
    const lname = document.createElement("p");
    lname.classList.add("data__label");
    lname.innerText = "Last Name"
    container.appendChild(lname);

    const lnameData = document.createElement("p");
    lnameData.classList.add("data__text");
    lnameData.innerText = item.lastName;
    container.appendChild(lnameData);

    // Time Stamp
    const time = document.createElement("p");
    time.classList.add("data__label");
    time.innerText = "Checked in on"
    container.appendChild(time);

    const timeData = document.createElement("p");
    timeData.classList.add("data__text");
    timeData.innerText = item.timestamp;
    container.appendChild(timeData);
    
    dest.appendChild(container);
}

getData();
