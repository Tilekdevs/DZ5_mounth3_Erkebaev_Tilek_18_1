const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");

const convert = (elem, target, target2) => { 
  elem.addEventListener("input", () => { 
    fetch("main.json")
      .then(response => response.json())
      .then(data => {
        if (elem === som) { 
          target.value = (elem.value / data.usd) / 2; 
          target2.value = (elem.value / data.euro) / 2;
        } else if (elem === usd) { 
          target.value = (elem.value * data.usd) / 2;
          target2.value = (elem.value * data.usd / data.euro) / 2;
        } else if (elem === euro) { 
          target.value = (elem.value * data.euro) / 2; 
          target2.value = (elem.value * data.euro / data.usd ) / 2; 
        } 
        if (elem.value === "") {
          target.value = "";
          target2.value = "";
        }
      })
      .catch(error => console.error('Error:', error));
  }); 
};

convert(som, usd, euro);
convert(euro, som, usd);
convert(usd, som, euro);
