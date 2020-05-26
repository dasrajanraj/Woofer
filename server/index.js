const express = require('express');
//const morgan = require('morgan');
const Filter = require('bad-words'),
      filter = new Filter() ;
const cors = require('cors');
const monk = require('monk');

const db = monk('localhost/woffer');
const woffs = db.get('woffs');

const app = express();

app.use(cors());
 
app.use(express.json());

function validBody( woff ){
    if ( (woff.name && woff.name.toString().trim() != '') && (woff.content && woff.name.toString().trim() != '') ){
        return true;
    }
    return false;
}

//app.use(morgan());

app.get('/woff' , (req ,res)=>{ 
    woffs.find()
    .then( woffers =>{
        res.statusCode = 200;
        res.setHeader( "content-type" , "application/json");
        res.json(woffers);
    })
    
})

app.post('/woff', ( req, res)=>{
    if(validBody(req.body)){
        var dummy = {
            name : filter.clean(req.body.name.toString()),
            content : filter.clean(req.body.content.toString()),
            created : new Date()
        }
        woffs
            .insert(dummy)
            .then( dums =>{
                res.setHeader( "content-type" , "application/json");
                res.json(dums);
            })

    }
    else{
        res.statusCode = 422;
        res.send({message: "Unable to insert in the database"});
    }
})


app.listen(5000 , ()=>{
    console.log('Server Running at http://localhost:5000');
})