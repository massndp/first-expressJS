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

// const grape = new Fruit({
//         name: "Grape",
//         rating: 10,
//         review: "Taste good and fresh!"
// })

// grape.save(function (error){
//     if(error){
//         console.log(error);
//     }else{
//         mongoose.connection.close();
//         console.log('Fruit successfull insert to database ');
//     }
// })

// Fruit.updateOne({_id: '625ff5fedae797e4def0c137'}, {name: 'Peach'}, function(error){
//     if(error){
//         console.log(error);
//     }else{
//         mongoose.connection.close();
//         console.log('Berhasil update');
//     }
// })

Fruit.deleteOne({_id: '625ff5fedae797e4def0c137'}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Berhasil dihapus');
    }
})

Fruit.find(function(error, fruits){
    if(error){
        console.log(error);
    }else{
        mongoose.connection.close();

        // console.log(fruits);
        fruits.forEach(function(fruit){
        mongoose.connection.close();
            console.log(fruit.name);
        })
    }
})