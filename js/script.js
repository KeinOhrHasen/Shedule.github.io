let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


function show_day(clicked_id){
  // let choosed_day = currentTarget.className;
  let currentDay = +clicked_id[1];
  let nextDay = currentDay<7 ? currentDay + 1 : 1;

  let text_1 = document.createTextNode( days[currentDay -1 ]);
  let text_2 = document.createTextNode( days[currentDay -1 ]);
  let text_3 = document.createTextNode( days[nextDay -1 ]);


  let start = document.getElementById('start');
  let finish_br = document.getElementById('finish_br');
  let finish_ar = document.getElementById('finish_ar');

  start.appendChild(text_1);
  finish_br.appendChild(text_2);
  finish_ar.appendChild(text_3);
}


function clean() {
   document.getElementById('start').innerHTML = "";
   document.getElementById('finish_br').innerHTML = "";
   document.getElementById('finish_ar').innerHTML = "";
}


function write_date(){
  let newLi = document.createElement("li");
  newLi.innerHTML = 'new date'
  let backet = document.getElementById("dates_backet");
  backet.appendChild(newLi);
}

function switch_bg_br(){
  document.getElementById('finish_ar').style.background = "rgb(31, 139, 136)"
  document.getElementById('finish_br').style.background = "rgb(64, 48, 218)"
}

function switch_bg_ar(){
  document.getElementById('finish_br').style.background = "rgb(31, 139, 136)"
  document.getElementById('finish_ar').style.background = "rgb(64, 48, 218)"
}
