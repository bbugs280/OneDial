angular.module('starter.controllers', [])
    .controller('MainCtrl', function($scope) {

        $scope.findContacts = function(input){
            console.log('findContacts ' + input);

            function onSuccess(contacts) {
                console.log('Contacts Found ' + contacts.length + ' contacts.');
                $scope.contacts = contacts;

            }

            function onError(contactError) {
                console.log('load Contact from phone error! ');
            }

            var searchArray = generateT9Out(input);
            // find all contacts with values in Phone Numbers
            if (window.navigator && window.navigator.contacts){
                var options      = new ContactFindOptions();
                options.filter   = searchArray;
                options.multiple = true;
                options.desiredFields = [navigator.contacts.fieldType.name,navigator.contacts.fieldType.phoneNumbers, navigator.contacts.fieldType.photos];

                var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers];
                navigator.contacts.find(fields, onSuccess, onError, options);
            }
        }

    })