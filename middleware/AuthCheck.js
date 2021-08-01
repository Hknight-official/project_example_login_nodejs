const UserModel = require("../models/Users");

module.exports = {
    Check(req, res, next){
        if (!req.session.UserId){
            res.redirect('/login');
            return;
        }
        UserModel.find({_id: req.session.UserId}, (err, doc) => {
            if (doc.length <= 0){
                res.redirect('/login');
                return;
            }
            next();
        })
    }
}