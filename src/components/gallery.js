//imports React library
import React from "react";
import { GalleryItem } from "./galleryItem";

//start Gallery class - export used in order to use component elsewhere
export class Gallery extends React.Component {
    //start render method
    render() {
        //acquires data from photos using arrow function //reloads after delete
        return this.props.photos.map((photo) => {
            return <GalleryItem photo={photo} RefreshGallery={this.props.RefreshGallery}></GalleryItem>
        })
    }//end render method
}//end Gallery class