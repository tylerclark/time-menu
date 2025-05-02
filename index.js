const { menubar } = require("menubar");
const path = require("path");

const mb = menubar({
  index: "https://time.clarkinteractive.com",
  icon: path.join(__dirname, "icon@2x.png"),
  browserWindow: {
    width: 700,
    height: 700,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  },
});

mb.on("ready", () => {
  console.log("Menubar app is ready!");
});
