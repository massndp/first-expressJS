const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: String, 
    rating: Number, 
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit({
//     name: "Apple",
//     rating: 8,
//     review: "Taste is good"

// });

//Insert once
// apple.save(function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log('Apple is successfull insert in database')
//     }
// })

//insert to many
const pinneaple = new Fruit({
    name: "Pinneaple",
    rating: 9,
    review: "Taste are sweet and sour but so fresh!"
});

const mango = new Fruit({
    name: "Mango",
    rating: 8,
    review: "Taste are sweet and sour but so fresh!"
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 6,
    review: "Taste are sweet and sour but so fresh!"
});

Fruit.insertMany([pinneaple, mango, kiwi], function(err){
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();
        console.log('The fruits are successfull insert into database');
    }
})