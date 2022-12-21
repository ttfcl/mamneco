var firebaseConfig = {
  apiKey: "AIzaSyCuyVt_nK0mz3N-UEr9wItpiVSH8SX3FhM",
    authDomain: "hwangteoja.firebaseapp.com",
    projectId: "hwangteoja",
    storageBucket: "hwangteoja.appspot.com",
    messagingSenderId: "798570525274",
    appId: "1:798570525274:web:8166e9463c55ff8f2a5e63"
  };
  firebase.initializeApp(firebaseConfig);

const bd = firebase.firestore();
bd.collection('product2').get().then((결과)=>{
    결과.forEach((doc)=>{
      questionList.unshift(doc.data())
   })
   master();
})
