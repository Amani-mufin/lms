const LeaveModel = require("../models/leave")



exports.postLeave = (req, res) => {
    const { type, reason, startDate, endDate, userID, status } = req.body;
    LeaveModel.create({
        type,
      reason,
      startDate,
      endDate,
      userID,
      status
    }).then(leave => {
        res.json(leave)
    })
        .catch(err => res.json({ message: "Failed", error: err }))
}

exports.getSingleLeave = (req, res) => {
    const leaveId = req.params.id;
    LeaveModel.findByPk(leaveId)
        .then(leave => {
            // console.log(leave)
            res.json(leave)
            if (leave === null) {
                return res.status(404).json({ message: "leave not Found" })
            }
        })
        .catch(err => res.json({ success: false, message: "leave does not exists" }))
}


exports.getLeave = (req, res, next) => {
    LeaveModel.findAll()
        .then(leave => {
            res.json(leave);
        })
        .catch(err => res.json({ success: false }))
}

exports.deleteLeave = (req, res) => {
    const leaveId = req.params.id;
    LeaveModel.findByPk(leaveId)
        .then(leave => {
            leave.destroy()
                .then(() => {
                    res.json({ success: true })
                })
                .catch(err => res.json({ success: false }))
        })
        .catch(err => res.json({ success: false, message: "This leave doesnt exists" }))
} 
