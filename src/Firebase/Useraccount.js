import { createUserWithEmailAndPassword } from "firebase/auth";

function passwordCheck(password1, password2) {
  let password;
  if (password1 === password2) {
    password = password1;
    return password;
  } else {
    console.log("password does not match");
  }
}
export const createUser = (auth, email, password1, password2) => {
  let password = passwordCheck(password1, password2);
  createUserWithEmailAndPassword(auth, email, password);
};
