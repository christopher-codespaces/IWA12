 // scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

status1Element= document.querySelector('div#book1 p span.status');
status1Element.style.color=STATUS_MAP[status1Element.innerHTML].color


 reserve1=document.querySelector('div#book1 button.reserve');
 checkout1=document.querySelector('div#book1 button.checkout ');
 checkin1=document.querySelector('div#book1 button.checkin ');

 reserve1.disabled=true
 checkout1.disabled=true
 checkin1.disabled=false

if(reserve1.disabled , checkout1.disabled){
    (STATUS_MAP.overdue.canCheckIn)
    
}else{
    (STATUS_MAP.overdue.canCheckIn)
}


//  STATUS_MAP is an object that maps book statuses to their corresponding properties such as color and availability.

// The following lines of code set the color of the book status element based on the status of the book. It first selects the book status element using the querySelector method and then sets its color using the style.color property.
status2Element= document.querySelector('div#book2 p span.status');
status2Element.style.color=STATUS_MAP[status2Element.innerHTML].color

// The following lines of code disable the reserve and checkout buttons for book1 and enable the checkin button.
reserve2=document.querySelector('div#book2 button.reserve');
checkout2=document.querySelector('div#book2 button.checkout ');
checkin2=document.querySelector('div#book2 button.checkin ');


reserve2.disabled=true
checkout2.disabled=false
checkin2.disabled=true
// The following lines of code check if the reserve and checkout buttons are disabled for book1, and if so, set the checkin availability of the book to true in the STATUS_MAP.
if(reserve2.disabled , checkin2.disabled){
   (STATUS_MAP.reserved.canReserve)
   
}else{
   STATUS_MAP.reserved.canCheckout
}
// Steps 2-4 are repeated for the remaining two books (book2 and book3) with appropriate modifications in the variables and conditions.

status3Element= document.querySelector('div#book3 p span.status');
status3Element.style.color=STATUS_MAP[status3Element.innerHTML].color

reserve3=document.querySelector('div#book3 button.reserve');
checkout3=document.querySelector('div#book3 button.checkout ');
checkin3=document.querySelector('div#book3 button.checkin ');


reserve3.disabled=true
checkout3.disabled=true
checkin3.disabled=false

if(reserve3.disabled , checkout3.disabled){
   (STATUS_MAP.shelf.canReserve)

}else{
   (STATUS_MAP.shelf.canCheckIn)
}


// 1.This code defines a constant object called STATUS_MAP which maps book statuses to their corresponding color and allowed actions.
//  2 .It then selects HTML elements for each book's status, reserve, checkout, and check-in buttons.
// 3.The code disables certain buttons based on the book's current status, and updates the status color to the corresponding color in STATUS_MAP.
// 4The code uses conditional statements to check if certain buttons should be enabled or disabled based on the book's current status and the allowed actions in STATUS_MAP.
// 5.Overall, this code updates the UI for a book rental system based on the book's current status and allowed actions, and disables buttons as needed.