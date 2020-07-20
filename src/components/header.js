import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle_D from "./header.module.scss"
import MediaQuery from "react-responsive"

// ICONS
import { GiAlarmClock, GiReceiveMoney, GiSmartphone } from "react-icons/gi"
import {
  BsWrench,
  BsPeopleFill,
  BsFillChatSquareQuoteFill,
  BsFillChatDotsFill,
  BsChatSquareDots,
} from "react-icons/bs"
import { FaMapMarkedAlt } from "react-icons/fa"
import { RiArticleLine } from "react-icons/ri"
import { FiMenu } from "react-icons/fi"

// IMAGES
import Logo from "../images/CPS Logo 2019.png"

// const Header = () => (
//   <MediaQuery minDeviceWidth={993}>
// <header className={headerStyle_D.desktop}>
//   <section>
//     <div>
//       <div>
//         <GiAlarmClock />
//         <p>24 Hour Emergency Service</p>
//       </div>

//       <div>
//         <p>708-428-4600</p> • <p>815-463-1900</p> <GiSmartphone />
//       </div>
//     </div>
//   </section>
//   <section>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <div>
//               <BsWrench />
//             </div>
//             <div>
//               <Link to="#">Services</Link>
//             </div>
//           </li>
//           <li>
//             <div>
//               <FaMapMarkedAlt />
//             </div>
//             <div>
//               <Link to="#">Service Area</Link>
//             </div>
//           </li>
//           <li>
//             <div>
//               <BsPeopleFill />
//             </div>
//             <div>
//               <Link to="#">About CPS</Link>
//               <ul>
//                 <li>
//                   <Link to="#">Item 1</Link>
//                 </li>
//                 <li>
//                   <Link to="#">Item 2</Link>
//                 </li>
//                 <li>
//                   <Link to="#">Item 3</Link>
//                 </li>
//                 <li>
//                   <Link to="#">Item 4</Link>
//                 </li>
//               </ul>
//             </div>
//           </li>

//           <li>
//             <img src={Logo} />
//           </li>
//           <li>
//             <div>
//               <GiReceiveMoney />
//             </div>
//             <div>
//               <Link to="#">Specials</Link>
//             </div>
//           </li>
//           <li>
//             <div>
//               <BsFillChatSquareQuoteFill />
//             </div>
//             <div>
//               <Link to="#"> Get In Touch</Link>
//             </div>
//           </li>
//           <li>
//             <div>
//               <RiArticleLine />
//             </div>
//             <div>
//               <Link to="#">Articles</Link>
//             </div>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   </section>
// </header>
//   </MediaQuery>
// )

// import MediaQuery from "react-responsive"

const Example = () => {
  return (
    // Desktop
    <div>
      <MediaQuery minWidth={1000}>
        <header className={headerStyle_D.desktop}>
          <section>
            <div>
              <div>
                <GiAlarmClock />
                <p>24 Hour Emergency Service</p>
              </div>

              <div>
                <p>708-428-4600</p> • <p>815-463-1900</p> <GiSmartphone />
              </div>
            </div>
          </section>
          <section>
            <div>
              <nav>
                <ul>
                  <li>
                    <div>
                      <BsWrench />
                    </div>
                    <div>
                      <Link to="#">Services</Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <FaMapMarkedAlt />
                    </div>
                    <div>
                      <Link to="#">Service Area</Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <BsPeopleFill />
                    </div>
                    <div>
                      <Link to="#">About CPS</Link>
                      <ul>
                        <li>
                          <Link to="#">Item 1</Link>
                        </li>
                        <li>
                          <Link to="#">Item 2</Link>
                        </li>
                        <li>
                          <Link to="#">Item 3</Link>
                        </li>
                        <li>
                          <Link to="#">Item 4</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <img src={Logo} />
                  </li>
                  <li>
                    <div>
                      <GiReceiveMoney />
                    </div>
                    <div>
                      <Link to="#">Specials</Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <BsFillChatSquareQuoteFill />
                    </div>
                    <div>
                      <Link to="#"> Get In Touch</Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <RiArticleLine />
                    </div>
                    <div>
                      <Link to="/blog">Articles</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </header>
      </MediaQuery>

      <MediaQuery maxWidth={999}>
        <header className={headerStyle_D.tablet}>
          <section className={headerStyle_D.topheader}>
            <div>
              <button>
                <MediaQuery minWidth={700}>
                  <Link to="#">
                    <BsChatSquareDots />
                  </Link>
                </MediaQuery>
                <MediaQuery maxWidth={699}>
                  <Link to="#">
                    <GiSmartphone />
                  </Link>
                </MediaQuery>
              </button>
            </div>
            <div>
              <img src={Logo} />
            </div>
            <div>
              <button
                onClick={function () {
                  const menu = document.getElementById("slideout")
                  if (menu.classList.contains(headerStyle_D.slideOpen)) {
                    menu.classList.remove(headerStyle_D.slideOpen)
                  } else {
                    menu.classList.add(headerStyle_D.slideOpen)
                  }

                  console.log("Button Pressed")
                }}
              >
                <FiMenu />
              </button>
            </div>
          </section>
          <section id="slideout" className={headerStyle_D.sideheader}>
            <div>
              <nav>
                <ul>
                  <li>
                    <div>
                      <BsWrench />

                      <Link to="#">Services</Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <FaMapMarkedAlt />

                      <Link to="#">Service Area</Link>
                    </div>
                  </li>
                  <li
                    id="hasSubMenu"
                    onClick={function () {
                      const submenu = document.getElementById("submenu")
                      if (
                        submenu.classList.contains(headerStyle_D.submenuOpen)
                      ) {
                        submenu.classList.remove(headerStyle_D.submenuOpen)
                      } else {
                        submenu.classList.add(headerStyle_D.submenuOpen)
                      }

                      console.log("Button Pressed")
                    }}
                  >
                    <div>
                      <BsPeopleFill />

                      <Link to="#">About CPS</Link>
                    </div>

                    <div id="submenu">
                      <ul class="open">
                        <li>
                          <Link to="#">Item 1</Link>
                        </li>
                        <li>
                          <Link to="#">Item 2</Link>
                        </li>
                        <li>
                          <Link to="#">Item 3</Link>
                        </li>
                        <li>
                          <Link to="#">Item 4</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div>
                      <GiReceiveMoney />
                      <Link to="#">Specials</Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <BsFillChatSquareQuoteFill />

                      <Link to="#"> Get In Touch</Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <RiArticleLine />

                      <Link to="#">Articles</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </header>
      </MediaQuery>
    </div>
  )
}
export default Example
