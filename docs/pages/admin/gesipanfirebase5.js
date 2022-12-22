var firebaseConfig = {
  apiKey: "AIzaSyAmmK_ihBcDy1spvbLARo9gxKRKg4I-HNI",
  authDomain: "test-6fcb8.firebaseapp.com",
  projectId: "test-6fcb8",
  storageBucket: "test-6fcb8.appspot.com",
  messagingSenderId: "597169799770",
  appId: "1:597169799770:web:68eda6109ecb0e4a0c4e63"
  };
  firebase.initializeApp(firebaseConfig);

const bd = firebase.firestore();
bd.collection('product2').get().then((결과)=>{
    결과.forEach((doc)=>{
      gonjiList.unshift(doc.data())
   })
   master();
})
