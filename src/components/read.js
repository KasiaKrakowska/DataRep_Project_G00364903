//imports React library
import React from "react";
import { Gallery } from "./gallery";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';
import 'animate.css';
import Styles from '../styles/read.module.css';

//start Read class - export used in order to use component elsewhere
export class Read extends React.Component {

    //constructor
    constructor() {
        super();
        this.RefreshGallery = this.RefreshGallery.bind(this);
    }//end constructor

    //new object used to store property values that belongs to the component
    //state is used to represent an information about the component's current situation
    state = {
        //photos object with JSON data
        photos: []
    };//end state

    //Promise
    //componentDidMount() is invoked immediately after a component is inserted into the tree.
    //Initialization that requires DOM nodes goes here. 
    //Instantiate the network request To load data from a remote endpoint,
    componentDidMount() {//component lifecycle hook

        //promise - axios get request to jsonblob URL
        //library that serves to create HTTP requests that are present externally
        //data is read from JSON server.js - port 4000
        axios.get('http://localhost:4000/api/photos')
            //fulfilled promise - when everything works it will update State with response from URL
            .then(
                (response) => {
                    this.setState({ photos: response.data })
                })
            //rejected promise - if there is an error it will print to console
            .catch(
                (err) => {
                    console.log(err)
                });
    }//end componentDidMount

    //method used to refresh browser after item is deleted from DB
    RefreshGallery() {
        //promise - axios get request to jsonblob URL
        //library that serves to create HTTP requests that are present externally
        //data is read from JSON server.js - port 4000
        axios.get('http://localhost:4000/api/photos')
            //fulfilled promise - when everything works it will update State with response from URL
            .then(
                (response) => {
                    this.setState({ photos: response.data })
                })
            //rejected promise - if there is an error it will print to console
            .catch(
                (error) => {
                    console.log(error)
                });
    }//end Refresh method

    //start render method
    render() {
        //returns div tag content and print to screen 
        return (
            <div>
                <div className={Styles.services}>
                    <div className={Styles.content_test}><br /><br />
                        <h2 class="animate__animated animate__pulse ">OUR OFFER</h2>
                        <div className={Styles.boxServices}>
                            <span></span><br />
                            <br /><h4>Lorem Ipsum</h4><br />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Praesentium, culpa excepturi amet exercitationem in
                        adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                        quam molestias neque impedit totam id sunt?</p>
                        </div>
                    </div>
                </div>

                {/*embeds Gallery component in Read component // reloads data after delete*/}
                <Gallery photos={this.state.photos} RefreshGallery={this.RefreshGallery}></Gallery>
            </div>
        );
    }//end render method
}//end Read class