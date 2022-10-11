// Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
// Text hour var
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hour = moment().hours();
var userInput;
var hourSpan;

var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
  }, 100);

  function taskBlock() {

    console.log("Current Hour " + hour);
    var task9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(task9);
  
    var task10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAm.val(task10);
    
    var task11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenAm.val(task11);
    
    var task12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelvePm.val(task12);
    
    var task1 = JSON.parse(localStorage.getItem("01:00 pm"))
    onePm.val(task1);
    
    var task2 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoPm.val(task2);
    
    var task3 = JSON.parse(localStorage.getItem("03:00 pm"))
    threePm.val(task3);
   
    var task4 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourPm.val(task4);
    
    var task5 = JSON.parse(localStorage.getItem("05:00 pm"))
    fivePm.val(task5);
    
    var task6 = JSON.parse(localStorage.getItem("06:00 pm"))
    sixPm.val(task6);
    
    var task7 = JSON.parse(localStorage.getItem("07:00 pm"))
    sevenPm.val(task7);
  }  

//color of background
  function background () {
      
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
  //      console.log(this);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }

  $(document).ready(function(){
    taskBlock()
    background()

// Buttons (save to Local Storage)
    $(".saveBtn").on("click", function(){
        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })
  // Button for clear the day
    $("#clearDay").on("click", function(){
        localStorage.clear();
        taskBlock()
    }) 
});