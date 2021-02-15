const getData = () => {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    return { firstName: fname, lastName: lname };
};

const sendData = async () => {
    const data = getData();
    
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
};

const btn = document.getElementById('submitButton');

btn.addEventListener( 'click', () => {
    sendData();
});
