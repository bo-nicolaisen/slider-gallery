let indexPos=0;

let myInterval=null;


const mySlides=document.getElementsByClassName('mySlides')

updateSLides()
autoSlider()


// #region slider buttons 

  let previousButton=document.getElementById('prev');

  previousButton.addEventListener('click',()=>{

indexPos--;

if (indexPos<0){ 
   indexPos=mySlides.length-1
}


updateSLides()
// clears interval  because user interacted with the slider
clearInterval(myInterval);

// restart auto slider after 10 seconds
setTimeout(autoSlider,10000);

  });

  
  let nextButton=document.getElementById('next');

  nextButton.addEventListener('click',()=>{


indexPos++;

if (indexPos>mySlides.length-1){ 

  indexPos=0
}

updateSLides()
// clears interval  because user interacted with the slider
clearInterval(myInterval);

// restart auto slider after 10 seconds
setTimeout(autoSlider,10000);

  });

// #endregion slider buttons 



// #region update slider

function updateSLides(){
let currentSlide=mySlides[indexPos]

// loop gennem alle sildes og skjul dem
for (let index = 0; index < mySlides.length; index++) {
  const element = mySlides[index];
  //console.log("skjul slide: "+element.style.display);

  if (element==currentSlide){
    element.style.display="block"
    
  }else{
element.style.display="none"
  }

}

// vis current slide
/* console.log("vis slide: "+currentSlide);
currentSlide.style.display="block" */

}

// #endregion update slider


// #region auto slider
function autoSlider(){

  // auto slider every 3 seconds sets the interval named ie. in a variable so we can end it later

myInterval=setInterval(()=>{
indexPos++; 
if (indexPos>mySlides.length-1){ 
  indexPos=0
}
updateSLides()
},3000)
}

// #endregion auto slider




/*
<!-- Slideshow container -->
<section id="slideshow-container">

  <!-- Full-width images with and caption text -->
  <figure class="mySlides">
    <img src="assets/img/gallery/Reunion-Island-01.jpg">
    <figcaption class="captionText">Caption Text</figcaption>
  </figure>

  <figure class="mySlides">
    <img src="assets/img/gallery/Reunion-Island-02.jpg" >
    <figcaption class="captionText">Caption Two</figcaption>
  </figure>

  <figure class="mySlides">
    <img src="assets/img/gallery/Reunion-Island-03.jpg">
    <figcaption class="captionText">Caption Three</figcaption>
  </figure>

  <!-- Next and previous buttons -->
  <a id="prev">&#10094;</a>
  <a id="next">&#10095;</a>
</section>
*/