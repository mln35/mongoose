mongoose = require('mongoose');
Course = require('./src/model/cours.model')

const connecter = async() =>{
    try{    
        await mongoose.connect('mongodb://localhost:27017/bootcamp');
        console.log('Connected to the database!');
    }
    catch(e){
        console.log(e.message);
    }
}

connecter();


const creer = async(course)=>{
    try{
        await Course.create(course);
    }
    catch(e){
        console.error(e.message);
    }
}
creer({label:'JS',volume:70});