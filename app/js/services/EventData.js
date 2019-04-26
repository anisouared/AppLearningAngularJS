//eventsApp.factory('eventData', function($http) {
eventsApp.factory('eventData', function($resource) {
    var resource = $resource('http://localhost:3000/data/event/:id', {id:'@id'});
    return {
        getEvent: function () {
            //return $http({method: 'GET', url: 'http://localhost:3000/data/event/1'});
            return resource.get({id:1});
        },
        save: function(event) {
            event.id = 999;
            return resource.save(event);
        },
        getAllEvents: function () {
            return resource.query();
        }
    };
});     