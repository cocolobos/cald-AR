module.exports = (mongoose) => {
  const technicians = mongoose.model(
    "Technicians",
    mongoose.Schema(
      {
        fullName: {
          type: String,
          require: true,
        },
        email: {
          type: String,
          require: true,
          unique: true,
        },
        phone: {
          type: Number,
          require: true,
        },
        statusActive: {
          type: String,
          require: true,
          enum: ["Active", "Inactive"],
        },
        trained: {
          type: String,
          require: true,
        },
        assignedClients: {
          type: Number,
          require: true,
        },
        spareHoursAvailable: {
          type: Number,
          require: true,
        },
      },
      { timestamps: true }
    )
  );
  return technicians;
};
