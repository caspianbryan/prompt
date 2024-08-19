import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;

// The 'models' object is provded by the Mongoose library and stores all the registered models.
// If a m odel name 'User' already exists in the 'models' object, it addigns that existing model the 'User' varialbe
// This prevents redefining the model and ensures that the existing model is reused
// If a  model named 'User' does not exist in the 'models' object, the 'model' function from Mongoose is called to
//create a new model
// The newly created modle is then assigned to the 'User' variable.
