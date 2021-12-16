//imports React library
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "../styles/home.module.css";

// Import Icon name to be used ( use as a component in code )
import { SiAframe } from "react-icons/si";
import { TiBrush } from "react-icons/ti";
import { BsDoorOpen } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import 'animate.css';

//start Content class - export used in order to use component elsewhere
export class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { date: new Date() };
}

tick() {
    this.setState({ date: new Date() });
}
    
componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
}
    

componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
}

componentWillUnmount() {
    clearInterval(this.interval);
}
  //start render method
  render() {
    //returns div tag home and print to screen 
    return (
      <div>
        <Container>
          {/*function to display time*/}
          <div className="animate__animated animate__bounce">{this.state.date.toString()}</div>
          <Container fluid className={Styles.home_container}>
            <Row>
              <Col md={12} sm={12}>
                <h2>WELCOME</h2>
                <Row className="my-5">
                  <Col md={6} className={Styles.home_col}>
                    <div>
                      <span>
                        <SiAframe className={Styles.home_icon} />
                      </span>
                      <h4>Lorem Iprum</h4>
                      <p className={Styles.home_p}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Praesentium, culpa excepturi amet exercitationem in
                        adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                        quam molestias neque impedit totam id sunt?
                      </p>
                    </div>
                  </Col>
                  <Col md={6} className={Styles.home_col}>
                    <div>
                      <span>
                        <TiBrush className={Styles.home_icon} />
                      </span>
                      <h4>Lorem Ipsum</h4>
                      <p className={Styles.home_p}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Praesentium, culpa excepturi amet exercitationem in
                        adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                        quam molestias neque impedit totam id sunt?
                      </p>
                    </div>
                  </Col>
                </Row>

                {/* Second row */}

                <Row className="my-5">
                  <Col md={6} className={Styles.home_col}>
                    <div>
                      <span>
                        <BsDoorOpen className={Styles.home_icon} />
                      </span>
                      <h4>Lorem Ipsum</h4>
                      <p className={Styles.home_p}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Praesentium, culpa excepturi amet exercitationem in
                        adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                        quam molestias neque impedit totam id sunt?
                      </p>
                    </div>
                  </Col>
                  <Col md={6} className={Styles.home_col}>
                    <div>
                      <span>
                        <TiHomeOutline className={Styles.home_icon} />
                      </span>
                      <h4>Lorem Ipsum</h4>
                      <p className={Styles.home_p}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Praesentium, culpa excepturi amet exercitationem in
                        adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                        quam molestias neque impedit totam id sunt?
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    )//end return function
  };//end render method
}//end Home class