const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line
/***
 * Object containing all the books
 */
const books = {
  bookA: document.querySelector("#book1"),
  bookB: document.querySelector("#book2"),
  bookC: document.querySelector("#book3"),
};

//Book 1 : Styling elements
books.bookA.querySelector(".status").style.color = STATUS_MAP.overdue.color;
books.bookA.querySelector(".checkin").style.color = "";

//Book 1 : Disabling/enabling buttons
books.bookA.querySelector(".reserve").disabled = !STATUS_MAP.overdue.canReserve;
books.bookA.querySelector(".checkout").disabled = !STATUS_MAP.overdue.canCheckout;
books.bookA.querySelector(".checkin").disabled = !STATUS_MAP.overdue.canCheckIn;

//Book 2: Styling elements
books.bookB.querySelector(".status").style.color = STATUS_MAP.reserved.color;
books.bookB.querySelector(".checkin").style.color = "";

//Book 2: Disabling/enabling buttons
books.bookB.querySelector(".reserve").disabled = !STATUS_MAP.reserved.canReserve;
books.bookB.querySelector(".checkout").disabled = !STATUS_MAP.reserved.canCheckout;
books.bookB.querySelector(".checkin").disabled = !STATUS_MAP.reserved.canCheckIn;

//Books 3: Styling elements
books.bookC.querySelector(".status").style.color = STATUS_MAP.shelf.color;
books.bookC.querySelector(".checkin").style.color = "";

//Books 3: Disabling/enabling buttons
books.bookC.querySelector(".reserve").disabled = !STATUS_MAP.shelf.canReserve;
books.bookC.querySelector(".checkout").disabled = !STATUS_MAP.shelf.canCheckout;
books.bookC.querySelector(".checkin").disabled = !STATUS_MAP.shelf.canCheckIn;