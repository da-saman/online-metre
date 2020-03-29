import app from "firebase/app";

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
  }
}
export default Firebase;
