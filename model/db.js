const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Student')
mongoose.connect('mongodb+srv://chinhr164:Matkhau123@cluster0.swsyakw.mongodb.net/Student')
.catch(err => {
    console.log('Loi ket noi CSDL');
    console.log(err);
})

module.exports = {mongoose};