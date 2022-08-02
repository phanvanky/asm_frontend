function routes($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html",
        })
        .when("/register", {
            templateUrl: "pages/register.html",
            controller: "authController"
        })
        .when("/404", {
            templateUrl: "pages/notFound.html",
        })
        .otherwise({
            redirectTo: "/404",
        });
}
