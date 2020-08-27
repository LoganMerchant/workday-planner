var currentDay = function() {
    var date = moment().format('dddd, MMMM Do, YYYY');
    $("#currentDay").text(date);
};

var timeBlockSet = function() {
    var timeBlock = $('.hour p'); 
    var hour = 9;

    timeBlock.each(function() {
        var workHour = moment().set('hour', hour).format('ha');

        $(this).text(workHour);
        hour++;
    });

    timeCheck();
};

var timeCheck = function () {
    var description = $('.time-block .description');
    var hour = 9;

    description.each(function() {
        var time = moment().set('hour', hour);

        if (moment().isAfter(time)) {
            $(this).addClass('past');

        } else if (moment().isSame(time)) {
            $(this).addClass('present');

        } else if (moment().isBefore(time)) {
            $(this).addClass('future');
        };   
        hour++;

        console.log($(this));
    });
};

currentDay();
timeBlockSet();