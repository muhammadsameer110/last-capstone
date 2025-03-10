// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Button, Container, Dropdown } from "react-bootstrap";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Herosection from "../bookingsection/herosection";

// const Header = () => {
//   const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
//   const [userIcon, setUserIcon] = useState(localStorage.getItem("userIcon"));

//   const handleLogout = () => {
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userIcon");
//     setUserEmail(null);
//     setUserIcon(null);
//   };

//   return (
//     <>
//       <div className="bg-primary">
//         <Container>
//           <Navbar bg="primary" expand="lg" variant="dark">
//             <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
//               Booking.com
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbar-nav" />
//             <Navbar.Collapse id="navbar-nav">
//               <Nav className="ms-auto d-flex align-items-center">
//                 <Nav.Link href="#" className="text-light">
//                   PKR
//                 </Nav.Link>
//                 <Nav.Link href="#" className="text-light">
//                   <img
//                     src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/images-flags/Us@3x.png"
//                     alt="USA"
//                     width="25"
//                     height="20"
//                     className="rounded"
//                   />
//                 </Nav.Link>
//                 <Nav.Link href="#" className="text-light">
//                   List your property
//                 </Nav.Link>

//                 {userEmail ? (
//                   <Dropdown>
//                     <Dropdown.Toggle
//                       variant="transparent"
//                       className="text-light border-0 bg-transparent"
//                     >
//                       <AccountCircleIcon style={{ fontSize: 30 }} /> {userEmail}
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu align="end">
//                       <Dropdown.Item as={Link} to="/profile">
//                         My Account
//                       </Dropdown.Item>
//                       <Dropdown.Item as={Link} to="/bookings">
//                         Bookings & Trips
//                       </Dropdown.Item>
//                       <Dropdown.Item as={Link} to="/loyalty">
//                         Genius Loyalty Program
//                       </Dropdown.Item>
//                       <Dropdown.Item as={Link} to="/rewards">
//                         Rewards & Wallet
//                       </Dropdown.Item>
//                       <Dropdown.Item as={Link} to="/reviews">
//                         Reviews
//                       </Dropdown.Item>
//                       <Dropdown.Item as={Link} to="/saved">
//                         Saved
//                       </Dropdown.Item>
//                       <Dropdown.Divider />
//                       <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 ) : (
//                   <>
//                     <Button as={Link} to="/register" variant="outline-light" className="me-2">
//                       Register
//                     </Button>
//                     <Button as={Link} to="/login" variant="light">
//                       Sign in
//                     </Button>
//                   </>
//                 )}
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Header;
