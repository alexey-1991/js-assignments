function timeSpanToString(startDate, endDate) {

    let date1 = +startDate;
    let date2 = +endDate;
    let diff = date2 - date1;
  
    //time variables
    let seconds = 1000;
    let minutes = 60 * 1000;
    let hours = 60 * 60 * 1000;
    var hh;
    var mm;
    var ss;
  
  
    //hours
    if (diff % hours !== 0 && diff !== 0) {
      hh = Math.floor(diff / hours);
      diff = diff - hh * hours;
    } else {
      hh = diff / hours;
      diff = 0;
    }
    //minutes
    if (
      diff % minutes !== 0 && diff !== 0) {
      mm = Math.floor(diff / minutes);
      diff = diff - mm * minutes;
    } else {
      mm = diff / minutes;
      diff = 0;
    }
    //seconds
    if (diff % seconds !== 0 && diff !== 0) {
      ss = Math.floor(diff / seconds);
      diff = diff - ss * seconds;
    } else {
      ss = diff / seconds;
      diff = 0;
    }
    //milliseconds
    let mms = diff;
  
    hh = Math.abs(hh);
    mm = Math.abs(mm);
    ss = Math.abs(ss);
    mms = Math.abs(mms);
  
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    if (mms < 10) { mms = '00' + mms; } else if (mms < 100) mms = '0' + mms;
  
    return hh + ':' + mm + ':' + ss + '.' + mms;
  }

  function timeSpanToString2(startDate, endDate) {

    const difference=new Date(endDate-startDate);
    console.log(difference)

    let hh=difference.getUTCHours();console.log('hours:',hh);
    let mm=difference.getUTCMinutes();console.log('min:',mm);
    let ss=difference.getUTCSeconds();console.log('sec:',ss);
    let mss=difference.getUTCMilliseconds();console.log('ms:',mss);

    if (hh < 10) hh = `0${hh}`;
    if (mm < 10) mm = `0${mm}`;
    if (ss < 10) ss = `0${ss}`;
    if (mss < 10) { mss = `00${mss}`; } else if (mss < 100) mss = `0${mss}`;

    return `${hh}:${mm}:${ss}.${mss}`;
  }

  const date1=new Date(2000,1,1,10,0,0);
  const date2=new Date(2000,1,1,15,20,10,003);


  console.log(timeSpanToString(date1,date2))
  console.log(timeSpanToString2(date1,date2))