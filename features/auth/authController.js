function authController($scope, $http, $routeParams) {
    const API = `http://localhost:3000/users`;
    

    $scope.status = false;
    $scope.user = {
        name: "",
        email: "",
        password: "",
        sdt: ""
    };


    $scope.userList = [];

    const id = $routeParams.id;
//THêm USER
    $scope.register = function (e) {
        e.preventDefault();

        $http.post(`${API}/register`, $scope.user)
            .then(() => window.location.href = "./#!dsaccount")

            .catch((error) => console.log(error));
    };
    //Login
    $scope.login = function (e) {
        e.preventDefault();

        $http.post(`${API}/login`, $scope.user)
            .then(() => console.log("thành công"), $scope.status = true)
            .catch((error) => console.log(error));

    };

    // Hiển thị ds user
    (() => {
        $http.get(API).then(({ data }) => ($scope.userList = data));
    })();
    const getUser = async () => {
        $http.get(`${API}/${id}`).then(({ data }) => ($scope.userList = data));
    };
    if (id) {
        getUser();
    }

    // Xóa user
    $scope.removeUser = function (id) {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirm) {
            $http
                .delete(`${API}/${id}`)
                .then(() => {
                    const newUsers = $scope.userList.filter((item) => item.id != id);
                    $scope.userList = newUsers;
                    toastr.success("Đã xóa thành công");
                })
                .catch((error) => console.log(error));
        }
    };


    //Update user
    $scope.updateUser = function (e) {
        console.log($scope.user);
        $http.put(`${API}/${$scope.user.id}`, $scope.user).then(() => {
            console.log("thanh cong");
        });
    };
}