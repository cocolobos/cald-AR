module.exports = mongoose => {
    const appointments = mongoose.model(
        "appointments",
        mongoose.Schema(
            {
                id: {
                    type: Number,
                    required: true,
                },
                issue: {
                    type: String,
                    required: true,
                },
                date: {
                    type: String,
                    required: true,
                },
                estimatedTime: {
                    type: Number,
                    required: true,
                },
            },
            { timestamps: true }
        )
    )
    return appointments
};