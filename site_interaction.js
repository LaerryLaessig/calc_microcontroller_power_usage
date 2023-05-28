class TabController {
    constructor() {
      this.tabs = {};
    }
  
    registerTab(tabName, tabContentElement, tabButtonElement) {
      this.tabs[tabName] = {
        content: tabContentElement,
        button: tabButtonElement
      };
      tabButtonElement.addEventListener('click', (evt) => this.openTab(evt, tabName));
    }
  
    openTab(evt, tabName) {
      Object.values(this.tabs).forEach((tab) => {
        tab.content.style.display = "none";
        tab.button.classList.remove("active");
      });
      this.tabs[tabName].content.style.display = "block";
      this.tabs[tabName].button.classList.add("active");
    }
  }

  class TableBuilder {
    constructor() {
      this.table = "<table>";
    }
  
    addHeader(header) {
      this.table += "<tr>";
      header.forEach((cell) => {
        this.table += "<th>" + cell + "</th>";
      });
      this.table += "</tr>";
      return this;
    }
  
    addRow(row) {
      this.table += "<tr>";
      row.forEach((cell) => {
        this.table += "<td>" + cell.toFixed(2) + "</td>";
      });
      this.table += "</tr>";
      return this;
    }
  
    build() {
      this.table += "</table>";
      return this.table;
    }
  }

  function genereate_microcontroller_result_table() {

    var result = calculateMicrocontroller();

    var table = new TableBuilder();
    table.addHeader(["work mAh per day", "deep sleep mAh per day", "sum mAh per day", "Wh a day", "days running"])
    table.addRow([result.work_mAh_per_day, result.sleep_mAh_per_day, result.sum_mAh_per_day, result.watt_hour, result.daysRunning])

    document.getElementById("microcontroller-result").innerHTML = table.build();
  }

  function genereate_solarmodule_result_table() {

    var result = calculateSolarModule();

    var table = new TableBuilder();
    table.addHeader(["mAh per day(middle)", "Wh per day(middle)", "mAh per day(max)", "Wh per day(max)"]);
    table.addRow([result.mAhPerDayMiddle, result.watt_hour_day_middle, result.mAhPerDayMax, result.watt_hour_day_max])

    document.getElementById("solar-module-result").innerHTML = table.build();
  }