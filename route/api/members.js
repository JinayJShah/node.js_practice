const express = require('express')
const router = express.Router();
const members = require('../../members')

// get all members

router.get('/', (req,res) => res.json(members));

//get single member

router.get('/:id', (req, res) => { 
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){                                //route location 
    res.json(members.filter(member => member.id === parseInt(req.params.id)))   // parseInt : string to number converter
    } else {
        res.status(400).json({msg: `No member of the id of ${req.params.id}`}) // 400 is bad request 
    }
})

module.exports = router;