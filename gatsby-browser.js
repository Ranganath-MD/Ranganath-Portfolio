import Darkmode from 'darkmode-js'

const options = {
    top: '64px',
    right: '20px', 
    time: '0.5s', 
    mixColor: '#fff', 
    backgroundColor: '#fff', 
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: false,
    label: "🌓", 
    autoMatchOsTheme: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();