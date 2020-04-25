// create hash for the user
const bcrypt = require('bcryptjs');

const router = require('express').Router();
const Users = require('../users/users-model.js');

// POST /api/register
router.post('/register', (req, res) => {

    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 8); //number of rounds that the password will be hash 

    // replace the new pw with our hash
    user.password = hash;

  Users.add(user)
    .then(saved => {
        res.status(201).json({saved});
    })
    .catch(err => {
        res.status(500).json({message: 'problem with the db', error: err});
    })
});

// LOGIN
router.post('/login', (req, res) => {
    const {username, password} = req.body;

    Users.findBy({username})
    .then(([user]) => {
        if (user && bcrypt.compareSync(password, user.password)){ //will compare the password guesses
            res.status(200).json({message: 'welcome!'});
        } else {
            res.status(401).json({message: 'invalid creds'});
        }
    }) //if user is returned, we can do our comparison
    .catch(err => {
        res.status(500).json({message: 'problem with the db', error: err});
    })
})

module.exports = router;
