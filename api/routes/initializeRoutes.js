var bodyParser = require("body-parser");
var path = require("path")
// var companyRoutes = require("./company_access");
// var drayageRoutes = require("./drayage_access");
// var shippingRoutes = require("./shippingRoutes");
// var portMtoRoutes = require("./portMtoRoutes");
// var portAdminRoutes = require("./portAdminRoutes");
// var portLaborRoutes = require("./portLaborRoutes");

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
}

exports.loadAppRoutes = loadAppRoutes;