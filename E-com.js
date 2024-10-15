let icon=document.querySelector(".icons");
let ul=document.querySelector("ul");
icon.addEventListener('click',()=>{ 
    
ul.classList.toggle("showData");
console.log(ul);
if(ul.className=="showData"){
    document.getElementById("bar").className="fa-solid fa-xmark";
   
}
else{
    document.getElementById("bar").className="fa-solid fa-bars";
    
}
})

//navbar
let shops=document.getElementById('shop')
let reviews =document.getElementById('reviews')
let blogs=document.getElementById('blogs')
let contacts=document.getElementById('contacts')

shops.addEventListener("click",()=>{
 shops.style.color="rgb(4,219,219)"
 blogs.style.color="white"
 contacts.style.color="white"
  reviews.style.color="white"
})

reviews.addEventListener("click",()=>{
    reviews.style.color="rgb(4,219,219)"
    shops.style.color="white"
 blogs.style.color="white"
 contacts.style.color="white"
   })

   blogs.addEventListener("click",()=>{
    blogs.style.color="rgb(4,219,219)"
    reviews.style.color="white"
 shops.style.color="white"
 contacts.style.color="white"
   })

   contacts.addEventListener("click",()=>{
    contacts.style.color="rgb(4,219,219)"
    reviews.style.color="white"
 blogs.style.color="white"
 shops.style.color="white"
   })
   //card js

   let card=document.querySelectorAll(".card")
   let itempage=document.querySelector(".itempage")
   let container=document.querySelector(".container")
   let itemimage=document.querySelector("#itemimage")
   let buynow=document.querySelector("#buynow")
   let buypage=document.querySelector(".buypage")
   let crossicon=document.querySelector(".crossicon")
   let orderbutton=document.querySelector(".orderbutton")
   let myname=document.querySelector("#myname")
   let address=document.querySelector("#address")
   let number=document.querySelector("#number")
   let pincode=document.querySelector("#pincode")
   let itemPrice=document.querySelector(".itemPrice")
   let namecontact=document.querySelector("#namecontact")
   let numbercontact=document.querySelector("#numbercontact")
   let contactus=document.querySelector(".contactus")
   let buynowprice=document.querySelector("#buynowprice")
   console.log(card);

   card.forEach(function(curValue){
    curValue.addEventListener("click",()=>{
        itempage.style.display="flex";
        container.style.display="none"

        let imgsrc=curValue.firstElementChild.src;
        itemimage.src=imgsrc;
       
        let priceElement = curValue.lastElementChild;
        let price = priceElement.innerHTML; 
        console.log(price)
      buynowprice.innerHTML=price
        

  buynow.addEventListener("click",()=>{
     buypage.style.display="flex";
     itempage.style.display="flex";
        crossicon.addEventListener("click",()=>{
            buypage.style.display="none";
        })
  })
  orderbutton.addEventListener("click",()=>{
        if(myname.value===""||address.value===""||number.value===""||pincode.value===""){
            alert("Please Enter Details")
        }
        else{
            alert("Your Order Successfully Placed and your response is recorded");
            buypage.style.display="none"
        }
  })

    })
   })


   //connect

contactus.addEventListener("click",()=>{
    if(namecontact.value==""||numbercontact.value==""){
        alert("Please Enter Your Details")
    }
    else{
        alert("Thank You for contacting us")
    }
})

//review section
const morebutton = document.querySelector('.morebutton');

morebutton.addEventListener('click', () => {
    window.location.href = 'https://embedsocial.com/blog/positive-reviews-examples/'; // Replace with your desired URL
});