// timers
// setTimeout

const greet = function(){
    window.alert("Hi user");
}

setTimeout(greet,5000);

setTimeout(function(){
    window.confirm("Would you like to participate in the survey?");
}, 10000);

// setInterval
