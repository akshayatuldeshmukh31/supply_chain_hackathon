var bodyParser = require("body-parser");
var path = require("path")
var jwt = require("jsonwebtoken")
var initData = require('../serverStarter')
var dbFuncs = require('../database/databaseOps');
var logger = require('../config/logger')

// var companyRoutes = require("./company_access");
// var drayageRoutes = require("./drayage_access");
// var shippingRoutes = require("./shippingRoutes");
// var portMtoRoutes = require("./portMtoRoutes");
// var portAdminRoutes = require("./portAdminRoutes");
// var portLaborRoutes = require("./portLaborRoutes");

var stakeholdersCollection = null;

//Function to load routes for publicly and privately accessible routes
function loadAppRoutes(app){
	//To support JSON-encoded bodies
	app.use(bodyParser.json());

	//To support URL-encoded bodies
	app.use(bodyParser.urlencoded({extended:false}));

	//Load routes which require no authorization (publicly available)
	// app.use("/company", companyRoutes);

	//Load routes which require authorization (secured access)
	// app.use("/drayage", drayageRoutes);

	// app.use("/shippingline", shippingRoutes);
	// app.use("/portmto", portMtoRoutes);
	// app.use("/portadmin", portAdminRoutes);
	// app.use("/portlabor", portLaborRoutes);

	//TEST route for checking successful deployment
	app.get("/", function(req,res){
		//Send homepage
		res.sendFile(path.resolve("index.html"));
	});

	app.post("/register", function(req, res){
		stakeholdersCollection = initData.returnStakeholdersCollection();
		res.setHeader('Content-Type', 'application/json')
		var jsonCheckQuery = JSON.parse(JSON.stringify({
			"userName": req.body.userName
		}));

		dbFuncs.searchDetails(stakeholdersCollection, jsonCheckQuery, function(code, message){
			if(code=="0"){
				var jsonInsertQuery = JSON.parse(JSON.stringify({
					"userName": req.body.userName,
					"password": req.body.password,
					"role": req.body.role,
					"pointOfContact": req.body.pointOfContact,
					"email": req.body.email,
					"isApproved": "Pending"					
				}));

				dbFuncs.insertDetails(stakeholdersCollection, jsonInsertQuery, function(code, message){
					if(code=="1"){
						logger.info("/register: User name <" + req.body.userName + "> registered successfully");
						res.send(JSON.stringify({
							"success": 1,
							"error": null
						}));
					}
					else if(code=="-1"){
						logger.error("/register: User name <" + req.body.userName + "> not registered");
						res.send(JSON.stringify({
							"success": -1,
							"error": message
						}));
					}
				});
			}
			else if(code=="1"){
				res.send(JSON.stringify({
					"success": 0,
					"error": "User name already exists!"
				}));
			}
			else if(code=="-1"){
				res.send(JSON.stringify({
					"success": -1,
					"error": message
				}));
			}
		});

	});
}

exports.loadAppRoutes = loadAppRoutes;