# BlitzWolf SHP7 – ESPHome Configuration

ESPHome configuration and custom styling for the BlitzWolf SHP7 dual-socket smart plug.

## Prerequisite

**This configuration is intended for a BlitzWolf SHP7 that has already been converted to Tasmota.**

If your SHP7 is still running its original factory firmware, you must first convert it to Tasmota. This repository covers the subsequent conversion from Tasmota to ESPHome only.

## Features

- Independent control of both sockets
- Power, voltage, current and energy monitoring
- Configurable power-on behaviour
- Automatic socket shut-off timers
- Physical button control
- ESPHome Web Server v3
- Custom dark purple WebUI background
- Wi-Fi signal and uptime diagnostics

## Files

| File | Description |
|---|---|
| `shp7.yaml` | ESPHome firmware configuration |
| `shp7_custom_styles.css` | Custom WebUI background and main text styling |
| `shp7_custom_styles.js` | Custom WebUI general styling |
| `README.md` | Project documentation |

## Installation

### ESPHome Configuration

1. Download `shp7.yaml`.
2. Add it to your ESPHome configuration directory.
3. Configure your Wi-Fi credentials.
4. Compile and install the firmware using ESPHome.

### Custom CSS and js files

1. Download `shp7_custom_styles.css`.
2. Place the file in your Home Assistant `/config/esphome/` directory.
3. Configure the ESPHome Web Server CSS URL as:

   `/shp7_custom_styles.css
   `
5. Download `shp7_custom_styles.js`.
6. Place the file in your Home Assistant `/config/esphome/` directory.
7. Configure the ESPHome Web Server JS URL as:

   `shp7_custom_styles.js`

The stylesheet changes the WebUI background and main text colours. ESPHome's internal controls can't easily be customised by the stylesheet - the .js file does that.

## Disclaimer

This configuration is provided as-is. Use at your own risk. Always ensure the device is safely installed and suitable for the electrical load being controlled.

## Project

Personal ESPHome project for the BlitzWolf SHP7 dual-socket smart plug.
