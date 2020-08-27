import React from "react";
import "./FooterStyle.scss";

function Footer() {
  return (
    <div className="story-card footer-card">
      <div className="footer-wrapper">
        <div className="site-footer">
          <p className="footer-top">
            <a class="footer-top-a" href="https://help.netflix.com/contactus">
              Questions? Contact us.
            </a>
          </p>
          <ul className="footer-links">
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/support/412"
                placeholder="footer_responsive_link_faq"
              >
                <span id="" data-uia="data-uia-footer-label">
                  FAQ
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com"
                placeholder="footer_responsive_link_help"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Help Center
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="/youraccount"
                placeholder="footer_responsive_link_account"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Account
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://media.netflix.com/"
                placeholder="footer_responsive_link_media_center"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Media Center
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="http://ir.netflix.com/"
                placeholder="footer_responsive_link_relations"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Investor Relations
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://jobs.netflix.com/jobs"
                placeholder="footer_responsive_link_jobs"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Jobs
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="/watch"
                placeholder="footer_responsive_link_waysToWatch"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Ways to Watch
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/legal/termsofuse"
                placeholder="footer_responsive_link_terms"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Terms of Use
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/legal/privacy"
                placeholder="footer_responsive_link_privacy_separate_link"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Privacy
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="#"
                placeholder="footer_responsive_link_cookies_separate_link"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Cookie Preferences
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/en/node/2101"
                placeholder="footer_responsive_link_corporate_information"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Corporate Information
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/contactus"
                placeholder="footer_responsive_link_contact_us"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Contact Us
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://fast.com"
                placeholder="footer_responsive_link_speed_test"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Speed Test
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/legal/notices"
                placeholder="footer_responsive_link_legal_notices"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Legal Notices
                </span>
              </a>
            </li>
            <li className="footer-link-item">
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://www.netflix.com/hu-en/browse/genre/839338"
                placeholder="footer_responsive_link_netflix_originals"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Netflix Originals
                </span>
              </a>
            </li>
          </ul>
          <div className="lang-selection-container">
            <div className="language-picker-container">
              <label htmlFor="undefined">
                <span className="label-text"></span>
              </label>
              <div className="select-arrow medium prefix globe">
                <select className="select medium">
                  <option value="/eng/">English</option>
                  <option value="/hu/">Magyar</option>
                </select>
              </div>
            </div>
          </div>
          <p className="footer-country">
            Netlfix Hungary | Netflix Colne With Love By Krisztian Nagy /
            Chrys-Code
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
