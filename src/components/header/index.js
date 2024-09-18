import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CountryDropdown from "../countryDropdown";
import { IoIosSearch } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaUser } from "react-icons/fa";
import { IoBagOutline} from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container" b>
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID 19</b> epidemic, orders may not be fulfilled.
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="column">
            

              <div className="col-sum-10 d-flex align-items-center part2">
                  <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
                <CountryDropdown />

                {/* search suru */}
                <div className="headerSearch ml-3 mr-3">
                  <input type="text" placeholder="Search" />
                  <Button>
                    <IoIosSearch />
                  </Button>
                </div>
                {/* search khatam */}

                <div className="part3 d-flex align-item-center ml-auto">
                  <Button className="circle mr-3">
                    <FaUser />
                  </Button>
                  <div ml-auto>
                    <span className="price d-flex align-item-center"> 3.27</span>
                  </div>
                   <div className = "cartTab">
                   <Button className="circle ml-2">
                    <IoBagOutline />
                  </Button>
                  <span className="count d-flex align-items-center justify-content-center">1</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
