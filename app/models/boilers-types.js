module.exports=mongoose =>{
    const boilersTypes = mongoose.model(
        "BoilersTypes",
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
                },
            },
            {timestamps: true}
        )
    )
    return boilersTypes
};