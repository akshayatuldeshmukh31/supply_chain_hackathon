var jwt = require('jsonwebtoken');
var express = require('express');
var path = require('path');
var config = require('/home/akshayd31/CPRQ/config');
var statusCodes = require('../config/statusCodes');
var initData = require('../serverStarter')
var dbFuncs = require('../database/databaseOps');
var logger = require('../config/logger')
var secureRouter = express.Router();

var pendingApprovalsCollection = null;

secureRouter.use(function(req, res, next){
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	if (token) {

      // verifies secret and checks expiration time
      jwt.verify(token, config.secret, function(err, decoded) {      
        if (err) {
          res.setHeader('Content-Type', 'application/json');
          res.status(500).send(JSON.stringify({
            "success": statusCodes.authenticationFailure, 
            "error": statusCodes.authenticationFailureErrorMessage
          }));  
        } 
        else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded; 
          next();
        }
      });

    } 
    else {

      // if there is no token
      // return an error
      res.setHeader('Content-Type', 'application/json');
      res.status(404).send(JSON.stringify({
        "success": statusCodes.authenticationTokenNotProvided, 
        "error": statusCodes.authenticationTokenNotProvidedErrorMessage 
      }));
    }
});

secureRouter.post("/pendingApprovals", function(req, res){
	pendingApprovalsCollection = initData.returnPendingApprovalsCollection();

	var jsonQuery = JSON.parse(JSON.stringify({
		"isApproved": "Pending"
	}));

	dbFuncs.searchAllDetails(pendingApprovalsCollection, jsonQuery, function(code, cursor, message){
		if(code=="-1"){
			logger.error("/pendingApprovals: Cannot retrieve list");
			res.status(500).send(JSON.stringify({
				"success": -1,
				"error": message
			}));
		}
		else if(code=="0"){
			logger.info("/pendingApprovals: No pending approvals");
			res.send(JSON.stringify({
				"success": 0,
				"error": null
			}));
		}
		else if(code=="1"){
			logger.info("/pendingApprovals: Pending approvals retrieved ");
			res.send(JSON.stringify({
				"pendingApprovals": cursor,
				"success": 1,
				"error": null
			}));
		}
	});
});

module.exports = secureRouter;