angular.module('scanner.controllers', [])
    .controller('HomeController', function($scope, $rootScope, $cordovaBarcodeScanner, $ionicPlatform) {
        var vm = this;
	
    vm.scan = function(){
		alert('vm.scan');
            $ionicPlatform.ready(function() {
				alert('ionicPlatform.ready');
                $cordovaBarcodeScanner
                    .scan()
                    .then(function(result) {
                        vm.scanResults = "Se escaneo el siguiente código de barras \n" +
                        "Resultado: " + result.text + "\n" +
                        "Formato: " + result.format + "\n" +
                        "Cancelar?: " + result.cancelled;
						alert('Camara');
                    }, function(error) {
                        vm.scanResults = 'Error: ' + error;
						alert('Error');
                    });
            });
        };

        vm.scanResults = '';
    });