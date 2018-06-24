
/** ******************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date    *
 *                                                                                          *
 ******************************************************************************************* */


/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
export function parseDataFromRfc2822(value) {
  let date= Date.parse(value);
  return new Date(date);
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
export function parseDataFromIso8601(value) {
  let date= Date.parse(value);
  return new Date(date);
}


/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
export function isLeapYear(date) {
  let ddate=new Date(Date.parse(date));
  let YYYY=ddate.getFullYear();

  if (YYYY%4!=0) {return false;
  } else if (YYYY%100!=0){return true;
  } else if (YYYY%400!=0) {return false;
  } else {return true;}
}


/**
 * Returns the string represention of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
export function timeSpanToString(startDate, endDate) {

  let date1=+startDate;
  let date2=+endDate;
  let diff=date2-date1;

  //time variables
  let seconds=1000;
  let minutes=60*1000;
  let hours=60*60*1000;
  var hh;
  var mm;
  var ss;


  //hours
  if (diff%hours!=0 && diff!=0){
    hh=Math.floor(diff/hours);
    diff=diff-hh*hours;
  } else {
    hh=diff/hours;
    diff=0;
  }
  //minutes
  if (
    diff%minutes!=0 && diff!=0) {
    mm = Math.floor(diff / minutes);
    diff = diff - mm * minutes;
  } else {
    mm=diff/minutes;
    diff=0;
  }
  //seconds
  if (diff%seconds!=0 && diff!=0) {
    ss = Math.floor(diff / seconds);
    diff = diff - ss * seconds;
  } else {
    ss=diff/seconds;
    diff=0;
  }
  //milliseconds
  let mms=diff;

  hh=Math.abs(hh);
  mm=Math.abs(mm);
  ss=Math.abs(ss);
  mms=Math.abs(mms);

  if (hh<10) hh='0'+hh;
  if (mm<10) mm='0'+mm;
  if (ss<10) ss='0'+ss;
  if (mms<10) {mms='00'+mms;} else if (mms<100) mms='0'+mms;

  return hh+':'+mm+':'+ss+'.'+mms;
}


/**
 * Returns the angle (in radians) between the hands of an analog clock for the
 * specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_prnpmoblem
 *
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
export function angleBetweenClockHands(date) {

  //time variables
  let hours=60*60*1000;

  let yy=date.getUTCFullYear();
  let mo=date.getUTCMonth();
  let dd=date.getUTCDate();


  let date0=new Date(yy, mo, dd);
  let time=+date-+date0;
  if (time>12*hours && time<=18*hours) {time-=12*hours;}
  if (time>18*hours && time<=24*hours) {time-=18*hours;}

  let value=2*Math.PI/(12*hours);

  return value*time;

}
