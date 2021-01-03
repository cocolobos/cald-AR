module.exports = (mongoose) => {
  const boilersTypes = mongoose.model(
    "BoilersTypes",
    mongoose.Schema(
      {
        skillsId: {
          type: Number,
          require: true,
        },
        descriptions: {
          type: String,
          require: true,
          enum: ["Orange", "Turquoise", "Pink", "Puce"],
        },
        stock: {
          type: Number,
          require: true,
        },
      },
      { timestamps: true }
    )
  );
  return boilersTypes;
};
