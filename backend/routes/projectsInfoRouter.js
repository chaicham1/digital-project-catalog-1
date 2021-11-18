const express = require("express");
const Router = express.Router();
const checkAuth = require("../../middleware/auth");

const appointmentsController = require('../../controllers/appointmentsController/appointmentsController')

Router.get('/getProjectsInfo',checkAuth.authorization,appointmentsController.getAppointmentDetails);
