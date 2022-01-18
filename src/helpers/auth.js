import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  
  // ***** This code will be used to add to my api later on
  // .then((user) => {
  //   const userInfo = {
  //     displayName: user.user?.displayName,
  //     photoURL: user.user?.photoURL,
  //     firebaseUid: user.user?.uid,
  //     email: user.user?.email
  //   }
  //   console.warn(userInfo);
  //   window.location.href='/';
  // });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
