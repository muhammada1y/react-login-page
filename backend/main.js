const fs = require('fs');
const express = require ('express');
const {resourceLimits} = require('worker_threads');
const app = express();

app.use(express.json());

app.use(express.urlencoded());
app.use(express.static('public'));

app.get("/post", (req,res)=>{
    res.sendFile(__dirname + '/my-react/my-app/src.App.js');

});



app.post('/postForm',(req,res)=>{
    
    console.log(req.body);
    const username = req.body.name;
    const userfname  = req.body.fname;
    const email = req.body.email;
    const DOB = req.body.date;
    const adderss = req.body.adderss;
    const data = [username,userfname,email,DOB,adderss]

    try{
        const titleKeys = Object.keys(data[0])
const refinedData = []
refinedData.push(titleKeys)
        //creat csv
        let csv = '';
      

        csv += '\n';
       data.forEach(function(header) {
            
          csv += header
        });
        //writing file
      fs.appendFile((username),csv,'UTF-8',function(err){
        if(err){
            console.log('click again')
        }else{
            console.log('DATA SAVED')
        }
        res.redirect("/my-react-app/src/App.js");
});
    }catch(error){
        console.log(error);
    }
});
const PORT = process.env.PORT || 8088 ;
app.listen(PORT,console.log(`server started on port ${PORT}`));
