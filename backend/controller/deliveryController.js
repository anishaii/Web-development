const Delivery = require('../model/deliverySchema');

const addDeliveryInfo = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      city,
      paymentMethod,
      instruction
    } = req.body;

    const delivery = await Delivery.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      city,
      paymentMethod,
      instruction,
    });

    res.status(201).json({ success: true, message: "Delivery Info Saved", delivery });
  } catch (error) {
    console.error("Delivery save error:", error);
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

module.exports = { addDeliveryInfo };
