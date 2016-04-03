app.controller("LoginCtrl", ['$scope', '$location', 'AuthService', 'UserService',
    function($scope, $location, AuthService, UserService) {
        $scope.visible = false;
        $scope.errorMsg = '';
        $scope.login = function() {
            var user = {
                userName: $scope.userName,
                password: $scope.password
            };

            UserService.login(user).then(function(success) {
                $scope.errorMsg = "";
                $scope.visible = false;
                $scope.getUser();
            }, function(error) {
                $scope.errorMsg = "incorrect information, please try again";
                $scope.visible = true;
            });
        }

        $scope.getUser = function() {
            var user = {
                "user": $scope.userName
            };
            UserService.getUser(user).then(function(result) {
                authService.WriteCookie(result.data.name);
                $location.path("/root/overview");
            });
        }
    }
]);
510