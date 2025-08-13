const express = require('express')
const router = express.Router()
const { add , view , update, deleted, search, sort, count, count_all , exported} = require('../Controllers/studController') 

router.route('/add').post(add)                           //add students
router.route('/').get(view)                             //view all students
router.route('/update/:student_name').patch(update)     //update by name
router.route('/delete/:student_name').delete(deleted)   //delete by name
router.route('/search/:student_name').get(search)   //search by name
router.route('/sort').get(sort)                     //sort by name
router.route('/count/:student_course').get(count)  //count by course
router.route('/count-all').get(count_all)    //count all
router.route('/export').get(exported)       //export data to students.txt

module.exports = router