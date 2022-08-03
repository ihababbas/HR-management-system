'use strict';
var ID = 999;
 
var person = {
    FullName: "Ghazi Samer",
    Department: "Administration",
    Level: "Senior",
    imageURL: "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/",

  add: function(){
    ID = ID + 1;
    return ID ;
  }, 
  Salary: function(){
    if( person.Level == "Senior" )
    { var fullsalary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
       var net = fullsalary - (fullsalary * 0.075);     
        return net; }
   else if ( this.Level == "Mid-Senior" )
    {var fullsalary= Math.floor(Math.random() * (1500 - 1000) ) + 1000; 
        var net = fullsalary - (fullsalary * 0.075);     
        return net;  } 
    else ( person.Level == "Junior" )
    {var fullsalary = Math.floor(Math.random() * (1000 - 500) ) + 500; 
        var net = fullsalary - (fullsalary * 0.075);     
        return net; 
    }
  }
};
person.EmployeeID = person["add"]();
person.Salary = person["Salary"]();
console.log("Employee name: " + person.FullName); 
console.log("Employee salary: "+ person.Salary);
console.log(person.EmployeeID)
var person = {
    FullName: "Lana Ali",
    Department: "Finance",
    Level: "Senior",
    imageURL: "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/",
    add: function(){
        ID = ID + 1;
        return ID ;
      }, 
      Salary: function(){
        if( person.Level == "Senior" )
        { var fullsalary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
           var net = fullsalary - (fullsalary * 0.075);     
            return net; }
       else if ( this.Level == "Mid-Senior" )
        {var fullsalary= Math.floor(Math.random() * (1500 - 1000) ) + 1000; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net;  } 
        else ( person.Level == "Junior" )
        {var fullsalary = Math.floor(Math.random() * (1000 - 500) ) + 500; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net; 
        }
      }
};
person.EmployeeID = person["add"]();
person.Salary = person["Salary"]();
console.log("Employee name: " + person.FullName); 
console.log("Employee salary: "+ person.Salary);
console.log(person.EmployeeID)

var person = {
    FullName: "Tamara Ayoub",
    Department: "Marketing",
    Level: "Senior",
    imageURL: "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/",
    add: function(){
        ID = ID + 1;
        return ID ;
      }, 
      Salary: function(){
        if( person.Level == "Senior" )
        { var fullsalary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
           var net = fullsalary - (fullsalary * 0.075);     
            return net; }
       else if ( this.Level == "Mid-Senior" )
        {var fullsalary= Math.floor(Math.random() * (1500 - 1000) ) + 1000; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net;  } 
        else ( person.Level == "Junior" )
        {var fullsalary = Math.floor(Math.random() * (1000 - 500) ) + 500; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net; 
        }
      }
  
};
person.EmployeeID = person["add"]();
person.Salary = person["Salary"]();
console.log("Employee name: " + person.FullName); 
console.log("Employee salary: "+ person.Salary);
console.log(person.EmployeeID)
var person = {
    FullName: "Safi Walid",
    Department: "Administration",
    Level: "Mid-Senior",
    imageURL: "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/",
    add: function(){
        ID = ID + 1;
        return ID ;
      },
      Salary: function(){
        if( person.Level == "Senior" )
        { var fullsalary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
           var net = fullsalary - (fullsalary * 0.075);     
            return net; }
       else if ( this.Level == "Mid-Senior" )
        {var fullsalary= Math.floor(Math.random() * (1500 - 1000) ) + 1000; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net;  } 
        else ( person.Level == "Junior" )
        {var fullsalary = Math.floor(Math.random() * (1000 - 500) ) + 500; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net; 
        }
      }   
};
person.EmployeeID = person["add"]();
person.Salary = person["Salary"]();
console.log("Employee name: " + person.FullName); 
console.log("Employee salary: "+ person.Salary);
console.log(person.EmployeeID)
var person = {
    FullName: "Omar Zaid",
    Department: "Development",
    Level: "Senior",
    imageURL: "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/",
    add: function(){
        ID = ID + 1;
        return ID ;
      },
      Salary: function(){
        if( person.Level == "Senior" )
        { var fullsalary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
           var net = fullsalary - (fullsalary * 0.075);     
            return net; }
       else if ( this.Level == "Mid-Senior" )
        {var fullsalary= Math.floor(Math.random() * (1500 - 1000) ) + 1000; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net;  } 
        else ( person.Level == "Junior" )
        {var fullsalary = Math.floor(Math.random() * (1000 - 500) ) + 500; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net; 
        }
      }
};
person.EmployeeID = person["add"]();
person.Salary = person["Salary"]();
console.log("Employee name: " + person.FullName); 
console.log("Employee salary: "+ person.Salary);
console.log(person.EmployeeID)

var person = {
    FullName: "Rana Saleh",
    Department: "Development",
    Level: "Junior",
    imageURL: "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/",
    add: function(){
        ID = ID + 1;
        return ID ;
      },
      Salary: function(){
        if( person.Level == "Senior" )
        { var fullsalary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
           var net = fullsalary - (fullsalary * 0.075);     
            return net; }
       else if ( this.Level == "Mid-Senior" )
        {var fullsalary= Math.floor(Math.random() * (1500 - 1000) ) + 1000; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net;  } 
        else ( person.Level == "Junior" )
        {var fullsalary = Math.floor(Math.random() * (1000 - 500) ) + 500; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net; 
        }
      } 
};
person.EmployeeID = person["add"]();
person.Salary = person["Salary"]();
console.log("Employee name: " + person.FullName); 
console.log("Employee salary: "+ person.Salary);
console.log(person.EmployeeID)

var person = {
    FullName: "Hadi Ahmad",
    Department: "Finance",
    Level: "Mid-Senior",
    imageURL: "https://www.pngitem.com/middle/iTTbx_keep-calm-and-carry-on-clip-art-crown/",
    add: function(){
        ID = ID + 1;
        return ID ;
      },
      Salary: function(){
        if( person.Level == "Senior" )
        { var fullsalary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
           var net = fullsalary - (fullsalary * 0.075);     
            return net; }
       else if ( this.Level == "Mid-Senior" )
        {var fullsalary= Math.floor(Math.random() * (1500 - 1000) ) + 1000; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net;  } 
        else ( person.Level == "Junior" )
        {var fullsalary = Math.floor(Math.random() * (1000 - 500) ) + 500; 
            var net = fullsalary - (fullsalary * 0.075);     
            return net; /
        }
      }  
};
person.EmployeeID = person["add"]();
person.Salary = person["Salary"]();
console.log("Employee name: " + person.FullName); 
console.log("Employee salary: "+ person.Salary);
console.log(person.EmployeeID)

