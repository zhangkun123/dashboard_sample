describe('contactCtrl', function() {
    beforeEach(module('myApp'));
    var controller, http, httpBackend, scope, compile;
    var locations = {
        locations: [{
            value: 'ala',
            title: 'Alabama'
        }, {
            value: 'alk',
            title: 'Alaska'
        }]
    };
    var categories = {
        categories: [{
            value: 'tec',
            title: 'Technical'
        }, {
            value: 'soc',
            title: 'Social'
        }, {
            value: 'pay',
            title: 'Payment'
        }, {
            value: 'inf',
            title: 'Information'
        }, {
            value: 'opp',
            title: 'Opportunity'
        }]
    }
    beforeEach(inject(function(_$controller_, _$compile_, _$httpBackend_, _$rootScope_) {
        controller = _$controller_;
        httpBackend = _$httpBackend_;
        compile = _$compile_;
        scope = _$rootScope_.$new();
        httpBackend.expectGET("http://localhost:3000/api/location").respond(locations);
        httpBackend.expectGET("http://localhost:3000/api/category").respond(categories);
        controller('contactCtrl', {
            $scope: scope
        })
    }));
    it('get locations and categories', function() {
        httpBackend.flush();
        expect(scope.contact.locations).toEqual(locations.locations);
        expect(scope.contact.categories).toEqual(categories.categories);
    });
    it('rate priority', function() {
        expect(scope.contact.priority).toEqual("Medium");
        scope.hoveringOver(80);
        expect(scope.contact.priority).toEqual("High");
    });
    it('click event1', function() {
        var el = angular.element('<div id="contact-div" role="r"><li role="presentation" class="ng-class:disabled" id="query-li"><a href="#query" aria-controls="query" role="tab" data-toggle="tab">Query</a></li></div>');
        compile(el)(scope);
        scope.$digest();
        var aEl = el.find('#contact-div a');
        // var aE2 = aEl.attr('role');
        // console.log(aEl);
        // console.log(aE2);
        var spyEvent = spyOn($.fn, 'click');
        aEl.click();
        expect(spyEvent).toHaveBeenCalled();
    });
    it('click event2', function() {
        var el = angular.element('<button type="button" id="btn-query" ng-disabled="!(query_form.$valid &&categoryChange)" class="btn btn-primary">NEXT</button>');
        compile(el)(scope);
        scope.$digest();
        var aEl = el.find('#btn-query');
        var spyEvent = spyOn($.fn, 'click');
        aEl.click();
        expect(spyEvent).toHaveBeenCalled();
    });
})
