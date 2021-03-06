const connectToDatabase = require("./db");
const Note = require("./models/Note");
const Mobile = require("./models/Mobile");
require("dotenv").config({ path: "./variables.env" });

("use strict");

module.exports.createmobile = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Mobile.create(JSON.parse(event.body))
      .then(mobile =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(mobile)
        })
      )
      .catch(err =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not create the mobile."
        })
      );
  });
};

module.exports.getAllMobile = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Mobile.find()
      .then(mobiles =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(mobiles)
        })
      )
      .catch(err =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not fetch the mobile."
        })
      );
  });
};

module.exports.getOneMobile = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Mobile.findById(event.pathParameters.id)
      .then(note =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        })
      )
      .catch(err =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not fetch the mobile."
        })
      );
  });
};

module.exports.updateMobile = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Mobile.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), {
        new: true
      })
      .then(mobile =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(mobile)
        })
      )
      .catch(err =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: {
            "Content-Type": "text/plain"
          },
          body: "Could not fetch the mobiles."
        })
      );
  });
};

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Note.create(JSON.parse(event.body))
      .then(note =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        })
      )
      .catch(err =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not create the note."
        })
      );
  });
};

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Note.findById(event.pathParameters.id)
      .then(note =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        })
      )
      .catch(err =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not fetch the note."
        })
      );
  });
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Note.find()
      .then(notes =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(notes)
        })
      )
      .catch(err =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not fetch the notes."
        })
      );
  });
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Note.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), {
      new: true
    })
      .then(note =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        })
      )
      .catch(err =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not fetch the notes."
        })
      );
  });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Note.findByIdAndRemove(event.pathParameters.id)
      .then(note =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            message: "Removed note with id: " + note._id,
            note: note
          })
        })
      )
      .catch(err =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "Content-Type": "text/plain" },
          body: "Could not fetch the notes."
        })
      );
  });
};
