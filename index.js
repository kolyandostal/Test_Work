function approveEmail(e) {
    const EMAIL_REGEXP =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const input = $("#email");
    if (EMAIL_REGEXP.test(input.val())) {
        input.css({borderColor: 'green'})
    } else {
        input.css({borderColor: 'red'})
    }

}


const token = "cc74c7d2b6f7ca1d8834e39e5a0c89879337158a";
const type  = "ADDRESS";
const $town = $("#town");

function showSuggestion (suggestion) {
    console.log(suggestion);
    const data = suggestion.data;
    if (!data)
        return;

    if (data.federal_district){
        $("#federal_district").val(data.federal_district);
    }

    if (data.region_with_type){
        $("#region").val(data.region_with_type);
    }

    if (data.country){
        $("#country").val(data.country);
    }
}

$town.suggestions({
    token,
    type,
    onSelect: showSuggestion
});



