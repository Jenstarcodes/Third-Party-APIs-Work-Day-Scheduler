

var value1 = 0;
var value2 = 0;
var value3 = 0;
var value4 = 0;
var value5 = 0;
var value6 = 0;
var value7 = 0;
var value8 = 0;
var value9 = 0;
var weekDay = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December")
var day = new Date();
var d = weekDay[day.getDay()];
var m = month[day.getMonth()];
var y = day.getFullYear(); 
var setDate = m+'/'+d+'/'+y
document.getElementById("day").innerText = setDate;
var getTime = day.toLocaleTimeString();
var firstV = getTime.split(":")[0];
//alert(getTime.split(":")[0])

$(document).ready(function(){//Code runs when the page loads
    

    if( $("#time01").text()[0] < firstV)
    {
        $("#frm1").css("background-color","gray") 
    }
      if( $("#time02").text()[0] < firstV)
    {
        $("#frm2").css("background-color","gray") 
    }
      if( $("#time03").text()[0] < firstV)
    {
        $("#frm3").css("background-color","gray") 
    }
      if( $("#time04").text()[0] < firstV)
    {
        $("#frm4").css("background-color","gray") 
    }
      if( $("#time05").text()[0] < firstV)
    {
        $("#frm5").css("background-color","gray") 
    }
      if( $("#time06").text()[0] < firstV)
    {
        $("#frm6").css("background-color","gray") 
    }
      if( $("#time07").text()[0] < firstV)
    {
        $("#frm7").css("background-color","gray") 
    }
      if( $("#time08").text()[0] < firstV)
    {
        $("#frm8").css("background-color","gray") 
    }
      if( $("#time09").text()[0] < firstV)
    {
        $("#frm9").css("background-color","gray") 
    }

    if( $("#time01").text()[0] > firstV)
    {
        $("#frm1").css("background-color","green") 
    }
   if( $("#time02").text()[0] > firstV)
    {
        $("#frm2").css("background-color","green") 
    }
      if( $("#time03").text()[0] > firstV)
    {
        $("#frm3").css("background-color","green") 
    }
      if( $("#time04").text()[0] > firstV)
    {
        $("#frm4").css("background-color","green") 
    }
      if( $("#time05").text()[0] > firstV)
    {
        $("#frm5").css("background-color","green") 
    }
      if( $("#time06").text()[0] > firstV)
    {
        $("#frm6").css("background-color","green") 
    }
      if( $("#time07").text()[0] > firstV)
    {
        $("#frm7").css("background-color","green") 
    }
      if( $("#time08").text()[0] > firstV)
    {
        $("#frm8").css("background-color","green") 
    }
      if( $("#time09").text()[0] > firstV)
    {
        $("#frm9").css("background-color","green") 
    }


    if(firstV == 9)
    {
        $("#frm1").css("background-color","red")
    }
     if(firstV == 10) 
    {
        $("#frm2").css("background-color","red") 
    }
     if(firstV == 11) 
    {
        $("#frm3").css("background-color","red") 
    }
     if(firstV == 12) 
    {
        $("#frm4").css("background-color","red") 
    }
     if(firstV == 1) 
    {
        $("#frm5").css("background-color","red") 
    }
     if(firstV == 2) 
    {
        $("#frm6").css("background-color","red") 
    }
     if(firstV == 3) 
    {
        $("#frm7").css("background-color","red") 
    }
     if(firstV == 4) 
    {
        $("#frm8").css("background-color","red") 
    }
     if(firstV == 5) 
    {
        $("#frm9").css("background-color","red") 
    }
 
    $("#day").val(setDate);
    value1 = localStorage.getItem("num1")  
    if(value1 == 1) 
    {

        $("#frm1").val(localStorage.getItem("Event1"));//Get text from localstorage, save it to button 
    }
    value1 = localStorage.getItem("num2")

    if(value1 == 1)
    {

        $("#frm2").val(localStorage.getItem("Event2"));
    }
    value1 = localStorage.getItem("num3")

    if(value1 == 1)
    {

        $("#frm3").val(localStorage.getItem("Event3"));
    }
    value1 = localStorage.getItem("num4")

    if(value1 == 1)
    {

        $("#frm4").val(localStorage.getItem("Event4"));
    }
    value1 = localStorage.getItem("num5")

    if(value1 == 1)
    {

        $("#frm5").val(localStorage.getItem("Event5"));
    }
    value1 = localStorage.getItem("num6")

    if(value1 == 1)
    {

        $("#frm6").val(localStorage.getItem("Event6"));
    }
    value1 = localStorage.getItem("num7")

    if(value1 == 1)
    {

        $("#frm7").val(localStorage.getItem("Event7"));
    }
    value1 = localStorage.getItem("num8")

    if(value1 == 1)
    {

        $("#frm8").val(localStorage.getItem("Event8"));
    }
    value1 = localStorage.getItem("num9")

    if(value1 == 1)
    {

        $("#frm9").val(localStorage.getItem("Event9")); 
    } 
//     var timeV = 9;
//     var timeD = "AM"
// for(i = 1; i < 10; i++)
// { 
//     $("body").append('<div class='+"row-start"+i+'>'+'</div>')
//     $(".row-start"+i).append('<div id="time01">'+timeV+timeD+'</div>')
//     $(".row-start"+i).append('<form id="myFRM">'+'</form>')
//     $("#myFRM").append('<input type="text" class="form-control" placeholder="">'+'</input>')
//     $("body").append('<button id=btn1 type="button" class="saveBtn">'+'</button>')
//     $(".saveBtn").append('<i class="fas fa-save" style="font-size:24px">'+'</i>') 
//     timeV++;
// }
   

    
});
$(document).ready(function(){
    $(".saveBtn1").click(function(){
        var obj = $("#frm1").val()//Grab text from button
        localStorage.setItem("Event1",obj); //Save to localstorage
        value1 = 1;

        localStorage.setItem("num1",value1); 
    });
});

$(document).ready(function(){
    $(".saveBtn2").click(function(){
        var obj = $("#frm2").val()//Grab text from button
        localStorage.setItem("Event2",obj); //Save to localstorage
        value2 = 1;
        localStorage.setItem("num2",value2); 
    });
});

$(document).ready(function(){
    $(".saveBtn3").click(function(){
        var obj = $("#frm3").val()//Grab text from button
        localStorage.setItem("Event3",obj); //Save to localstorage
        value3 = 1;
        localStorage.setItem("num3",value3); 
    });
});

$(document).ready(function(){
    $(".saveBtn4").click(function(){
        var obj = $("#frm4").val()//Grab text from button
        localStorage.setItem("Event4",obj); //Save to localstorage
        value4 = 1;
        localStorage.setItem("num4",value4); 
    });
});

$(document).ready(function(){
    $(".saveBtn5").click(function(){
        var obj = $("#frm5").val()//Grab text from button
        localStorage.setItem("Event5",obj); //Save to localstorage
        value5 = 1;
        localStorage.setItem("num5",value5); 
    });
});

$(document).ready(function(){
    $(".saveBtn6").click(function(){
        var obj = $("#frm6").val()//Grab text from button
        localStorage.setItem("Event6",obj); //Save to localstorage
        value6 = 1;
        localStorage.setItem("num6",value6); 
    });
});

$(document).ready(function(){
    $(".saveBtn7").click(function(){
        var obj = $("#frm7").val()//Grab text from button
        localStorage.setItem("Event7",obj); //Save to localstorage
        value7 = 1;
        localStorage.setItem("num7",value7); 
    });
});

$(document).ready(function(){
    $(".saveBtn8").click(function(){
        var obj = $("#frm8").val()//Grab text from button
        localStorage.setItem("Event8",obj); //Save to localstorage
        value8 = 1;
        localStorage.setItem("num8",value8); 
    });
});

$(document).ready(function(){
    $(".saveBtn9").click(function(){
        var obj = $("#frm9").val()//Grab text from button
        localStorage.setItem("Event9",obj); //Save to localstorage
        value9 = 1;
        localStorage.setItem("num9",value9); 
    });
});

{/* <div class="row-start">      
      <div id="time01" class="time-block">9AM</div>
      <form>
        <input type="text" class="form-control" placeholder="">
      </form>
    </div>  
    <div>
      <button id=btn1 type="button" class="saveBtn"><i class="fas fa-save" style="font-size:24px;"></i></button>
    </div> */}