const { mongoose } = require(".");

module.exports = mongoose => {
    const Buildings = mongoose.model (
        'building',
        mongoose.Schema(
            {
                id: Number,
                adress: String,
                boilerID: Number,
                fulname: String,
                phone: String
            },
            { timestamps: true }
        )
    )
    return Buildings
};