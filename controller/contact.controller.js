import Contact from "../model/contact.model.js";

export const contact = async (req, res) => {
  try {
    const { firstName, lastName, company, email, phone, message, agreed } = req.body;

    if (!firstName || !lastName || !email || !message || !agreed) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      company,
      email,
      phone,
      message,
      agreed,
    });

    await newContact.save();

    return res.status(201).json({
      message: "Message sent successfully",
      contact: newContact,
    });
  } catch (error) {
    console.error("Error saving contact:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
