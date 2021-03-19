
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function ride() {
    const message = document.querySelector("#message");
    const checkedInput = document.querySelector("input:checked");
    if (checkedInput) {
        message.textContent = `You want to ride ${checkedInput.value}.`;
    } else {
        message.textContent = "Unknown order.";
    }
}


// Search bar
function rideFunction() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("rideFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("rideItems");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Card shadow effects
$( ".card" ).hover(
    function() {
      $(this).addClass('shadow').css('cursor', 'pointer'); 
    }, function() {
      $(this).removeClass('shadow');
    }
  );
