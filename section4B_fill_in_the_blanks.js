// ==========================
// FRIEND HANGOUT TRACKER
// FILL IN THE BLANKS PRACTICE
// ==========================



// STEP 1:
// Create an array called friends
// Add these names:
// Saul, Jin, Reese, Loren

let friends = _______________________________;




// STEP 2:
// Create an object called hangoutCount
// Each friend should start at 0

let hangoutCount = {

    Saul: ___,
    Jin: ___,
    Reese: ___,
    Loren: ___
};




// STEP 3:
// Finish the function below
// This function should:
// 1. Remove old images
// 2. Add the selected friend's image

function showFriendImage(friendName) {

    // Remove all images from the page
    $("img").________();

    
    // Add a new image
    // The image file should match the friend's name
    $("body").append(

        "<img class='img' src='" +

        __________________ +

        ".jpg'>"
    );
}




// STEP 4:
// Finish the FriendClick function

function FriendClick(friendName) {

    // Increase the friend's hangout count by 1
    hangoutCount[friendName]___;


    // Print which friend was clicked
    console.log(friendName + " clicked");


    // Print the updated count
    console.log(

        "Hangouts: " +

        ______________________
    );


    // STEP 5:
    // Show the friend's image

    ____________________________;


    // STEP 6:
    // Remove the old paragraph
    // Hint:
    // The paragraph ID starts with "count-"

    $("#count-" + friendName).________();


    // STEP 7:
    // Add the updated hangout count

    $("#" + friendName).append(

        "<p id='count-" +

        friendName +

        "'>Hangouts: " +

        __________________ +

        "</p>"
    );
}




// ==========================
// CLICK EVENTS
// ==========================



// STEP 8:
// When Saul is clicked,
// run FriendClick for Saul

$("#Saul").click(function () {

    FriendClick("Saul");

});




// STEP 9:
// Complete the Jin click event

$("#Jin").click(function () {

    _______________________;

});




// STEP 10:
// Complete the Reese click event

$("#Reese").click(function () {

    _______________________;

});




// STEP 11:
// Complete the Loren click event

$("#Loren").click(function () {

    _______________________;

});