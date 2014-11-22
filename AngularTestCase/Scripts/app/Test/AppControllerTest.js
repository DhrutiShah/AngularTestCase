describe('Test Cases', function () {
    var scope,createController, httpBackend;
    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        createController = function () {
            return $controller('AppController', {
                $scope: scope,
                $http: $httpBackend
            });
        };
    }));
    
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });

    it('should change greeting value if name value is changed', function () {
        createController();
        scope.name = "Frederik";
        scope.$digest();
        expect(scope.greeting).toBe("Greetings Frederik");
    });

    it("is defined", function() {
        var name = "Andrew";
        expect(name).toBeDefined();
    });

    it("is not defined", function () {
        var name;
        expect(name).toBeUndefined();
    });

    it("is less than 10", function () {
        expect(5).toBeLessThan(10);
    });
    it("is greater than 10", function () {
        expect(20).toBeGreaterThan(10);
    });
    
    it("should contain oranges", function () {
        expect(["apples", "oranges", "pears"]).toContain("oranges");
    });

    //it('sets correct initial values', function () {
    //    httpBackend.expectGET('api/Values/Get').respond(200, ["value1", "value2"]);
    //    createController();
    //    expect(scope.greeting).toBe(["value1", "value2"]);
    //     });
});
