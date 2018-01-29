var fs = require('fs');
var https = require('http');

fs.writeFile("index.html", "<div>Creating index file. Script Executed</div>", function(error){
    if(error){
        console.log(error);
    } else {
        console.log('Script Execueted');
        console.log('Updated');
    }
});

var fileurl = "http://fontawesome.io/assets/img/logo-themeisle.png";
https.get(fileurl, function(response){
    console.log(response);
    if(response){
        fs.writeFile("image.txt", response, function(error){
            if(error){ 
                console.log('File Creation Error ' + error);
            } else {
                console.log('File Created');            
            }
        });
    }
});

