 console.log("it works")

const groceryNameEl=document.getElementById("grocery-name")
const groceryPriceEl=document.getElementById("grocery-price")
const groceryQuntityEl=document.getElementById("grocery-quantity")
const buttonClick=document.getElementById("btn")
const orderListEl=document.getElementById("list-of-groceries")
const totalListEl=document.getElementById("add-total")


console.log(groceryNameEl,groceryPriceEl,groceryQuntityEl,buttonClick)

const groceries=[]

function resetGroceries(){
   groceryNameEl.value=""
   groceryPriceEl.value=""
   groceryQuntityEl.value=""
   orderListEl.value=""
   totalListEl.value=""
   
}

function addListToGroceries(name,price,quantity,){
   const groceriesItem={
      name:name,
      price:price,
      quantity:quantity,
      total:price*quantity
      
      
   }
      
   
   groceries.push(groceriesItem);
}

function renderList(){
   let clickGroceries=""
   
   for(let grocery of groceries){
      clickGroceries+=`<li>${grocery.name} ${grocery.price} ${grocery.quantity}  ${grocery.total}</li>`
      orderListEl.innerHTML+=`<ol><li>${grocery.name}  ${grocery.price}x ${grocery.quantity}=${grocery.total}$</li></ol>`
      console.log(clickGroceries)
   }

}
   
function addTotal(){
   let total=0
   for (let i=0; i>total.length; i++){
      if(total===price*quantity)
      total.push[i]
   }
   
}
buttonClick.addEventListener("click",function(){
   addListToGroceries(groceryNameEl.value,groceryPriceEl.value,groceryQuntityEl.value)
resetGroceries()
renderList()
addTotal()
})
