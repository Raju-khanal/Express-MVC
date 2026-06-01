const mongoose = require("mongoose");
async function connectMongoDb(url) {
    return mongoose.connect(url)
        .then(() => {
            console.log("CONNECTED");
        }).catch((err) => { console.log("ERROR OCCURED") });
}
module.exports = { connectMongoDb };