// Define schema
// https://mongoosejs.com/docs/models.html#compiling
const AddressSchema = mongoose.Schema({
  city: String,
  street: String,
  houseNumber: String,
});

const ContactInfoSchema = mongoose.Schema({
  tel: [Number],
  email: [String],
  address: {
    type: AddressSchema,
    required: true,
  },
});

const CustomerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  company: String,
  connectInfo: ContactInfoSchema,
});
