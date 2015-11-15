/**
 * Created by hyun on 2015. 6. 25..
 */

// logging function so we can avoid console.log and alert
function log(varargs) {
    var args = Array.prototype.slice.call(arguments, 0);
    var message = args.join(" ");
    var container = document.getElementById('log-container');
    var messageDiv = document.createElement('div');
    messageDiv.innerHTML = message;
    container.appendChild(messageDiv);
}

function doSomething() {
    return {
        then: function(callback) {
            var value = 42;
            callback(value);
        }
    };
}

doSomething().then(function(result) {
    log('got a result', result);
});