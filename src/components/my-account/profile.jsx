import React from "react";
import { Card, Row, Col, Nav, Container } from "react-bootstrap";
import { FaLock, FaCheckCircle } from "react-icons/fa";
// import Addheader from "../Addation-header/Addheader";
import { CreditCard, Wallet, User, Lock, Users, Sliders, Mail, Briefcase, Heart, MessageCircle, HelpCircle, Globe, Gavel, Shield } from "lucide-react";






const Account = () => {
  const sections = [
    {
      title: "Payment info",
      items: [
        { icon: <Wallet />, text: "Rewards & Wallet" },
        { icon: <CreditCard />, text: "Payment methods" },
        { icon: <Wallet />, text: "Pay details & Wallet" },
      ],
    },
    {
      title: "Manage account",
      items: [
        { icon: <User />, text: "Personal details" },
        { icon: <Lock />, text: "Security settings" },
        { icon: <Users />, text: "Other travelers" },
        
      ],
    },
    {
      title: "Preferences",
      items: [
        { icon: <Sliders />, text: "Customization preferences" },
        { icon: <Mail />, text: "Email preferences" },
        { icon: <User />, text: "+2404-0000001 " },
        
      ],
    },
    {
      title: "Travel activity",
      items: [
        { icon: <Briefcase />, text: "Trips and bookings" },
        { icon: <Heart />, text: "Saved lists" },
        { icon: <MessageCircle />, text: "My reviews" },
      ],
    },
    {
      title: "Help and support",
      items: [
        { icon: <HelpCircle />, text: "Contact Customer Service" },
        { icon: <Globe />, text: "Safety resource center" },
        { icon: <Gavel />, text: "Dispute resolution" },
      ],
    },
    {
      title: "Legal and privacy",
      items: [
        { icon: <Shield />, text: "Privacy and data management" },
        { icon: <Gavel />, text: "Content guidelines" },
        { icon: <Lock />, text: "Security Privacy-&-Report" },
      ],
    },
    {
      title: "Manage your property",
      items: [{ icon: <Briefcase />, text: "List your property" }],
    },
  ];
  
  return (
   <>
   {/* <Addheader/> */}
    <div className="container mt-4">
      <Row>
        {/* Left Section */}
        <Col lg={8}>
          <Card className="p-4">
            <h4><strong>You have 2 Genius rewards</strong></h4>
            <p>Enjoy rewards and discounts on select stays and rental cars worldwide.</p>

            {/* Level Tabs */}
            <Nav variant="tabs" defaultActiveKey="level1">
              <Nav.Item>
                <Nav.Link eventKey="level1" className="fw-bold">
                  <FaCheckCircle className="text-warning" /> Level 1
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="level2" className="text-muted">
                  <FaLock /> Level 2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="level3" className="text-muted">
                  <FaLock /> Level 3
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Rewards */}
            <Row className="mt-3">
              {/* Level 1 Rewards */}
              <Col md={3} sm={6} xs={12} className="mb-3">
                <Card className="p-3 text-center border">
                  <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-traveller/GeniusRewardGiftBoxDiscount.png" alt="discount" />
                  <p>10% off stays off ?</p>
                </Card>
              </Col>
              <Col md={3} sm={6} xs={12} className="mb-3">
                <Card className="p-3 text-center border">
                  <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-traveller/GeniusCarBenefit.png" alt="car" />
                  <p>10% off rental cars</p>
                </Card>
              </Col>

              {/* Locked Level 2 Rewards */}
              <Col md={3} sm={6} xs={12} className="mb-3 opacity-50">
                <Card className="p-3 text-center border">
                  <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-traveller/GeniusRewardGiftBoxDiscount.png" alt="discount" />
                  <p>10–15% off stays off ?</p>
                </Card>
              </Col>
              <Col md={3} sm={6} xs={12} className="mb-3 opacity-50">
                <Card className="p-3 text-center border">
                  <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-traveller/GeniusRewardFreeBreakfast.png" alt="breakfast" />
                  <p>Free breakfast fastbreak</p>
                </Card>
              </Col>
              <Col md={3} sm={6} xs={12} className="mb-3 opacity-50">
                <Card className="p-3 text-center border">
                  <img src=" https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-traveller/GeniusRewardFreeRoomUpgrade.png" alt="room" />
                  <p>Free room upgrades</p>
                </Card>
              </Col>

              {/* Locked Level 3 Rewards */}
              <Col md={3} sm={6} xs={12} className="mb-3 opacity-50">
                <Card className="p-3 text-center border">
                  <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-traveller/GeniusRewardGiftBoxDiscount.png" alt="discount" />
                  <p>10–20% off stays off ?</p>
                </Card>
              </Col>
              <Col md={3} sm={6} xs={12} className="mb-3 opacity-50">
                <Card className="p-3 text-center border">
                  <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-traveller/GeniusRewardPrioritySupport.png" alt="support" />
                  <p>Priority support on stays</p>
                </Card>
              </Col>
            </Row>

            <a href="#" className="text-primary fw-bold">Learn more about your rewards</a>
          </Card>
        </Col>

        {/* Right Section (Sidebar) */}
        <Col lg={4}>
          <Card className="p-4 mb-3">
            <p className="fw-bold">
              <img src="https://t-cf.bstatic.com/design-assets/assets/v3.138.1/illustrations-traveller/GeniusAllBookingsStamp.png" alt="progress" className="me-2 img-fluid w-25 p-3" />
              You're 5 bookings away from Genius Level 2
            </p>
            <a href="#" className="text-primary">Check your progress</a>
          </Card>

          <Card className="p-5">
            <p>No Credits or vouchers yet <strong>0</strong></p>
            <a href="#" className="text-primary">More details</a>
          </Card>
        </Col>
      </Row>
    </div>
   
    <Container className="mt-4">
      <Row className="g-3">
        {sections.map((section, index) => (
          <Col md={4} sm={6} key={index}>
            <Card className="p-3">
              <h5 className="fw-bold">{section.title}</h5>
              {section.items.map((item, idx) => (
                <div key={idx} className="d-flex align-items-center my-2">
                  {item.icon} <span className="ms-2">{item.text}</span>
                </div>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
   </>
  );
};

export default Account;
