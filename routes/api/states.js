const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()
const data = {}
data.states = require('../../data/states.json')

router.route('/')
    .get((req, res) => {
        res.json(data.states)
    })

router.route('/:state')
    .get((req, res) => {
        res.json({ "state": req.params.state })
    })




module.exports = router