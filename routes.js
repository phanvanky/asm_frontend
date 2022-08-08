function routes($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "features/admin/pages/home.html",
            controller: "authController",
           
        })
        .when("/dspro", {
            templateUrl: "features/product/pages/list.product.html",
            controller: "productController",
        })
        .when("/add-product", {
            templateUrl: "features/product/components/form-add-product.html",
            controller: "productController",
           
        })
        .when("/edit-product", {
            templateUrl: "features/product/components/form-edit-product.html",
            controller: "productController",
           
        })
        .when("/dsaccount", {
            templateUrl: "features/auth/pages/listAccount.html",
            controller: "authController",
        })
        .when("/dscate", {
            templateUrl: "features/category/pages/dscate.html",
            controller: "categoryController",
        })
        .when("/add-cate", {
            templateUrl: "features/category/components/addCate.html",
            controller: "categoryController",
        })
        .when("/home", {
            templateUrl: "features/admin/pages/home.html",
        })
        .when("/login", {
            templateUrl: "features/auth/pages/login.html",
            controller: "authController",
        })
        .when("/fogot-password", {
            templateUrl: "features/auth/pages/fogot-password.html",
        })

        .when("/register", {
            templateUrl: "features/auth/pages/register.html",
            controller: "authController",
        })
        .otherwise({
            redirectTo: "features/admin/pages/404.html",
        });
}
