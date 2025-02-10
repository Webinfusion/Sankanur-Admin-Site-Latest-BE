const jwt = require('jsonwebtoken');

/**
 * Currently this api check login and password from the environment, this has to be changed in the future
 */
const login = (req, res) => {
    console.log('login')
    const { email, password } = req.body;
    console.log({ email, password })
    try {
        if (
            (
                (process.env.ADMIN_EMAIL == email) &&
                (process.env.ADMIN_PASSWORD == password)
            ) ||
            (
                (process.env.LEGACY_EMAIL == email) &&
                (process.env.LEGACY_PASSWORD == password)
            )
        ) {
            const token = jwt.sign({ authenticated : true }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.send({ token, err: false, status: true })
    
        } else {
        return res.send({ token: "", err, status: true })
        }
    } catch (err) {
        return res.send({ token: "", err, status: true })
    }
}

module.exports = { login }