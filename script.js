let img1='https://photo-voiture.motorlegend.com/high/ferrari-roma-v8-620-ch-129188.jpg'
let img2='https://th.bing.com/th/id/R.bcc836e2dab11ed0f0555d2d17a64528?rik=JZORpazIN6XdhA&riu=http%3a%2f%2fd3e1m60ptf1oym.cloudfront.net%2f2ca3fc27-5f06-43ba-8df8-1bec6a8a8be4%2f15-01-26-155_xgaplus.jpg&ehk=IwLSZDZiVVQK2v6Nplj%2fGYVhsODzyJrru0pwm17LvzU%3d&risl=&pid=ImgRaw&r=0'
let img3='https://www.centralpark.com/downloads/4619/download/sunset-in-the-park.jpe?cb=783665e2e86dabe11fdbe675f24e26c4&w=1200'
let arrImg=[img1,img2,img3];
let i=1;
let timerId
let elem=document.getElementById('cont2-1')
let elem1=document.getElementById('cont2-2')
function back(){
	elem1.children[i].style.backgroundColor=''
	if(i==0){
		i=arrImg.length-1
	}else{
	 --i
	}
  
  cont1.style.backgroundImage=`url(${arrImg[i]})`
  elem.innerText=`Page ${i+1}`
  elem1.children[i].style.backgroundColor='white'
  clearInterval(timerId)
  a(arrImg)
}
function first(){
	elem1.children[i].style.backgroundColor=''
  if(i==arrImg.length-1){
		i=0
	}else{
	 ++i
	}
  
  cont1.style.backgroundImage=`url(${arrImg[i]})`
  elem.innerText=`Page ${i+1}`
  elem1.children[i].style.backgroundColor='white'
  clearInterval(timerId)
  a(arrImg)
}
imgBack.addEventListener('click',back)
imgFirst.addEventListener('click',first)
function stop(){
	clearInterval(timerId)
}
elem.addEventListener('click',stop)
function a(arr) {
	cont1.style.backgroundImage=`url(${arr[i]})`
	elem1.children[i].style.backgroundColor='white'
   elem.innerText=`Page ${i+1}`
   timerId= setInterval(()=>{
   	elem1.children[i].style.backgroundColor=''
   	if(i==arr.length-1){
   		i=0
   	}else{
   		i++
   	}
   	
   	cont1.style.backgroundImage=`url(${arr[i]})`
    elem.innerText=`Page ${i+1}`
    elem1.children[i].style.backgroundColor='white'
   },4000)
}

a(arrImg)