
let login = document.querySelector('#login')
var Ptitle = document.querySelector(".title_modal")
var happyend = document.querySelector(".happyend")
var happyend2 = document.querySelector(".happyend2")
var badend = document.querySelector(".badend")
var js = []
var firebaseConfig = {
  apiKey: "AIzaSyCuyVt_nK0mz3N-UEr9wItpiVSH8SX3FhM",
    authDomain: "hwangteoja.firebaseapp.com",
    projectId: "hwangteoja",
    storageBucket: "hwangteoja.appspot.com",
    messagingSenderId: "798570525274",
    appId: "1:798570525274:web:8166e9463c55ff8f2a5e63"
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
    if(id.value === "admin" && pw.value === "qwe123") {
        happyend.classList.remove('hide')
        happyend2.classList.remove('hide')
        Ptitle.classList.add('hide')
        badend.classList.add('hide')
        localStorage.removeItem("master")
        localStorage.setItem("master", "501")
    } else {
        Ptitle.classList.remove('hide')
        badend.classList.remove('hide')
        localStorage.removeItem("master")
    }
} 
