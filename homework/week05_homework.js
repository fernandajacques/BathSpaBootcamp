// Little Lemon Receipt Maker

const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];

const taxValue = 1.2;

function getPrice(taxBoolean) {
  if (typeof taxBoolean !== 'boolean') {
    console.log("You need to pass a boolean to the getPrices call!");
    return;
  }

  for (dish of dishData) {
    let finalPrice;
    if (taxBoolean) {
      finalPrice = dish.price * taxValue;
    } else {
      finalPrice = dish.price;
    }
    console.log(`Dish: ${dish.name}, Price: ${finalPrice}`);
  }
}

function getDiscount(taxBoolean, guests) {
  getPrice(taxBoolean);

  if (typeof guests == "number" && guests > 0 && guests < 30) {
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }
    console.log(`Discount is: $${discount}`);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

// getDiscount(true, 2);
getDiscount(false,10);
