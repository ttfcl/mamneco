
let login = document.querySelector('#login')
var Ptitle = document.querySelector(".title_modal")
var happyend = document.querySelector(".happyend")
var happyend2 = document.querySelector(".happyend2")
var badend = document.querySelector(".badend")
var js = []
var firebaseConfig = {
  apiKey: "AIzaSyAmmK_ihBcDy1spvbLARo9gxKRKg4I-HNI",
  authDomain: "test-6fcb8.firebaseapp.com",
  projectId: "test-6fcb8",
  storageBucket: "test-6fcb8.appspot.com",
  messagingSenderId: "597169799770",
  appId: "1:597169799770:web:68eda6109ecb0e4a0c4e63"
  };
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  db.collection('impo').get().then((결과)=>{
    결과.forEach((doc)=>{
      js.unshift(doc.data())
    })
  })

login.onclick = function() {
    let id = document.querySelector("#id")
    let pw = document.querySelector("#pw")
    console.log(id.value)
    if(id.value === js[0].id && pw.value === js[0].pw) {
        happyend.classList.remove('hide')
        happyend2.classList.remove('hide')
        Ptitle.classList.add('hide')
        badend.classList.add('hide')
        localStorage.removeItem("master")
        localStorage.setItem("master", js[0].key)
    } else {
        Ptitle.classList.remove('hide')
        badend.classList.remove('hide')
        localStorage.removeItem("master")
    }
} 
