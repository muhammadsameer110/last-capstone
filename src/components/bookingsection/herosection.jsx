import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Nav, Navbar, Card, } from "react-bootstrap";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Box, Grid, CardMedia, CardContent, Typography, Link, Tabs, Tab } from "@mui/material";
// import FooterSection from "../footersection/footer";
import { useNavigate } from 'react-router-dom';
// import carsection from "../Carrentals/Carsection"




const BookingSection = () => {
  const cities = [
    {
      name: "Islamabad",
      properties: "296 properties",
      image: "https://r-xx.bstatic.com/xdata/images/city/170x136/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=",
    },
    {
      name: "Lahore",
      properties: "310 properties",
      image: "https://r-xx.bstatic.com/xdata/images/city/170x136/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o=",
    },
    {
      name: "Nathia Gali",
      properties: "3 properties",
      image: "https://r-xx.bstatic.com/xdata/images/country/170x136/364.jpg?k=e1060912bc701eda5db297a286037d2b2e3898e34362d7d22d8b754a260ea2fc&o=",
    },
    {
      name: "Murree",
      properties: "57 properties",
      image: "https://r-xx.bstatic.com/xdata/images/country/170x136/364.jpg?k=e1060912bc701eda5db297a286037d2b2e3898e34362d7d22d8b754a260ea2fc&o=",
    },
    {
      name: "Karachi",
      properties: "161 properties",
      image: "https://q-xx.bstatic.com/xdata/images/city/170x136/640442.jpg?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o=",
    },
    {
      name: "Skardu",
      properties: "18 properties",
      image: "https://r-xx.bstatic.com/xdata/images/country/170x136/364.jpg?k=e1060912bc701eda5db297a286037d2b2e3898e34362d7d22d8b754a260ea2fc&o=",
    },
  ];

  const destinations = [
    { name: "Lahore", country: "Pakistan", image: "https://cf.bstatic.com/xdata/images/city/600x600/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o=", flag: "🇵🇰" },
    { name: "Islamabad", country: "Pakistan", image: "https://cf.bstatic.com/xdata/images/city/600x600/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=", flag: "🇵🇰" },
    { name: "Dubai", country: "UAE", image: "https://cf.bstatic.com/xdata/images/city/600x600/977220.jpg?k=ee4b7b42c35b8cbf09c8ddb7630092b40cd706fec153c41904ed6e252a883938&o=", flag: "🇦🇪" },
    { name: "Karachi", country: "Pakistan", image: "https://cf.bstatic.com/xdata/images/city/600x600/640442.jpg?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o=", flag: "🇵🇰" },
    { name: "Mecca", country: "Saudi Arabia", image: "https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o=", flag: "🇸🇦" },
  ];

  const categories = [
    { name: "City", icon: "🏙️", active: true },
    { name: "Beach", icon: "🏖️", active: false },
    { name: "Outdoors", icon: "🚴", active: false },
    { name: "Relax", icon: "😌", active: false },
    { name: "Romance", icon: "❤️", active: false },
    { name: "Food", icon: "🍽️", active: false },
  ];
  const hotels = [
    {
      name: "Magnova Studios",
      location: "Istanbul, Turkey",
      rating: 8.9,
      reviews: "756 reviews",
      deal: "Early 2025 Deal",
      oldPrice: "PKR 124,425",
      newPrice: "PKR 53,503",
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/473779056.jpg?k=20a64fb5c28434fbdc07625b660d2cfe1b1df6d851fbeb249857c1aa851ae12a&o=",
    },
    {
      name: "GOODWOOD SUITES ",
      location: "Dubai, United Arab Emirates",
      rating: 9.1,
      reviews: "192 reviews",
      deal: "Early 2025 Deal",
      oldPrice: "PKR 198,154",
      newPrice: "PKR 126,224",
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/452641928.jpg?k=1fe552d4f4254cc42af82f22fabe6ae95f9f44306b8f92d56db44722b7cdd7e3&o=",
    },
    {
      name: "M Hotel Makkah ",
      location: "Mecca, Saudi Arabia",
      rating: 7.9,
      reviews: "13,542 reviews",
      deal: "Free Parking",
      oldPrice: "PKR 35,314",
      newPrice: "PKR 28,251",
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/579177669.jpg?k=d96eb42cebc8f17d59d8882cfe033d04197ab43f94fe3dc5de6103804858eea5&o=",
    },
    {
      name: "Ramada Hotel & Suites Sisli",
      location: "Istanbul, Turkey",
      rating: 8.2,
      reviews: "630 reviews",
      deal: "Limited-time Deal",
      oldPrice: "PKR 60,427",
      newPrice: "PKR 36,256",
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/38478395.jpg?k=f9086a2884db77e8083882672681e96560e826687d2265954f2daa0944e08e18&o=",


      
    },

    
  ];
  const hotelGuests = [
    {
      name: "Leman Locke",
      location: "Tower, United Kingdom, London",
      rating: 8.8,
      reviews: "Excellent · 722 reviews",
      price: "PKR 85,224",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/531732579.webp?k=df9d17c4371175b0e4a60e390083280c837d5e94dacc7d9ae6db48728b5fb5ff&o=",
    },
    {
      name: "Aparthotel Stare Miasto",
      location: "Old Town, Poland, Krakow",
      rating: 8.8,
      reviews: "Excellent · 3,094 reviews",
      price: "PKR 26,695",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
    },
    {
      name: "Villa Domina",
      location: "Split City Center, Croatia, Split",
      rating: 9.3,
      reviews: "Wonderful · 1,355 reviews",
      price: "PKR 14,638",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o=",
    },
    {
      name: "7Seasons Apartments Budapest",
      location: "06. Terézváros, Hungary, Budapest",
      rating: 8.8,
      reviews: "Excellent · 11,369 reviews",
      price: "PKR 23,421",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=",
    },
  ];

  const hoteltripplace = [
    {
      name: "Domki Wierszyki Shelters",
      location: "Poland, Zakopane",
      rating: 9.8,
      reviews: "Exceptional · 88 reviews",
      price: "PKR 85,224",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=d5b9f77442fa93b93c86a720abebfe39a3f9532d4efa6a9cefa231a2ded6bd95&o=", // Replace with actual image URL
    },
    {
      name: "Ranczo w Dolinie",
      location: "Poland, Kiszkowo",
      rating: 9.6,
      reviews: "Exceptional · 182 reviews",
      price: "PKR 26,695",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=f9cd3042175e0da40abf6d3988b9f3ac91aaeaefd9941081dbadfd0875c8ab27&o="
    },
    {
      name: "Tiny House Dreischwesternherz",
      location: "Germany, Trier",
      rating: 9.5,
      reviews: "Exceptional · 159 reviews",
      price: "PKR 14,638",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=0abbcd2115938850aa3372f4e7bf847f2aeb9579d674ec40ff273230a840eb9d&o="
    },
    {
      name: "Das rote Haus hinterm Deich",
      location: "Germany, Simonsberg",
      rating: 9.2,
      reviews: "Wonderful · 47 reviews",
      price: "PKR 23,421",
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/178421525.webp?k=6c9cfca83aa49631c55eaed32fb7a6eb68573ffa76a47b23346504830249b853&o="
    },
  ];
  const navigate = useNavigate();

  const images = [
    {
      id: 1,
      src:"https://cf.bstatic.com/xdata/images/xphoto/540x405/292049346.webp?k=ad53f89eb6ed386bcdb6100d5c729e6db510900f74d8891baaab2bf2a2283631&o= ",
      alt: "Los Angeles",
      title: "5 of the best hotels in Los Angeles",
      description: "From Hollywood to Beverly Hills discover 5 of the best hotels in Los Angeles for your stay",
    },
    {
      id: 2,
      src:"https://cf.bstatic.com/xdata/images/xphoto/540x405/292056369.webp?k=358d8cd9ede268c8a9660de4debc48b68fe5777bddce07972ac30ae28ab8b8f2&o=",
      alt: "Orlando Hotels",
      title: "The 6 best Orlando hotels for families",
      description: "Discover the best Orlando hotels for families for your vacation.",
    },
    {
      id: 3,
     src:"https://cf.bstatic.com/xdata/images/xphoto/540x405/288300879.webp?k=20a291605b4d1cc6c15b1ee3f9598c22ddb81a8d5ed73135330e426f8d2b9629&o=",
      alt: "Ski Towns",
      title: "5 best ski towns around the world",
      description: "Discover a winter wonderland in these charming ski destinations",
    },
  ];



 
  return (
    <>
    
      {/* Category Section */}
      <div className="bg-primary">
        <Container className=" text-right text-white" >
          <Nav className="justify-content-right ">
            <Nav.Item>
              <Nav.Link href="#" className=" text-white fw-bold">
                <FaMapMarkerAlt className="me-2" /> Stays
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">
                ✈️ Flights
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  href="carsection#}" className="text-white">
                🚗 Car rentals
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">
                🌟 Attractions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">
                🚖 Airport taxis
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </div>

      {/* Hero Section */}
      <div className="text-center bg-primary text-white py-5">
        <h1 className="fw-bold">Find your next stay</h1>
        <p className="mb-4">Search deals on hotels, homes, and much more...</p>

        {/* Search Box */}
        <Container className="mt-4">
          <Row className="align-items-center p-3 border border-warning rounded bg-white shadow-lg">
            <Col lg={4} md={12} className="d-flex align-items-center mb-2 mb-lg-0">
              <FaMapMarkerAlt className="me-2 text-secondary" />
              <Form.Control type="text" placeholder="Where are you going?" />
            </Col>

            <Col lg={4} md={6} className="d-flex align-items-center mb-2 mb-lg-0">
              <FaCalendarAlt className="me-2 text-secondary" />
              <Form.Control type="text" placeholder="Check-in Date - Check-out Date" />
            </Col>

            <Col lg={3} md={6} className="d-flex align-items-center mb-2 mb-lg-0">
              <FaUser className="me-2 text-secondary" />
              <Form.Select>
                <option>7 adults · 1 child · 1 room</option>
                <option>2 adults · 1 child · 1 room</option>
                <option>1 adult · 0 children · 1 room</option>
              </Form.Select>
            </Col>

            <Col lg={1} className="text-center ">
              <div>
              <Button variant="transparent" className="w-100 text-black border-0">
                <FaSearch /> Search
              </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5 ">
        <h2 className="fw-bold">Offers</h2>
        <p>Promotions, deals, and special offers for you</p>

        <Card className="mb-4 shadow-sm">
          <Row className="g-0">
            <Col md={8} className="p-4 text-center text-md-start">
              <h4 className="fw-bold">Save on stays worldwide</h4>
              <p>
                Start your year with an adventure, saving 15% or more with Early
                2025 Deals.
              </p>
              <div>
              <Button variant="primary">Save 15% or more</Button>
              </div>
            </Col>

            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src="https://r-xx.bstatic.com/xdata/images/xphoto/500x500/420460173.jpeg?k=0654940492bab9993284109d6136f220e700bbb4d5a0a972c4b4de3bdc0d8204&o="
                alt="Offer"
                className="img-fluid w-25 rounded-end pb-2"
              />
            </Col>

          </Row>
        </Card>
        <div className="container my-4">
      <h3 className="fw-bold">Trending destinations</h3>
      <div className="row g-3">
        {destinations.map((destination, index) => (
          <div key={index} className={`col-md-${index === 0 || index === 1 ? "6" : "4"} col-12`}>
            <div className="card border-0 shadow-sm">
              <img src={destination.image} className="card-img-top" alt={destination.name} />
              <div className="card-img-overlay d-flex align-items-start p-2">
                <h5 className="text-white fw-bold">
                  {destination.name} <span>{destination.flag}</span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

        <h3 className="fw-bold">Browse by property type</h3>
        <Row>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o="
              />
              <Card.Body>
                <Card.Title>Hotels</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o="
              />
              <Card.Body>
                <Card.Title>Apartments</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o="
              />
              <Card.Body>
                <Card.Title>Resorts</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o="
              />
              <Card.Body>
                <Card.Title>Villas</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="fw-bold">Explore Pakistan</h2>
        <Row className="g-4">
          {cities.map((city, index) => (
            <Col key={index} xs={6} sm={4} md={4} lg={2}>
              <Card className="border-0 shadow-sm rounded-4 text-center">
                <Card.Img variant="top" src={city.image} className="rounded-top-4" />
                <Card.Body>
                  <Card.Title className="fw-bold fs-5">{city.name}</Card.Title>
                  <Card.Text className="text-muted">{city.properties}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="container my-4">
      <h3 className="fw-bold text-center">Quick and Easy Trip Planner</h3>
      <p className="text-muted text-center">Pick a vibe and explore the top destinations in Pakistan</p>

      {/* Category Buttons */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`btn ${category.active ? "btn-primary" : "btn-outline-secondary"} rounded-pill`}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* City Cards with Responsive Scroll */}
      <div className="d-flex overflow-auto gap-3 pb-3 scroll-container">
        {destinations.map((city, index) => (
          <div key={index} className="card border-0" style={{ minWidth: "150px" }}>
            <img src={city.image} className="card-img-top rounded" alt={city.name} />
            <div className="card-body text-center p-2">
              <h6 className="mb-1">{city.name}</h6>
              <p className="text-muted small">{city.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="container my-4">
      <h3 className="fw-bold">Deals for the weekend</h3>

      <div className="row">
        {hotels.map((hotel, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-3">
            <div className="card border-0 shadow-sm">
              <img src={hotel.image} className="card-img-top" alt={hotel.name} />
              <div className="card-body">
                <span className="badge bg-primary">Genius</span>
                <h6 className="mt-2">{hotel.name}</h6>
                <p className="text-muted small">{hotel.location}</p>
                <span className="badge bg-success">{hotel.deal}</span>
                <div className="mt-2">
                  <span className="badge bg-secondary">{hotel.rating}</span> <small>{hotel.reviews}</small>
                </div>
                <p className="text-muted small mt-2">
                  2 nights <del className="text-danger">{hotel.oldPrice}</del>
                </p>
                <h5 className="fw-bold">{hotel.newPrice}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="container my-4">
      <h3 className="fw-bold">Homes guests love
      </h3>

      <div className="row">
        {hotelGuests.map((guest, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-3">
            <div className="card border-0 shadow-sm">
              <img src={guest.image} className="card-img-top" alt={guest.name} />
              <div className="card-body">
                <h6 className="mt-2">{guest.name}</h6>
                <p className="text-muted small">{guest.location}</p>
                <div className="mt-2">
                  <span className="badge bg-secondary">{guest.rating}</span>{" "}
                  <small>{guest.reviews}</small>
                </div>
                <p className="text-muted small mt-2">Starting from</p>
                <h5 className="fw-bold">{guest.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="container">
      <h2 className="my-4 text-center">Hotel Trip Places</h2>
      <div className="row">
        {hoteltripplace.map((guest, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-3">
            <div className="card border-0 shadow-sm">
              <img src={guest.image} className="card-img-top" alt={guest.name} />
              <div className="card-body">
                <h6 className="mt-2">{guest.name}</h6>
                <p className="text-muted small">{guest.location}</p>
                <div className="mt-2">
                  <span className="badge bg-secondary">{guest.rating}</span>{" "}
                  <small>{guest.reviews}</small>
                </div>
                <p className="text-muted small mt-2">Starting from</p>
                <h5 className="fw-bold">{guest.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Container>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Get inspiration for your next trip
      </Typography>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={image.src}
                  alt={image.alt}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {image.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {image.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
    <Container>
      <Box className="row border-buttom rounded mb-2">
        <Box className="col-md-6 col-sm-12  py-3" >
          <h2>Sign in, save money</h2>
          <p>Save 10% or more at participating properties – just look for the blue Genius label</p>
          <Box className="d-flex align-item-center ">
            <Link to="./login"><Button to="./login" className="me-3 ">sign in</Button></Link>
            <Link to="./register"><Button  className="border-0 bg-transpart">Register</Button></Link>
            
          </Box>
        </Box>
        <Box className="col-md-6 col-sm-12 pt-4">
          <img className="img-fluid w-25 rounded float-md-end text-center"  src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-traveller/GeniusGenericGiftBox.png" alt="" />
        </Box>
      </Box>
    </Container>
    <Box
    
      sx={{
        
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        p: 2,
      }}
    >
      <Container className="border rounded py-5" maxWidth="lg">
        <Grid container alignItems="center" spacing={2}>
          {/* Left Content */}
          <Grid item xs={12} md={6}>
          <Box className="text-center "
      onClick={() => navigate("/destination")} // Replace "/destination" with your route
      sx={{
        backgroundColor: "#0066EB",
        borderRadius: "50%", // Makes it a circle
        width: 200, // Set width
        height: 200, // Set height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        cursor: "pointer", // Makes it clickable
        "&:hover": { backgroundColor: "#0056C0" },
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Find <span style={{ textDecoration: "underline" }}>cottages</span>
      </Typography>
      <Typography variant="body1">for your next trip</Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#fff",
          color: "#0066EB",
          mt: 2,
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        Discover homes
      </Button>
    </Box>
          </Grid>

          {/* Right Illustration */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://cf.bstatic.com/psb/capla/static/js/../../static/media/bh_aw_cpg_main_image.b4347622.png"
                alt="Illustration"
                style={{ width: "100%", maxWidth: "300px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
   {/* <FooterSection/> */}
    </>
  );
};

export default BookingSection;