let gesipan = document.querySelector(".gesipan")
let gesipanSoket = document.querySelector(".gesipan_soket")
let gesipanPage = document.querySelector(".gesipan_page")

const master = () => {
  let gesipan = document.querySelector(".gesipan")
  let gesipanSoket = document.querySelector(".gesipan_soket")
  let gesipanPage = document.querySelector(".gesipan_page")

  const converter = function (x) {
    const gesipanR = document.createElement("div")
    gesipanR.className = "gesipan_r"
    gesipanR.id = `${gonjiList.length - x}`
    const gesipanIndex = document.createElement("div")
    gesipanIndex.className = "gesipan_index"
    gesipanIndex.textContent = gonjiList.length - x
    const gesipanTitle = document.createElement("div")
    gesipanTitle.className = "gesipan_title"
    gesipanTitle.textContent = gonjiList[x].title
    const gesipanMaker = document.createElement("div")
    gesipanMaker.className = "gesipan_maker"
    gesipanMaker.textContent = gonjiList[x].maker
    const gesipanTime = document.createElement("div")
    gesipanTime.className = "gesipan_time"
    gesipanTime.textContent = gonjiList[x].time
    gesipanR.append(gesipanIndex, gesipanTitle, gesipanMaker, gesipanTime)
    gesipanSoket.append(gesipanR)
}

const converterButton = function (j) {
    const gesipanButton = document.createElement("button")
    gesipanButton.className = "gesipan_button"
    gesipanButton.textContent = j
    gesipanPage.append(gesipanButton)
}

const render = (x) => {
    let count = 0;
    if(gonjiList.length < x + 20) {
      count = gonjiList.length
    }else {
      count = x + 20
    }
    for(i = x ; i < count ; i++) {
        converter(i)
    }
}

const renderButton = (x) => {
    let count = 0 ;
    if(gonjiList.length/20 > x + 10) {
        count = x + 10
    }else {
        count = gonjiList.length/20
    }
    for(j = x ; j < count ; j++) {
        converterButton(j+1)
    }
}

render(0)
renderButton(0)



let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".gesipan_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key")
      localStorage.setItem("key", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".gesipan_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key")
      localStorage.setItem("key", e.id)
      }
    }) 

}



let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".gesipan_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key")
      localStorage.setItem("key", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".gesipan_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key")
      localStorage.setItem("key", e.id)
      }
    })    

let gesipanPageButtonP = document.querySelector(".gesipan_page_button_p")
let gesipanPageButtonN = document.querySelector(".gesipan_page_button_n")
let buttonCount = 0

const converter = function (x) {
  const gesipanR = document.createElement("div")
  gesipanR.className = "gesipan_r"
  gesipanR.id = `${gonjiList.length - x}`
  const gesipanIndex = document.createElement("div")
  gesipanIndex.className = "gesipan_index"
  gesipanIndex.textContent = gonjiList.length - x
  const gesipanTitle = document.createElement("div")
  gesipanTitle.className = "gesipan_title"
  gesipanTitle.textContent = gonjiList[x].title
  const gesipanMaker = document.createElement("div")
  gesipanMaker.className = "gesipan_maker"
  gesipanMaker.textContent = gonjiList[x].maker
  const gesipanTime = document.createElement("div")
  gesipanTime.className = "gesipan_time"
  gesipanTime.textContent = gonjiList[x].time
  gesipanR.append(gesipanIndex, gesipanTitle, gesipanMaker, gesipanTime)
  gesipanSoket.append(gesipanR)
}

const render = (x) => {
  let count = 0;
  if(gonjiList.length < x + 20) {
    count = gonjiList.length
  }else {
    count = x + 20
  }
  for(i = x ; i < count ; i++) {
      converter(i)
  }
}

const renderButton = (x) => {
  let count = 0 ;
  if(gonjiList.length/20 > x + 10) {
      count = x + 10
  }else {
      count = gonjiList.length/20
  }
  for(j = x ; j < count ; j++) {
      converterButton(j+1)
  }
}

gesipanPageButtonP.onclick = function() {
    if(buttonCount !== 0){
        const gesipanR = document.querySelectorAll('.gesipan_button')
        for(let a of gesipanR) {
          a.remove()
        }
      buttonCount = buttonCount - 10
      const gesipanPage = document.querySelector(".gesipan_page")
      renderButton(buttonCount)
      gesipanPage
      } 
      let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".gesipan_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key")
      localStorage.setItem("key", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".gesipan_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key")
      localStorage.setItem("key", e.id)
      }
    })   
}  
gesipanPageButtonN.onclick = function() {
    if(buttonCount < Math.ceil(gonjiList.length/20)-10){
        const gesipanR = document.querySelectorAll('.gesipan_button')
          for(let a of gesipanR) {
            a.remove()
          }
        buttonCount = buttonCount + 10
        const gesipanPage = document.querySelector(".gesipan_page")
        renderButton(buttonCount)
        gesipanPage
        }  
        let def = document.querySelectorAll(".gesipan_button")
    def.forEach.call(def, function(e) {
    e.addEventListener("click", qwer)
    function qwer () {
      let count = (Number(e.textContent)-1) * 20  
      const gesipanR = document.querySelectorAll('.gesipan_r')
      for(let a of gesipanR) {
        a.remove()
      }
      render(count)
      let abc = document.querySelectorAll(".gesipan_r")
      abc.forEach.call(abc, function(e) {
      e.addEventListener("click", dsfd)
      function dsfd () {
      localStorage.removeItem("key")
      localStorage.setItem("key", e.id)
      }
      })  
      }
    })    

let abc = document.querySelectorAll(".gesipan_r")
    abc.forEach.call(abc, function(e) {
    e.addEventListener("click", dsfd)
    function dsfd () {
      localStorage.removeItem("key")
      localStorage.setItem("key", e.id)
      }
    })  
}