angular.module('starter.controllers', [])
    .controller('MainCtrl', function($scope) {

        $scope.findContacts = function(input){
            console.log('findContacts ' + input);

            function onSuccess(contacts) {
                console.log('Contacts Found ' + contacts.length + ' contacts.');

                $scope.contacts = contacts;
//                for (var i in contacts){
//                    console.log(contacts[i]);
//                }
//                for (var i=0;i<contacts.length;i++){
//                    if(contacts[i].phoneNumbers && contacts[i].phoneNumbers.length){
//                        for (var j=0;j<contacts[i].phoneNumbers.length;j++){
//                            var phone_no = contacts[i].phoneNumbers[j].value;
//
//                            phone_no=cleanPhone(phone_no);
//
//                            if (isValidNumber(phone_no,$rootScope.countryCode)){
//                                phone_no=formatE164($rootScope.countryCode,phone_no);
//                                phoneArray.push(phone_no);
//                            }
//                        }
//                    }
//                }

            }

            function onError(contactError) {
                console.log('load Contact from phone error! ');
//                $scope.$broadcast('scroll.refreshComplete');
            }


            // find all contacts with values in Phone Numbers
            if (window.navigator && window.navigator.contacts){
                var options      = new ContactFindOptions();
                options.filter   = input;
                options.multiple = true;
                options.desiredFields = [navigator.contacts.fieldType.name,navigator.contacts.fieldType.phoneNumbers, navigator.contacts.fieldType.photos];

                var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers];
                navigator.contacts.find(fields, onSuccess, onError, options);
            }
        }

    })