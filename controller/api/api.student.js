var model = require("../../model/student.model");

var objReturn = {
  //mẫu đối tượng trả về
};

exports.get = async (req, res, next) => {
  //các thao tác xử lý ở đây
  let list = [];
  try {
    list = await model.stuModel.find();
    objReturn = list;
  } catch (error) {
    console.log(error);
  }
  res.json(objReturn);
};

exports.post = async (req, res, next) => {
  const params = req.body;

  let objS = new model.stuModel({
    id: params.id,
    name: params.name,
    mark: params.mark,
  });
  try {
    if ((await model.stuModel.find({ id: params.id })).length > 0) {
      objReturn = {};
    } else {
      await objS.save();
      objReturn = await model.stuModel.find();
    }
  } catch (err) {
    console.log("Lỗi: " + err);
  }
  res.json(objReturn);
};

exports.put = async (req, res, next) => {
  const params = req.body;
  console.log(req.params.id);
  let objS = {
    id: params.id,
    name: params.name,
    mark: params.mark,
  };
  try {
    await model.stuModel.findOneAndUpdate({ id: req.params.id }, objS);
    objReturn = await model.stuModel.find();
  } catch (err) {
    console.log("Lỗi: " + err);
  }

  res.json(objReturn);
};

exports.delete = async (req, res, next) => {
  try {
    await model.stuModel.findOneAndDelete({ id: req.params.id });
    objReturn = await model.stuModel.find();
  } catch (err) {
    console.log("Lỗi: " + err);
  }
  res.json(objReturn);
};
