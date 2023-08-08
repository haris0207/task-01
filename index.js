const selectedPair=document.querySelectorAll(".select_item")
const allPairs=document.querySelectorAll(".cart_items_container")
const totalPrice=document.querySelector(".total_price")
const boxContainer=document.querySelector(".box_container")

//By using event delegation method

boxContainer.addEventListener("click",(e)=>{
 const clicked= e.target.closest(".cart_items_container")

 //gaurd clause
 if(!clicked) return
 allPairs.forEach(pair=>{
          pair.classList.remove("active")
          pair.querySelector(".cart_item_details").classList.add("hidden")
          pair.querySelector(".select_item").checked=false
  
        })
 clicked.classList.add("active")
 clicked.querySelector(".cart_item_details").classList.remove("hidden")
 clicked.querySelector(".select_item").checked=true
 const price=Number(clicked.querySelector(".price").textContent)
       totalPrice.textContent=price+15
})




//-------Simple js method-----------------

// selectedPair.forEach(el=>{
//     el.addEventListener("click",function(e){
//       const clicked= e.target.closest(".cart_items_container")
//       allPairs.forEach(pair=>{
//         pair.classList.remove("active")
//         pair.querySelector(".cart_item_details").classList.add("hidden")

//       })
//       clicked.querySelector(".cart_item_details").classList.remove("hidden")
//       clicked.classList.add("active")
//       const price=Number(clicked.querySelector(".price").textContent)
//       totalPrice.textContent=price+15
//     })
//     console.log(el)
// })