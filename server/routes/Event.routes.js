const EventController = require('../controllers/Event.controller')


module.exports = app => {
    app.get('/get/AllEvents', EventController.findAllEvents);
    app.get('/get/OneEvent/:id', EventController.findOneSingleEvent);
    app.post('/post/NewEvent', EventController.createNewEvent);
    app.put('/update/Event/:id', EventController.updateExistingEvent);
    app.delete('/delete/Event/:id', EventController.deleteAnExistingEvent);

}

