var microcontrollerData = [
    {
        microcontroller: "Arduino Uno",
        work_mAh: 50,
        deep_sleep_mAh: 0.03
    },
    {
        microcontroller: "Raspi Zero",
        work_mAh: 200,
        deep_sleep_mAh: 170
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
        microcontroller: "STM32F103C8",
        work_mAh: 40,
        deep_sleep_mAh: 0.02
    },
    {
        microcontroller: "Atmega328P",
        work_mAh: 30,
        deep_sleep_mAh: 0.02
    }
];

var selectButton = document.getElementById('select-button');
selectButton.addEventListener('click', function (event) {
event.preventDefault(); // Verhindert das Standardverhalten des Formulars

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