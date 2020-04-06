const mongoose = require('mongoose');
const dateforamt = require('dateformat');
let ObjectId = mongoose.Schema.Types.ObjectId;
var now = new Date()
var today = dateforamt(now, 'yyyy-mm-dd HH:MM:ss')
// var exp_date = dateforamt(now, 'mm-yyyy')
mongoose.set('useCreateIndex', true);
const cardSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    CARD_NUMBER: { type: Number, required: true },
    NAME_ON_CARD: { type: String, required: true },
    CARD_TYPE: { type: String, required: true },
    EXP: { type: Date, required: true }
})


module.exports = mongoose.model('Card', cardSchema);