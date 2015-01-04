/**
 * Created by vincent on 3/1/15.
 */
function findContacts(searchText, callback){
    function onSuccess(contacts) {
        console.log('Contacts Found ' + contacts.length + ' contacts with Search = '+searchText);
        callback(contacts);
    }

    function onError(error) {
        console.log('load Contact from phone error! ');
    }

    // find all contacts with values in Phone Numbers
    if (window.navigator && window.navigator.contacts){
        var options      = new ContactFindOptions();
        options.filter   = searchText;
        options.multiple = true;
        options.desiredFields = [navigator.contacts.fieldType.name,navigator.contacts.fieldType.phoneNumbers, navigator.contacts.fieldType.photos];

        var fields       = [navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers];
        navigator.contacts.find(fields, onSuccess, onError, options);
    }
}