var kart={
    "name":"",
    "brand":"",
    "price":""
}


const insertion=(Name,Brand,Price)=>{

alert("added successfully")
  kart.name=Name
  kart.brand=Brand
  kart.price=Price


}


const view=()=>{
    document.getElementById('name1').innerHTML=kart.name
    document.getElementById('brand1').innerHTML=kart.brand
    document.getElementById('price1').innerHTML=kart.price

}


