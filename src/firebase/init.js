 import Firebase from 'Firebase'
 import Firebase from 'Firebase/firestore'
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBrlCc17orauvV3ryRo5S6NhHKsgFIkTaw",
    authDomain: "ibbudy-chat.firebaseapp.com",
    databaseURL: "https://ibbudy-chat.firebaseio.com",
    projectId: "ibbudy-chat",
    storageBucket: "ibbudy-chat.appspot.com",
    messagingSenderId: "481284129664"
  };
 const firebase=firebase.initializeApp(config);
firebaseA pp.firestore().settings({timestampsInSnapshots:true})

export default firebaseapp.firebase()
