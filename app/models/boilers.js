module.exports = mongoose => {
    const boiler = mongoose.model(
        "boilers",
        mongoose.Schema(
            {
                id: {
                    type: Number,
                    required: true,
                },
                typeId: {
                    type: Number,
                    required: true,
                },
                maintaince_rate: {
                    type: String,
                    required: true,
                },
                hour_maintaince_cost: {
                    type: Number,
                    required: true,
                },
                hour_eventual_cost: {
                    type: Number, 
                    required: true,
                },
            },
            { timestamps: true }
        )
    )
    return boiler
};