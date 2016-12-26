///////////////////////Slider////////////////////
var slides = document.querySelectorAll('.slide');
var buttons = document.querySelector('.buttons');

var prevNum = 0;
var prevTarget = buttons.firstElementChild;

buttons.addEventListener('click',function(e){

  var target = e.target;
  var targetNum = +target.dataset.num;
  if(target.tagName == 'BUTTON'){

    if(targetNum != prevNum){

      slides[targetNum].classList.add('active');
      slides[prevNum].classList.remove('active');
      target.classList.add('btn-active');
      prevTarget.classList.remove('btn-active');

    }
    prevTarget = target;
    prevNum = +target.dataset.num;
  }

});

////////////////////////Tabs//////////////////////////
var tab = document.getElementById('tabs');
var tabContent = document.querySelectorAll('.tabcontent');
var firstBtn = tab.querySelector('li');
var prevTabBtn = firstBtn;
tab.addEventListener('click',function(e){
  var target = e.target;

  if(target.tagName == 'LI'){
    for(var i = 0; i < tabContent.length;i++){
      if(tabContent[i].dataset.type == target.dataset.type){
        tabContent[i].classList.add('active-tab');
        target.classList.add('active-tab-btn');
        prevTabBtn.classList.remove('active-tab-btn');

        target.querySelector('.trig').classList.add('active-trig');
        prevTabBtn.querySelector('.trig').classList.remove('active-trig');
      }else{
        tabContent[i].classList.remove('active-tab');
      }
    }
    prevTabBtn = target;
  }
});
////////////////////////////////Castomyze Selects/////////////
$('select').styler();
