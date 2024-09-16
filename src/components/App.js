import React, { Component } from "react";
import {Header , Container , Hero , MostPopular, GamingLibrary} from './index' 
import Footer from "../Sections/Footer/Footer"
import './App.css';

class App extends Component{
    render() {
        return (
             <div>
                <Header />

               <Container>
                   <Hero />
                   <MostPopular />
                   <GamingLibrary />
                </Container>                 
                
                <Footer />
             </div>
        );
    }
}
export default App