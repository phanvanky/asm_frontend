function routes($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "features/admin/pages/home.html",
        })
        .when("/login", {
            templateUrl: "features/auth/pages/login.html",
        })
        .when("/fogot-password", {
            templateUrl: "features/auth/pages/fogot-password.html",
        })
        
        .when("/register", {
            templateUrl: "features/auth/pages/register.html",
        })
        .otherwise({
            redirectTo: "features/admin/pages/404.html",
        });
}
