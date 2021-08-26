let nameChecking = false;
//let lastChecking = false;
let emailChecking = false;
let numberChecking = false;
let messageChecking = false;
$(document).ready(function(){
    // $('.navbar-collapse a').click(function(){
    //     $(".navbar-collapse").collapse('hide');
    // });
$("#name").on('input',function(){
    this.value=this.value.replace(/[^A-Za-z-,.;'&/.() ]|^ /g,'')
    let name = this.value
    let nameregex = /^[A-Za-z]+$/
    if(name.match(nameregex)&&name.length<3){
        $("#error1").html("enter minimum 3 charaters");
        nameChecking = false;
    }
    else if(name.includes("  ")){
        $("#error1").html("invalid ");
        nameChecking = false;
    }
    else if(name.match(nameregex)){
        $("#error1").html("");
        nameChecking = true;
    }
    
})
})

$(document).ready(function(){
    $("#email").keyup(function(){
    let email = this.value
    let emailregex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    console.log(email)
    if(email.match(emailregex)){
        $("#error2").html("")
        emailChecking = true;
    }
    else{
        $("#error2").html("enter a valid email")
        emailChecking = false;
    }
})
})
$(document).ready(function(){
    $("#phone").on("input",function(){
    this.value=this.value.replace(/[^\d]/,'') 
    let phone = this.value
    let phoneregex = /^[0-9]*$/
    if(phone==""){
        $("#error3").html("enter 10 numbers")
        numberChecking = false;
    }
    else if(phone.match(/^[A-Za-z]+$/)) {
        $("#error3").html("enter numbers only")
        numberChecking = false;
    }
    else if(phone.match(phoneregex)&&phone.length<10){
        $("#error3").html("enter 10 numbers")
        return false;
    }
    else if(phone.match(phoneregex)&&phone.length>10){
        $("#error3").html("enter a valid number")
        numberChecking = false
    }
    else if(phone.match(phoneregex)){
        numberChecking=true
        $("#error3").html("")
         
    }
    else{
        numberChecking=false;
    }
    
})
})
$(document).ready(function(){
    $("#message").keyup(function(){
    let message = this.value
    if(message.length<20){
        $("#error4").html("enter minimum 20 charaters")
        messageChecking = false;
    }
    else{
        $("#error4").html("") 
        messageChecking = true;
    }
})
})

// $("#fname").on('keyup',function(){ namevar();}) 
// $("#lname").keyup(lnamevar())
//  $("#email").keyup(emailvar())
// $("#phone").keyup(phonevar())
// $("#message").keyup(messagevar())


$(document).ready(function(){
    
    $("#contact-form").submit((e)=>{
       
        e.preventDefault()
        console.log("submitted")
        if(nameChecking&&emailChecking&&numberChecking&&messageChecking){
        $.ajax({
            
            url:"https://script.google.com/macros/s/AKfycbz3zQyzakOt2vTnj7f2HAs2Xwn7RmIRrI-Rnvhz64he-efXWqYXhmSlOSQ-g1XX1s81/exec",
            data:$("#contact-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    }
    else{
        $("#error4").html("fill all feilds in format") 
    }
    })


})
