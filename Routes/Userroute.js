// Importing important packages
const express = require('express');
const app = express();
const UserRouteprof = express.Router();
let User = require('../Models/User');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: 'itsoxama@gmail.com',
        pass: 'jskplmughhwbcxxi'
    }
});
UserRouteprof.route('/add').post(function(req, res) {

    let Users = new User(req.body);
    Users.save()
        .then(User => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
          console.log(err)
        });
});
UserRouteprof.route('/find').post(function(req, res) {
    User.findOne(
        { _id:req.body.id }, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'User':success});
                }
                
             }
         }
    
      
    )
    

    
});
UserRouteprof.route('/getallusers').get(function(req, res) {

        User.find({}, function(err, users) {
         
            if (err) {
                res.send("sad")
             } else {
                if(!users){

                    res.send(err)
                }
                else{
                    res.status(200).json({users})
                }   
                
             }  
        });
     




    

    
});
UserRouteprof.route('/auth').post(function(req, res) {
    User.findOne(
        { email:req.body.email ,
        password:req.body.pass
        }, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'User':success});
                }
                
             }
         }
    
      
    )
    

    
});
UserRouteprof.route('/').get(function(req, res) {
    User.find(function(err, Users) {
        if (err) {
            console.log(err);
        } else {
            res.json(Users);
        }
    });
});
UserRouteprof.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, User) {
        res.json(User);
    });
});





module.exports = UserRouteprof;
