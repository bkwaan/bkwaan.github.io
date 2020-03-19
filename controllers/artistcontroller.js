let mod = require('../models/artistData');

exports.addArtist = async (req, res, next) => {
    await mod.addArtist(req.body.name,req.body.about,req.body.source);
    let data = await mod.loadArtist();
    res.render('artists',{ 'artist' : data[0],artistCSS:true});
}

exports.deleteArtist = async(req,res,next) => {
    await mod.deleteArtist(req.body.id);
    let data = await mod.loadArtist();
    res.render('artists', {'artist' : data[0], artistCSS:true});
}

exports.search = async(req,res,next) => {
    let data = await mod.search(req.query.searched);
    res.render('artists', {'artist' : data[0], artistCSS:true});    
}