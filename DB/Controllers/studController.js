const fs = require("fs");
const Csv = require('csv-stringify')
const path = require("path");
const Student = require("../Models/student_model");
const { error } = require("console");

//Add student
const add = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: "Invalid input" });
  }
}

//View student
const view = async (req, res) => {
  const student = await Student.find()
  res.json(student)
}

//Update student
const update = async (req, res) => {
  const student = await Student.findOneAndUpdate(
    { student_name: req.params.student_name },
    req.body,
    { new: true }
  );
  res.json(student)
}

//delete student middlewares :- zod, joi, express-validator, npm trends-csv, csv stringify, papaparse 
const deleted = async (req, res) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({
      student_name: req.params.student_name,
    });
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//search student by name
const search = async (req, res) => {
  const student = await Student.find({ student_name: req.params.student_name });
  res.json(student);
};

//Sorting student by name or age
const sort = async (req, res) => {
  const sorted = await Student.find({}).sort({ student_name: 1 });
  res.json(sorted);
};

//count name by course
const count = async (req, res) => {
  const course = await Student.find({}).countDocuments({
    student_course: req.params.student_course,
  });
  res.json(
    `Total number of students in ${req.params.student_course} are : ${course}`
  );
};

//count all
const count_all = async (req, res) => {
  const count = await Student.find({}).countDocuments({});
  res.json(`Total number of students: ${count}`);
};

//export data to students.txt
const exported = async (req, res) => {
  const csvData = await Student.find({});
  Csv.stringify(csvData, {
    header: true, columns: {
      student_name: 'Name',
      student_age: 'Age',
      student_course: 'Course'
    }
  }, (error, output) => {
    if (error) {
      console.error('Errorr!!')
    }
    fs.writeFile('students.csv', output, "utf-8", (err) => {
      if (err) {
        return res.status(500).send("Failed to Export data!!");
      }
      return res.json({ message: 'File created successfully!!' })
    })
  })
}






// const filepath = path.join(__dirname, 'students.txt')
//   const jsonData = await Student.find()
//   const jsonStringify = JSON.stringify(jsonData, null, 2)
//   fs.writeFile(filepath, jsonStringify, 'utf-8', (err)=>{
//         if(err){
//             return res.status(500).send('Failed to Export data!!')
//         }
//         res.download(filepath, 'students.txt', (err) => {
//           if(err){
//               res.send('Error sending File!!')
//           }
//       })
//   })


module.exports = {
  add,
  view,
  update,
  deleted,
  search,
  sort,
  count,
  count_all,
  exported,
};
