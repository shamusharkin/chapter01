import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Icon, InlineIcon } from '@iconify/react';
import bxlTwitter from '@iconify-icons/bx/bxl-twitter';
import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
import bxlYoutube from '@iconify-icons/bx/bxl-youtube';
import bxHome from '@iconify-icons/bx/bx-home';
import bxUser from '@iconify-icons/bx/bx-user';
import bxFileBlank from '@iconify-icons/bx/bx-file-blank';
import bxBookContent from '@iconify-icons/bx/bx-book-content';
import bxServer from '@iconify-icons/bx/bx-server';
import bxEnvelope from '@iconify-icons/bx/bx-envelope';

function App() {
  AOS.init();
  const [count, setCount] = useState(0)

  return (
    <div data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="50">
      <main id="main">
          <header id="header">
              <div className="d-flex flex-column">
                <div className="profile">
                  <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
                  <h1 className="text-light"><a href="index.html">Chapter 01</a></h1>
                  <p className="text-light"><a href="index.html">turn the page, the journey begins</a></p>
                  <div className="center-social-links">
                  <div className="social-links mt-3 text-center">
                    <a href="https://twitter.com/home" className="twitter"><i><InlineIcon icon={bxlTwitter} /></i></a>
                    <a href="https://www.instagram.com/" className="instagram"><i><InlineIcon icon={bxlInstagram} /></i></a>
                    <a href="https://www.youtube.com/channel/UCVhpw76OHf4_2FgsTBpjTrg" className="linkedin"><i className="bx bxl-linkedin"><InlineIcon icon={bxlYoutube} /></i></a>
                  </div>
                  </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                  <ul>
                    <li><a href="#hero" className="nav-link scrollTo active"><i><InlineIcon icon={bxHome} /></i> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollTo"><i className="bx bx-user"><InlineIcon icon={bxUser} /></i> <span>About</span></a></li>
                    <li><a href="#resume" className="nav-link scrollTo"><i className="bx bx-file-blank"><InlineIcon icon={bxFileBlank} /></i> <span>Resume</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollTo"><i className="bx bx-book-content"><InlineIcon icon={bxBookContent} /></i> <span>Portfolio</span></a></li>
                    <li><a href="#services" className="nav-link scrollTo"><i className="bx bx-server"><InlineIcon icon={bxServer} /></i> <span>Services</span></a></li>
                    <li><a href="#contact" className="nav-link scrollTo"><i className="bx bx-envelope"><InlineIcon icon={bxEnvelope} /></i> <span>Contact</span></a></li>
                  </ul>
                </nav>
              </div>
          </header>
          <section id="about" className="about">
            <div className="container">
              <div className="section-title">
                <h2>About</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div className="row">
                <div className="col-lg-4 aos-init" data-aos="fade-right">
                  <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content aos-init" data-aos="fade-left">
                  <h3>UI/UX Designer &amp; Web Developer.</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="facts" className="facts">
            <div className="container">
              <div className="section-title">
                <h2>Facts</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init" data-aos="fade-up">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">0</span>
                    <p><strong>Happy Clients</strong> consequuntur quae</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init" data-aos="fade-up" data-aos-delay="100">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext"></i>
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">0</span>
                    <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init" data-aos="fade-up" data-aos-delay="200">
                  <div className="count-box">
                    <i className="bi bi-headset"></i>
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter">0</span>
                    <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="count-box">
                    <i className="bi bi-people"></i>
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter">0</span>
                    <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="skills" className="skills section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Skills</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div className="row skills-content">
                <div className="col-lg-6 aos-init" data-aos="fade-up">
                  <div className="progress">
                    <span className="skill">HTML <i className="val">100%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">CSS <i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">JavaScript <i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 aos-init" data-aos="fade-up" data-aos-delay="100">
                  <div className="progress">
                    <span className="skill">PHP <i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">Photoshop <i className="val">55%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
    </div>
  )
}

export default App;
