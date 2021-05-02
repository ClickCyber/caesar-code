$("#Result_decode").click(function(){
  document.getElementById("box").innerHTML = '';
  const lag = document.getElementsByName("language")[0].value
  const text = document.getElementsByName('text')[0].value
  if(lag == '' || text == ''){
    document.getElementById('alert').style.display = 'block';
    setTimeout(()=>{document.getElementById('alert').style.display = 'none';}, 5000)
    return 0;
  }

  $.post('/', {
  "language":encodeURI(lag),
  "text":encodeURI(text),
  "action":"decode"
 }, function(data, status){
   console.log(status);
   language = data.result.language;
   result = data.result.decode
   Lenght = Object.keys(result).length
   document.getElementById("docs").style.display = "block";
   document.getElementById("title-doc").innerText = "result all options of caesar";
   for(i=1; i <Lenght; i++){
    var div = document.createElement("div");
    div.classList.add("card");
    div.style = "width: 18rem; left: 20%;";
    var divBody = document.createElement("div");
    divBody.classList.add("card-body");
    var divHeader = document.createElement("div");
    divHeader.classList.add("card-header");
    var titleElement = document.createElement("h5");
    titleElement.classList.add("card-title");
    titleElement.innerText ="caesar decode";
    var infoText = document.createElement("small");
    infoText.classList.add("text-muted");
    infoText.innerHTML = `set updated <kbd>${i}</kbd> letters mov`;
    var setcipher = document.createElement("p");
    var TextCaesar = document.createElement("p")
    TextCaesar.classList.add("card-text");
    TextCaesar.innerText = result[i];
    var Button = document.createElement("a")
    Button.classList.add("btn");
    Button.classList.add("btn-primary");
    Button.href = "https://wa.me/000";
    Button.innerText = "share a result";
    setcipher.classList.add("card-text");
    setcipher.appendChild(infoText);
    divHeader.appendChild(titleElement);
    divHeader.appendChild(setcipher);
    divBody.appendChild(divHeader);
    divBody.appendChild(TextCaesar);
    divBody.appendChild(Button);
    div.appendChild(divBody);
    var result_div = document.createElement("div");
    result_div.classList.add("col");
    result_div.classList.add("p-3");
    result_div.appendChild(div);
    document.getElementById("box").appendChild(result_div);
   }
  });
});


$("#Result_encode").click(function(){
  document.getElementById("box").innerHTML = '';
  const lag = document.getElementsByName("language")[0].value
  const text = document.getElementsByName('text')[0].value
  if(lag == '' || text == ''){
    document.getElementById('alert').style.display = 'block';
    setTimeout(()=>{document.getElementById('alert').style.display = 'none';}, 5000)
    return 0;
  }

  $.post('/', {
  "language":encodeURI(lag),
  "text":encodeURI(text),
  "action":"encode"
 }, function(data, status){
   console.log(status);
   language = data.result.language;
   result = data.result.encode
   Lenght = Object.keys(result).length
   document.getElementById("docs").style.display = "block";
   document.getElementById("title-doc").innerText = "result all options of caesar";
   for(i=1; i <Lenght; i++){
    var div = document.createElement("div");
    div.classList.add("card");
    div.style = "width: 18rem; left: 20%;";
    var divBody = document.createElement("div");
    divBody.classList.add("card-body");
    var divHeader = document.createElement("div");
    divHeader.classList.add("card-header");
    var titleElement = document.createElement("h5");
    titleElement.classList.add("card-title");
    titleElement.innerText ="caesar encode";
    var infoText = document.createElement("small");
    infoText.classList.add("text-muted");
    infoText.innerHTML = `set updated <kbd>${i}</kbd> letters mov`;
    var setcipher = document.createElement("p");
    var TextCaesar = document.createElement("p")
    TextCaesar.classList.add("card-text");
    TextCaesar.innerText = result[i];
    var Button = document.createElement("a")
    Button.classList.add("btn");
    Button.classList.add("btn-primary");
    Button.href = "https://wa.me/000";
    Button.innerText = "share a result";
    setcipher.classList.add("card-text");
    setcipher.appendChild(infoText);
    divHeader.appendChild(titleElement);
    divHeader.appendChild(setcipher);
    divBody.appendChild(divHeader);
    divBody.appendChild(TextCaesar);
    divBody.appendChild(Button);
    div.appendChild(divBody);
    var result_div = document.createElement("div");
    result_div.classList.add("col");
    result_div.classList.add("p-3");

    result_div.appendChild(div);
    document.getElementById("box").appendChild(result_div);
   }
  });
});