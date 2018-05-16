import React from "react";
import Header from './Header';
import Home from './Home';
import About from './About';
import styles from "../styles/components/_portfolio.scss";

export default class Portfolio extends React.Component {

    render() {
        return (
            <div>
                {/* <Header /> */}
                <Home />
                <About />
            </div>
        );
    }
}