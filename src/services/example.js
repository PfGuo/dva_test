import request from '../utils/request';

const TOPNUM = '10';

function getLocalTime(nS) {       
  return  new Date(parseInt(nS) * 1000).Format("yyyyMMdd");    
}       
Date.prototype.Format = function (fmt) { //author: meizz   
    var o = {  
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "h+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };  
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
    for (var k in o)  
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));  
    return fmt;  
}  

export async function querycountrank() {
  return request('/api/top/'+TOPNUM+'?t=c');
}

export async function querysizerank() {
  return request('/api/top/'+TOPNUM+'?t=s');
}

export async function querydetaillist(stime, etime) {
  let st = getLocalTime(stime);
  let et = getLocalTime(etime);
  return request('/api/stat?sday=' + st + '&eday=' + et, {
      headers: {
          'Cache-Control': 'no-cache',
          'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
      },
  });
}