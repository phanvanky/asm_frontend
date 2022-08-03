const app = angular.module("myApp", ["ngRoute"]);
app.config(routes);
app.controller("authController", authController);