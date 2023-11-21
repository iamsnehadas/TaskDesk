function updateTime() {
    var today = new Date();
    var options = { day: '2-digit' , month: '2-digit' , year: 'numeric' };
    var date = today.toLocaleDateString('en-GB', options);
    var time = today.toLocaleTimeString();
    document.getElementById("date").innerHTML = date;
    document.getElementById("chktime").innerHTML = time;
  }
  setInterval(updateTime, 1000);