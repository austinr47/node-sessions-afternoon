module.exports = function(res, req, next) {
    if(!req.user) {
        req.user = {
            username: '',
            cart: [],
            total: 0
        }
    }
    next();
}