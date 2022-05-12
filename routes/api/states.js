const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()
const statesController = require('../../controllers/statesController')


router.route('/')
    .get(statesController.getAllStates)
    .post(statesController.createNewFacts)
    .put(statesController.updateState)
    .delete(statesController.deleteFacts)

router.route('/:state')
    .get(statesController.getState)




module.exports = router;