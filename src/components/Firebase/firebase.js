import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyB_d1iPxLD7vHdSKIovzBeaQuLh3XEKrtE",
  authDomain: "online-metre-88f41.firebaseapp.com",
  databaseURL: "https://online-metre-88f41.firebaseio.com",
  projectId: "online-metre-88f41",
  storageBucket: "online-metre-88f41.appspot.com",
  messagingSenderId: "622496579776",
  appId: "1:622496579776:web:e610c39987e0855230ad25"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");
}
export default Firebase;
