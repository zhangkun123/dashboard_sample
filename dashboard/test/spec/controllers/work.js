'use strict';
describe('saving a document', function() {
    var scope;
    var ctrl;
    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        ctrl = $controller('ImageController', {
        $scope: scope
        });
    }));

    //initial boolean value
    it('should have an initial isvisible boolean value',function(){
        expect(scope.addVisable).toEqual(false);
        expect(scope.editVisable).toEqual(false);
        expect(scope.isdeleteVisible).toEqual(false);
    });

    //add toggle add function
    describe('when calling the toggle add function', function() {           
        it('should be set to true again', function() {          
            scope.toggleAdd();  
            expect(scope.addVisable).toEqual(true);  
        });        
    }); 

    // //edit toogle edit function
    // describe('when calling submit function', function(){
        
    //      it('justify whether it is visible or not', function(){
            
    //         scope.toggleEdit();
    //         expect(scope.editVisable).toEqual(true); 
          

    //     });
    // });

    //test remove image function
    it('when calling remove image function',function(){
            scope.removeImage();
            expect(scope.isdeleteVisible).toEqual(true);
    });

    // //test submit delete function
    // it('when calling submit delete function',function(){
    //         scope.Submit_delete();
    //         expect(scope.isdeleteVisible).toEqual(true);
    // });

    //test cancel delete function
    it('when calling cancel delete function',function(){
            scope.Cancel_delete();
            expect(scope.isdeleteVisible).toEqual(true);
    });
    
    //test orderBy function
    it('when calling order by function',function(){
       
        beforeEach(inject(function($httpBackend, $rootScope, $controller, $filter){
            var orderBy = $filter('orderBy');
            scope = $rootScope.$new();
            ctrl = $controller('ImageController', {$scope: scope});
        }));

        var array = [2,1,3];
        it('should do something', function(){
            scope.array = orderBy(scope.array, predicate, reverse)
            expect(scope.array).toEqual([1, 2, 3]);
        });
    });

});