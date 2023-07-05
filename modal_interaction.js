var microcontrollerData = [
    {
        microcontroller: "Arduino Uno",
        work_mAh: 50,
        deep_sleep_mAh: 0.03
    },
    {
        microcontroller: "Atmega328P",
        work_mAh: 30,
        deep_sleep_mAh: 0.02
    },
    {
        microcontroller: "ATtiny85",
        work_mAh: 2,
        deep_sleep_mAh: 0.005
    },
    {
        microcontroller: "ESP8266",
        work_mAh: 74,
        deep_sleep_mAh: 0.04
    },
    {
        microcontroller: "ESP32",
        work_mAh: 110,
        deep_sleep_mAh: 0.04
    },
    {
        microcontroller: "Raspi 2B Wifi",
        work_mAh: 240,
        deep_sleep_mAh: 240
    },
    {
        microcontroller: "Raspi 2B no Wifi",
        work_mAh: 200,
        deep_sleep_mAh: 200
    },
    {
        microcontroller: "Raspi 3B Wifi",
        work_mAh: 250,
        deep_sleep_mAh: 250
    },
    {
        microcontroller: "Raspi 3B no Wifi",
        work_mAh: 230,
        deep_sleep_mAh: 230
    },
    {
        microcontroller: "Raspi 3B+ Wifi",
        work_mAh: 400,
        deep_sleep_mAh: 400
    },
    {
        microcontroller: "Raspi 3B+ no Wifi",
        work_mAh: 350,
        deep_sleep_mAh: 350
    },
    {
        microcontroller: "Raspi Zero Wifi",
        work_mAh: 120,
        deep_sleep_mAh: 120
    },
    {
        microcontroller: "Raspi Zero no Wifi",
        work_mAh: 80,
        deep_sleep_mAh: 80
    },
    {
        microcontroller: "Raspi Zero2 Wifi",
        work_mAh: 120,
        deep_sleep_mAh: 120
    },
    {
        microcontroller: "Raspi Zero2 no Wifi",
        work_mAh: 100,
        deep_sleep_mAh: 100
    },
    {
        microcontroller: "Raspi B+ Wifi",
        work_mAh: 220,
        deep_sleep_mAh: 220
    },
    {
        microcontroller: "Raspi B+ no Wifi",
        work_mAh: 180,
        deep_sleep_mAh: 180
    },
    {
        microcontroller: "Raspi A+ Wifi",
        work_mAh: 160,
        deep_sleep_mAh: 160
    },
    {
        microcontroller: "Raspi A+ no Wifi",
        work_mAh: 80,
        deep_sleep_mAh: 80
    },
    {
        microcontroller: "Raspi Pico",
        work_mAh: 20,
        deep_sleep_mAh: 1.5
    },
    {
        microcontroller: "STM32F103C8",
        work_mAh: 40,
        deep_sleep_mAh: 0.02
    }
];
generateMicrocontrollerOption();
var selectButton = document.getElementById('select-button');
selectButton.addEventListener('click', function (event) {
event.preventDefault(); // Block standard site interaction of the form

var microcontrollerSelect = document.getElementById('microcontroller-select');
var selectedMicrocontroller = microcontrollerSelect.value;

var selectedMicrocontrollerData = microcontrollerData.find(function (mc) {
    return mc.microcontroller === selectedMicrocontroller;
});

if (selectedMicrocontrollerData) {
    document.getElementById('work_mAh').value = selectedMicrocontrollerData.work_mAh;
    document.getElementById('sleep_mAh').value = selectedMicrocontrollerData.deep_sleep_mAh;
}
closeModal();
});

// Open the microcontroller modal on button click
var microcontrollerSelectButton = document.getElementById('microcontroller-select-button');
microcontrollerSelectButton.addEventListener('click', function () {
    var modal = document.getElementById('microcontroller-modal');
    modal.style.display = 'block';
});

// Close the microcontroller modal
function closeModal() {
    var modal = document.getElementById('microcontroller-modal');
    modal.style.display = 'none';
}

function generateMicrocontrollerOption() {
    var selectElement = document.getElementById("microcontroller-select");
    for (var i = 0; i < microcontrollerData.length; i++) {
        var option = document.createElement("option");
        option.text = microcontrollerData[i].microcontroller;
        option.value = microcontrollerData[i].microcontroller;
        selectElement.appendChild(option);
    }
    return selectElement;
}