const bcrypt = require('bcrypt');
const { User, Basket } = require('../models/models')
const jwt = require('jsonwebtoken');

const generateJWT = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' })
}

class UserController {
    async reagistration(req, res) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return res.json({ message: 'Некорректный email или пароль' })
        }

        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return res.json({ message: 'Пользоваетль с таким email уже существует' })
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, password: hashPassword })
        const basket = await Basket.create({ userId: user.id })

        const token = generateJWT(user.id, user.email, user.role)
        return res.json({ token });
    }

    async login(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.json({ message: 'Пользователь не найден' });

        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return res.json({ message: 'Указан неверный пароль' })
        }

        const token = generateJWT(user.id, user.email, user.role);
        return res.json({ token })
    }

    async check(req, res) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json(token);
    }

}

module.exports = new UserController();