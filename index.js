const app = angular.module("myApp", ["ngRoute"]);
app.config(routes);
app.controller("authController", authController);
app.controller("adminController", adminController);
app.controller("productController", productController)