'use strict';

var ID = 999;
var net = 0;
var alluser = [];

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


  function person(FullName, Department, Level, imageURL, id , Salary) {
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
    person.prototype.document = function() {
        document.write(`<br>`);
        document.write(`Employee name: ${this.Name} ` ,`Department: ${this.Level}  `, `Employee salary: ${this.Salary}`,);
        document.write(`<br>`);
}
alluser.push(this);
}
  const num1 = new person ("Ghazi Samer","Administration","Senior", "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/" , 0 ,0);
  const num2 = new person ("Lana Ali","Finance","Senior", "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/" , 0 ,0);
  const num3 = new person ("Tamara Ayoub","Marketing","Senior", "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/" , 0 ,0);
  const num4 = new person ("Safi Walid","Administration","Mid-Senior", "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/" , 0 ,0);
  const num5 = new person ("Omar Zaid","Development","Senior", "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/" , 0 ,0);
  const num6 = new person ("Rana Saleh","Development","Junior", "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/" , 0 ,0);
  const num7 = new person ("Hadi Ahmad","Finance","Mid-Senior", "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/" , 0 ,0);

  console.log(alluser);

  num1.add(add());
  num2.add(add());
  num3.add(add());
  num4.add(add());
  num5.add(add());
  num6.add(add());
  num7.add(add());
  
  num1.netSalery(salary(num1.Level));
  num2.netSalery(salary(num2.Level));
  num3.netSalery(salary(num3.Level));
  num4.netSalery(salary(num4.Level));
  num5.netSalery(salary(num5.Level));
  num6.netSalery(salary(num6.Level));
  num7.netSalery(salary(num7.Level));
  


    num1.document();
    num2.document();
    num3.document();
    num4.document();
    num5.document();
    num6.document();
    num7.document();


    