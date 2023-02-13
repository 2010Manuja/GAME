function key(event) {
    if (event.which == 13) {
        if (rw == 0) {
            fid = f();
            rw = setInterval(run, 100);
            rs.play();
            bw = setInterval(b, 100);
            sw = setInterval(updateScore, 100);
            fw = setInterval(move, 100);
        }
    }
    if (event.which == 32) { // space key
        clearInterval(rw);
        rw = -1;
        jw = setInterval(jump, 100);
        js.play();
    }
}

var rs = new Audio("run.mp3");
rs.loop=true;
var js = new Audio("jump.mp3");
var ds = new Audio("dead.mp3");
var fid = 0;
var m = 700;
function f() {
    for (var y = 0; y < 1000; y++) {
        var i = document.createElement("img");
        i.src = "flame.gif";
        i.className = "f";
        i.id = "a" + y;
        document.getElementById("b").appendChild(i);
        i.style.marginLeft = m + "px";
        m = m + 500;

    }
}
var rw = 0;
var r = 1;
function run() {
    var rimg = document.getElementById("boy");
    r = r + 1;
    if (r == 11) {
        r = 1;
    }
    rimg.src = "kNight/Run (" + r + ").png";

}
var x = 0;
var bw = 0;
function b() {
    x = x - 20;
    document.getElementById("b").style.backgroundPositionX = x + "px"
}
var u = 0;
var sw = 0;
function updateScore() {
    u = u + 1
    document.getElementById("score").innerHTML = u;
}
var fw = 0;
function move() {
    for (var y = 0; y < 1000; y++) {
        var d = document.getElementById("a" + y);
        var z = getComputedStyle(d);
        var p = parseInt(z.marginLeft);
        p = p - 20;
        d.style.marginLeft = p + "px";
        if (p < 100 & p > 20) {
            if (mt > 310) {
                clearInterval(rw);
                rs.pause();
                clearInterval(bw);
                clearInterval(jw);
                jw = -1;
                js.pause();
                clearInterval(sw);
                clearInterval(fw);
                dw = setInterval(dead, 100);
                ds.play();
            }
        }

    }
}
var jw = 0;
var j = 1;
var mt = 380;
function jump() {
    var jimg = document.getElementById("boy");
    if (j <= 5) {
        mt = mt - 30;
    }
    if (j >= 6) {
        mt = mt + 30;
    }
    jimg.style.marginTop = mt + "px";
    j = j + 1;
    if (j == 11) {
        j = 1;
        clearInterval(jw);
        jw = 0;
        rw = setInterval(run, 100);
        rs.play();

        if (fid == 0) {
            fid = f();
        }
        if (bw == 0) {
            bw = setInterval(b, 100);
        }
        if (sw == 0) {
            sw = setInterval(updateScore, 100);
        }
        if (fw == 0) {
            fw = setInterval(move, 100);
        }
    }
    jimg.src = "kNight/Jump (" + j + ").png";
}
var dw = 0;
var d = 1;
function dead() {
    var dimg = document.getElementById("boy");
    d = d + 1;
    if (d == 11) {
        d = 10;
        dimg.style.marginTop="380px";
        document.getElementById("end").style.visibility="visible";
        document.getElementById("endScore").innerHTML=u;
    }
    dimg.src = "kNight/Dead (" + d + ").png";
}
function re(){
    location.reload();
}