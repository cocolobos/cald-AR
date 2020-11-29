module.exports = (mongoose) => {
  const Customer = mongoose.model(
    "customer",
    mongoose.Schema(
      {
        id: {
          type: Number,
          required: true,
        },
        customerType: {
          type: String,
          required: true,
          enum: ["Particular", "Business"],
        },
        email: {
          type: String,
          required: true,
        },
        building: {
          type: Number,
          required: true,
        },
        fiscal_address: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
    )
  );
  return Customer;
};
