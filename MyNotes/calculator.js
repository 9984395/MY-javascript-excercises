const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

/*Bubbling: */
/* Here when we click the the outermost div ,
 (i.e) it will log what was in the arrow function*/
//  grandparent.addEventListener('click', e => {
//   console.log("grandparent bubble")
// })

// /*But when we click the child element, the function will
//  also log all the statement of all elements in the console*/ 

//  /*It is because the child element is in the parent, which is in the 
//  grandparent element*/ 

//  /*This process is called Bubbling, which means moving from  closest
//  element to the farthest away element*/
 

// parent.addEventListener('click', e => {
 
//   console.log("parent bubble")
// })

// child.addEventListener("click", e =>{
//   console.log("child Bubble")
// })

// /*We can even add event listner for our document!*/
// /*If i clicked anywhere in the page, then the action assigned to the 
// listner will happen. Here it is logging a statment in the console*/
// document.addEventListener('click', e => {
//   console.log("document Bubble")
// })

/*If we clicked the child element then the entire eventlistners will work.
This is because of the Bubbling even the document object*/

/*How to get hold of it? think of it as a bubble which will move from
downwards to upwards (i.e) from innermost element to outermost element */


  /* ------------------------------------------------------------ */

/*Capture: */
/*It is just opposite of Bubbling event => Outermost to innermost 
grandparent.addEventListener('click', e => {
  
  console.log("grandparent Capture")
}, 
  {capture:true}
)

parent.addEventListener('click', e => {
  
  console.log("parent Capture")
},
  {Capture:true}
)

child.addEventListener("click", e =>{
  console.log("child Capture")
}, 
  {capture:true}
)

document.addEventListener('click', e => {
  
  console.log("document Capture")
}, 
 {capture:true}

 )*/
 
    /*==========================================================*/ 

 /*Run Event only once :*/
/*if the once arguement given true, then the element will run once
and it will remove it instinctivly */
 grandparent.addEventListener('click', e => {
  console.log("grandparent bubble")
},
{once: true}
)

parent.addEventListener('click', e => {
 
  console.log("parent bubble")
})

child.addEventListener("click", e =>{
  console.log("child Bubble")
})

document.addEventListener('click', e => {
  console.log("document Bubble")
})

  /*=============================================================*/

  /*RemoveEventListener*/

  grandparent.addEventListener('click', e => {
    console.log("grandparent bubble")
  },
  
  )
  
  parent.addEventListener('click', e => {
   
    console.log("parent bubble")
  })
  
  child.addEventListener("click", e =>{
    console.log("child Bubble")
  })
  
  document.addEventListener('click', e => {
    console.log("document Bubble")
  })
  




