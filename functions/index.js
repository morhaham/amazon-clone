const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HJz3sLmsVvKTTlU7lxu2lNPTOaGesJcScuhjb847PrFwYb8Aj83eByO5Q0bQ6DVmGKboqwSPMDQYLox6Lro25rc00BAygvqSF"
);

// API

// App Config
const app = express();

// Middlewares
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment intent >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:3601/clone-968fd/us-central1/api - example api
