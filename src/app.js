// requiring the mongoDB
const mongodb = require("mongodb");

// catching the MongoClient
const mongoClient = mongodb.MongoClient;

// connection

const connectionUrl = "mongodb://127.0.0.1:27017";

const dbname = "16-12-2023";

mongoClient.connect(connectionUrl, (err, res) => {
  if (err) {
    return console.log("error has occured");
  }
  console.log("all perfect line26");

  const db = res.db(dbname);

  //   db.collection("users").insertOne(
  //     {
  //       name: "essam",
  //       age: 26,
  //     },
  //     (err, data) => {
  //       if (err) return console.log("unable to insert data");
  //       console.log(data.insertedId);
  //     }
  //   );

  // db.collection("users").insertMany(
  //   [
  //     {
  //       name: "eslam",
  //       age: 24,
  //     },
  //     {
  //       name: "nasr",
  //       age: 24,
  //     },
  //     {
  //       name: "nagy",
  //       age: 30,
  //     },
  //     {
  //       name: "reem",
  //       age: 24,
  //     },
  //     {
  //       name: "yasmen",
  //       age: 32,
  //     },
  //   ],
  //   (err, data) => {
  //     if (err) {
  //       console.log("Unable to insert Data");
  //     }
  //     console.log(data.insertedCount, "line 68");
  //   }
  // );

  // findOne(query , options, callback)
  //   db.collection("users").findOne(
  //     {
  //       _id: mongodb.ObjectId("657ac91d5cee8ec02e536566"),
  //     },
  //     (err, user) => {
  //       if (err) {
  //         console.log("Unable to find this user");
  //       }
  //       console.log(user, "line 81");
  //     }
  //   );

  /// to get data that matches this condition
  // db.collection("users")
  //   .find({ age: 24 })
  //   .limit(3)
  //   .toArray((err, users) => {
  //     if (err) {
  //       console.log("unable to find users");
  //     }
  //     console.log(users);
  //   });

  //   //to count
  //   db.collection("users")
  //     .find({ age: 24 })
  //     .count((err, users) => {
  //       if (err) {
  //         console.log("unable to find users");
  //       }
  //       console.log(users, "line 103");
  //     });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  // limit -----> to get the first no of data.
  //   db.collection("users")
  //     .find({ age: 24 })
  //     .limit(1)
  //     .toArray((err, users) => {
  //       if (err) {
  //         console.log("unable to find users");
  //       }
  //       console.log(users, "line 103");
  //     });

  ////////////////////////////////////////////////////////////////////////////////////////

  // -----> we can use .then and .catch to handle the data coming from the promises
  //   db.collection("users")
  //     .updateOne(
  //       { _id: mongodb.ObjectId("657d2160cc6a8d91f5f133ce") },
  //       {
  //         $set: { name: "rema nagy" },
  //         $inc: { age: 2 },
  //       }
  //     )
  //   .then((data) => console.log(data.modifiedCount, "line 120"))
  //   .catch((err) => console.log(err));

  ///////////////////////////////////////////////////////////////////////////

  // UPDATEMANY -------> used to update more than a document
  //and if it holds empty object this means that these changes will be commited to all the documents in the collection
  //   db.collection("users")
  //     .updateMany(
  //       {},
  //       {
  //         $inc: { age: 1 },
  //       }
  //     )
  //     .then((data) => console.log(data.modifiedCount, "line 132"))
  //     .catch((err) => console.log(err));

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  // DELETION

  //#1 DELETEONE

  //   db.collection("users")
  //     .deleteOne({ _id: mongodb.ObjectId("657d2160cc6a8d91f5f133cb") })
  //     .then((data) => console.log(data.deletedCount, "line 146"))
  //     .catch((err) => console.log(err));

  //#2 DELETEMANY
  db.collection("users")
    .deleteMany({ age: 43 })
    .then((data) => console.log(data.deletedCount, "line 146"))
    .catch((err) => console.log(err));
});
