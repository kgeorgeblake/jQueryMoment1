$(document).ready(function() {
 var Date =  moment().format("YYYY Do MM")
var AmPm = moment(Date).format('hh:mm A');





 var times = [9,10,11,12,1,2,3,4,5];
  
 



 for (var i = 0; i<times.length; i++){
   var value = localStorage.getItem(times[i]+"-block");
   $("#"+times[i]+"-time").val(value);
 }


 $(document).on("click", ".fa-save", function(){

   var time = $(this).attr("time");
   var value = $("#"+time+"-time").val();
   localStorage.setItem(time+"-block", value);

 })
});

