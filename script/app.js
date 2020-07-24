var app = angular.module('ramoshiIT', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.container = {
			docs:{
				categories:[],
				fileData:{}
			}
	};

	$scope.initTmp = function() {
		var data = {
				"upsc":["UPSC-1.pdf","UPSC-2.pdf","UPSC-3.pdf","UPSC-4.pdf","UPSC-5.pdf",],
				"mpsc":["MPSC-1.pdf","MPSC-2.pdf","MPSC-3.pdf","MPSC-4.pdf","MPSC-5.pdf",]
		};
		$scope.container.docs.fileData = data;
		$scope.container.docs.categories = Object.keys(data);
		console.log("done");
	};

	$scope.initDoc = function() {
		$http({
			method: 'GET',
			url: './fileList.json'
		}).then(function(response) {
			console.log('File List : ' + response);
			if(response && response.data) {
				$scope.container.docs.fileData = response.data;
				$scope.container.docs.categories = Object.keys(response.data);
			} 

		}).catch(function(err) {
			console.log('Error : ' + err);
		});
	};

	$scope.initDocDir = function() {
		var directory = './documents';
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open('GET', directory, false); // false for synchronous request
		xmlHttp.send(null);
		var ret = xmlHttp.responseText;
		var fileList = ret.split('\n');
		for (i = 0; i < fileList.length; i++) {
			var fileinfo = fileList[i].split(' ');
			if (fileinfo[0] == '201:') {
				/*document.write(fileinfo[1] + "<br>");
		        document.write('<img src=\"' + directory + fileinfo[1] + '\"/>');*/

				$scope.container.docs.push(fileinfo[1]);
			}
		}
	};
});