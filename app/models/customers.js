module.exports = (mongoose) => {
  const customers = mongoose.model(
    "Customers",
    mongoose.Schema(
      {
        id: {
          type: Number,
          required: true,
        },
        customerType: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        buildings: {
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
  )
  return customers
};