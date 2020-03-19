let mod = require('../models/artistData');

exports.validate = async (req, res, next) => {
    let validation = await mod.validate(req.query.username,req.query.pass);
    let data = await mod.loadArtist();
    if(validation) {
        res.render('artists', {'artist' :data[0], artistCSS:true});
    } else {
        res.render('login', {mainCSS:true});
    }
}

