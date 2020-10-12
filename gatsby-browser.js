import Darkmode from 'darkmode-js'
import kursor from "kursor"

const options = {
    top: '64px',
    left: '20px', 
    time: '0.5s', 
    mixColor: '#fff', 
    backgroundColor: '#f1f4f8', 
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: false,
    label: "🌓", 
    autoMatchOsTheme: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();


  // cursor type

  // new kursor({
  //   type: 1
  // })