// requiring the mongoDB
const mongodb = require("mongodb");

// catching the MongoClient
const mongoClient = mongodb.MongoClient;

// connection

const connectionUrl = "mongodb://127.0.0.1:27017";

const dbname = "small-task";

mongoClient.connect(connectionUrl, (err, res) => {
  if (err) {
    return console.log("error has occured");
  }
  console.log("all perfect line26");

  const db = res.db(dbname);

  //******* 1.insertOne to add 2 documents

  db.collection("users").insertOne(
    {
      name: "ahmed",
      age: 26,
    },
    (err, data) => {
      if (err) return console.log("unable to insert data");
      console.log(data.insertedId);
    }
  );
  db.collection("users").insertOne(
    {
      name: "essam",
      age: 42,
    },
    (err, data) => {
      if (err) return console.log("unable to insert data");
      console.log(data.insertedId);
    }
  );

  //******* 2. insertMany
  db.collection("users").insertMany(
    [
      {
        name: "eslam",
        age: 27,
      },
      {
        name: "nasr",
        age: 24,
      },
      {
        name: "nagy",
        age: 27,
      },
      {
        name: "reem",
        age: 24,
      },
      {
        name: "yasmen",
        age: 32,
      },
      {
        name: "ref'at",
        age: 27,
      },
      {
        name: "hossam",
        age: 24,
      },
      {
        name: "ehab",
        age: 27,
      },
      {
        name: "amr",
        age: 24,
      },
      {
        name: "adel",
        age: 27,
      },
    ],
    (err, data) => {
      if (err) {
        console.log("Unable to insert Data");
      }
      console.log(data.insertedCount, "line 68");
    }
  );

  //******* 3.using find to look for any body having the age of 27
  db.collection("users")
    .find({ age: 27 })
    .toArray((err, users) => {
      if (err) {
        console.log(err);
      }
      console.log(users);
    });

  //******* 4.using to limit the search to 3 only
  db.collection("users")
    .find({ age: 27 })
    .limit(3)
    .toArray((err, users) => {
      if (err) {
        console.log(err);
      }
      console.log(users);
    });

  //******* 5.setting the name for the first 4 people

  db.collection("users")
    .find({})
    .limit(4)
    .forEach(function (doc) {
      db.collection("users").updateOne(
        { _id: doc._id },
        { $set: { name: "mos3ad Ibrahem" } }
      );
    });

  //******* 6. adding 4 years the first 4 doc having the age of 27

  db.collection("users")
    .find({ age: 27 })
    .limit(4)
    .forEach(function (doc) {
      db.collection("users").updateOne({ age: 27 }, { $inc: { age: 4 } });
    });

  //********* 7. adding 10 years to all the documents

  db.collection("users").updateMany({}, { $inc: { age: 10 } });

  //********* 8. deleting all the doc having the age of 41 and then print the deletedCount
  db.collection("users")
    .deleteMany({ age: 41 })
    .then((data) => console.log(data.deletedCount));
});
