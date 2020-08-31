tasks = [];

var currentDay = function() {
    var date = moment().format('dddd, MMMM Do, YYYY');
    $("#currentDay").text(date);
};

var timeBlockSet = function() {
    var timeBlock = $('.hour p'); 
    var hour = 9;
    var saveBtn = $('.saveBtn');

    timeBlock.each(function() {
        var workHour = moment().set('hour', hour).format('ha');

        $(this).text(workHour);
        $(this).attr('data-id', hour);

        hour++;
    });

    saveBtn.each(function() {
        
    })
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
    });
};

var saveTasks = function() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem('tasks'));

    $(".time-block").each(function() {
        if (!tasks) {
            tasks = [{
                hour: 9,
                text: ''
            }]
        };
        
        var hour = $(this).children('.hour').find('p').attr('data-id');
        var hourEvent = $(this).children('textarea');
        var arrHour = tasks.find(o => o.hour === hour);

        if (!arrHour) {
            hourEvent.text("");
        } else {
            hourEvent.text(arrHour.text);
        };
    });
};

$('.time-block').on('click', 'textarea', function() {
    var text = $(this).text().trim();
    
    $(this).text(text);
    
    $(this).trigger('focus');
});

$('.saveBtn').on('click', function() {
    var hour = $(this).parent('.time-block').find('p').attr('data-id');
    var text = $(this).parent('.time-block').find('textarea').val().trim();
    var arrHour = tasks.find(o => o.hour === hour);

    if (!arrHour) {
        tasks.push({
            hour: hour,
            text: text,
        });
    } else {
        arrHour.hour = hour;
        arrHour.text = text;
    };

    saveTasks();
});

currentDay();
timeBlockSet();
timeCheck();
loadTasks();