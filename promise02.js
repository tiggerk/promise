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

function Promise(fn) {
    var callback = null;
    this.then = function(cb) {
        callback = cb;
    };

    function resolve(value) {
        // force callback to be called in the next
        // iteration of the event loop, giving
        // callback a chance to be set by then()
        setTimeout(function() {
            callback(value);
        }, 1);
    }

    fn(resolve);
}

function doSomething() {
    return new Promise(function(resolve) {
        var value = 42;
        resolve(value);
    });
}

doSomething().then(function(value) {
    log('got a value', value);
});