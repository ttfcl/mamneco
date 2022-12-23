const master2 = () => {
    let gesipanTopindex = document.querySelector(".gesipan_topindex")
    let gesipanToptitle = document.querySelector(".gesipan_toptitle")
    let gesipanTopmaker = document.querySelector(".gesipan_topmaker")
    let gesipanToptime = document.querySelector(".gesipan_toptime")
    let gesipanContent = document.querySelector(".gesipan_content")
    let masterKey = localStorage.getItem("key")
    localStorage.removeItem("key")
    let imgBox = document.querySelector(".imgBox")
    let downBox = document.querySelector(".downBox")

    const render = () => {
      gesipanTopindex.textContent = masterKey
      gesipanToptitle.textContent = gonjiList[gonjiList.length - masterKey].title
      gesipanTopmaker.textContent = gonjiList[gonjiList.length - masterKey].maker
      gesipanToptime.textContent = gonjiList[gonjiList.length - masterKey].time
      var 템플릿 = `${gonjiList[gonjiList.length - masterKey].content}`
      $(".gesipan_content").append(템플릿)
      for(let i = 0 ; i < gonjiList[gonjiList.length - masterKey].img.length ; i++) {
        const imgR = document.createElement("img")
        imgR.src = gonjiList[gonjiList.length - masterKey].img[i].split(" ")[0]
        imgBox.append(imgR)
      }
      for(let j = 0 ; j < gonjiList[gonjiList.length - masterKey].down.length ; j++) {
        const imgD = document.createElement("img")
        imgD.src = "../../image/folder.png" 
        imgD.classList = "imgD"
        const aD = document.createElement("a")
        aD.href = gonjiList[gonjiList.length - masterKey].down[j].split(" ")[0]
        aD.download = gonjiList[gonjiList.length - masterKey].down[j].split(" ")[1].replace("asdfqwerzxcv", " ")
        aD.target = "_blank"
        const dcD = document.createElement("div")
        dcD.className = "downBox_content"
        const p = document.querySelector("p")
        p.className = "elli"
        p.textContent = gonjiList[gonjiList.length - masterKey].down[j].split(" ")[1].replace("asdfqwerzxcv", " ")
        aD.append(imgD)
        dcD.append(aD, p)
        downBox.append(dcD)
      }
    }   
    render()
}

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
window.onload = function() {
  db.collection('product2').get().then((결과)=>{
    결과.forEach((doc)=>{
      gonjiList.unshift(doc.data())
    })
    master2();
  })
}
