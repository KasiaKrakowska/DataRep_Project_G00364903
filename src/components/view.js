//imports React library
import React from "react";
import { Gallery } from "./gallery";
import axios from 'axios';
import 'animate.css';
import Styles from '../styles/read.module.css';

//start View class - export used in order to use component elsewhere
export class View extends React.Component {

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
                    <div className={Styles.content_test}>
                        <div className={Styles.boxServices}>
                            <span></span><br />
                            <br /><h4>Neue Gallery</h4><br />
                            <p>At Neue, we are excited to showcase original art from talented artists. If you are looking for a plece to show your art online
together with other inspirational independent artists, we can help you present an artwork you will create.</p>
                        </div>
                    </div>
                </div>
                {/*embeds Gallery component in Read component // reloads data after delete*/}
                <Gallery photos={this.state.photos} RefreshGallery={this.RefreshGallery}></Gallery>
            </div>
        );
    }//end render method
}//end View class