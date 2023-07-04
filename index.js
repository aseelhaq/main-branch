// chrome://extensions/
let myLeads = ["www.awesomeleads.com","www.google.com","www.amazon.com"]
const ULel = document.getElementById("ul-el")
const inputEL = document.getElementById("input-el")
const saveLead = document.getElementById("input-btn")
let listItems="";
saveLead.addEventListener("click",function(){
    myLeads.push(inputEL.value)
    inputEL.value=""
    console.log(myLeads)
    RenderLeads()
   
})

function RenderLeads()
{
     for(let i=0;i<myLeads.length;i++)
    {
        console.log(myLeads[i])
        //listItems+="<li><a href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
        listItems+=`
        <li>
        <a href='${myLeads[i]}'>${myLeads[i]}
        </a>
        </li>
        `
        ULel.innerHTML=listItems;
       //const Li=document.createElement("li")
       //Li.textContent=myLeads[i]
       //ULEL.append(Li)
       }
}