import React from 'react';
import "./Story.css";
import {Avatar} from "@material-ui/core";


function Story({image, profileSrc, title}) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            <Avatar className="story_avatar" src={profileSrc}/>
            <h4>{title}</h4>

            {/* For background images in Stories we go to the StoryReels.js*/}
        </div>
    )
}

export default Story
