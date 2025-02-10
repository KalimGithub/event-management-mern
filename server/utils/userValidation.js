const userDataValidation = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    if (!email && !password)
      reject("Missing credentials Please fill all fields");
    if (typeof email !== "string") reject("Email is not a text");
    if (typeof password !== "string") reject("Password is not a text");
    if (!email.includes("@")) {
      reject("email is not valid plz try again");
    }
    resolve();
  });
};
export { userDataValidation };
