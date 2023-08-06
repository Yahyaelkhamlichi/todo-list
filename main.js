 let email = document.getElementById("Email");
 let list =document.getElementById("liss")

 function  cl() {
   function  yy(namee){
if(email.value === ""){
          alert("write something ")
        }
       
        else{
          let li = document.createElement("li")
          let chek =document.createElement("input")
       
chek.type="checkbox"

chek.style.marginTop="8.7px"
       let span =document.createElement("span")
       let spncont =document.createTextNode("\u00d7")
       span.appendChild(spncont)
       li.appendChild(span)
       list.appendChild(li)
          licont=document.createTextNode(namee)
          li.appendChild(licont)
li.appendChild(chek)

chek.addEventListener('click',function () {
  if(chek.checked){
    li.style.textDecoration="line-through";
  }
  else{
    li.style.textDecoration="none";
  }
});
span.addEventListener('click',function(){
  li.remove();
});
        }
        email.value=""
              }
            yy(email.value)
          
          
           
            }
  
   
       
         
         


   



