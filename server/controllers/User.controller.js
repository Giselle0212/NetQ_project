
const {User} = require('../models/User.model');


module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allDaUsers => res.json( allDaUsers ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json( oneSingleUser ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
    .then(newlyCreatedUser => res.json( newlyCreatedUser ))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

