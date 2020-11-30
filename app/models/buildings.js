const { mongoose } = require(".");

module.exports = mongoose => {
    const Buildings = mongoose.model (
        'building',
        mongoose.Schema(
            {
                id: Number,
                address: String,
                boilerID: Number,
                fullname: String,
                phone: String
            },
            { timestamps: true }
        )
    )
    return Buildings
};