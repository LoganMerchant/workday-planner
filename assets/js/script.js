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
        // console.log(this);

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

var loadTasks = function() {}

$('.time-block').on('click', 'textarea', function() {
    var text = $(this).text().trim();
    
    $(this).text(text);
    
    $(this).trigger('focus');
});

$('.saveBtn').on('click', function() {
    var hour = $(this).parent('.time-block').find('p').attr('data-id');
    var text = $(this).parent('.time-block').find('textarea').val().trim();

    tasks.push({
        hour: hour,
        text: text,
    });

    saveTasks();
});

currentDay();
timeBlockSet();
timeCheck();
