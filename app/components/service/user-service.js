'use strict';

angular.module('myApp.userService', [])

    .factory('UserService', ['$http', function($http) {
        var users;
        return {
            all:function () {
                return $http.get('http://localhost/dami/get-users-cors.php')
                    .then(function (resp) {
                        users = resp.data;
                    });
            },
            one:function (name) {
                if(users) {
                    for (var i = 0; i < users.length; i++) {
                        var u = users[i];
                        if(u.name === name) {
                            return u;
                        }
                    }
                    return null;
                }
                return null;
            },
            getUsers:function () {
               return users;
            },
            setUsers:function (usrs) {
                users = usrs;
            }
        };
    }]);