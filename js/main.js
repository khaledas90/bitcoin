
$(document).ready(function () {

    "use strict";
	
   // loader
setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1400)

// navbar
$(".openbtn").on("click" , function(){
    $(".aside").css("display" , "block").fadeIn("slow");
})
$(".closebtn").on("click" , function(){
    $(".aside").css("display" , "none").fadeOut();("slow");
})

// back to top

$(window).on("scroll" , function(){
  scroll =  $(window).scrollTop()
  if (scroll >= 100){
    $(".back-to-top").css('display' , 'block')
  }else{
    $(".back-to-top").css('display' , 'none')
  }
});
$(".back-to-top").on("click", function(){
  $('body,html').animate({
    scrollTop: 0
  }, 1000);
})

  });


  //myChart
var xVal = ["Bitcoin(BTC)", "Cash(BCH)", "Lite(LTC)", "Ethereum(ETH)", "Ripple(XRP)"];
var yV = [75, 69, 54, 44, 35];
var barCou = ["red", "green","blue","orange","Yalow"];

new Chart("chart-one", {
  type: "bar",
  data: {
    labels: xVal,
    datasets: [{
      backgroundColor: barCou,
      data: yV
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});


const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("chart-two", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});