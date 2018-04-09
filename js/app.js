var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Shoes", p_image: "images/batai.jpg", p_price: 25},
					{p_id: "2", p_name: "Pants", p_image: "images/kelnes.jpg", p_price: 50},
					{p_id: "3", p_name: "Jacket", p_image: "images/striuke.jpg", p_price: 70},
					{p_id: "4", p_name: "Watch", p_image: "images/watch.jpg", p_price: 100},
					{p_id: "5", p_name: "T-Shirt", p_image: "images/tshirt.jpg", p_price: 15},
					{p_id: "6", p_name: "Socks", p_image: "images/socks.jpg", p_price: 5}
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});