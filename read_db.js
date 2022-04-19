const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

Fruit.find(function(error, fruits){
    if(error){
        console.log(error);
    }else{
        mongoose.connection.close();

        // console.log(fruits);
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
})