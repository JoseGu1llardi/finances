import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Keep secrets out of the repo. Copy src/services/firebaseConfig.example.js
// to src/services/firebaseConfig.js and fill in your own Firebase keys.
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
