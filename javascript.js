 // console.log("This is a string")
 // console.log('Another STRING')

 // console.log(300000)
 // console.log(-333333)

 // console.log(0.77)
 // console.log(-9)

 // console.log(true)
 // console.log(false)




// console.log(name)
// console.log(age)
// console.log(adult)

let myname='Kweku';
let gen = 21;
let boy = true;

 console.log(myname);
 console.log(gen);
 console.log(boy);


 const hometown = 'Abirem';
 const houseno = 15;
 const residence = 3

console.log(hometown);
 console.log(houseno);
console.log(residence);

 let pens = 245;
let books = 25;
console.log(pens++);
console.log(pens++ + books);


let horse_no = 20;
let rider_no = "30";

console.log(horse_no === rider_no);

console.log(pens + horse_no);

console.log(pens * rider_no);


let student =new Array('Kofi',4, true);
console.log(student);

let pupils = ['Ama', 'Aban', 'Adjo', false] ;
console.log(pupils[3]);

let men = true;
if (men==true) { console.log('i live for Jesus')
}
else( console.log('hahaha'));

let score =81;

if (score>=80) {
    console.log('Congratulations, you passed')
}
else if (score >=70 && score <=79 ) { console.log('Congratulations') 
}

else if (score >=60 && score <=69 ) { console.log('Impressive')
    
}

else{
    console.log ('D')
}


let a=45;
let b=60;

switch (60-45) {
    case 15:
        console.log(15)
        break;

        case 50:
        console.log(50)
        break;
    default:
        console.log('What are you looking for?')
        break;
}
// let conc=0;

/* for ( let i =0; i<=1000;i++
) {
    
console.log(i)
} */


let colleagues = ['Kofi', 'Ama', 'Akwesi', 'Abena', 'Adjo'];

for (let i=0;  i < colleagues.length; i++) 
{
    console.log(colleagues[i]);
    
}

for (let j= 0; j<10; j++) {
   j+=1;
    console.log(j);
}