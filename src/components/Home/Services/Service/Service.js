import React from 'react';
import './Service.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const Service = ({ service, handleClick }) => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <animated.div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center service-box card-service"
            style={{ transform: props.xy.interpolate(trans) }}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
            onClick={() => handleClick(service._id)}
        >
            <div className="mt-4">
                <img className="img-fluid rounded-circle w-25" src={`data:image/png;base64,${service.image.img}` || 'https://i.ibb.co/d6fT75N/service1.png'} alt="" />
            </div>
            <h3 className="mt-3">{service.title}</h3>
            <p className="mt-3 mb-4">{service.description}</p>
        </animated.div>
    );
};

export default Service;