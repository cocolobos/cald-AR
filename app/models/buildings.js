module.exports = (mongoose) => {
  const Buildings = mongoose.model(
    "building",
    mongoose.Schema(
      {
        id: {
          type: Number,
          require: true,
        },
        address: {
          type: String,
          require: true,
        },
        boilerID: {
          type: Number,
          require: true,
        },
        fullname: {
          type: String,
          require: true,
        },
        phone: {
          type: String,
          require: true,
        },
      },
      { timestamps: true }
    )
  );
  return Buildings;
};
