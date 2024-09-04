const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);

let customerId = null;
sequelize
  .sync({force: true})
  // .sync()
  .then((result) => {
    return Customer.create({name: "Chandler Bing", email: "cb@gmail.com"})
    console.log(result);
  })
  .then(customer => {
    customerId = customer.id;
    console.log("First Customer Created: ",customer);
    return customer.createOrder({total: 45});
  })
  .then(order => {
    console.log("Order is : ",order);
    return Order.findAll({ where: customerId});
  })
  .then(orders => {
    console.log("All the Orders are : ",orders);
  })
  .catch((err) => {
    console.log(err);
  });


/*
const sequelize = require("./util/database");
const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);

let customerId = null;

async function run() {
  try {
    await sequelize.sync({ force: true });

    const customer = await Customer.create({
      name: "Chandler Bing",
      email: "cb@gmail.com",
    });
    customerId = customer.id;
    console.log("First Customer Created: ", customer);

    const order = await customer.createOrder({ total: 45 });
    console.log("Order is: ", order);

    const orders = await Order.findAll({ where: { customerId } });
    console.log("All the Orders are: ", orders);
  } catch (err) {
    console.error(err);
  }
}

run();
*/