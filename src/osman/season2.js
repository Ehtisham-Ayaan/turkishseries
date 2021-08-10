import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import about from '../img/about.jpg'
import {makeStyles} from "@material-ui/core/styles";
import home1 from '../img/home1.png'
import about111 from '../img/about111.jpeg'
import about222 from '../img/about222.jpg'
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const useStyles = makeStyles((theme) => ({
 
    h:{
        marginTop : '20%', 
        color: "green"
    },

    text : {
           fontSize : '15px',
           overflow: "visible",
           fontWeight: 800,
           fontStyle: "italic",
           fontFamily: `"Inter-ExtraBoldItalic", "Inter", sans-serif`,
           color: "#433E69",
           letterSpacing: 1,
           lineHeight: 1.5,
    },

    frame : {
        height: "auto",
        overflow: "visible",
        display: 'block',
        marginTop : '10%',
        marginBottom: '10%',
      },

      frame2 : {
        width: "85%",
        height: 'auto',
        background: "radial-gradient(100% 50% at 0% 46.6%, #33aaff 0%, hsl(0, 0%, 66%) 100%)",
        overflow: "visible",
      }

}));

function getWindowDimensions() {
    const width = window.innerWidth;
    return width
    
  }

export default function Season2() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [fontSize, setFontSize] = useState(25);
    const [widthh , setWidthh] = useState(750);
useEffect(() => {

    setWindowDimensions(getWindowDimensions());

    if(windowDimensions < 1024){ 
        setFontSize(12);
        setWidthh(280);
    }
})
    
    const myClass = useStyles();

    return(

        <div className="container">
            
            <div className="row">

            <div className="col-md-6">
            <h3 className={myClass.h}>Episode 64 Part 1</h3>

            <iframe width="560" height="315" src="//ok.ru/videoembed/2554062965372" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
            </div><div className="col-md-6">
            <h3 className={myClass.h}>Episode 64 Part 2</h3>

            <iframe width="560" height="315" src="//ok.ru/videoembed/2492477541026" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
            </div>
            <div className="col-md-6">
            <h3 className={myClass.h}>Episode 63 Part 1</h3>

            <iframe width="560" height="315" src="//ok.ru/videoembed/2472447314594" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>

            </div>
            <div className="col-md-6">
            <h3 className={myClass.h}>Episode 63 Part 2</h3>

            <iframe width="560" height="315" src="//ok.ru/videoembed/2555353893627" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
            </div>

            <div className="col-md-6"> 
            <h3 className={myClass.h}>Episode 62 Part 1</h3>

            <iframe width="560" height="315" src="//ok.ru/videoembed/2524762999420" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
            </div>
            <div className="col-md-6"> 
            <h3 className={myClass.h}>Episode 62 Part 2</h3>
            <iframe width="560" height="315" src="//ok.ru/videoembed/2527277288060" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
            </div>

            <div className="col-md-6">
            <h3 className={myClass.h}>Episode 61 Part 1</h3>
            </div><div className="col-md-6">
            <h3 className={myClass.h}>Episode 61 Part 2</h3>
            </div><div className="col-md-6">
            <h3 className={myClass.h}>Episode 60 Part 1</h3>
            </div><div className="col-md-6">
            <h3 className={myClass.h}>Episode 60 Part 2</h3>
            </div><div className="col-md-6">
            <h3 className={myClass.h}>Episode 59 Part 1</h3>
            </div>            <div className="col-md-6">
            <h3 className={myClass.h}>Episode 59 Part 2</h3>
</div>
            
            </div>
            </div>

        
    )
}