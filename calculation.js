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
    
    var table = "<table>";
    table += "<tr><th>work mAh per day</th><th>deep sleep mAh per day</th><th>sum mAh per day</th><th>Wh a day</th><th>days running</th></tr>";
    table += "<tr>"
    table += "<td>" + work_mAh_per_day.toFixed(2) + "</td>";
    table += "<td>" + sleep_mAh_per_day.toFixed(2) + "</td>";
    table += "<td>" + sum_mAh_per_day.toFixed(2) + "</td>";
    table += "<td>" + watt_hour.toFixed(2) + "</td>";
    table += "<td>" + daysRunning.toFixed(2) + "</td>";
    table += "</tr></table>";

    document.getElementById("microcontroller-result").innerHTML = table;
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
    

    var table = "<table>";
    table += "<tr><th>mAh per day(middle)</th><th>Wh(middle)</th><th>mAh per day(max)</th><th>Wh(max)</th></tr>";
    table += "<tr>"
    table += "<td>" + mAhPerDayMiddle.toFixed(2) + "</td>";
    table += "<td>" + watt_hour_day_middle.toFixed(2) + "</td>";
    table += "<td>" + mAhPerDayMax.toFixed(2) + "</td>";
    table += "<td>" + watt_hour_day_max.toFixed(2) + "</td>";
    table += "</tr></table>";

    document.getElementById("solar-module-result").innerHTML = table;
}