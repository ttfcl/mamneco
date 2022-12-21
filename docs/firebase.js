var firebaseConfig = {
  apiKey: "AIzaSyCILd3qX8hVyjnj3mzNngyUTHa4C1NM3SU",
  authDomain: "madoyotemple.firebaseapp.com",
  projectId: "madoyotemple",
  storageBucket: "madoyotemple.appspot.com",
  messagingSenderId: "39194981445",
  appId: "1:39194981445:web:ad0a4b28cb3f4b8c431f2c"
  };
  firebase.initializeApp(firebaseConfig);


  const goji = document.querySelector("#goji")
  let count
  const render = () => {
    if(gonjiList.length > 5) {
      count = 5
    }else {
      count = gonjiList.length
    }
    for(let i = 0 ; i < count ; i++) {
      let li = document.createElement("li")
      let p1 = document.createElement("p")
      let p2 = document.createElement("p")
      li.className = "index_goji"
      p1.className = "gonji_p1"
      p2.className = "gonji_p2"
      p1.textContent = gonjiList[i].title
      p2.textContent = gonjiList[i].time
      li.append(p1, p2)
      goji.append(li)
    }
  }  

const db = firebase.firestore();
db.collection('product').get().then((결과)=>{
    결과.forEach((doc)=>{
      gonjiList.unshift(doc.data())
   })
   render()
})



