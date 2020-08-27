var currentDay = function() {
    var date = moment().local().format('dddd, MMMM do, YYYY');
    $("#currentDay").text(date);
};

currentDay();