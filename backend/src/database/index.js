const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
// mongoose.connect('mongodb://localhost/noderest', {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });

// const uri = 'mongodb://localhost/noderest'
const uri = 'mongodb+srv://admin:123987@cluster0-yjygu.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.Promise = global.Promise;

module.exports = mongoose;