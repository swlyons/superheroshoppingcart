angular.module('PowersShop', [])
    .factory('powerFactory', [function () {
        var o = {
            powerlist: [
                {
                    imgurl: "https://d30y9cdsu7xlg0.cloudfront.net/png/122214-200.png",
                    thename: "Fire",
                    price: 300
                },
                {
                    imgurl: "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-animals/012558-glossy-black-icon-animals-animal-bird2.png",
                    thename: "Flight",
                    price: 30000
                },
                {
                    imgurl: "https://d30y9cdsu7xlg0.cloudfront.net/png/32318-200.png",
                    thename: "Iron Man Suit",
                    price: 30000
                },
                {
                    imgurl: "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-sports-hobbies/044536-glossy-black-icon-sports-hobbies-people-karate.png",
                    thename: "Bat Martial Arts",
                    price: 2000
                },
                {
                    imgurl: "http://icons.iconarchive.com/icons/icons-land/medical/256/Documents-X-Ray-Hand-icon.png",
                    thename: "X Ray Vision",
                    price: 10000
                },
                {
                    imgurl: "https://cdn3.iconfinder.com/data/icons/healthy-and-fitness/512/Health-Fitness-Bodybuilding-big-arm-muscle-strong-512.png",
                    thename: "Super Strength",
                    price: 30000
                },
                {
                    imgurl: "https://d30y9cdsu7xlg0.cloudfront.net/png/52605-200.png",
                    thename: "Wolverine Claws",
                    price: 50000
                },
                {
                    imgurl: "https://d30y9cdsu7xlg0.cloudfront.net/png/85811-200.png",
                    thename: "Super Speed",
                    price: 4000
                },
                {
                    imgurl: "https://d30y9cdsu7xlg0.cloudfront.net/png/27545-200.png",
                    thename: "Hammer with destructive boomerang powers",
                    price: 10000
                },
                {
                    imgurl: "http://www.iconarchive.com/download/i27082/ph03nyx/super-mario/Mushroom-Super.ico",
                    thename: "Giant Mushroom- Makes you giant for 15 seconds",
                    price: 500
                }
            ]
        };
        return o;
    }]).factory('cartFactory', [function () {
        var a = {
            cart: []
        };
        return a;
    }]).factory('checkoutFactory', [function () {
        var a = {
            checkoutb: false
        };
        return a;
    }]).controller('MainCtrl', [
        '$scope',
        'powerFactory',
        'cartFactory',
        'checkoutFactory',
        function ($scope, powerFactory, cartFactory, checkoutFactory) {
            $scope.powerlist = powerFactory.powerlist;
            $scope.cart = cartFactory.cart;
            $scope.checkoutb = checkoutFactory.checkoutb;
            $scope.buy = function (power) {
                $scope.cart.push(power);
                $scope.checkoutb = false;
            }
            $scope.delete = function (power){
                $scope.cart.splice($scope.cart.indexOf(power), 1);
            }
            $scope.totalCost = function (){
                var cost = 0;
                for(var i =0; i<$scope.cart.length;i++){
                    cost += $scope.cart[i].price;
                }
                return cost;
            }
            $scope.checkout = function (){
                $scope.cart = [];
                $scope.checkoutb = true;
            }

        }
    ]);