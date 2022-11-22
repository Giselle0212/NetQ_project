const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
    first_name: { type: String, Number,
    required: [true, "{PATH} is required"],
    minlength: [3, " {PATH} needs to be more than 3 characters"]
    },

    last_name: { type: String,
    required: [true, " {PATH} is required"],
    minlength: [3, " {PATH} needs to be more than 3 characters"]
    },

    email: { type: String,
        required: [true, " {PATH} is required"],
    minlength: [, " {PATH} needs to be more than 3 characters"]
    },
    
    password: { type: String,
    required: [true, "{PATH} is required"],
    minlength: [8, "{PATH} needs to be more than 3 characters"]
    }
    
}, { timestamps: true });



module.exports.User = mongoose.model('User', UserSchema);