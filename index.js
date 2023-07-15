const express = require("express");
const path = require('path')
const app = express();  //app includes object which gives you routing ,http ,middleware, rendering page
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}))

//configure different routes function get, post, delete
app.get("/",(req,res)=>{
    // res.send('<html><body><h1>Hello World</h1></body></html>')
    res.sendFile(path.join(__dirname,"","index.html"))
    // res.sendFile("index.html")
})

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});
app.put("/update-data",function(){
    console.log("put data")
})
app.delete("/delete-data",function(){
    console.log("delet")
})



// identical to Node's http.Server.listen() method.
const server = app.listen(5000,function(){
    console.log("hello")
})