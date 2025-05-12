const { menubar } = require("menubar");
const path = require("path");

const mb = menubar({
  index: "https://time.clarkinteractive.com?special=1",
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

mb.on("after-create-window", () => {
  mb.window.webContents.on("did-navigate-in-page", (event, url) => {
    if (url.includes("running=1")) {
      mb.tray.setImage(path.join(__dirname, "icon-special@2x.png"));
    } else {
      mb.tray.setImage(path.join(__dirname, "icon@2x.png"));
    }
  });
});
