var today = new Date();

//days left until the end of the current month
function daysCurrentMonth() {
  var lastDay = getLastDay(today.getMonth()+1);
  var daysInCurrentMonth=0;
  for(var i=today.getDate()+1; i<=lastDay;i++) {
    daysInCurrentMonth++;
  }
  return daysInCurrentMonth;
}

//days of a whole month
function daysInMonth(month) {
  var lastDay = getLastDay(month); 
  var days = 0;
  for(var i=1; i<=lastDay; i++) {
    days++;
  }
  return days;
}

//days to Christmas
function daysToChristmas() {
  var days = daysCurrentMonth() + 24; // 24 days of December
  //console.log('test:' + days)
  for(var i = today.getMonth()+1; i<11; i++) { //loop to November - full months
    days+=daysInMonth(i);
    console.log("month days:" + days)
  }
  console.log(days);
}

daysToChristmas()

function getLastDay(month) {
  var lastDay = new Date(2018, month+1,0);
  return lastDay.getDate();
}

