const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    
    address: { type: String, Number,
    required: [true, "{PATH} is required"],
    minlength: [3, " {PATH} needs to be more than 3 characters"]
    },
    
    state: { type: String,
    required: [true, " {PATH} is required"],
    },

    city: { type: String,
    required: [true, "{PATH} is required"],
    minlength: [3, "{PATH} needs to be more than 3 characters"]
    },
    
    zip_code: { type: Number,
    required: [true, "This is required"],
    min: [3, 'minimum 3 numbers '],
    },

    time: { type: Number,
        min: [3, 'minimum 3 numbers '],
    },

    event_description: { type: String,
    required: [true, "This is required"],
    minlength: [3, "This needs to be more than 3 characters"]
    }
    
}, { timestamps: true });



module.exports.Event = mongoose.model('Event', EventSchema);