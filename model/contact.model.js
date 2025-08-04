import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: { 
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  email: { 
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: { 
    type: String,
    required: true,
  },
  agreed: {
    type: Boolean,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
