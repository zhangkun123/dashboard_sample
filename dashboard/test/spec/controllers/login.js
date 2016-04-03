describe('LoginCtrl', function() {
    var $controller, $scope, deferred1, deferred2, location;
    var result = {
        data: {
            name: 'Minh Pham'
        }
    };
    beforeEach(module('myApp'));
    beforeEach(inject(function(_$controller_, _$rootScope_, $q, UserService, AuthService, $location) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        deferred1 = $q.defer();
        deferred2 = $q.defer();
        location = $location;
        spyOn(UserService, 'login').and.returnValue(deferred1.promise);
        spyOn(UserService, 'getUser').and.returnValue(deferred2.promise);
        $scope.userName = "minh";
        $scope.password = "faith";
        $controller('LoginCtrl', {
            $scope: $scope
            // userService: UserService,
            // authService: AuthService
        });
    }));
    it('login success and set user', function() {
        deferred1.resolve('success');
        deferred2.resolve(result);
        $scope.login('');
        spyOn(location, "path");
        $scope.$apply();
        expect($scope.user).toBe('Minh Pham');
        expect(location.path).toHaveBeenCalledWith('/root/overview');
    });
    it('login with error', function() {
        deferred1.reject('error');
        $scope.login('');
        $scope.$apply();
        expect($scope.visible).toBe(true);
        expect($scope.errorMsg).toBe("incorrect information, please try again");
    });


});
