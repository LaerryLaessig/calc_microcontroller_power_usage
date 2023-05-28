class Microcontroller_Result {
    constructor(work_mAh_per_day, sleep_mAh_per_day, sum_mAh_per_day, watt_hour, daysRunning) {
        this.work_mAh_per_day = work_mAh_per_day;
        this.sleep_mAh_per_day = sleep_mAh_per_day;
        this.sum_mAh_per_day = sum_mAh_per_day;
        this.watt_hour = watt_hour;
        this.daysRunning = daysRunning;
    }
}

class Solarmodule_Result {
    constructor(mAhPerDayMiddle, watt_hour_day_middle, mAhPerDayMax, watt_hour_day_max) {
        this.mAhPerDayMiddle = mAhPerDayMiddle;
        this.watt_hour_day_middle = watt_hour_day_middle;
        this.mAhPerDayMax = mAhPerDayMax;
        this.watt_hour_day_max = watt_hour_day_max;
    }
}

const sec_a_day = 86400;
const sec_a_hour = 3600;

function calculateMicrocontroller() {
    const microcontroller_voltage = 3.7;

    var work_mAh = parseFloat(document.getElementById("work_mAh").value);
    var sleep_mAh = parseFloat(document.getElementById("sleep_mAh").value);
    var work_time = parseFloat(document.getElementById("work_time").value);
    var interval = parseFloat(document.getElementById("interval").value);
    var capacity = parseFloat(document.getElementById("capacity").value);
    

    var sleep_time = interval - work_time;
    var work_mAh_per_day = (sec_a_day/interval)*work_time*(work_mAh/sec_a_hour);
    var sleep_mAh_per_day = (sec_a_day/interval)*sleep_time*(sleep_mAh/sec_a_hour);
    var sum_mAh_per_day = work_mAh_per_day + sleep_mAh_per_day;
    var watt_hour = (microcontroller_voltage * sum_mAh_per_day)/1000;
    var daysRunning = capacity / sum_mAh_per_day;

    return new Microcontroller_Result(work_mAh_per_day, sleep_mAh_per_day, sum_mAh_per_day, watt_hour, daysRunning);
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

    return new Solarmodule_Result(mAhPerDayMiddle, watt_hour_day_middle, mAhPerDayMax, watt_hour_day_max);
}