module.exports= (mongoose) => {
    const Technicians = mongoose.model(
        "technicians",
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
                    min:1,
                    max:3
                },
                skillsId:{
                    type:Number,
                    require: true
                },
                hour_rate:{
                    type:Number,
                    require: true,
                    min:0,
                    max:50,
                },
                daily_capacity:{
                    type:Number,
                    require: true,
                    min:0,
                    max:8
                }
            },
            {timestamps: true}
        )
    )
    return Technicians;
};