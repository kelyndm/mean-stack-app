// angular.module('meanhotel').directive('hotelRating', hotelRating);

// function hotelRating() {
//     return {
//         restrict: 'E',
//         // TODO: Get following line to work with glyphicon stars instead of asterisks.. Need to import bootstrap elements for glypicons or use a CDN.
//         // template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{ star }}</span>',
//         template: '<span ng-repeat="star in vm.stars track by $index">*</span>',
//         bindToController: true,
//         controller: 'HotelController',
//         controllerAs: 'vm',
//         scope: {
//             stars: '@'
//         }
//     }
// }

angular.module('meanhotel').component('hotelRating', {
    bindings: {
        stars: '='
    },
    // TODO: Get following line to work with glyphicon stars instead of asterisks.. Need to import bootstrap elements for glypicons or use a CDN.
    // template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{ star }}</span>',
    template: '<span ng-repeat="star in vm.stars track by $index">*</span>',
    controller: 'HotelController',
    controllerAs: 'vm'
});