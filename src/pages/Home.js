import React, { Fragment } from "react";
import left from "../SVG/left.svg";
import leftsign from "../SVG/leftsign.svg";
import rightsign from "../SVG/rightsign.svg";
import dropdown from "../SVG/dropdown.svg";
import edit from "../SVG/edit.svg";
import del from "../SVG/del.svg";
import cut from "../SVG/cut.svg";
import "../Style/Style.css";
const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="link-grp">
              <button className=" btn link-btn" type="button">
                <img src={left} alt="svg1" className="svg1" />
                My set
              </button>
            </div>
            <div class="input-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div className="collect">
              <div className="card">
                <div className="cord-content">
                  <div className="card-title">collectibles</div>
                  <div className="item-grp">
                    <div className="my-item">
                      <a href="#" target="_blank" className="item-link">
                        My Item
                      </a>
                      <img src={cut} alt="svg2" className="svg2" />
                    </div>
                    <div className="change">
                      <button className="edit-delete">
                        <img src={edit} alt="svg3" className="svg3" />
                      </button>
                      <button className="edit-delete">
                        <img src={del} alt="svg4" className="svg4" />
                      </button>
                    </div>
                  </div>
                  <div className="button-grp">
                    <button className="bttn btn-1">common</button>
                    <button className="bttn btn-2">0 minted</button>
                    <button className="bttn btn-3">5 items</button>
                  </div>
                  <div className="updated-time">
                    <p className="time">Last Updated: 01/26/2022 04:20:13pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="drop-down">
              <img src={leftsign} alt="svg5" className="svg5" />
              <span>1/1</span>
              <div className="dropdown">
                <button className="drop-btn">
                  Show 10
                  <img src={dropdown} alt="svg6" className="svg6" />
                </button>
              </div>
              <img src={rightsign} alt="svg7" className="svg7" />
            </div>
            <div className="new-btn">
              <button className="btn btn-light light">+ New Collectible</button>
            </div>
          </div>

          <div className="col-6">
            <div className="NFT-no">
              <h6 className="heading">Number of NFT To Create</h6>
              <input
                type="text"
                className="form-control "
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div className="poster-content">
              <h6 className="heading">Poster Content</h6>
              <p> Poster</p>
              <img
                src="https://niftory.com/images/NiftoryPlatform.jpg"
                className="img-thumbnail p-2"
                alt="..."
              />
            </div>
            <div>
              <h6 className="heading">Assets</h6>
              <h6 className="heading">Metadata</h6>
              <div className="AT-input">
                <p>Artists</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="artist"
                  aria-label="artist"
                  aria-describedby="basic-addon1"
                ></input>
              </div>
              <div className="AT-input">
                <p>Tags</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="tags"
                  aria-label="tags"
                  aria-describedby="basic-addon1"
                ></input>
              </div>
            </div>
            <div className="button-group">
              <button className="btn btn-light">Create Collectible</button>
              <button className="btn btn-light">Cancle</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
