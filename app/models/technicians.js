module.exports = (mongoose) => {
  const technicians = mongoose.model(
    "Technicians",
    mongoose.Schema(
      {
        id: {
          type: Number,
          require: true,
          unique: true,
        },
        firstName: {
          type: String,
          require: true,
        },
        lastName: {
          type: String,
          require: true,
        },
        email: {
          type: String,
          require: true,
          unique: true,
        },
        typeIds: {
          type: Number,
          require: true,
          enum: [1,2,3],
        },
        skillsId: {
          type: Number,
          require: true,
        },
        hour_rate: {
          type: Number,
          require: true,
        },
        daily_capacity: {
          type: Number,
          require: true,
          min: 0,
          max: 8,
        },
      },
      { timestamps: true }
    )
  );
  return technicians;
};
