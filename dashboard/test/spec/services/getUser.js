describe('UserService', function() {
    beforeEach(module('myApp'));
    var $httpBackend, userService, result;
    var success = 'success';
    var error = 'error';
    beforeEach(inject(function(UserService, _$httpBackend_) {
        userService = UserService;
        $httpBackend = _$httpBackend_;
    }));
    it('success login', function() {
        $httpBackend.when('POST', 'http://localhost:3000/api/login').respond(200, success);
        var promise = userService.login();
        promise.then(function(data) {
                result = success;
            },
            function(data) {
                result = error;
            });
        $httpBackend.flush();
        expect(result).toEqual(success);

    });
    it('error login', function() {
        $httpBackend.when('POST', 'http://localhost:3000/api/login').respond(400, error);
        var promise = userService.login();
        promise.then(function(data) {
                result = success;
            },
            function(data) {
                result = error;
            });
        $httpBackend.flush();
        expect(result).toEqual(error);
    });
    it('success getUser', function() {
        $httpBackend.when('GET', 'http://localhost:3000/api/getuser').respond(200, success);
        var promise = userService.getUser();
        promise.then(function(data) {
                result = success;
            },
            function(data) {
                result = error;
            });
        $httpBackend.flush();
        expect(result).toEqual(success);

    });
    it('error getUser', function() {
        $httpBackend.when('GET', 'http://localhost:3000/api/getuser').respond(400, error);
        var promise = userService.getUser();
        promise.then(function(data) {
                result = success;
            },
            function(data) {
                result = error;
            });
        $httpBackend.flush();
        expect(result).toEqual(error);
    });

});
