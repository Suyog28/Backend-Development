const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => { console.log("connected") })
        .catch((error) => {
            console.log(error);
            console.error(error.message);
            process.exit(1);

        });
}

module.exports = dbConnect;


// mongoose.connect('mongodb://localhost:27017/myDatabase', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => { console.log("connected") })
//     .catch((error) => { console.log(error) });