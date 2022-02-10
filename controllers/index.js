const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllProducts = (req, res, next) => {
  conn.query("SELECT * FROM product", function (err, data, fields) {
    if(err) return next(new AppError(err))
    res.status(200).json({
      status: "success",
      length: data ? data.length : 0,
      data: data,
    });
  });
 };

 exports.createProduct = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  const data = req.body;
  const values = [data.name, data.registerDate, data.companyName, data.mediaUrl];
  conn.query(
    "INSERT INTO product (name, register_date,company_name, media_url) VALUES(?)",
    [values],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "todo created!",
      });
    }
  );
 };