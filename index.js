const app = angular.module("myApp", ["ngRoute"]);
app.config(routes);
// app.controller("productController", productController);
app.controller("authController", authController);