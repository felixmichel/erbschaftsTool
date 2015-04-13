// create links for sharebuttons
function sharebtns() {
    var sharetext = $('meta[name=description]').attr("content");
    var shareurl = decodeURI(location.href);
    var sharetitle = $('title').text();

    $('a#sharetwitter').attr("href", "https://twitter.com/intent/tweet?text=" + sharetext + "&url=" + shareurl);
    $('a#sharefb').attr("href", "https://www.facebook.com/dialog/feed?app_id=204329636307540&redirect_uri=" + shareurl + "&link=" + shareurl + "&name=" + sharetitle + "&description=" + sharetext);
    $('a#shareemail').attr("href", "mailto:?subject=Empfehlung: " + sharetitle + "&body=" + sharetext + " || " + shareurl);
}

/* trigger when page is ready */
$(document).ready(function (){
    sharebtns();



/* open all links in a new window */



$("a").attr("target", "_blank");

});

