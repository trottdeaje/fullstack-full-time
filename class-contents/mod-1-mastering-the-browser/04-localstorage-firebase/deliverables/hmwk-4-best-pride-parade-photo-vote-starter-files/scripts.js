// Create a global variable to tell us whether the user has voted
// The best_parade_photo_vote item is set in localStorage when the user votes on a photo
// When the user has not voted, userHasVoted will be null
let userHasVoted = localStorage.getItem("best_parade_photo_vote");

$(document).ready(() => {

    // Static array of 2019 Pride Parade Photos to vote from
    const paradePhotos = [{
            id: "photo_friends_who_love_love",
            name: "Friends who love LOVE",
            srcUrl: "https://images.scribblelive.com/2019/8/31/e4d80602-c0fc-4122-ab89-441e83ce962f.jpg",
            altText: "Friends who love LOVE 2019 Pride Parade photo"

        },
        {
            id: "photo_pride_colors_police_car",
            name: "Pride colors Police car",
            srcUrl: "https://images.scribblelive.com/2019/8/31/667911d7-2f7a-4de7-af46-bc61c2c163e3.jpg",
            altText: "Pride colors Police car 2019 Pride Parade photo"

        },
        {
            id: "photo_love_is_a_terrible_thing_to_hate",
            name: "Love Is a Terrible Thing to Hate",
            srcUrl: "https://images.scribblelive.com/2019/8/31/f9a08979-b783-47db-8cb3-ff8c86aa576f.jpg",
            altText: "Love Is a Terrible Thing to Hate 2019 Pride Parade photo"

        },
        {
            id: "photo_winston_and_greg",
            name: "Winston and Greg",
            srcUrl: "https://images.scribblelive.com/2019/8/31/b2842646-d731-4491-bfc8-e58d7662ab10.jpg",
            altText: "Winston and Greg 2019 Pride Parade photo"

        },
        {
            id: "photo_love_line",
            name: "Love line",
            srcUrl: "https://images.scribblelive.com/2019/8/31/12a02c0a-081d-4369-89a3-e1196e0d8154.jpg",
            altText: "Love line 2019 Pride Parade photo"

        },
        {
            id: "photo_the_future_is_equal",
            name: "THE FUTURE IS EQUAL",
            srcUrl: "https://images.scribblelive.com/2019/8/31/a9afe71f-a7ab-40ae-a087-5a85ac7b25d6.jpg",
            altText: "THE FUTURE IS EQUAL  2019 Pride Parade photo"

        }
    ];

    loadParadePhotos(paradePhotos)


    // listen to clicking on vote button 
    $('#container').on('click', '.vote_btn', event => {
        // Stop the click event from bubbling up
        event.stopPropagation();

        // Set best_parade_photo_vote in localstorage and  indicate that the user has already voted
        localStorage.setItem('best_parade_photo_vote', 'voted');
        userHasVoted = "voted";

        // console.log event, currentTarget to see what they have
        console.log(event);
        console.log(event.currentTarget);

        // click event current target is the .vote_btn
        // We gave .vote_btn the data attribute as the unique id in the paradePhotosArray so that we can easily look up the information of the clicked photo

        //TODO:
        // 1. Use jQuery to get the photo unique id from the click event current target

        // 2. Tell Firebase to increment the votes for that photo by 1 and increment the total number of votes by 1

        /* 
            YOUR CODE GOES HERE
        */

        // When Firebase has finished updating the votes, reload the parade photos
        loadParadePhotos(paradePhotos);
    })

})

function loadParadePhotos(photos) {
    // Remove div#photos_container if we already have one
    if ($('#photos_container').length !== 0) {
        $('#photos_container').remove();
    }

    // Use jQuery to create div#photos_container
    const photosContainer = $('<div></div>').attr('id', 'photos_container');

    // Loop through parade photos and for each photo:
    // Use jQuery to create a div.photo_container
    // Inside the photo_container append p.photo_name img.photo and a vote button (with the id of the photo as the button data attribute)
    // Use jQuery to append div.photo_container to div#photos_container
    photos.map(photo => {
        const photoContainer = $('<div></div>').addClass('photo_container');

        const photoName = $('<p></p>').addClass('photo_name').text(photo.name);

        const img = $('<img/>').addClass('photo').attr('src', photo.srcUrl).attr('alt', photo.altText);

        photoContainer.append(photoName, [img]);

        // Only show vote button if user has not voted yet
        if (!userHasVoted) {
            const voteBtnContainer = $('<div></div>').addClass('vote_btn_container');

            const voteBtn = $('<button></button>').addClass('btn btn-primary vote_btn').attr('type', 'button').text('Vote');

            // Give data attr of photo id so that we can know which photo was clicked
            voteBtn.attr('data', `${photo.id}`)

            // Append voteBtn to voteBtnContainer
            voteBtnContainer.append(voteBtn);

            // Append voteBtnContainer to photoContainer
            photoContainer.append(voteBtnContainer);
        } else {
            // Otherwise show photo votes results
            const votesResultsContainer = $('<div></div>').addClass('votes_results_container')

            const votesResults = $('<div></div>').addClass('votes_results');

            // Get total votes and photo votes results from Firebase
            // Use jQuery to add those votes results as text to votesResults in format: "photoVotes out of totalVotes"
            /*
                YOUR CODE GOES HERE
            */

            // Use jQuery to append votesResults to votesResultsContainer
            /*
                YOUR CODE GOES HERE
            */

            // Use jQuery to append votesResultsContainer to photoContainer
            /*
                YOUR CODE GOES HERE
            */
        }

        photosContainer.append(photoContainer);
    })

    // Use jQuery to append div.photo_container to div#container
    $('#container').append(photosContainer);

}