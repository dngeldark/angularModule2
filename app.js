(function(){
	'use strict';

	angular.module('ShoppingListCheckOff',[])
		.controller('ToBuyController',['ShoppingListCheckOffService', function(ShoppingListCheckOffService){
			this.list = ShoppingListCheckOffService.getItems();

			this.checkList = function(){
				return !ShoppingListCheckOffService.listStatus();
			}
			this.removeFromList = function(item){
				item.buy = false;
				ShoppingListCheckOffService.prestine = false;
			}

		}])

		.controller('AlreadyBoughtController',['ShoppingListCheckOffService', function(ShoppingListCheckOffService){
			this.checkList = function(){
				return ShoppingListCheckOffService.prestine;
			}
			this.list = ShoppingListCheckOffService.getItems();
		}])

		.service('ShoppingListCheckOffService', function(){
			var service = this;

			service.prestine = true;

			var itemsList = [
			{
				name: "cookies",
				quantity: "10 bags",
				buy: true
			},
			{
				name: "tamales",
				quantity: "2 packs",
				buy: true
			},
			{
				name: "popcorn",
				quantity: "1 bag",
				buy: true
			},
			{
				name: "sodas",
				quantity: "5 bottles",
				buy: true
			},
			{
				name: "chips",
				quantity: "3 bags",
				buy: true
			}
			];

			service.getItems = function(){
				return itemsList;
			}

			service.listStatus = function(){
				for(var i=0;i<itemsList.length;i++){
					if(itemsList[i].buy == true) return false;
				}
				return true;
			}


		});

})()