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