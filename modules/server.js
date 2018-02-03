var http = require('http');
var colors = require('colors');
var handlers = require('./handlers');   // moj moduł z 'modules'

function start() {
    function onRequest(request, response) {
        console.log("Odebrano zapytanie.".green);
        console.log("Zapytanie " + request.url + " odebrane.");
        response.writeHead(200, {"Content-Type": "text/plain"}); // dopisz Response Headers
        
        switch (request.url) {          // w zaleznosci od zapytania clienta
            case '/':
            case '/start':
                handlers.welcome(request, response);   // funkcja z modułu handlers
                break;
            case '/upload':
                handlers.upload(request, response);    // funkcja z modułu handlers
                break;
            case '/show':
                handlers.show(request, response);      // funkcja z modułu handlers
                break;
            case '/css':
                handlers.css(request, response);
                break;
            default:
                handlers.error(request, response);     // funkcja z modułu handlers
        }
    }
    
    // funkcja onRequest(), nasłuch na port 9000
    http.createServer(onRequest).listen(9000); 
    console.log("Uruchomiono serwer!".green);
}

exports.start = start;                      // eksport do głównego pliku index.js