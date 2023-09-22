import React from 'react'
import './order.css'
import img from './image.jpg'


const Order = () => {
    return (
        <>
            <div className="main">
                <div className="heading">
                    <button className="btn1"><i class="zmdi zmdi-long-arrow-left zmdi-hc-3x"></i></button>
                    <h3>ORDER INFORMATION </h3>
                </div>
                <div className="address">
                    <div className="adcontent">
                        <h3>Delivery Address</h3>
                        <h5>Please Choose Destination Address</h5>
                    </div>
                    <div className="icon">
                        <button className="btn2">
                            <i class="zmdi zmdi-chevron-right zmdi-hc-4x"></i>
                        </button>
                    </div>
                </div>
                <div className="center">
                    <label for="name"><h3>Dropship</h3></label>
                    <input type="checkbox" name="Dropship" />
                </div>
                <div className="address">
                    <div className="adcontent">
                        <h3>Shipping Option</h3>
                        <h5>Please Choose your shipping method</h5>
                    </div>
                    <div className="icon">
                        <button className="btn3">
                            <i class="zmdi zmdi-chevron-right zmdi-hc-4x"></i>
                        </button>
                    </div>
                </div>
                <div className="address">
                    <div className="adcontent">
                        <h3>Payment Option</h3>
                        <h5>Please Choose your payment method</h5>
                    </div>
                    <div className="icon">
                        <button className="btn3">
                            <i class="zmdi zmdi-chevron-right zmdi-hc-4x"></i>
                        </button>
                    </div>
                </div>
                <div className="orderdetails">
                    <div className="orderheading">
                        <h3>Order Details</h3>
                    </div>
                    <div className="order">
                        <div className="img">
                            <img src={img} alt="image" />
                        </div>
                        <div className="details">
                            ORIGINAL XYZ iPHONE <br/>
                            VARIENT: LIGHT BLUE, 50
                            <div className="iphone">
                                <h5>1 PCS(1.100gr) @RP. 120000.000</h5>
                            </div>
                        </div>
                    </div>
                    <div className="message">
                        <input type="text" placeholder="Optional message here" />
                    </div>
                </div>
                <div className="voucher">
                    <div className="code">
                        <input type="text" placeholder="Voucher Code"/>
                    </div>
                    <div className="apply">
                        <button className="btn4">
                            Apply
                        </button>
                    </div>
                </div>
                <div className="summary">
                    <div className="items">Total Items</div>
                    <div className="items">1 Items</div>
                    <div className="items">Total Weight</div>
                    <div className="items">250.200 Gram</div>
                    <div className="items">Total Order</div>
                    <div className="items">RP. 120000.000</div>
                    <div className="items">Voucher</div>
                    <div className="items">RP. 0</div>
                    <div className="items">Shipping Cost</div>
                    <div className="items">RP. 0</div>
                    <div className="items">Grant Total</div>
                    <div className="items">RP. 120000.00</div>
                </div>
                <div className="terms">
                    <h5>With Payment, Igree with terms and conditions</h5>
                </div>
                <div className="submit">
                    <button className="btn6">
                        FINISH
                    </button>
                </div>
            </div>
            <h1>New</h1>
        </>
    )
}

export default Order
