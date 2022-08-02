function routes($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html",
        })
        
        .when("/404", {
            templateUrl: "pages/notFound.html",
        })
        .otherwise({
            redirectTo: "/404",
        });
}
