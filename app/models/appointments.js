module.exports = (mongoose) => {
  const appointments = mongoose.model(
    "appointments",
    mongoose.Schema(
      {        
        buildingId: {
          type: Number,
          required: true,        
        },
        boilerId: {
          type: Number,
          required: true,      
        },
        maintenanceType: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
        estimatedTime: {
          type: Number,
          required: true,
        },
      },
      { timestamps: true }
    )
  );
  return appointments;
};
