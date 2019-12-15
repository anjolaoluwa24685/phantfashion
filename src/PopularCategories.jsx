import React from 'react';

const LandingPage = () => (
    <div className="categoriesImages">
        <div> 
            <h5 className="downText">Popular Categories</h5> 
            </div>
    <div className="row card-wrapper">
        <div className="col-sm-3">
            <div className="card bg-dark text-white">
                <img className="card-img" src="/assets/category-1.jpg" alt="Card image cap"/>
                <div className="card-img-overlay">
                    <p className="card-title">Senator</p>
                    <small className="value">174</small>
                </div>
            </div>
            
        </div>
        <div className="col-sm-3">
            <div className="card bg-dark text-white">
                <img className="card-img" src="/assets/category-2.jpg" alt="Card image cap"/>
                <div className="card-img-overlay">
                    <p className="card-title">Agbada</p>
                    <small className="value">298</small>
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card bg-dark text-white">
                <img className="card-img" src="/assets/category-3.jpg" alt="Card image cap"/>
                <div className="card-img-overlay">
                    <p className="card-title">Kaftan</p>
                    <small className="value">62</small>
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card bg-dark text-white">
                <img className="card-img" src="/assets/category-4.jpg" alt="Card image cap"/>
                <div className="card-img-overlay">
                    <p className="card-title">Casual</p>
                    <small className="value">798</small>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
    <div className="col-sm-3">
        <div className="card bg-dark text-white">
            <img className="card-img" src="/assets/category-5.jpg" alt="Card image cap"/>
            <div className="card-img-overlay">
                    <p className="card-title">Corporate</p>
                    <small className="value">99</small>
                </div>
        </div>
    </div>
    <div className="col-sm-3">
        <div className="card bg-dark text-white">
            <img className="card-img" src="/assets/category-6.jpg" alt="Card image cap"/>
            <div className="card-img-overlay">
                    <p className="card-title">Shirts</p>
                    <small className="value">298</small>
                </div>
        </div>
    </div>
    <div className="col-sm-3">
        <div className="card bg-dark text-white">
            <img className="card-img" src="/assets/category-7.jpg" alt="Card image cap"/>
            <div className="card-img-overlay">
                    <p className="card-title">Shoes</p>
                    <small className="value">62</small>
                </div>
        </div>
    </div>
    <div className="col-sm-3">
        <div className="card bg-dark text-white">
            <img className="card-img" src="/assets/category-8.jpg" alt="Card image cap"/>
            <div className="card-img-overlay">
                    <p className="card-title">Accessories</p>
                    <small className="value">798</small>
                </div>
        </div>
    </div>
</div>
</div>
    
)


export default LandingPage;