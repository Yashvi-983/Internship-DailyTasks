const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    student_name: {
        type: String,
        required: true
    },
    student_age: {
        type: Number,
        required: true,
        min: 15,
        max: 50
    },
    student_course: {
        type: String,
        enum : ['CSE', 'CS', 'AI-ML', 'IT', 'CSE-DS', 
        'Aeronautics', 'Aerospace', 'Mechanical', 'EC', 
        'Civil', 'ICT', 'IC', 'Automobile','Robotics', 
        'Architecture', 'Chemical', 'Printing', 'Fashion designing'],
        required: true
    }
})

const student = mongoose.model('Student-table', studentSchema)
module.exports = student