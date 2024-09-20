# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
In this project we have create subscription page with the help of javascript and css,html.


### The challenge

The challenge came like access success page through javascript and return on main page
and apply validation on email.

### Screenshot



### Links
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- js(Javascrpt)



### What I learned

In this project i have learn more properties of css and new expressions  in js like regex.

 var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(Email.value.match(validRegex)) {
    para.innerText = "Vaild email address";
    para.style.color = "green";
    Email.value=" ";
main.style.display="none";
succses.style.display="block";
    return true;

  } 
  else {


      para.innerText = "Invaild email address";
      para.style.color = "red";
      Email.style.backgroundColor= "hsl(0, 89%, 90%)";
     Email.style.border= "2px solid rgb(235, 86, 86)";
     Email.style.color=  "rgb(235, 86, 86)";
     Email.style.boxShadow = "0 0 10px 5px hsl(0, 89%, 90%)";
  
    return false;
  }





## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
