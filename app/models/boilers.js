module.exports = (mongoose) => {
  const boiler = mongoose.model(
    "boilers",
    mongoose.Schema(
      {
        typeId: {
          type: String,
          enum: ["A", "B", "C", "D"],
          required: true,
        },
        maintaince_rate: {
          type: String,
          enum: ["yearly", "quarterly", "monthly"],
          required: true,
        },
        hour_maintaince_cost: {
          type: Number,
          required: true,
        },
        hour_eventual_cost: {
          type:  Number,
          required: true,
        },
      },
      { timestamps: true }
    )
  );
  return boiler;
};
