function allowCrossDomain(req, res, next) {
  if (req.path.match(/^\/api\/.*/) !== null) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  }
  next();
}

module.exports = allowCrossDomain;
