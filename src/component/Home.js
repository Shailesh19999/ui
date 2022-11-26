import React from "react";
import photo from "../component/photo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-6 mt-4 " id="Myheading">
            <h2>
              The first NFT marketplace <br />
              for Youtube & TikTok creators 🔥
            </h2>
            <p className="paragraph">
              Buy,sell & auction viral videos as NFTs from your <br /> favourite
              creators
            </p>
            <button className="mx-2 mybtn">Action</button>
            <button className="mybtn">Marketplace</button>
          </div>
          <div className="col-md-6 my-5 ">
            <button className="mybtn mx-3">
              <ArrowBackIcon />
            </button>

            <img src={photo} alt="" />
            <button className="mybtn mx-3">
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
