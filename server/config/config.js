//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://roy_encarter:notryan101@cluster0-2w1wk.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'dfa65ca5344641ee90c9ecd2f996dafb' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};