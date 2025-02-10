import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "plz add your Email"],
      validate: {
        validator: function (email) {
          return email.includes("@");
        },
      },
    },

    password: {
      type: String,
      required: [true, "plz add your paasowrd"],
      // select: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
export default User;
