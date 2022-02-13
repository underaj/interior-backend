const AppError = require("../utils/appError");
const { format } = require("date-fns");
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
  const currentDate = new Date();
  const productId = `${format(currentDate, 'yyyyMMdd')}${String(Date.now())}}`
  const values = [productId, data.name, data.modelNumber, data.type, data.category, data.price, data.supplierName, data.mediaUrl, format(currentDate, 'yyyy-MM-dd hh:mm:ss'), format(currentDate, 'yyyy-MM-dd hh:mm:ss')];
  conn.query(
    "INSERT INTO product (id, name, model_no, type, category, price, supplier_name, media_url, register_time, update_time) VALUES(?)",
    [values],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "Product created",
      });
    }
  );
 };

 exports.deleteProduct = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No product found", 404));
  }
  conn.query(
    "DELETE FROM product WHERE id=?",
    [req.params.id],
    function (err, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "Product deleted",
      });
    }
  );
 }