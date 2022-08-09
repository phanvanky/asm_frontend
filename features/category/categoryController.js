function categoryController($scope, $http, $routeParams) {
    const API = `http://localhost:3000/categories`;

    $scope.cate = {
        label: "",
        path: ""
    }
    $scope.cateList = [];
    const id = $routeParams.id;
    // Hiển thị ds category
    (() => {
        $http.get(API ).then(({ data }) => ($scope.cateList = data));
    })();
    const getCate = async () => {
        $http.get(`${API}/${id}`+`/?_embed=products`   ).then(({ data }) => ($scope.cateList = data));
    };
    if (id) {
        getCate();
    }
    // Xóa category
    $scope.removeCate = function (id) {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirm) {
            $http
                .delete(`${API}/${id}`)
                .then(() => {
                    const newCates = $scope.cateList.filter((item) => item.id != id);
                    $scope.cateList = newCates;
                    toastr.success("Đã xóa thành công");
                })
                .catch((error) => console.log(error));
        }
    };
    //Thêm category
    $scope.addCate = function (e) {
        e.preventDefault();
        $http
            .post(`${API}`, $scope.cate)
            .then(() => {
                toastr.success("Đã thêm thành công");
                window.location.href = "./#!dscate";
            })
            .catch((error) => toastr.error("Lỗi", error));
    };
    $scope.updateCate = function (e) {
        console.log($scope.cate);
        $http.put(`${API}/${$scope.cate.id}`, $scope.cate).then(() => {
            console.log("thanh cong");
        });
    };
}