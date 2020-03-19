const  express = require('express');
const logincontroller = require('../controllers/logincontroller');
const artistcontroller = require('../controllers/artistcontroller');

const router = express.Router();

router.get('/login/',logincontroller.validate);

router.post('/addArtist/', artistcontroller.addArtist);

router.post('/deleteArtist/',artistcontroller.deleteArtist);

router.get('/search/',artistcontroller.search);


module.exports = router;