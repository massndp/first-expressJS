const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Data name have to fill!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const grape = new Fruit({
        name: "Grape",
        rating: 10,
        review: "Taste good and fresh!"
})

grape.save(function (error){
    if(error){
        console.log(error);
    }else{
        mongoose.connection.close();
        console.log('Fruit successfull insert to database ');
    }
})

