module.exports = mongoose => {
    const appointments = mongoose.model(
        "Appointments",
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
                    required: false,
                },                                    
            },
            { timestamps: true }
        )
    )
    return appointments
};