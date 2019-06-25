const UserModel = require("../models/user")



exports.postUser = (req, res) => {
    const { firstName, lastName, email, username, password, roleID } = req.body;
    UserModel.create({
        firstName,
        lastName,
        email,
        username,
        password,
        roleID
    }).then(user => {
        res.json(user)
    })
        .catch(err => res.json({ message: "Failed", error: err }))
}

exports.getSingleUser = (req, res) => {
    const userId = req.params.id;
    UserModel.findByPk(userId)
        .then(user => {
            // console.log(user)
            res.json(user)
            if (user === null) {
                return res.status(404).json({ message: "user not Found" })
            }
        })
        .catch(err => res.json({ success: false, message: "user does not exists" }))
}


exports.getUser = (req, res, next) => {
    UserModel.findAll()
        .then(user => {
            res.json(user);
        })
        .catch(err => res.json({ success: false }))
}

exports.deleteUser = (req, res) => {
    const UserId = req.params.id;
    UserModel.findByPk(UserId)
        .then(user => {
            user.destroy()
                .then(() => {
                    res.json({ success: true })
                })
                .catch(err => res.json({ success: false }))
        })
        .catch(err => res.json({ success: false, message: "This user doesnt exists" }))
} 
