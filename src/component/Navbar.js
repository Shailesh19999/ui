import React from "react";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import FlashlightOnIcon from "@mui/icons-material/FlashlightOn";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            NFTBOOK.IO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search here"
                  aria-label="Search"
                />
              </form>

              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                  <span>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>
                    <SportsKabaddiIcon />
                  </span>
                  Auction
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>
                    <FlashlightOnIcon />
                  </span>
                  Marketplace
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>
                    <SignalCellularAltIcon />
                  </span>
                  State
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>
                    <ManageHistoryIcon />
                  </span>
                  Activity
                </a>
              </li>
            </ul>
            <button className="nav_btn">connect wallet</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
