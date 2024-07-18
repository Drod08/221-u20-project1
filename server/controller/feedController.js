let feedItems = require("../model/feeditem");




//list of feeditems
let feedItem = [];

let feedItem1 = feedItems.feedItem('Welcome to Marist!!', 'Marist is THE school to go to if you want to excel in your career and become the best. We have so many different types of majors and minors that will support your marist experience. Acorrding to the U.S.News and World Report ,"Marist College has great Faculty and staff who genuinely care about their students, and student success. Additionally the resources offered by Marist allow students to have amazing opportunities that they would not find elsewhere. The Marist community is like no other, and is an amazing thing to be a part of."', 'https://www.marist.edu/academics', 'images/campus.png');
let feedItem2 = feedItems.feedItem('Marist Sports', 'Nothing compares to the viarity of sports and clubs for everyone to have their own extra curicular things that makes you who you are. Here at marist we are prideful for out sports. An example of our Marist sports, "The Marist Red Foxes football program is the intercollegiate American football team for Marist College located in the U.S. state of New York. The team competes in the NCAA Division I Football Championship Subdivision and are members of the Pioneer Football League. Marists first football team was fielded in 1965".', 'https://goredfoxes.com/', 'images/marist news.webp');
let feedItem3 = feedItems.feedItem('Marist Hancock Building', 'Hancock is Marist Computer Science building. It is home to mnay computer science programs that Marist funds all over. In Newburgh New York Marist has funded the Marist Program in NFA Main campus. Students in this program goes to marist for three weeks during the summer. They take computer science college classes right here in this building.', 'https://www.marist.edu/about/map', 'images/hancock.jpeg');

feedItem.push(feedItem1);
feedItem.push(feedItem2);
feedItem.push(feedItem3);

//export 5 functions
exports.getfeedcloud= function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItem[req.params.feedItemId]);

}

exports.getfeedput= function(req, res) {
	let updatedfeedItem= feedItem[req.params.feedItemId];

    //console.log(req.body.title);
	if(req.body.title && req.body.body && req.body.linkUrl && req.body.imageUrl)
		updatedfeedItem.title= req.body.title;
		updatedfeedItem.body = req.body.body;
		updatedfeedItem.linkUrl = req.body.linkUrl;
		updatedfeedItem.imageUrl = req.body.imageUrl;

	feedItem[req.params.feedItemId] = updatedfeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItem[req.params.feedItemId]);

}
    



exports.getfeedItem= function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItem);
}

exports.savefeedItem = function(req, res) {
	let newfeedItem = feedItems.feedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
    feedItem.push(newfeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItem);
}

exports.feedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feedItem[req.params.feedItemId]);
}

exports.deletefeedItem = function(req, res) {
	feedItem.splice(req.params.feedItemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItem);
}

exports.updatefeedItem = function(req, res) {
	//get the existing user from the array
	let updatedfeedItem= feedItem[req.params.feedItemId];

    console.log(req.body.title);
	if(req.body.title)

		updatedfeedItem.title= req.body.title;
	if(req.body.body)
		updatedfeedItem.body = req.body.body;
	if(req.body.linkUrl)
		updatedfeedItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedfeedItem.password = req.body.imageUrl;

	 //save the local copy of the user back into the array
	feedItem[req.params.feedItemId] = updatedfeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItem[req.params.feedItemId]);

}




//let myFunc1 = function() { ... };
//let myFunc2 = function() { ... };
//let myFunc3 = function() { ... };
//let myFunc4 = function() { ... };
//let myFunc5 = function() { ... };
//exports.myFunc1 = myFunc1;
//exports.myFunc2 = myFunc2;
//exports.myFunc3 = myFunc3;
//exports.myFunc4 = myFunc4;
//exports.myFunc5 = myFunc5;

//for feeditemsroutes.js

//const express = requre( 'express');
//const router = express.Router( );

//let feeditemsController = require("../controllers/feeditemsControllers");

//router.route("/api/feeditems");
    //.get(user.Controller.getAllfeeditems);


//module.exports = router;

