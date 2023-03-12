import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { Mobile } from '../Responsive';



const Container = styled.div`
    
`

const Wrapper = styled.div`
    display: flex;
    height: 90vh;
    padding: 50px;

    ${Mobile({
        height: 'auto',
        padding: "10px 15px",
        flexDirection: 'column',
        width: '100vw'
    })}
`
const ImgContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;   

    img{
        height: 100%;
        object-fit: cover;
        margin: 0 auto;

        ${Mobile({
            height: '50vh',
            width: '100%'
        })}
    }
`
const DescContainer = styled.div`
    flex: 1;
    padding: 0 50px;

    ${Mobile({
        padding: '0 10px'
    })}

    h2{
        font-size: 40px;
        font-weight: 200;

        ${Mobile({
            fontSize: '35px'
        })}
    }

    p{
        margin: 40px 0;
        font-size: 22px;
        letter-spacing: 2px;

        ${Mobile({
            margin: '20px 0'
        })}
    }

    span{
        font-size: 35px;
        font-weight: 100;
    }
`

const FilterContainer = styled.div`
    margin: 20px 0;

    ${Mobile({
        display: 'flex',
        justifyContent: 'space-between'
    })}
`
const Filter = styled.div`
    display: flex;
    margin: 10px 0;
    align-items: center;

    h3{
        font-weight: 400;
        margin-right: 20px;
    }

    select{
        padding: 5px;
        outline: none;
        border: none;
    }
`
const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${({color}) => color};
    cursor: pointer;
    margin: 0 5px; 
`

const AmountContainer = styled.div`

    ${Mobile({
        display: 'flex',
        justifyContent: 'space-between',
        height: '60px'
    })}

    div{
        display: flex;
        align-items: center;
        margin: 20px 0;
        
        span{
            margin: 0 5px;
            font-size: 22px;
            font-weight: 300;
            height: 40px; 
            width: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid teal;

            ${Mobile({
                margin: '0 20px'
            })}
        }
    }

    button{
        padding: 7px;
        background: transparent;
        border: 2px solid rgb(0,128,128);
        cursor: pointer;
        font-weight: 500;
        font-size: 18px;
        transition: all .4s ease; 

        &:hover{
            box-shadow: 0px 0px 15px 8px rgba(0, 128, 128, 0.16);
        }
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>

                {/* Image Section */}
                <ImgContainer>
                    <img src="http://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
                </ImgContainer>

                {/* Description Section */}
                <DescContainer>

                    {/* Item Title */}
                    <h2>Denim Jumpsuit</h2>

                    {/* Item Description */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus ab quis excepturi rerum accusantium, aspernatur voluptatibus molestiae. Amet maxime temporibus eligendi exercitationem dolor unde.
                    </p>

                    {/* Price Of Item */}
                    <span>$ 20</span>

                    {/* Filter Item Container */}
                    <FilterContainer>

                        {/* Select Color Option Div */}
                        <Filter>
                            <h3>Color :</h3>
                            <FilterColor color='black'/>
                            <FilterColor color='darkblue'/>
                            <FilterColor color='gray'/>
                        </Filter>

                        {/* Select Size Option Div */}
                        <Filter>
                            <h3>Size :</h3>
                            <select name="" id="">
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </Filter>
                    </FilterContainer>

                    {/* Select Amount and Add to Cart Button Container */}
                    <AmountContainer>
                        <div>
                            <Add />
                            <span>1</span>
                            <Remove />
                        </div>
                        <button>Add to Cart</button>
                    </AmountContainer>
                </DescContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
}

export default Product;
