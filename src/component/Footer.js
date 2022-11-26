import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid " id="footer">
        <div className="row">
          <div className="col-3">
            <h6>Useful Links</h6>
            <div className="row">
              <div className="col-3">
                <p>Explore</p>
                <p>Auction</p>
                <p>States</p>
              </div>
              <div className="col-4">
                <p>Marketplace</p>
                <p>Real-time</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <h6>Legal</h6>
            <div className="row">
              <div className="col-5">
                <p>Terms & conditions</p>
                <p>Privicy & policy</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h6>Help</h6>
            <div className="row">
              <div className="col-5">
                <p>Support</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h6> Our Newsletter</h6>
            <button className="footerBtn_1">Email</button>
            <button className="footerBtn_2">Send</button>
          </div>
        </div>
        <hr />
        <div className="last_line">
          <div className="row">
            <div className="col-8">
              <PublicIcon /> English
            </div>
            <div className="col-4">
              Follow & Stay Updated😊{" "}
              <span>
                <button className="footerBtn_2">
                  {" "}
                  <TelegramIcon />{" "}
                </button>
                <button className="footerBtn_2">
                  <TwitterIcon />
                </button>
                <button className="footerBtn_2">
                  <RedditIcon />
                </button>
              </span>
            </div>
          </div>
        </div>

        <hr />
        <p className="copy_right">©nftbook.io,inc All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
