const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/secret', isAuth, (req, res) => {
    res.send('The chamber of secrets!')
});

module.exports = router;