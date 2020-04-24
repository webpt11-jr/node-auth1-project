// create hash for the user
const bcrypt = require('bcryptjs');

const router = require('express').Router();
const Users = require('../users/users-model.js');

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

module.exports = router;
