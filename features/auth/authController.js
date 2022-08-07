function authController($scope, $http, $routeParams) {
    const API = `http://localhost:3000`;
    const APIUSER = `http://localhost:3000/users`;
    const APICATE = `http://localhost:3000/categories`;
    $scope.status = false;
    $scope.user = {
        name: "",
        email: "",
        password: "",
        sdt: ""
    };
    $scope.cate = {
        label: "",
        path: ""
    }

    $scope.userList = [];
    $scope.cateList = [];
    const id = $routeParams.id;

    $scope.register = function (e) {
        e.preventDefault();

        $http.post(`${API}/register`, $scope.user)
            .then(() => console.log("thành công"))
            .catch((error) => console.log(error));
    };
    $scope.login = function (e) {
        e.preventDefault();

        $http.post(`${API}/login`, $scope.user)
            .then(() => console.log("thành công"), $scope.status = true)
            .catch((error) => console.log(error));

    };

    // Hiển thị ds user
    (() => {
        $http.get(APIUSER).then(({ data }) => ($scope.userList = data));
    })();
    const getUser = async () => {
        $http.get(`${APIUSER}/${id}`).then(({ data }) => ($scope.userList = data));
    };
    if (id) {
        getUser();
    }
    // Hiển thị ds category
    (() => {
        $http.get(APICATE).then(({ data }) => ($scope.cateList = data));
    })();
    const getCate = async () => {
        $http.get(`${APICATE}/${id}`).then(({ data }) => ($scope.userList = data));
    };
    if (id) {
        getCate();
    }

}