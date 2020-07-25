import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Socialicon=()=>{
    return(

        <>
        <div className="container-fluid">
            <div className="row">
                <div className="icon-bar d-flex flex-column col-lg-1 col-md-1 col-1">
            <a  className="a1 facebook" href="https://m.facebook.com/Jayprakash9867-103030318027998/?ref=bookmarks" target="_blank">click here to visit<FacebookIcon  className="i"/></a>
            <a className="a1 instagram" href="#" target="_blank">click here to visit<InstagramIcon className="i"/></a>
            <a className="a1 twitter" href="https://twitter.com/Jay76486862" target="_blank">click here to visit<TwitterIcon className="i"/></a>
            <a className="a1 whatsapp" href="https://api.whatsapp.com/send?phone=91-98671-00953"title="whatsapp Me!" target="_blank">click here to visit<WhatsAppIcon className="i"/></a>
            <a className="a1 youtube" href="https://www.youtube.com/channel/UCGQVEj0Q2abOPBKSte73hlg/featured?app=desktop" target="_blank">click here to visit<YouTubeIcon className="i"/></a>
      
      
    
        </div>
            </div>
        </div>


        </>
    );
};
export default Socialicon;