function authController($scope, $http,$routeParams) {
    const API = `http://localhost:3000`;
    const APIUSER = `http://localhost:3000/users`;
    $scope.status=false;
    $scope.user = {
        name:"",
        email: "",
        password: "",
        sdt:""
    };
    $scope.userList=[];
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
        .then(() => console.log("thành công"), $scope.status=true )
        .catch((error) => console.log(error));
        
    };
    (() => {
        $http.get(APIUSER).then(({ data }) => ($scope.userList = data));
    })();
    const getUser = async () => {
        $http.get(`${APIUSER}/${id}`).then(({ data }) => ($scope.userList = data));
    };
    if (id) {
        getUser();
    }
}