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
    var state = 'pending';
    var value;
    var deferred;

    function resolve(newValue) {
        value = newValue;
        state = 'resolved';

        if (deferred) {
            handle(deferred);
        }
    }

    function handle(onResolved) {
        if (state === 'pending') {
            deferred = onResolved;
            return;
        }

        onResolved(value);
    }

    this.then = function(onResolved) {
        handle(onResolved);
    };

    fn(resolve);
}

function doSomething() {
    return new Promise(function(resolve) {
        var value = 43;
        resolve(value);
    });
}

doSomething().then(function(value) {
    log('got a value', value);
});