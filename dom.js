'use strict';
const body = document.getElementsByTagName('body');

var ID = 999;
var net = 0;
var allUsers = [];

function add() {
    ID = ID + 1;
    return ID ;  
  };
  function salary(x){
    if( x == "Senior" )
    { var fullsalary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
       var net = fullsalary - (fullsalary * 0.075);     
        return net; }
   else if ( x == "Mid-Senior" )
    {var fullsalary= Math.floor(Math.random() * (1500 - 1000) ) + 1000; 
        var net = fullsalary - (fullsalary * 0.075);     
        return net;  }  
    else ( x == "Junior" )
    {var fullsalary = Math.floor(Math.random() * (1000 - 500) ) + 500; 
        var net = fullsalary - (fullsalary * 0.075);     
        return net; 
    }
  };


  function Person(FullName, Department, Level, imageURL, id , Salary) {
    this.Name = FullName;
    this.Department= Department;
    this.Level = Level;
    this.imageURL = imageURL;
    this.EemployeeID = id;
    this.Salary = Salary;
    this.add = function (ID)
    {
      this.EemployeeID =ID;  
    };
    this.netSalery = function (net)
    {
      this.Salary =net;  
    };



allUsers.push(this);
}
const num1 = new Person ("Ghazi Samer","Administration","Senior", "./assets/Ghazi.jpg" , 0 ,0);
const num2 = new Person ("Lana Ali","Finance","Senior", "./assets/Lana.jpg" , 0 ,0);
const num3 = new Person ("Tamara Ayoub","Marketing","Senior", "./assets/Tamara.jpg" , 0 ,0);
const num4 = new Person ("Safi Walid","Administration","Mid-Senior","./assets/Safi.jpg", 0 ,0);
const num5 = new Person ("Omar Zaid","Development","Senior","./assets/Omar.jpg", 0 ,0);
const num6 = new Person ("Rana Saleh","Development","Junior","./assets/Rana.jpg", 0 ,0);
const num7 = new Person ("Hadi Ahmad","Finance","Mid-Senior","./assets/Hadi.jpg", 0 ,0);



//body[0].appendChild(main);

const Section = document.createElement('section');

body[0].childNodes[3].appendChild(Section);
Section.classList.add('contanier');



Person.prototype.write = function() {
  const divEl = document.createElement('div');
  Section.appendChild(divEl);
  divEl.classList.add('card'); 
    const divE2 = document.createElement('div');
    divEl.appendChild(divE2);
    divE2.classList.add('card-image');
    const imgEl = document.createElement('img');
    
    imgEl.src = this.imageURL;
    imgEl.alt = this.name;
    divE2.appendChild(imgEl); 

    const divE3 = document.createElement('div');
    divEl.appendChild(divE3);
    divE3.classList.add('div3');
    



    const h2El = document.createElement('h2');
    h2El.classList.add('h'); 
h2El.textContent = "Name:" +this.Name
divE3.appendChild(h2El);
const h4El = document.createElement('h4');
h4El.classList.add('h'); 
h4El.textContent = "Level:" +this.Level
divE3.appendChild(h4El);
const h5El = document.createElement('h5');
h5El.classList.add('h'); 
h5El.textContent = "Salary:" + this.Salary;
divE3.appendChild(h5El);

};



  console.log(allUsers);

 for ( let i= 0 ; i < allUsers.length ; i++ ){
  allUsers[i].add(add());
  allUsers[i].netSalery(salary(allUsers[i].Level));
  allUsers[i].write();

 } ;


