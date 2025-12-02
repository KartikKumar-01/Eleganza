const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    image: Buffer,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    panelColor: String,
    footerColor: String,
    fontColor: String
})

module.exports = mongoose.model("product", productSchema);