/*const slides = document.querySelector('#slide-cont');
const slideimage = document.querySelectorAll('#slide-cont img');

const btnp = document.querySelector('#btnp');
const btnn = document.querySelector('#btnn');

let counter = 1;
const size = slideimage[0].clientWidth;

slides.style.transform = 'translateX(' +(-size * counter) + 'px)';

btnn.addEventListener('click',()=>{
if(counter>=slideimage.length-1) return;
	slides.style.transition = "transform 0.50s ease-in-out";
	counter++;
	slides.style.transform = 'translateX(' +(-size * counter) + 'px)';

});

btnp.addEventListener('click',()=>{
	if(counter<=0) return;
	slides.style.transition = "transform 0.50s ease-in-out";
	counter--;
	slides.style.transform = 'translateX(' +(-size * counter) + 'px)';

});


slides.addEventListener('transitionend', ()=>{
	console.log(slideimage[counter]);
	if (slideimage[counter].id ==='lastClone'){
		slides.style.transition = "none";
		counter = slideimage.length -2;
		slides.style.transform = 'translateX(' +(-size * counter) + 'px)';
	}
});/////////////////////////////

slides.addEventListener('transitionend', ()=>{
	console.log(slideimage[counter]);
	if (slideimage[counter].id ==='firstClone'){
		slides.style.transition = "none";
		counter = slideimage.length -counter;
		slides.style.transform = 'translateX(' +(-size * counter) + 'px)';
	}
});

/*}
function slidePre(){

	const slides = document.querySelector('#slide-cont');
const slideimage = document.querySelectorAll('#slide-cont img');

const btnp = document.querySelector('#btnp');
const btnn = document.querySelector('#btnn');

let counter = 1;
const size = slideimage[0].clientWidth;

slides.style.transform = 'translateX(' +(-size * counter) + 'px)';

btnp.addEventListener('click',()=>{
	if(counter<=0) return;
	slides.style.transition = "transform 0.50s ease-in-out";
	counter--;
	slides.style.transform = 'translateX(' +(-size * counter) + 'px)';

});
slides.addEventListener('transitionend', ()=>{
	console.log(slideimage[counter]);
	if (slideimage[counter].id ==='lastClone'){
		slides.style.transition = "none";
		counter = slideimage.length -2;
		slides.style.transform = 'translateX(' +(-size * counter) + 'px)';
	}
});
/*slides.addEventListener('transitionend', ()=>{
	console.log(slideimage[counter]);
	if (slideimage[counter].id ==='firstClone'){
		slides.style.transition = "none";
		counter = slideimage.length -counter;
		slides.style.transform = 'translateX(' +(-size * counter) + 'px)';
	}
});*/


//
/*Another code here
const slid = document.querySelector(".sli");
const allBox = slid.children;
const slidWidth = slid.offsetWidth;
const maggin=60;
var item=0;

responsive=[
{breakPoint:{width:0,item:1}}
{breakPoint:{width:600,item:2}}
{breakPoint:{width:1000,item:4}}
]


function load(){
	for(let i=0; i<responsive.length;i++){
		if(window.innerWidth>responsive[i].breakPoint.width){
			item=responsive[i].breakPoint.item
		}
		console.log(item);
	}
	start();
}
/////////////
// Get the modal

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var modalImg = document.getElementById("img");

img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

*/



function search(){
	alert("Search botton is currently not available, we are still fixing some problem on it, Sorry for the inconvinience.");
}
function openModal(e){
	var box= document.getElementById("modal-box");
	var content = document.getElementById("modal-content");

	content.innerHTML = "<img src='"+e+"'>";
	//document.getElementById("viewer").src=e;
	box.style.display = "block";
}

function closeModal(){
	document.getElementById("modal-box").style.display = "none";
}
function series(){
	alert("This page is currently not available, we are still fixing some problem on it, Sorry for the inconvinience.");
}

