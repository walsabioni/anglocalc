function calculate() {
    var pbim = document.getElementById("pbim").value;
    var sbim = document.getElementById("sbim").value;
    var tbim = document.getElementById("tbim").value;
  
    var imc = 47.5 - pbim - sbim *2 - tbim *2;
    var imc = imc / 2
    console.log(imc)

    document.getElementById("text_area").innerText=imc 
  }
