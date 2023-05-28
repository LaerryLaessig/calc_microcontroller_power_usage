function calculateMicrocontroller() {
    var work_mAh = parseFloat(document.getElementById("work_mAh").value);
    var sleep_mAh = parseFloat(document.getElementById("sleep_mAh").value);
    var work_time = parseFloat(document.getElementById("work_time").value);
    var interval = parseFloat(document.getElementById("interval").value);
    var capacity = parseFloat(document.getElementById("capacity").value);
    

    var sleep_time = interval - work_time;
    var work_mAh_per_day = (86400/interval)*work_time*(work_mAh/3600);
    var sleep_mAh_per_day = (86400/interval)*sleep_time*(sleep_mAh/3600);
    var sum_mAh_per_day = work_mAh_per_day + sleep_mAh_per_day;
    var watt_hour = (3.7 * sum_mAh_per_day)/1000;
    var daysRunning = capacity / sum_mAh_per_day;

    var table = new TableBuilder();
    table.addHeader(["work mAh per day", "deep sleep mAh per day", "sum mAh per day", "Wh a day", "days running"])
    table.addRow([work_mAh_per_day, sleep_mAh_per_day, sum_mAh_per_day, watt_hour, daysRunning])

    document.getElementById("microcontroller-result").innerHTML = table.build();
}

function calculateSolarModule() {
    var middleHours = parseFloat(document.getElementById("middleHours").value);
    var maxHours = parseFloat(document.getElementById("maxHours").value);
    var mAh = parseFloat(document.getElementById("mAh").value);
    var voltage = parseFloat(document.getElementById("voltage").value);
    
    var mAhPerDayMiddle = (middleHours * mAh);
    var watt_hour_day_middle = (voltage * mAhPerDayMiddle)/1000;
    var mAhPerDayMax = (maxHours * mAh);
    var watt_hour_day_max = (voltage * mAhPerDayMax)/1000;

    var table = new TableBuilder();
    table.addHeader(["mAh per day(middle)", "Wh(middle)", "mAh per day(max)", "Wh(max)"]);
    table.addRow([mAhPerDayMiddle, watt_hour_day_middle, mAhPerDayMax, watt_hour_day_max])

    document.getElementById("solar-module-result").innerHTML = table.build();
}