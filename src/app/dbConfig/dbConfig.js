import mongoose, { connect } from "mongoose";
export async function dbConnect() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Database connected successfully");
    });
    connection.on("error", (error) => {
      console.log("Error in database connection" + error);
      process.exit();
    });
  } catch (error) {
    console.log("Error in dbConnect");
    return error;
  }
}

dbConnect();
