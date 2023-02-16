import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

export function authEmail(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
