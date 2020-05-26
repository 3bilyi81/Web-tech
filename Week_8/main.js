
var tweetInput;
var maxTweetLength = 5;
var tweets = [];

function main() {
    console.info("this has now loaded")
    tweetInput = document.getElementById("tweetInput");
    tweetInput.addEventListener('input', handleInput);
    document.addEventListener('keydown', handleKeyDown);

}

function handleKeyDown(e) {
    var length = tweetInput.value.length;
    if (length <= maxTweetLength && length > 0 && e.code === "Enter") {
        console.log('sending tweet');
        tweets.push(tweetInput.value);
        tweetInput.value = "";
        console.log(tweets);

        var tweetList = "";
        var revTweetList = tweets.reverse();
        for (var i = 0; i < tweets.length; i++) {
            tweetList += "<p>" + revTweetList[i] + "</p>"

        }

        document.getElementById("tweetOutputTxt").innerHTML = tweetList;
    }



}

function handleInput() {
    //console.log('input updated' + 'val:' + tweetInput.value)
    //document.getElementById('tweetLenghtTxt').innerHTML = tweetInput.value.lenght;

    var tweetLenghtTxt = document.getElementById('tweetLenghtTxt');
    tweetLengthTxt.innerHTML = tweetInput.value.length;

    if (tweetInput.value.length >= maxTweetLength) {
        tweetInput.style.color = "red"
        tweetLengthTxt.style.color = "red";
    } else {
        tweetInput.style.color = "";
        tweetLengthTxt.style.color = "";
    }


}