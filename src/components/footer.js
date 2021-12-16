//imports React library
import React from "react";
import Styles from "../styles/footer.module.css";

// Import Icon name to be used ( use as a component in code )
import { ImLocation } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { ImEnvelop } from "react-icons/im";

//start Footer class - export used in order to use component elsewhere
export class Footer extends React.Component {
    //start render method
    render() {
        //returns div tag content and print to screen 
        return (
            <div>
                <div className={Styles.footerSection}>
                    <div class="container">
                        <div className={Styles.footerN} class="pt-5 pb-5">
                            <div class="row">

                                <div class="col-xl-4 col-md-4 mb-30">
                                    <div className={Styles.singleN}>
                                        <span><ImLocation className={Styles.home_icon} /></span>
                                        <div className={Styles.Ntext}>
                                            <h4>Find us</h4>
                                            <span>10 Avenue, Galway, Ireland</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-4 mb-30">
                                    <div className={Styles.singleN}>
                                        <span><ImPhone className={Styles.home_icon} /></span>
                                        <div className={Styles.Ntext}>
                                            <h4>Call us</h4>
                                            <span>9876543210 0</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-4 mb-30">
                                    <div className={Styles.singleN}>
                                        <span><ImEnvelop className={Styles.home_icon} /></span>
                                        <div className={Styles.Ntext}>
                                            <h4><a href="mailto:g00364903@gmit.ie">Mail Us</a></h4>
                                            <span>mail@info.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.copyrightSec}>
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 text-center text-lg-cener">
                                    <div className={Styles.myCopyrightText}>
                                        <p>Copyright &copy; 2021, All Right Reserved <a href="https://creativelemondesign.com/">Katarzyna Krakowska</a></p><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }//end render method
}//end Footer class