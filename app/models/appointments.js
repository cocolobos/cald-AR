module.exports = (mongoose) => {
  const appointments = mongoose.model(
    "appointments",
    mongoose.Schema(
      {
        id: {
          type: Number,
          required: true,
          unique: true,
        },
        buildingId: {
          type: Number,
          required: true,
          unique: true,
        },
        boilerId: {
          type: Number,
          required: true,
          unique: true,
        },
        maintenanceType: {
          type: String,
          required: true,
        },
        date: {
          type: date,
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
