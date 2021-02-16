/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
/**
 * Define Global Variables
 *
*/
const sectionList = document.querySelectorAll('section');
const sections = Array.from(sectionList);
const navBar = document.querySelector('#navbar__list');
const navAnchor = document.querySelectorAll('a');

let numberOfSections = sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/



// build the nav
function dynamicNav() {
  for (const section of sections){
    sectionNumber = section.getAttribute('data-nav');
    sectionLink = section.getAttribute('id');

    listElemenet =document.createElement('li');
    listElemenet.innerHTML=`<a href='#${sectionLink}' class = "menu__link"> ${sectionNumber}</a>`;
    navBar.appendChild(listElemenet);


  }
}
dynamicNav();

/*var intersectionObserver = new IntersectionObserver(function(entries) {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.

  if (!entries[0].intersectionRatio <= 0) {


    document.querySelectorAll('section').classList.add('your-active-class');

    console.log('omar');

}
});

 intersectionObserver.observe(document.querySelector('section'));


*/

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach(section => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25 ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveclass(currentId);
}
})
}
 var removeAllActiveClasses = function (){
   document.querySelectorAll('li a').forEach( el => {
     el.classList.remove('active__link')

   });
   document.querySelectorAll('section').forEach( el => {
     el.classList.remove('your-active-class')

   });

 };
 var addActiveclass = function(id){
   console.log(id);


   var selector = `li a[href ="#${id}"]` ;
   document.querySelector(selector).classList.add('active__link');
   document.querySelector(`#${id}`).classList.add('your-active-class');
 }


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
