var express = require('express');
//var mongoose =require('mongoose');
var router = express.Router();
//const uuid = require('uuid/v1');
//mongoose.connect('mongodb://localhost/test456');

/* mongoose.connection.on('open',function(){
	console.log("mongosse connected");
});

var Schema=mongoose.Schema;

var user=new Schema({
	uuid:String, 
	name:String,
	email:String
});

var User=mongoose.model('User',user);
 
*//* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* router.get('/data',function(req,res){

	User.find({},function(err,data){
		
		if(err){
			console.log(err);
		}

		else{

			res.render('user', { data: data });
		}
	});

});

router.post('/create',function(req,res,next) {
	var newid=uuid.v1();
	console.log(newid);
	console.log(req.body.name);
	var newUser={
			uuid:newid,
			name:req.body.name,
			email:req.body.email
	}

	User.create(newUser,function(err,data){	
		if(err){
			console.log(err);
		}

		else{
			res.redirect('/data');
			//res.send(data);
		}
	});
});


router.post('/update',function(req,res) {
	console.log(req.body.name);
	User.findOneAndUpdate({'uuid':newid},function(err,data){
		if(err){
			console.log(err);
		}
	
		else{
	
			res.redirect('/data');
		}
	});
});
	
	
router.post('/delete',function(req,res,next) {
		console.log(req.body.name);
		User.remove({'name':req.body.name},function(err,data){
			
			if(err){
				console.log(err);
			}
		
			else{
		
				res.redirect('/data');;
			}
		});
});
*/			

module.exports = router;
