import mongoose from "mongoose";

export default function connect() {
    const database =
    "mongodb+srv://davidaaxla17:ZaGUqJrcK15g0kFM@todocluster.2bryv.mongodb.net/?retryWrites=true&w=majority&appName=TodoCluster";
  mongoose
    .connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "todos",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
}