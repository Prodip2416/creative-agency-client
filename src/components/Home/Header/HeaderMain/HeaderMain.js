import React from 'react';

const HeaderMain = () => {
    return (
        <header className="container header">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-5 mb-5">
                   <div className="mt-3 mb-5">
                        <h1>Let’s Grow Your<br /> Brand To The <br /> Next Level</h1>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                        <button style={{ backgroundColor: '#111430', width: '170px' }} className="btn text-white mt-3">HIRE US</button>
                   </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 mt-3 text-center">
                    <img className="img img-fluid" style={{height:'360px'}} src="https://i.ibb.co/ncvFwyG/Frame.png" alt=""/>
                </div>
            </div>
        </header>
    );
};

export default HeaderMain;