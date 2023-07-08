const { Router } = require("express");
const advertisingRoute = require("./advertisings/advertisingRoute");
const saleRoute = require("./sales/saleRoute");
const transactionRoute = require("./transactions/transactionRoute");

const router = Router();

const defaultRoute = [
  {
    path: "/advertising",
    route: advertisingRoute,
  },
  {
    path: "/sale",
    route: saleRoute,
  },
  {
    path: "/transaction",
    route: transactionRoute,
  },
];

defaultRoute.forEach(({ path, route }) => {
  router.use(path, route);
});

module.exports = router;
