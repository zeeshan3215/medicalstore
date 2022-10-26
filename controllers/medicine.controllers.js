const medicineController = {};
const Medicine = require('../models/medicine.model');

medicineController.getAll = async (req, res) => {
  let medicine;
  try {
    let merged = {};
    const start = 0;
    const length = 100;
    medicine = await Medicine.paginate(
      merged,
      {
        offset: parseInt(start),
        limit: parseInt(length)
      }
    );
    res.status(200).send({
      code: 200,
      message: 'Successful',
      data: medicine
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).send(error);
  }
};

medicineController.add = async (req, res) => {
  try {

    const body = req.body;

    const medicine = new Medicine(body);

  const result = await medicine.save();

    res.status(200).send({
      code: 200,
      message: 'medicine Added Successfully',
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).send(error);
  }
};
module.exports = medicineController;