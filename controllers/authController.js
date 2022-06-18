const router = require('express').Router();
const authService = require('../services/authService');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword, address } = req.body;

    if (password !== repeatPassword) {
        return res.render('auth/register', { error: 'Password missmatch!' });
    }

    try {
        // Create user
        const createdUser = await authService.create({ username, password, address });
        res.redirect('/login');

    } catch (error) {
        // Add mongoose error mapper
        return res.render('auth/register', { error: 'db error' });
    }

});

module.exports = router;