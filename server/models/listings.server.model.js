//You can replace this entire file with your Bootcamp Assignment #2 - ListingSchema.js File

/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here from Bootcamp Assignment #2 - ListingSchema.js File*/
  code: {type: String,
  	required: true
  }, 
  name: {type: String,
  	required: true
  },
  coordinates: {
    latitude: Number, 
    longitude: Number
  }, 
  address: String,
  updated_at: Date,
  created_at: Date

});

/* create a 'pre' function that adds the updated_at and created_at if not already there property */
listingSchema.pre('save', function(next) {
  /* your code here from Bootcamp Assignment #2 - ListingSchema.js File */
  var current_date = new Date();
  this.updated_at = current_date;
  if(!this.created_at){
  	this.created_at = current_date;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;