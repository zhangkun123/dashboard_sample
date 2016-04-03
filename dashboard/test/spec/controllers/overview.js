describe('OverviewCtrl', function() {
    beforeEach(module('myApp'));
    var $httpBackend,$scope;
    var success = {
        profiles: [{
            username: 'minh',
            nickname: 'The Omnipotent',
            profileImage: 'assets/images/src/profile/minh.png'
        }, {
            username: 'darth',
            nickname: 'The Dark Side',
            profileImage: 'assets/images/src/profile/darth.png'
        }]
    };
    var profile = {
        username: 'minh',
        nickname: 'The Omnipotent',
        profileImage: 'assets/images/src/profile/minh.png'
    };

    beforeEach(inject(function(_$controller_, _$rootScope_, _$httpBackend_) {
        // $http = _$http_;
        $httpBackend = _$httpBackend_;
        var $rootScope = _$rootScope_.$new();
        $scope = _$rootScope_.$new();
        $rootScope.user = "Minh Pham";
        $httpBackend.expectGET("http://localhost:3000/api/profile").respond(success);
        _$controller_('OverviewCtrl', {
            $scope: $scope,
            $rootScope: $rootScope
        });
    }));

    it('get profile', function() {
        $httpBackend.flush();
        expect($scope.profile).toEqual(profile);
    });
});
