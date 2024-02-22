
// let headerEl = document.querySelectorAll(".header-el")
// let btnEl = document.querySelectorAll(".btn")

// btnEl.forEach(function(btnn){
//     btnn.addEventListener("click", function(e){
//         let quest = (e.currentTarget.parentElement.parentElement)
//         quest.classList.toggle("show-text")
//     })
// })

let headerEl = document.querySelectorAll(".header-el")

headerEl.forEach(function(quest){
    let btnEl = quest.querySelector(".btn")

    btnEl.addEventListener("click", function(){

        headerEl.forEach(function(item){
            if(item !== quest){
                item.classList.remove("show-text")
            }
        })
        quest.classList.toggle("show-text")
    })
})