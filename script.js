// Side Menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});

// Autocomplete
const autoComplete = document.querySelector('.autocomplete');
M.Autocomplete.init(autoComplete, {
  data: {
    "Aruba": null,
    "Bahamas": null,
    "California": null,
    "Cancun": null,
    "Florida": null,
    "Hawaii": null,
    "Maldives": null,
    "Polynesia": null,
  },
});
