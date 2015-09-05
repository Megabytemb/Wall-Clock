app.factory('lightData', function(hue, $timeout) {

    var data = { lights: {}, calls: 0 };
	
    var myHue = hue;
    myHue.setup({
      username: "35d320eb3c56054f3fd39df338370ed7", debug: true
    });
	
    var poller = function () {
        $http.get('api/remedy').then(function (r) {
            data.response = r.data;
            console.log("Remedy Refresh");
            data.calls++;
        });
        $timeout(poller, 1000 * 5);
    };
	
    poller();

    return {
        data: data
    };
});

app.factory('timeFactory', function($timeout) {

    var data = { time: 0, calls: 0 };
    var poller = function () {
        
        data.time = Date.now();
        console.log(data.time);
        data.calls++;
        $timeout(poller, 1000 * 5);
    };
    poller();

    return {
        data: data
    };
});