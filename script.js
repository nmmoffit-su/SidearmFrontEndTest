function navViewModel() {
    self.tabs = ko.observableArray([
        { title: "Teams" },
        { title: "Tickets" },
        { title: "Patriot Club" },
        { title: "Inside Athletics" },
        { title: "Fan Central" },
    ]);
    self.dropdownContent = ko.observableArray([
        { subtitle: "Men's Sports" },
        { subtitle: "Women's Sports" }
    ]);
    self.mensport = ko.observableArray([
        { sport: "Baseball" },
        { sport: "Basketball" },
        { sport: "Cross Country" }
    ])
    self.womsport = ko.observableArray([
        { sport: "Basketball" },
        { sport: "Cross Country" }
    ])
}