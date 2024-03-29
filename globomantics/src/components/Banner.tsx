import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './banner.css';

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
};

const Banner = ({ children }: any) => {
    return (
        <Row as={"header"} className='mb-4'>
            <Col md={5}>
                <img src="./imgs/GloboLogo.png" alt="logo" className='logo' />
            </Col>
            <Col md={7} className='mt-5' style={subtitleStyle}>
                { children }
            </Col>
        </Row>
    );
};

export default Banner;