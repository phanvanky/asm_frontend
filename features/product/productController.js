function productController($scope, $http, $routeParams) {
    const API = `http://localhost:3000`;
    const APICATE = `http://localhost:3000/categories`;
    $scope.product = {
        name: "",
        price:"",
        img:""
    };
    $scope.cateList = [];
    $scope.productList = [];
    const id = $routeParams.id;
    (() => {
        $http.get(APICATE).then(({ data }) => ($scope.cateList = data));
    })();
    // Mặc định lấy danh sách sản phẩm và hiển thị ra ngoài
    (() => {
        $http.get(API).then(({ data }) => ($scope.productList = data));
    })();
    const getItemProduct = async () => {
        $http.get(`${API}/${id}`).then(({ data }) => ($scope.product = data));
    };
    if (id) {
        getItemProduct();
    }

    // Xóa sản phẩm
    $scope.removeItem = function (id) {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirm) {
            $http
                .delete(`${API}/${id}`)
                .then(() => {
                    const newProducts = $scope.productList.filter((item) => item.id != id);
                    $scope.productList = newProducts;
                    toastr.success("Đã xóa thành công");
                })
                .catch((error) => console.log(error));
        }
    };

    //Thêm sản phẩm
    $scope.addItem = function (e) {
        e.preventDefault();
        $http
            .post(`${API}`, $scope.product)
            .then((data) => {
                console.log(data)
                toastr.success("Đã thêm thành công");
                window.location.href = "./#!product";
            })
            .catch((error) => toastr.error("Lỗi", error));
    };

    //Update item
    $scope.updateItem = function (e) {
        console.log($scope.product);
        $http.put(`${API}/${$scope.product.id}`, $scope.product).then(() => {
            console.log("thanh cong");
        });
    };
}
