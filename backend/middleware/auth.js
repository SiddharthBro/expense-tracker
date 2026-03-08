module.exports = function (req, res, next) {
console.log("Auth middleware running");
next();
};