  var modal = document.getElementById('modal')
  var modal4 = document.getElementById('modal4')
    var link = document.getElementById('mylink')
    var span = document.getElementsByClassName("close")
 var btn = document.getElementsByClassName('button1')
  var modal2 = document.getElementById('modal2')
    var modal3 = document.getElementById('modal3')
    var close = document.getElementsByClassName("btn-close")
 var map = document.getElementById('modal-map')
 var end = document.getElementsByClassName("map-close")

    link.onclick = function() {
        modal2.style.display = "block";
    }
        map.onclick = function() {
        modal3.style.display = "block";
    }


for(var i = 0; i < btn.length; i++)
    btn[i].onclick = function() {modal.style.display = "block";
};



for(var i = 0; i < span.length; i++)
    span[i].onclick = function() { 
        modal.style.display = 'none';
         modal4.style.display = 'none';
          
};

for(var i = 0; i < close.length; i++)
    close[i].onclick = function() { 
         modal2.style.display = 'none';

};

for(var i = 0; i < end.length; i++)
    end[i].onclick = function() { 
         modal3.style.display = 'none';

};




