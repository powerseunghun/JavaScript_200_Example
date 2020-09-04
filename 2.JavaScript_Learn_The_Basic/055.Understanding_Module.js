var namespaceA = (function() {
    var privateVariable = 'private variable';
    return {
        publicApi: function() {
            console.log('access to ' + privateVariable);
        }
    }
})();

namespaceA.publicApi();