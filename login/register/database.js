const mongoose = require('mongoose');

const Mail = document.getElementById("email");
const password = document.getElementById("password");

const shipSchema = Schema({ name: String, registry: String });
shipSchema.pre('save', function() {
  console.log('Save', this.registry);
});
const schema = schema({
  name: String,
  rank: String,
  ship: shipSchema
});
const Person = model('Person', schema);

connect(
    mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) console.log(err);
        app.listen(3000);
    }
);

const data = new personne({
    name : Mail,
    pwd : password
});

await data.save();
console.log(data);

export const mongoConnect = mongoConnect;
export const getDb = getDb;