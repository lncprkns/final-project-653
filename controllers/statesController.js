const data = {}
data.states = require('../model/states.json')
const State = require('../model/State')

const getAllStates = (req, res) => {
    res.json(data.states)
}

const createNewFacts = async (req, res) => {
    if(!req?.body?.state || !req.body?.funfact) {
        return res.status(400).json({ 'message': "State fun facts value required"})
    }

    try {
        const result = State.create({
            stateCode: req.body.stateCode,
            funfact: req.body.funfact
        })

        res.status(201).json(result)
    } catch {
        console.log(err)
    }
}

const updateState = async (req, res) => { // This isn't right, but it's what we're going with for now as a placeholder 
    if (!req?.body?.stateCode) {
        return res.status(400).json({ "message": "State fun fact index value required" })
    }

    const state = State.findOne({_stateCode: req.body.stateCode}).exec()
    if (!funfact) {
        return res.status(204).json({ "message": `No state matches ${req.body.stateCode}`})
    }
    res.json(data.states)
}

const deleteFacts = async (req, res) => {
    res.json({ "code": req.params.state})
}

const getState = async (req, res) => {
    const stateAbbr = req.params.state.toUpperCase()
    const state = data.states.find(st => st.code === stateAbbr)
    if (!state) {
        return res.status(400).json( {"message":"Invalid state abbreviation parameter"} )
    }
    res.json(state)
}

module.exports = {
    getAllStates,
    createNewFacts,
    updateState,
    deleteFacts,
    getState
}