function guestMiddleWare(req, res, next){
    if(req.session.userLogged){
        return res.redirect('users/perfil')
    };

    next();
};

module.exports = guestMiddleWare;