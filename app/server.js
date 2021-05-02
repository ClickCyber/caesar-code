// import libary
const fs_moudle = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;
const Keyboard = {'he':'אבגדהוזחטיכלמנסעפצקרשת','en':'abcdefghijklmnopqrstuvwxyz'};
var tags = {' ':' ', '-':'-', '_':'_', '|':'|', '?':'?', '!':'!', '@':'@', '#':'#', '*':'*', '.':'.', ',':',', '"':'"', "'":"'"};
app.use(require('body-parser').urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/libs'));

CAESAR = (language, index=1, encode=false)=>{
  var i,x = 0, result = tags;
  for(i=0; i < Keyboard[language].length; i++){
    if(!(Keyboard[language][i + index ] === undefined)){
        if(encode === false){
          result[Keyboard[language][i]] = Keyboard[language][i + index ];
          continue;
        }
        result[Keyboard[language][i + index ]] = Keyboard[language][i];
    }
    else {
        if (encode === false){
            result[Keyboard[language][i]] = Keyboard[language][x];
            x++;
            continue;
        }
        result[Keyboard[language][x]] = Keyboard[language][i];
        x++;
    }
  }
  return result;
}

CAESAR_ALGORITHM = (msg, language, encode)=>{
    locked = [], result = {};
    for(i=0; i < Keyboard[language].length;i++){
        key = CAESAR(language, i, encode);
        template = "";
        for(x=0; x < msg.length; x++){
            if(key[msg[x]] == undefined){
                template += "?";
                continue;
            }
            template += key[msg[x]];
        }
        result[i] = template;
    }
    return result;
}

app.get('/', (request, response)=>{
    fs_moudle.readFile('index.html', (err, data)=> {
        return response.end(data);
    });
});

app.post('/', function(request, response) {
    if(request.body.action === "decode"){
        result = CAESAR_ALGORITHM(decodeURI(request.body.text), decodeURI(request.body.language ), false);
        ExResult = {status:"success", language:decodeURI(request.body.language), decode:result};
    }
    else if (request.body.action === "encode"){
        result = CAESAR_ALGORITHM(decodeURI(request.body.text), decodeURI(request.body.language) , true);
        ExResult = {status:"success", language:decodeURI(request.body.language), encode:result};
    }
    else{
        ExResult = {"status":"Bad Request"}
    }
        return response.send({result:ExResult});
    });

app.listen(PORT);

console.log("server is started success");