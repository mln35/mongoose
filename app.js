mongoose = require('mongoose');
Course = require('./src/model/cours.model')
Teacher = require('./src/model/teacher.model')
const connect = async() =>{
    try{    
        await mongoose.connect('mongodb://localhost:27017/bootcamp');
        console.log('Connected to the database!');
    }
    catch(e){
        console.log(e.message);
    }
}

connect();


const createCourse = async(course)=>{
    console.log(typeof course, course);
    try{
        await Course.create(course);
    }
    catch(e){
        console.error(e.message);
    }
}
// createCourse({label:'JS',volume:70});

const createTeacher = async(teacher) => {
    try{
        await Teacher.create(teacher);
    }
    catch(e){
        console.error(e.message);
    }
}
// createTeacher({name:"ABDALLAH", address:{street:"ABDALLA Street", streetnumber:55,homenumber:3},email:'mail@email.com'})

const findTeacher = (teacher) => {
    Teacher.find(teacher).then((data, err) => {
        if(err){
            console.log(err.message);
        }else
        console.log(data);
    })
}
findTeacher({'address.streetnumber':55});

// console.log(Teacher.find(x => x.name = "Ferid"));