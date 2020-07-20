//
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import footerStyle from "./footer.module.scss"

// IMAGES
import Logo from "../images/CPS Logo 2019.png"

// ICONS
import {
  FaRedditAlien,
  FaPinterestP,
  FaFacebookF,
  FaYelp,
  FaHouzz,
} from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { GoCommentDiscussion } from "react-icons/go"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineGoogle } from "react-icons/ai"

var classNames = require("classnames")
const Footer = () => {
  return (
    <footer>
      <div className={footerStyle.footer_top}>
        {/* <!-- <div className={footerStyle.footer_top_logo}></div>
		  <div className={footerStyle.footer_top_logo}></div>
		  <div className={footerStyle.footer_top_logo}></div>
		  <div className={footerStyle.footer_top_logo}></div>
		  <div className={footerStyle.footer_top_logo}></div>
		  <div className={footerStyle.footer_top_logo}></div> --> */}
        <div className={footerStyle.footer_buttons}>
          <span>
            <h3> Ready to get in touch?</h3>
          </span>
          <div className={footerStyle.footer_button_call}>
            <button>
              <span>
                <MdPhoneIphone />
              </span>
              <span>Call A Plumber</span>
            </button>
          </div>
          <div className={footerStyle.footer_button_chat}>
            <button>
              <span>
                <GoCommentDiscussion />
              </span>
              <span>Chat With Us</span>
            </button>
          </div>
          <div classNames={footerStyle.footer_button_chat_tablet}>
            <button>
              <span>
                <GoCommentDiscussion />
              </span>
              <span>Talk To A Plumber</span>
            </button>
          </div>
        </div>
      </div>

      <div className={footerStyle.footer_middle}>
        {/* <!-- <div id="footer_buttons">
			  <h3> Ready to get in touch?</h3>
			  <div id="footer_button_call">
				  <button>
					  <span>
						  <i class="fas fa-mobile-alt"></i>
					  </span>
					  <span>Call A Plumber</span>
				  </button>
			  </div>
			  <div id="footer_button_chat">
				  <button>
					  <span>
						  <i class="fas fa-comment-dots"></i>
					  </span>
					  <span>
						  Chat With Us
					  </span>    
				  </button>
			  </div>
			  <div id="footer_button_chat-tablet" >
				  <button>
					  <span>
						  <i class="fas fa-comment-dots"></i>
					  </span>
					  <span>
						  Talk To A Plumber
					  </span>    
				  </button>
			  </div>
		  </div> --> */}

        <div className={footerStyle.footer_middle_address}>
          <div className={footerStyle.footer_middle_address_left}>
            <div alt="" className={footerStyle.footer_logo}>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className={footerStyle.footer_middle_address_right}>
            <span
              className={classNames({
                [footerStyle.footer_middle_address_line]: true,
                [footerStyle.fbal_title]: true,
              })}
            >
              Chicagoland Plumbing Services, Inc.
            </span>
            <span className={footerStyle.footer_middle_address_line}>
              19934 Wolf Rd #1018
            </span>
            <span className={footerStyle.footer_middle_address_line}>
              Mokena, IL 60448
            </span>
          </div>
        </div>

        <div className={footerStyle.footer_middle_info}>
          <div className={footerStyle.footer_middle_info_hours}>
            <h3>Hours</h3>
            <div className={footerStyle.fbih_listed}>
              <ul>
                <li>Mon-Fri</li>
                <li>Saturday</li>
                <li>Sunday</li>
              </ul>
              <ul>
                <li>7AM - 3:30PM</li>
                <li>7AM - 1PM</li>
                <li>Emergency Service</li>
              </ul>
            </div>
          </div>
          {/* <!-- <div id="footer_middle_info_map">
				  
				  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1lm1yHnTn1c5zmxjRlHpiMY3r2AlQbcGP"  height="300" ></iframe>
  
			  </div> --> */}
        </div>
      </div>

      <div className={footerStyle.footer_bottom}>
        <div className={footerStyle.footer_bottom_social}>
          <div className={footerStyle.footer_bottom_social_icon}>
            <i className={footerStyle.reddit}>
              <FaRedditAlien />
            </i>
          </div>
          <div className={footerStyle.footer_bottom_social_icon}>
            <i className={footerStyle.pinterest}>
              <FaPinterestP />
            </i>
          </div>
          <div className={footerStyle.footer_bottom_social_icon}>
            <i className={footerStyle.facebook}>
              <FaFacebookF />
            </i>
          </div>
          <div className={footerStyle.footer_bottom_social_icon}>
            <i className={footerStyle.google}>
              <AiOutlineGoogle />
              <FcGoogle />
            </i>
          </div>
          <div className={footerStyle.footer_bottom_social_icon}>
            <i className={footerStyle.yelp}>
              <FaYelp />
            </i>
          </div>
          <div className={footerStyle.footer_bottom_social_icon}>
            <i className={footerStyle.houzz}>
              <FaHouzz />
            </i>
          </div>
        </div>

        <div className={footerStyle.footer_bottom_copyright}>
          <p>
            © {new Date().getFullYear()}
            {` `}
            <Link to="/">Chicagoland Plumbing Services. Inc.</Link>
          </p>
        </div>

        <div className={footerStyle.footer_bottom_sitemap}>
          <Link to="/">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
