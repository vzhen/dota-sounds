angular.module('dotaSoundTrack.controllers', [])

.controller('homeCtrl', function($scope, $ionicModal) {
	
	$scope.clickMe = function() {
		var getRandomNumber = Math.floor((Math.random() * 100) + 1);

		if (typeof device != "undefined") {

			var media = new Media('/android_asset/www/lib/sounds/' + getRandomNumber + '.mp3',
			function() {
				//Release audio source after finished play otherwise audio only can play 29 times
				media.release();
			});
			media.play();

		} else if (typeof Audio != "undefined"){
	
			new Audio('lib/sounds/' + getRandomNumber + '.mp3').play();

		};

	};

	$ionicModal.fromTemplateUrl('templates/about.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

})