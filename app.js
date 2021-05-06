const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});


const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true   // [true, "A name is required"]  OR  [1, "A name is required"]
  },
  rating: {
    type: Number,
    min : 1,
    max : 10
  },
  review: String,
});

const Fruit = mongoose.model ("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid"
});

fruit.save();


const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model ("Person", personSchema);


Person.updateOne ({name: "jack",}, {favouriteFruit: "mango"}, function(err){
  if (err) {
    console.log ("error");
  } else {
    console.log ("Successfully Updated");
  }
});


/* const person = new Person ({
name: "Amy",
age: 27,
favouriteFruit: "pineapple"
});

person.save (); */

const kiwi= new Fruit ({
  name: "kiwi",
  score: 3,
  review: "the best"
});

const orange =new Fruit ({
  name: "Orange",
  score: 4,
  review: "sour"
});

const banana = new Fruit ({
  name: "Banana",
  score: "6",
  review: "weird"
});

const pineapple= new Fruit ({
  name: "Pineapple",
  score: 9,
  review: "A very sweet fruit"
});

pineapple.save();


const mango= new Fruit ({
  name: "mango",
  score: 9,
  review: "delicious fruit"
});

mango.save();




Fruit.insertMany ([kiwi, orange, banana], function (err){
  if (err) {
    console.log ("error, please try again");
  } else {
    console.log("Succesfully saved all files");
  }
    
}); 


Fruit.find(function(err, fruits){
  fruits.forEach(fruit => {
    if (err) {
      console.log ("error");
    } else {
      mongoose.connection.close()
      console.log (fruit);

      
    }
  });
  });
  
  Fruit.updateOne ({_id: "6093a3ee88a23c153ce900a7"}, {name: "Peach"},function(err){
    if (err) {
      console.log ("error");
    } else {
      console.log ("Successfully Updated");
    }
  });

  Fruit.deleteOne ({name: "orange"}, function (err) {
    if (err) {
      console.log ("Error");
    } else {
      console.log ("Successfully deleted the entry");
    }
  });