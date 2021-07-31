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
                msg: 'Vui lòng nhập đủ các trường.',
                status: 'error'
            }));
            return;
        }

        res.send(JSON.stringify({
            title: 'Thành Công',
            msg: 'Đăng ký tài khoản thành công.',
            status: 'success'
        }));
    },
    Index_Login(req, res) { // Index hiện trang đăng ký
        res.render('index', {
            Layouts: 'layouts/Login'
        }); 
    }
}