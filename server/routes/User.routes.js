const UserController = require('../controllers/User.controller');
 
module.exports = app => {
    app.get('/Users', UserController.findAllUsers);
    app.get('/User/:id', UserController.findOneSingleUser);
    app.post('/User/new', UserController.createNewUser);
}
