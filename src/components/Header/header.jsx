import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container, Dropdown } from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "bootstrap/dist/css/bootstrap.min.css";
import Bookingsection from "../bookingsection/herosection"

// Full country list with flags
const countries = [
  { name: "English (US)", code: "US", flag: "https://flagcdn.com/w40/us.png" },
  { name: "English (UK)", code: "GB", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "Deutsch (Germany)", code: "DE", flag: "https://flagcdn.com/w40/de.png" },
  { name: "Español (Spain)", code: "ES", flag: "https://flagcdn.com/w40/es.png" },
  { name: "Français (France)", code: "FR", flag: "https://flagcdn.com/w40/fr.png" },
  { name: "عربية (Saudi Arabia)", code: "SA", flag: "https://flagcdn.com/w40/sa.png" },
  { name: "हिंदी (India)", code: "IN", flag: "https://flagcdn.com/w40/in.png" },
  { name: "中文 (China)", code: "CN", flag: "https://flagcdn.com/w40/cn.png" },
  { name: "日本語 (Japan)", code: "JP", flag: "https://flagcdn.com/w40/jp.png" },
  { name: "Русский (Russia)", code: "RU", flag: "https://flagcdn.com/w40/ru.png" },
  { name: "Português (Brazil)", code: "BR", flag: "https://flagcdn.com/w40/br.png" },
  { name: "Türkçe (Turkey)", code: "TR", flag: "https://flagcdn.com/w40/tr.png" },
  { name: "한국어 (South Korea)", code: "KR", flag: "https://flagcdn.com/w40/kr.png" },
  { name: "Italiano (Italy)", code: "IT", flag: "https://flagcdn.com/w40/it.png" },
 
];

const Header = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userIcon, setUserIcon] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to English (US)

  useEffect(() => {
    setUserEmail(localStorage.getItem("userEmail"));
    setUserIcon(localStorage.getItem("userIcon"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userIcon");
    setUserEmail(null);
    setUserIcon(null);
  };

  return (
   <>
    <div className="bg-primary">
      <Container>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
            Booking.com
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link as={Link} to="#" className="text-light">
                PKR
              </Nav.Link>

              <Dropdown >
                <Dropdown.Toggle
                  variant="transparent"
                  className="text-light border-0 bg-transparent "
                >
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    width="25"
                    height="20"
                    className="rounded me-1"
                  />
                  {selectedCountry.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {countries.map((country, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => setSelectedCountry(country)}
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        width="20"
                        height="15"
                        className="me-2"
                      />
                      {country.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link as={Link} to="#" className="text-light">
                List your property
              </Nav.Link>

              {userEmail ? (
                <Dropdown>
                  <Dropdown.Toggle
                    variant="transparent"
                    className="text-light border-0 bg-transparent"
                  >
                    <AccountCircleIcon style={{ fontSize: 30 }} /> {userEmail}
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end">
                    <Dropdown.Item as={Link} to="/profile">
                      My Account
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/bookings">
                      Bookings & Trips
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/loyalty">
                      Genius Loyalty Program
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/rewards">
                      Rewards & Wallet
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/reviews">
                      Reviews
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/saved">
                      Saved
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Button as={Link} to="/register" variant="outline-light" className="me-2">
                    Register
                  </Button>
                  <Button as={Link} to="/login" variant="light">
                    Sign in
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      
    </div>
    <Bookingsection/>
   </>
  );
};

export default Header;
