import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDUpKjOGBTtBekHvtT9F6i_ZpDTeH_y03o",
  authDomain: "e-birdie.firebaseapp.com",
  projectId: "e-birdie",
  storageBucket: "e-birdie.appspot.com",
  messagingSenderId: "806167267704",
  appId: "1:806167267704:web:f202846b66a25c5f28608d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
