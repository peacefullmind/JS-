let sentToAirport = false;
let p = new Promise(function(resolve, reject) {
    if (sentToAirport) {
        console.log("sent to airport");
        resolve();
    } else {
        console.log("没有送去");
        reject();
    }

});
p
    .then(function() {
        console.log("faojgn")

    })
    .catch(function() { console.log("chatch") });