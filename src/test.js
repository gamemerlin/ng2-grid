myFun(a, b, c)

debouncedFunction =  debounce(myFun, 1000);

debouncedFunction( a, b, c)

function debounce(myFun, timeoutMs) {
    var self = this;
    var isPending = true;
    var debouncedFlag = setTimeout( function() {
        self.isPending = false;
    }, timeoutMs);

    if ( this.isPending ) {
        clearInterval( debouncedFlag );
        debouncedFlag = setTimeout( function() {
            self.isPending = false;
        }, timeoutMs);
    } else {
        myFunc();
    }

    return function debounceWrapper(myFun) {
        debounce(myFun, timeoutMs)
    }
};