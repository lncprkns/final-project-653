const data = {}
data.states = require('../model/states.json')

const getAllStates = (req, res) => {
    res.json(data.states)
}

const createNewFacts = (req, res) => {
    res.json({ // these will be updated
        "code": req.params.state,
        "funfact": req.body.funfact
    })
}

const updateState =  (req, res) => {
    res.json({ // these will be updated
        "code": req.params.state,
        "funfact": req.body.funfact
    })
}

const deleteFacts = (req, res) => {
    res.json({ "code": req.params.state})
}

const getState = (req, res) => {
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