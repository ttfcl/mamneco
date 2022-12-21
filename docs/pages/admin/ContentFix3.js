//.ck-editor__editable
var del = document.querySelector("#del")
var superkey = localStorage.getItem("key3")
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
db.collection('product2').get().then((결과)=>{
  결과.forEach((doc)=>{
    questionList.unshift(doc.data())
  })
  master()
})

const master = () => {
  let gesipanTopindex = document.querySelector(".gesipan_topindex")
  let gesipanToptitle = document.querySelector(".gesipan_toptitle")
  let gesipanTopmaker = document.querySelector(".gesipan_topmaker")
  let gesipanToptime = document.querySelector(".gesipan_toptime")
  let gesipanContent = document.querySelector(".gesipan_content")
  let masterKey = localStorage.getItem("key3")
  localStorage.removeItem("key3")

  const render = () => {
    gesipanTopindex.textContent = masterKey
    gesipanToptitle.textContent = questionList[questionList.length - masterKey].phone
    gesipanTopmaker.textContent = questionList[questionList.length - masterKey].name
    gesipanToptime.textContent = questionList[questionList.length - masterKey].time

    var 템플릿 = `문의날짜: ${questionList[questionList.length - masterKey].time}</br>
    회사명: ${questionList[questionList.length - masterKey].회사명}</br>
    담당자 성함: ${questionList[questionList.length - masterKey].담당자}</br>
    전화번호: ${questionList[questionList.length - masterKey].연락처}</br>
    이메일: ${questionList[questionList.length - masterKey].이메일}</br>
    문의내용: </br>${questionList[questionList.length - masterKey].content}</br>`
    $(".gesipan_content").append(템플릿)
  }   
  render()
}


  del.onclick = function() {
    var directer = ''  
    let count = superkey
    let masterCount = questionList.length
    for(let i = 0 ; i < count ; i++) {
      directer = directer + '1'
      questionList.pop()
    }
    console.log(directer)
    db.collection('product2').doc(directer).delete().then(() => {
      for(let j = 0 ; j < masterCount - count ; j++) {
        console.log("2")
        let newquestionList = questionList.pop()
        var newindex = superkey
        superkey++
        var newname = newquestionList.name
        var newphone1 = newquestionList.phone1
        var newphone2 = newquestionList.phone2
        var newphone3 = newquestionList.phone3
        var newcontent = newquestionList.content
        var time = newquestionList.time
        var save = {
          'name' : newname,
          'phone1' : newphone1,
          'phone2' : newphone2,
          'phone3' : newphone3,
          'content' : newcontent,
          'time' : time,
          'index' : newindex
        }
        db.collection('product2').doc(directer).set(save)
        directer = directer + '1'
        db.collection('product2').doc(directer).delete()
      }
    } )
    
}
var king = document.querySelector(".king")
var king2 = document.querySelector(".king2")
