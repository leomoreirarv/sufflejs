Array.prototype.shuffle = function(){
    var me = this;
    var leave = []
    if(me.length > 1){
        for(var i = 0; i < me.length; i++){
            if(i === 0)
                leave.push(me[me.length - 1]);
            else if(i === (me.length - 1))
                leave.push(me[0]);
            else
                leave.push((i % 2) === 0 ? me[i - 1] : (i + 1) === me.length - 1 ? me[i] : me[i + 1]);
        }
    } else {
        leave = me;
    }
    return leave;
}

var exemple = function(){
    var value = "Naquela noite cheia de estrelas, ela passava cheia de graca";

    var shuffle = value.split(" ").shuffle().map(function(value){
        return value.split("").shuffle().join("");
    }).join(" ");
    
    var unshuffle = shuffle.split(" ").shuffle().map(function(value){
        return value.split("").shuffle().join("");
    }).join(" ");
    
    console.log("shuffle", shuffle);
    console.log("unshuffle", unshuffle);
}

exemple();
