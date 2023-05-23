import React from "react";
import "../css/home.css";
import "../css/card.css";
import "../css/style.css";
import Card from "../components/Card";
import Products from "./Products";
import Featured from "./Featured";
function Home() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="pics/pic-01.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block animate__animated animate__fadeInRight">
              <h5 className="font-small">FASHION TRENDS</h5>
              <h2 className="font-large-m ">THE HOTLIST OF</h2>
              <h1 className="font-large">SUMMER</h1>
              <h5>The 12th Biggest Spring/Summer trends</h5>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="pics/pic-02.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block animate__animated animate__fadeInRight">
              <h5 className="font-small">NEW COLLECTION</h5>
              <h2 className="font-large-m ">FIND YOUR </h2>
              <h1 className="font-large">PERFECT</h1>
              <h5>Upcoming in Style Quality and Performance.</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="pics/pic-03.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block animate__animated animate__fadeInRight">
              <h5 className="font-small animate__fadeInRight">
                NEW COLLECTION
              </h5>
              <h2 className="font-large-m ">FASHION</h2>
              <h1 className="font-large">GLASSES</h1>
              <h5>Best Glasses for Women to Channel your inner Clark kent.</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="main">
        <div className="main-detail">
          <h1>DENIM COLLECTION</h1>
          <p>
            Explore the best trends for girls and women at SaleHub! Clothes,
            shoes and cool accessories for a new season are available now at
            SaleHub online.
          </p>
        </div>
        <div className="main-content">
          <div className="col-1">
            <div className="col-1-img">
              <img src="pics/pic-04.png"></img>
            </div>
            <div className="col-1-content">
              <h2>DENIM JACKET</h2>
              <p>14 Demin jacket outfits to live in Now that it is Fall</p>
              <button className="btn-classic  ">
                <a>SHOP NOW</a>
              </button>
            </div>
          </div>
          <div className="col-2">
            <div className="row">
              <div className="row-img">
                <img src="pics/pic-05.png"></img>
              </div>
              <div className="row-content">
                <h2>DENIM JACKET</h2>
                <p>14 Demin jacket outfits to live in Now that it is Fall</p>
                <button className="btn-classic ">
                  <a>SHOP NOW</a>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="row-img">
                <img src="pics/pic-06.jpg"></img>
              </div>
              <div className="row-content">
                <h2>DENIM JACKET</h2>
                <p>14 Demin jacket outfits to live in Now that it is Fall</p>
                <button className="btn-classic ">
                  <a>SHOP NOW</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Products />
      <Featured />
    </>
  );
}

export default Home;
