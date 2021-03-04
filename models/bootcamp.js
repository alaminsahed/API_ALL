const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please add your name'],
        trim: true,
        maxLength: [50, 'can not be more than 50 chars']
    },
    slug: String,
    description:{
        type:String,
        required: [true, 'please add your description'],
        maxLength: [200, 'can not be more than 200 chars']

    },
    website:{
        type: String,
        match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'use a valid url']
        
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'add a valid email']
    },
    address:{
        type: String,
        required: true
    },
    location:{
        //mongoose geojson
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            
          },
          coordinates: {
            type: [Number],
           
            index: '2dsphere'
          },
          formattedAddress: String,
          street: String,
          city: String,
          state: String,
          zipCode: String,
          country: String

    },
    careers:{
        type:[String],
        required: true,
        //enum checks careers are available in the array or not
        enum: [
            "Mobile Development",
			"Web Development",
			"Data Science",
			"Business",
            "UI/UX",
        ]
    },
    averageRating:{
        type: Number,
        min: [1,'Rating must be 1'],
        max: [10,'Rating must be under 10'],
    },
    averageCost: Number,
    photo:{
        type:String,
        default: 'no-photo.jpg',
    },
    housing:{
        type: Boolean,
        default: false
    },
    jobAssistance:{
        type: Boolean,
        default: false
    },
    jobGuarantee:{
        type:Boolean,
        default: false
    },
    acceptGi:{
        type:Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Bootcamp', BootcampSchema);