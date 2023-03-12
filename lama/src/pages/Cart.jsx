import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Mobile } from '../Responsive';

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;

    h1{
        text-align: center;
        font-weight: 300;
    }
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;

    ${Mobile({
        padding: '10px 0'
    })}

    button{
        padding: 5px 10px;
        font-weight: 500;
        cursor: pointer;
        background: transparent;
        border: 2px solid teal;
        color: #000;
        
        ${Mobile({
            fontSize: '14px',
            padding: '5px'
        })}
    }

    div{
        display: flex;
        align-items: center;

        p{
            margin: 0 10px;
            opacity: .9;
            cursor: pointer;

            ${Mobile({
                fontSize: '16px'
            })}
        }
    }
`

const Bottom = styled.div`
    display: flex;

    ${Mobile({
        flexDirection: 'column'
    })}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;

    ${Mobile({
        flexDirection: 'column',
        margin: '15px 0'
    })}
`

const ProductDetails = styled.div`
    flex: 4;
    display: flex;
    justify-content: space-between;
    padding-right: 30px;

    ${Mobile({
        flexDirection: 'column'
    })}

    img{
        width: 30%;

        ${Mobile({
            width: '100%'
        })}
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        span{
            ${Mobile({
                margin: '12px 0',
                fontSize: '20px'
            })}
        }
    }
`

const Color = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #000;
`

const PriceDetails = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div{
        display: flex;
        margin-bottom: 20px;

        ${Mobile({
            margin: '20px 0'
        })}

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            margin: 0 10px;

            ${Mobile({
                margin: '0px 20px'
            })}
        }
    }

    p{
        font-size: 30px;
        font-weight: 200;
    }
`

const Summary = styled.div`
    flex: 1;
    padding: 20px;
    height: 50vh;

    h1{
        font-weight: 300;
        margin-bottom: 20px;
    }

    div{
        display: flex;
        justify-content: space-between;
        margin: 20px 0;

        h3{
            font-weight: 400;
        }

        p{
            font-weight: 300;
        }
    }

    button{
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        font-weight: 600;
        font-size: 20px;
        border: none;
        background: teal;
        color: #fff;
        cursor: pointer;
    }
`


const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
                <Wrapper>
                    <h1>YOUR BAG</h1>
                    <hr />
                    <Top>
                        <button>CONTINUE SHOPPING</button>
                        <div>
                            <p>Shopping Bag (2)</p>
                            <p>Wishlist (0)</p>
                        </div>
                        <button>CHECKOUT NOW</button>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetails>
                                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                                    
                                    <div>
                                        <span><b>Product : </b>JESSIE THUNDER SHOES</span>
                                        <span><b>ID : </b>983862467</span>
                                        <Color />
                                        <span><b>Product Size : </b>34.5</span>
                                    </div>
                                </ProductDetails>
                                <PriceDetails>
                                    <div>
                                        <Add />
                                        <div>4</div>
                                        <Remove />
                                    </div>
                                    <p>$ 30</p>
                                </PriceDetails>
                            </Product>
                            <hr />
                            <Product>
                                <ProductDetails>
                                    <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                                    
                                    <div>
                                        <span><b>Product : </b>Philz DESIGNER T-SHIRT</span>
                                        <span><b>ID : </b>983862467</span>
                                        <Color />
                                        <span><b>Product Size : </b>L</span>
                                    </div>
                                </ProductDetails>
                                <PriceDetails>
                                    <div>
                                        <Add />
                                        <div>2</div>
                                        <Remove />
                                    </div>
                                    <p>$ 18.90</p>
                                </PriceDetails>
                            </Product>
                        </Info>

                        {/* Summary of Items in cart */}
                        <Summary>
                            <h1>ORDER SUMMARY</h1>
                            <div>
                                <h3>Subtotal</h3>
                                <p>$ 48.90</p>
                            </div>
                            <div>
                                <h3>Shipping</h3>
                                <p>$ 4.90</p>
                            </div>
                            <div>
                                <h3>Coupon Discount</h3>
                                <p>$ -4.90</p>
                            </div>
                            <div>
                                <h3>Total</h3>
                                <p>$ 48.90</p>
                            </div>
                            <button>Proceed to Payment</button>
                        </Summary>
                    </Bottom>
                </Wrapper>
            <Footer />
        </Container>
    );
}

export default Cart;
