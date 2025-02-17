 


 function CalculaDolar(event){

    event.preventDefault();
   var ul = document.getElementById("ul")
   var li = document.createElement("li");
    var Real = document.getElementById('real').value;
    var Dolar = document.getElementById('dolar').value;

    if(Real === '' || Dolar === ''){
alert("Por favor coloque um valor!");
return false;
    }else{
      var total = Real / Dolar;
    

      li.innerHTML = total;
   ul.appendChild(li);
   setTimeout(() => {
      var Real = document.getElementById('real').value = '';
      var Dolar = document.getElementById('dolar').value = '';
   }, 0);
    }



 }
 function reset(){
   var ul = document.getElementById("ul");
ul.innerHTML = '';
}