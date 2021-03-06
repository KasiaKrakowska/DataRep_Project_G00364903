//imports React library
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Styles from "../styles/galleryItem.module.css";
import axios from "axios";

// Import Icon name to be used ( use as a component in code )
import { FiEdit } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";

//start GalleryItem class - export used in order to use component elsewhere
export class GalleryItem extends React.Component {

    //constructor - delete method
    constructor() {
        super();

        this.DeletePhoto = this.DeletePhoto.bind(this);
    }//end constructor

    //method to delete photo from DB using onClick event
    DeletePhoto(x) {
        //preventDefault stops random events, multiple deletes.
        x.preventDefault();
        console.log("Delete: " + this.props.photo._id);

        //http client //updates list
        axios.delete("http://localhost:4000/api/photos/" + this.props.photo._id)
            .then(() => {
                this.props.RefreshGallery();
            })
            .catch();
    }//end Delete method

    //star rating
    //start render method
    render() {

        return (
            <div className={Styles.wrapper}>

                <div className={Styles.cardG}>

                    <img src={this.props.photo.poster} />
                    <div className={Styles.cardBody}>
                        <h2> {this.props.photo.title}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <h3>{this.props.photo.price}</h3>
                    </div>
                    {/*link to URL with button to edit photo*/}                      
                        
                        <Button className={Styles.buttonRead}> <span>
                            <FiEdit className={Styles.home_icon} />
                        </span><Link to={"/update/" + this.props.photo._id} className={Styles.linkButton}> Update</Link></Button>
                        <Button className={Styles.buttonRead} onClick={this.DeletePhoto}>Remove <span>
                            <FiDelete className={Styles.home_icon} />
                        </span></Button>
                </div>
            </div>

        );
    }//end render method
}//end GalleryItem class