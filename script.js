console.log('hello world!')
const input = document.getElementById('input');
const searchBox = document.getElementById('search-box');

input.onclick = function () {
    searchBox.style.backgroundColor = 'white';
    searchBox.style.width = '15em';
    searchBox.style.transition = '.5s';
    input.style.transition = '.5s';
    input.style.backgroundColor = 'white';
    input.style.color = 'black';
}
pos = 0;

window.onscroll = function (){
	
	if(window.pageYOffset > 200){
		menu.className= "mob"
	}
	else{
		menu.className="";
	}
}

var counter = 1;
setInterval(function (){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 10){
        counter=1;
    }
},20000);

pos = 0;

right3.onclick= function () {
    if(pos > -225){
        pos = pos - 25;
        slides3.style.left = pos + "%";
    }
    else if(pos == -225){
        pos = 0;
        slides3.style.left = pos + "%";
    }
}
left3.onclick= function () {
    if(pos < 0){
        pos = pos + 25;
        slides3.style.left = pos + "%";
    }
    else if(pos == 0){
        pos = -225;
        slides3.style.left = pos + "%";
    }
}
var counter = 1;
setInterval(function (){
    document.getElementById('slode' + counter).checked = true;
    counter++;
    if(counter > 13){
        counter=1;
    }
},20000);