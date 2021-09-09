Barba.Pjax.start();

//

let searchLocation = document.querySelector("#current-location").value;
fetch(
  "https://api.geoapify.com/v1/geocode/autocomplete?text=searchLocation&apiKey=8c46f68342msh5c466a395fdd3adp1664c5jsna3dd5eeb81c9",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "address-completion.p.rapidapi.com",
      "x-rapidapi-key": "8c46f68342msh5c466a395fdd3adp1664c5jsna3dd5eeb81c9",
    },
  }
)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
