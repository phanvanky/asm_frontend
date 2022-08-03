function authController($scope, $http) {
    const API = `http://localhost:3000`;
    $scope.user = {
        email: "",
        password: ""
    };

    $scope.register = function(e){
        e.preventDefault();

        $http.post(`${API}/register`, $scope.user).then(() => console.log("thành công"));
    }
}