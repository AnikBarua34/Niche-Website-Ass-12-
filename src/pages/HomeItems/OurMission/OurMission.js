import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ride from '../../../images/freeRide.png';
import './OurMission.css';
import { MdInput} from 'react-icons/md';
import Swal from 'sweetalert2';

const OurMission = () => {
    const bookFreeRide=()=>{
        alert('Free Rides Coming SooN, Stay with us')
        // Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: '',
        //     showConfirmButton: false,
        //     timer: 2000
        //   })
    }
    return (
        <div className="freeRide bg-success m-3 rounded mt-5">
            
            <Container className="mt-5">
            <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
                <img style={{width:'90%', height:'350px'}} src={ride} alt="" />
            </Col>


            <Col className="p-3" xs={12} sm={12} md={6} lg={6}>
            <h2 className="text-light fw-bold"><span className="text-dark">TAKE</span> A <span className="text-warning">FREE</span>  TEST <span className="text-dark">RIDE</span></h2>
            <h5 className="text-dark">Still thinking about test riding a Harley-Davidson®? 
                Or are you actually going to test ride a Harley-Davidson? 
                Whether you’re already a Harley® owner looking for your next bike 
                or if this will be your first ever Harley experience, we have a range 
                of the latest models available for you to take a free test ride.So what 
                are you waiting for? Get in touch today and find the bike that's right for you and your next adventure.</h5>
                <button onClick={bookFreeRide} className="btn btn-danger"><MdInput/> Book a free test Ride</button>
            </Col>

            </Row>
            </Container>
        </div>
    );
};

export default OurMission;