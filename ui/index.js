// eslint-disable-next-line @typescript-eslint/no-empty-function
$(function() {});

$("#sendrequest").on("click", function(e) {
    e.preventDefault();
    let apiName = $("#API-name").val();
    console.log("apiName",  apiName);
});

