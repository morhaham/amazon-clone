const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

// API
const app = express(); // App Config

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
