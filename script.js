const fetchbutton = document.getElementById('fetchbutton');
const fetchbutton2=document.getElementById('fetchbutton2');
const fetchbutton3=document.getElementById('fetchbutton3');
const fetchbutton4=document.getElementById('fetchbutton4');


fetchbutton.addEventListener('click',()=> {
    getAnimations();
});

function getAnimations() {
    fetch('https:mocki.io/v1/ccd5651a-0559-4dd8-a83e-35807cf1c6b8')
  
    .then((response) => {
      
      return response.json();
    })
    .then((data) => {
      console.log(data);
      
    })

    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

fetchbutton2.addEventListener('click',()=> {
    getPhotography();
});

function getPhotography() {
    fetch('https://mocki.io/v1/b8ee7bdf-4955-4a94-b64a-7a3661503a7d')
     
    .then((response) => {
      
      return response.json();
    })
    .then((data) => {
      console.log(data);
      
    })

    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

fetchbutton3.addEventListener('click',()=> {
    getCrypto();
});

function getCrypto() {
    fetch('https://mocki.io/v1/a6819481-31a2-4853-b6b5-c71bd46d9531')
     
    .then((response) => {
      
      return response.json();
    })
    .then((data) => {
      console.log(data);
      
    })

    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

fetchbutton3.addEventListener('click',()=> {
    getDesigns();
});

function getDesigns() {
    fetch('https://mocki.io/v1/1f377237-6cc0-4954-acab-bc87e4e15864')
     
    .then((response) => {
      
      return response.json();
    })
    .then((data) => {
      console.log(data);
      
    })

    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}



















