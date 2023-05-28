const tabController = new Tab_Controller();
        
const MicrocontrollerContent = document.getElementById("tab-microcontroller-content");
const MicrocontrollerButton = document.getElementById("tab-microcontroller-button");
tabController.registerTab("tab-microcontroller", MicrocontrollerContent, MicrocontrollerButton);

const SolarmoduleContent = document.getElementById("tab-solarmodule-content");
const SolarmoduleButton = document.getElementById("tab-solarmodule-button");
tabController.registerTab("tab-solarmodule", SolarmoduleContent, SolarmoduleButton);