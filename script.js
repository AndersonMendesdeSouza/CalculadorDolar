 


 function CalculaDolar(event){
    event.preventDefault();
   var ul = document.getElementById("ul")
   var li = document.createElement("li");
    var Real = document.getElementById('real').value;
    var Dolar = document.getElementById('dolar').value;

    var total = Real / Dolar;
    

    li.innerHTML = total;
 ul.appendChild(li);
 setTimeout(() => {
    var Real = document.getElementById('real').value = '';
    var Dolar = document.getElementById('dolar').value = '';
 }, 2000);

 }