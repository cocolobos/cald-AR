module.exports= (mongoose) => {
    const technicians = mongoose.model(
        "Technicians",
        mongoose.Schema(
            {
                id:{
                    type:Number,
                    require: true
                },
                firstName:{
                    type:String,
                    require: true
                },
                lastName:{
                    type:String,
                    require: true
                },
                email:{
                    type:String,
                    require: true
                },
                typeIds:{
                    type:Number,
                    require: true,
                },
                skillsId:{
                    type:Number,
                    require: true
                },
                hour_rate:{
                    type:Number,
                    require: true,
                },
                daily_capacity:{
                    type:Number,
                    require: true,
                }
            },
            {timestamps: true}
        )
    )
    return technicians;
};