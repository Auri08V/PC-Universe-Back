const { Users } = require('../../db');

const postUserAuth0 = async (req, res) => {
    const { name, last_name, email } = req.body;
    console.log(req.body);
    try {

        const password = generateRandomPassword(10);

        let rol = 2

        if (email === 'somospixis123@gmail.com') { rol = 1 }

        const response = await Users.create({
            name,
            last_name,
            email,
            password,
            roleId: rol
        });

        res.status(200).json(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
};

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

module.exports = postUserAuth0;
