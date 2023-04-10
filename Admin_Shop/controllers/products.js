const rootDir = require('../util/path');

exports.getProduct=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  }

  exports.postAddProducts=(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  }