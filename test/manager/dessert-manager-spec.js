(function(){
    'use strict';
    
	describe("DessertManager Initialization", function(){
		var values,
			valuesOld,
			factory;

		beforeEach(function(){
			module('pie');
			inject(function($injector) {
		        values = $injector.get('DessertValues');
		        valuesOld = values.pies;
				factory = $injector.get('DessertManager');
		    });
		});

		describe("DessertValues Initialization", function(){
			it("Should instantiate with 3 pie flavors", function(){
				expect(values.pies).toEqual([
					{flavor: "Cherry", score: 6},
					{flavor: "Apple", score: 8.9},
					{flavor: "Peach", score: 4},
				]);
			})
		});
		describe("DessertManager", function(){
			describe("pieFlavors", function(){
				it("Should return the 3 pie flavor strings", function(){
					var flavor = factory.pieFlavors();
					expect(flavor.length).toBeGreaterThan(0);
				});

				it("Should throw error if there are no pies", function(){
					values.pies = null;
					expect(function(){
						factory.pieFlavors()
					}).toThrow();
					values.pies = valuesOld;
				});		
				
			})

		});
	});
}());