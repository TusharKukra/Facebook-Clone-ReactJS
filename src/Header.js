import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlined from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlined from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import {Avatar} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from './StateProvider';



function Header() {

    // pull the user information
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            {/* Header is split into 3 areas : center, left & right */}
            
            <div className="header_left">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>

                <div className="header_input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text"/>
                </div>
            </div>

            
            <div className="header_center">

                <div className="header_option  header_option--active">
                    <HomeIcon fontSize = "large"/>
                </div>

                <div className="header_option">
                    <FlagIcon fontSize = "large"/>
                </div>

                <div className="header_option">
                    <SubscriptionsOutlined fontSize = "large"/>
                </div>

                <div className="header_option">
                    <StorefrontOutlined fontSize = "large"/>
                </div>

                <div className="header_option">
                    <SupervisedUserCircle fontSize = "large"/>
                </div>

            </div>


            <div className="header_right">

                <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>

            </div>


            
        </div>
    )
}

export default Header
