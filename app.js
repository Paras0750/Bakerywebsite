const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://0.0.0.0:27017/bakeryDB", {
  useNewUrlParser: true,
});

const cakeSchema = {
  itemID: Number,
  name: String,
  imgUrl: String,
  price: Number,
  orignalPrice: Number,
};

const OrderSchema = {
  orderID: Number,
};

const SellingItems = mongoose.model("SellingItem", cakeSchema);
const OrderItem = mongoose.model("OrderItem", OrderSchema);

const item1 = new SellingItems({
  itemID: 1,
  name: "Cake1!",
  imgUrl: "/images/p8.png",
  price: 450,
  orignalPrice: 2000,
});

const item2 = new SellingItems({
  itemID: 2,
  name: "Cake2!",
  imgUrl: "/images/p2.png",
  price: 420,
  orignalPrice: 2000,
});

const item3 = new SellingItems({
  itemID: 3,
  name: "Cake3!",
  imgUrl: "/images/p9.png",
  price: 370,
  orignalPrice: 2000,
});

const defaultItems = [item1, item2, item3];

app.get("/", function (req, res) {
  SellingItems.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      console.log("No items found");
      SellingItems.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved default items to DB.");
        }
      });
      res.redirect("/");
    } else {
      res.render("signup", { itemList: foundItems });
      // res.render("signup");
    }
  });
});

app.post("/addToCart", function (req, res) {
  const OrderID = req.body.OrderID;

  const order = new OrderItem({
    orderID: OrderID,
  });

  order.save();

  res.redirect("/");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/failure", function (req, res) {
  res.render("failure");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
