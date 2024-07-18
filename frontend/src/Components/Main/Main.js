import React from "react";
import Navbar from "../NavBar/NavBar";
import "../Main/Main.css"
import { Button } from "@mui/material";
import bulbicon from "../../assets/bulbicon.png"
import secondicon from "../../assets/secondicon.png";
import thirdicon from "../../assets/thirdicon.png";
import dashboard2 from "../../assets/dashboard2.png";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import Footer from "../Footer/Footer";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import homeimg1 from "../../assets/homeimg1.png";
import homeimg2 from "../../assets/homeimg2.png";
import homeimg3 from "../../assets/homeimg3.png";


function Main() {
  return (
    <div className="App">
      <Navbar />
      {/* <section id="home" className="section">
        <div className="titlebox">
          <p id="title">LawLinks</p>
          <p>
            Simplifying property transactions for Legal Professionals with
            LawLinks, a comprehensive SaaS solution designed specifically for
            advocates.
          </p>
          <Button id="knowmore">Know More</Button>
        </div>
        <div>
          <img id="homeimg1" src={homeimg1} alt="IMG" />
        </div>
      </section> */}

      <section id="home" className="section">
        <Grid container spacing={2}>
          <Grid item xs={5} md={5}>
            <div className="titlebox">
              <p id="title">Advoref</p>
              <p>
                Simplifying property transactions for Legal Professionals with
                Advoref, a comprehensive SaaS solution designed specifically
                for advocates.
              </p>
              <Button id="knowmore" variant="contained" color="primary">
                Know More
              </Button>
            </div>
          </Grid>
          <Grid item xs={3} md={3}>
            <div>
              <img id="homeimg1" src={homeimg1} alt="IMG" />
              {/* <img id="homeimg2" src={homeimg2} alt="IMG" /> */}
            </div>
          </Grid>
          <Grid item xs={3} md={3}>
            <div>
              <img id="homeimg2" src={homeimg2} alt="IMG" />
            </div>
          </Grid>
        </Grid>
      </section>

      <section id="how-it-works" className="section">
        <div class="container">
          <div class="row">
            <p id="how-it-works-title">
              Innovative Client Management System Software
            </p>
          </div>
          <div class="row">
            <p id="how-it-works-text">
              Streamline your operations with our comprehensive software
              solution designed to simplify tasks.
            </p>
          </div>
          <div class="row">
            <div class="icon-column">
              <img src={bulbicon} alt="icon" />
              <p>Easy To Record Client Details</p>
            </div>
            <div class="icon-column">
              <img src={secondicon} alt="icon" />
              <p>Property Detail managment</p>
            </div>
            <div class="icon-column">
              <img src={thirdicon} alt="icon" />
              <p>Hassle-free fee payments</p>
            </div>
          </div>
        </div>
        <div className="container">
          <p id="how-it-works-title2">How it works?</p>
          <div className="row">
            <p id="how-it-works-text2">
              Discover the seamless efficiency of Advoref operations.
            </p>
          </div>
        </div>

        <div className="works">
          <Grid container spacing={3} className="row">
            <Grid item xs={12} md={6} className="left">
              <section>
                <img id="dashboard2" src={dashboard2} alt="img" />
              </section>
            </Grid>
            <Grid item xs={12} md={6} className="right">
              <section id="Effortless">
                <p id="Effortless-title">Effortless Client Detail Management</p>
                <p id="Effortless-text">
                  Add and manage Clent information with ease.
                </p>
              </section>
              <section>
                <div id="Accordion">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      Comprehensive property details recording
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel1-header"
                    >
                      Instant access to all details
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel1-header"
                    >
                      Hassle-free fee payment processing
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </section>
            </Grid>
          </Grid>
        </div>
      </section>

      <section id="subscription" className="section">
        <div className="container">
          <p id="how-it-works-title2">Subscription</p>
          <div className="row">
            <p id="how-it-works-text2">
              Discover the seamless efficiency of Advoref operations.
            </p>
          </div>
        </div>

        <div className="subscription">
          <div className="subscription-cards">
            <div className="subscription-card">
              <div className="subscription-price">₹ 10,000</div>
              <div className="subscription-content">Standard</div>
              <div className="subscription-select">
                <input type="radio" name="subscription" id="standard" />
                <label id="select" htmlFor="standard">
                  Select
                </label>
              </div>
              <ul className="subscription-features">
                <li>
                  <span className="feature-x">✗</span> Content
                </li>
                <li>
                  <span className="feature-check">✓</span> Content
                </li>
                <li>
                  <span className="feature-check">✓</span> Content
                </li>
                <li>
                  <span className="feature-check">✓</span> Content
                </li>
              </ul>
            </div>

            <div className="subscription-card">
              <div className="subscription-price">₹ 15,000</div>
              <div className="subscription-content">Premium</div>
              <div className="subscription-select">
                <input type="radio" name="subscription" id="premium" />
                <label id="select" htmlFor="premium">
                  Select
                </label>
              </div>
              <ul className="subscription-features">
                <li>
                  <span className="feature-x">✗</span> Content
                </li>
                <li>
                  <span className="feature-check">✓</span> Content
                </li>
                <li>
                  <span className="feature-check">✓</span> Content
                </li>
                <li>
                  <span className="feature-check">✓</span> Content
                </li>
              </ul>
            </div>

            <div className="subscription-card popular">
              {/* <div className="subscription-badge">POPULAR</div> */}
              <div className="subscription-price">₹ 30,000</div>
              <div className="subscription-content">Premium-Pro</div>
              <div className="subscription-select">
                <input type="radio" name="subscription" id="premium-pro" />
                <label id="select" htmlFor="premium-pro">
                  Select
                </label>
              </div>
              <ul className="subscription-features">
                <li>
                  <span className="feature-check">✓</span> Content
                </li>
                <li>
                  <span className="feature-check">✓</span> Content
                </li>
                <li>
                  <span className="feature-check">✓</span> Content
                </li>
                <li>
                  <span className="feature-check">✓</span> Content
                </li>
              </ul>
            </div>
          </div>

          <div className="discover-benefits">
            <a href="#benefits">Discover all benefits</a>
          </div>
        </div>
      </section>
      <Footer />
      {/* <SignUpPage/> */}
    </div>
  );
}

export default Main;
