var app = angular.module('ramoshiIT', []);
app.controller('myCtrl', function($scope) {
  $scope.container = {docs:[]};
  
  $scope.initDoc = function() {
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