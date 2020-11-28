module.exports=mongoose =>{
    const BoilersTypes = mongoose.model(
        "boilers-types",
        mongoose.Schema(
            {
                id:{
                    type:Number,
                    require: true
                },                              
                skillsId:{
                    type:Number,
                    require: true
                },
                descriptions:{
                    type:String,
                    require: true
                },
                stock:{
                    type:Number,
                    require: true,
                    min:1,
                    max:20
                }
            },
            {timestamps: true}
        )
    )
    return BoilersTypes
};