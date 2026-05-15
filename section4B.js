// ==========================
// FRIEND HANGOUT TRACKER
// SIMPLE VERSION
// ==========================


// STEP 1:
// Store friend names in an array

let friends = ["Saul", "Jin", "Reese", "Loren"];


// STEP 2:
// Store hangout counts in an object

let hangoutCount = {
    Saul: 0,
    Jin: 0,
    Reese: 0,
    Loren: 0
};


// STEP 3:
// Function to show the friend's image

function showFriendImage(friendName) {

    // remove old images
    $("img").remove();

    // add new image
    $("body").append(
        "<img class='img' src='" +
        friendName +
        ".jpg'>"
    );
}


// STEP 4:
// Function for when a friend is clicked

function FriendClick(friendName) {

    // increase count
    hangoutCount[friendName]++;

    // print to console
    console.log(friendName + " clicked");

    console.log(
        "Hangouts: " +
        hangoutCount[friendName]
    );


    // show image
    showFriendImage(friendName);


    // remove old paragraph
    $("#count-" + friendName).remove();


    // add updated count
    $("#" + friendName).append(

        "<p id='count-" +
        friendName +
        "'>Hangouts: " +

        hangoutCount[friendName] +

        "</p>"
    );
}



// ==========================
// CLICK EVENTS
// ==========================


// Saul button
$("#Saul").click(function () {

    FriendClick("Saul");

});


// Jin button
$("#Jin").click(function () {

    FriendClick("Jin");

});


// Reese button
$("#Reese").click(function () {

    FriendClick("Reese");

});


// Loren button
$("#Loren").click(function () {

    FriendClick("Loren");

});