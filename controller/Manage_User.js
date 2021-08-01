module.exports = {
    Index(req, res){
        res.render('index', {
            Layouts: 'layouts/Manage_User'
        });
        return;
    }
}