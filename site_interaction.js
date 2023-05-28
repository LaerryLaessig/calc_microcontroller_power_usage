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

  