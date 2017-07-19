var express = require('express');
var app = express();
var fs = require("fs");
var http = require("http");
var session1 = '';

app.get('/getsessionid', function (req, res) {


   var OpenTok = require('opentok'),

            opentok = new OpenTok('45631912', 'ab40bd3c873ac61a56b82cb3d309d1023f5968ee'); 
            opentok.createSession(function(err, session) {

				    if (err) return console.log(err);
					  session1 = session.sessionId;
					  console.log('YOUR Session ID is:-'+session1);

					  res.end( session1);
      
   });

})

app.get('/gettoken', function (req, res) {

   var OpenTok = require('opentok'),

            opentok = new OpenTok('45631912', 'ab40bd3c873ac61a56b82cb3d309d1023f5968ee'); 
            token = opentok.generateToken(session1);
				
				    console.log('\n\nYOUR Token is:-'+token); 
				    res.end( token );

   })


app.get('/',function(req, res){

    fs.readFile('Opentokclient.html',function (err, data){

           res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
           res.write(data);
           res.end();

    });

})
          var server = app.listen(process.env.PORT || 5000, function () {

          var host = server.address().address
          var port = server.address().port

          console.log("Example app listening at http://%s:%s", host, port)

})



  

  