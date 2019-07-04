const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const members = require('../../members')

// get all members

router.get('/', (req,res) => res.json(members))

//get single member

router.get('/:id', (req, res) => { 
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){                                //route location 
    res.json(members.filter(member => member.id === parseInt(req.params.id)))   // parseInt : string to number converter
    } else {
        res.status(400).json({msg: `No member of the id of ${req.params.id}`}) // 400 is bad request 
    }
})

//create member

router.post('/', (req,res) => {
    const newMember ={
        id:uuid.v4(),  // to generate univerasl member id
        name:req.body.name,
        email:req.body.email,
        status:'active'
    }
if(!newMember.name || !newMember.email){
    return res.status(400).json({msg: 'please include name and email'})
}

    members.push(newMember) //push newmember to members array
    res.json(members) //we get a response of  members array which includes newmember

    //res.send(req.body)  //for post data on object
})

// update member

router.put('/:id', (req, res) => { 
    //console.log("here") 
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){    
                                //route location 
    const updateMember = req.body    // get email and name from req,body
    members.forEach(member => { 
        if(member.id===parseInt(req.params.id)){
             
            member.name = updateMember.name ? updateMember.name : member.name       //use conditional (ternary) operator
            member.email = updateMember.email ? updateMember.email : member.email
            res.json({msg : 'Member updated', member}) //to send back response
        }
    })
    } else {
        res.status(400).json({msg: `No member of the id of ${req.params.id}`}) // 400 is bad request 
    }
})
router.delete('/:id', (req, res) => { 
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){                                //route location 
    res.json({
    msg: 'members deleted',
    members: members.filter(member => member.id !== parseInt(req.params.id))
    })   // parseInt : string to number converter
    } else {
        res.status(400).json({msg: `No member of the id of ${req.params.id}`}) // 400 is bad request 
    }
})
module.exports = router