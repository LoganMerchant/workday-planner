var currentDay = function() {
    var date = moment().local().format('dddd, MMMM do, YYYY');
    $("#currentDay").text(date);
};

var timeBlockSet = function() {
    var timeBlock = $('.hour'); 
    var hour = 9;

    timeBlock.each(function() {
        $(this).text(moment().set('hour', hour).format('ha'));
        timeBlock.addClass('text-right');
        hour++;
    });
};

currentDay();
timeBlockSet();