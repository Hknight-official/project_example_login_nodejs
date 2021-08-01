const UserModel = require("../models/Users");

module.exports = {
    Index_Register(req, res) { // Index hiện trang đăng ký
        res.render('index', {
            Layouts: 'layouts/Register'
        }); 
    },
    Register(req, res){
        let data_form = req.body;
        if (!data_form.username || !data_form.phone || !data_form.password || !data_form.re_password){
            res.send(JSON.stringify({
                title: 'Thất Bại',
                msg: 'Vui lòng nhập đủ các trường á.',
                status: 'error'
            }));
            return;
        }

        if (data_form.password != data_form.re_password){
            res.send(JSON.stringify({
                title: 'Thất Bại',
                msg: 'Mật khẩu nhập lại không đúng á.',
                status: 'error'
            }));
            return;
        }
        
        if (parseInt(data_form.phone.length) != 10){
            res.send(JSON.stringify({
                title: 'Thất Bại',
                msg: 'Số điện thoại không đúng.',
                status: 'error'
            }));
            return;
        }

        // promise
        UserModel.find({$or: [{username: data_form.username}, {phone: data_form.phone}]}, (err, doc) => {

            if (doc.length > 0){
                res.send(JSON.stringify({
                    title: 'Thất Bại',
                    msg: 'Tài khoản đã tồn tại á.',
                    status: 'error'
                }));
                return;
            }

            UserModel.create({
                username: data_form.username,
                phone: data_form.phone,
                password: data_form.password
            }).then(() => {
                res.send(JSON.stringify({
                    title: 'Thành Công',
                    msg: 'Đăng ký tài khoản thành công.',
                    status: 'success'
                }));
                return;
            });
        });

        

        
    },


    Index_Login(req, res) { // Index hiện trang đăng ký
        res.render('index', {
            Layouts: 'layouts/Login'
        }); 
    },

    Login(req, res){
        let data_form = req.body;
        UserModel.find({username: data_form.username}, (err, doc) => {
            if (doc.length <= 0){
                res.send(JSON.stringify({
                    title: 'Thất Bại',
                    msg: 'Tài khoản không tồn tại.',
                    status: 'error'
                }));
                return;
            }
            
            if (doc[0].password != data_form.password){
                res.send(JSON.stringify({
                    title: 'Thất Bại',
                    msg: 'Mật khẩu không đúng.',
                    status: 'error'
                }));
                return;
            } 

            req.session.UserId = doc[0]._id;
            res.send(JSON.stringify({
                title: 'Thành Công',
                msg: 'Đăng nhập thành công.',
                status: 'success'
            }));
            return;


        });
    }
}