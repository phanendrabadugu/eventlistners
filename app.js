// // document.querySelector('.clear-tasks').addEventListener('click', 
// // function(e){console.log('Hello World')

// // e.preventDefault();
// // });

// document.querySelector('.clear-tasks').addEventListener('click',onClick);

// function onClick(e){
    
//     let val;
//     val = e;

//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;
    
    

//     //event typr
//     val = e.type;
//     val = e.timeStamp;

//     val = e.clientY;
//     val = e.clientX;


//     console.log(val);

    
// }

const cltbtn = document.querySelector('.card-action');
const heading = document.querySelector('h5');

cltbtn.addEventListener('mouseover', runEvent);


function runEvent(e){
    console.log(`EVENT TYPE : ${e.type}`);
    //heading.textContent = `x: ${Math.random()*100},  Y : ${Math.random()*100}`;
    document.body.style.backgroundColor = `rgb(${Math.random()*100} ${Math.random()*100} 10)`;
}
