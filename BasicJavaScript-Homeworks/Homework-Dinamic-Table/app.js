console.log("it works")
const tableButton=document.getElementById("btn")
const tableDataEl=document.getElementById("table-data")
const columns=document.getElementById("column")
const rows=document.getElementById("row")

function createTable(){
    
for (let i=0; i<rows.value; i++){
    let tr=document.querySelector("#table-data").incertRow(i)
    for(let j=0; j<columns.value; j++){
        let td=tr.incertCell(j)
        td.innerHTML=`Row ${i} Column ${j}`
        
    }
}

}
  tableButton.addEventListener("click",createTable)  


   
   


