function Middleware() {
    return (req, res, next) => {
        console.log("Middleware is running...");
        next();
    }
}
module.exports = { Middleware };
