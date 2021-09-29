exports.getProtectedData = (req, res, next) => {
  res.status(200).json({success: true, data: `You've got access to the protected data in this route`});
};
