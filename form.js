const validate=()=>{
    var isValid=true
    
    var ayerr=document.getElementById("academic_year")
    var serr=document.getElementById("semester")
    var fnerr=document.getElementById("fnerror")
    var snrr=document.getElementById("snerr")
    var conrr=document.getElementById("contest")
    var pperr=document.getElementById("paperPresentation")
    var prrr=document.getElementById("projectPresentation")
    var ocerr=document.getElementById("othercontest")
    var drr=document.getElementById("date")
    var nobrr=document.getElementById("noofBeneficiaries")





    var ay =document.forms['sesta'].ay.value
    var sem =document.forms['sesta'].sem.value
    var facname=document.forms['sesta'].facname.value
    var stuname=document.forms['sesta'].stuname.value
    var con =document.forms['sesta'].con.value
    var pp =document.forms['sesta'].pp.value
    var pro =document.forms['sesta'].pro.value
    var formgroup =document.forms['sesta'].formgroup.value
    var date =document.forms['sesta'].date.value
    var nob =document.forms['sesta'].nob.value




    try{
        if(facname=="")
            throw "  faculty name is empty"
        else if(!(/[A-Za-z]/).test(facname))
            throw "invalid faculty name"
    }
    catch(message){
        fnerr.innerHTML=message
        isValid=false

    }

    try{
        if(stuname=="")
            throw "  student name is empty"
        else if(!(/[A-Za-z]/).test(stuname))
            throw "invalid student name"
    }
    catch(message){
        snrr.innerHTML=message
        isValid=false

    }


   return isValid

    




}