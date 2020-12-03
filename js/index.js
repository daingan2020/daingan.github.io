
function scrollFunction20() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav").style.backgroundColor = "#D4CCC0";
        document.getElementById("nav").style.height = "60px";
        document.getElementById("white").style.display = "none";
        document.getElementById("black").style.display = "block";
        document.getElementById("whitelink").style.display = "none";
        document.getElementById("blacklink").style.display = "block";
        document.getElementById("t1").style.color = "#262323";
        document.getElementById("t2").style.color = "#262323";
        document.getElementById("t3").style.color = "#262323";
        document.getElementById("t4").style.color = "#262323";
        document.getElementById("icon-black").style.display = "flex";
        document.getElementById("icon-white").style.display = "none";
        document.getElementById("logo").style.padding = "0px 0px 0px 0px"
        document.getElementById("d1").style.paddingTop = "0";
        document.getElementById("d2").style.paddingTop = "0";
        document.getElementById("d3").style.paddingTop = "0";
        document.getElementById("d4").style.paddingTop = "0";
    } else {
        document.getElementById("nav").style.backgroundColor = "unset";
        document.getElementById("nav").style.height = "92px";
        document.getElementById("black").style.display = "none";
        document.getElementById("white").style.display = "block";
        document.getElementById("blacklink").style.display = "none";
        document.getElementById("whitelink").style.display = "block";
        document.getElementById("t1").style.color = "white";
        document.getElementById("t2").style.color = "white";
        document.getElementById("t3").style.color = "white";
        document.getElementById("t4").style.color = "white";
        document.getElementById("icon-white").style.display = "flex";
        document.getElementById("icon-black").style.display = "none";
        document.getElementById("logo").style.padding = "15px 0px 0px 0px"
        document.getElementById("d1").style.paddingTop = "10px";
        document.getElementById("d2").style.paddingTop = "10px";
        document.getElementById("d3").style.paddingTop = "10px";
        document.getElementById("d4").style.paddingTop = "10px";
    }
}