'use strict';


eventsApp.filter('durations', function () {
    return function (duration) {
        switch(duration) {
            case 1:
                return "Half Hour";
            case 2:
                return "1 Hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
    }
});

eventsApp.filter('levelIcon', function () {
    return function (levelIcon) {
        if (levelIcon == "Introductory") {
            return levelIcon ? '<span>Level: Introductory <i class="icon-star"></i>' : '</span>'
        } else if (levelIcon == "Intermediate") {
            return levelIcon ? '<span>Level: Intermediate <i class="icon-ok"></i>' : '</span>'
        } else {
            return levelIcon ? '<span>Level: Advanced <i class="icon-signal"></i>' : '</span>'
        }
    }
});