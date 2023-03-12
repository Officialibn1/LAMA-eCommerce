import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {  } from "@material-ui/icons";
import { Mobile } from '../Responsive';


const Container = styled.div`
    h1{
        margin: 10px 20px;
        font-size: 30px;
        opacity: .8;
    }
`

const FilterContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Mobile({
        alignItems: 'flex-start',
    })}
`

const Filter = styled.div`

    ${Mobile({
        display: 'flex',
        flexDirection: 'column',  
          
    })}

    select{
        padding: 5px;
        margin-left: 10px;

        ${Mobile({
            margin: '5px 0',
            border: '1px solid grey'
        })}
        
    }

    span{
        ${Mobile({
            fontSize: '20px'
        })}
    }
    
`

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <h1>Dresses</h1>
            <hr />
            <FilterContainer>
                <Filter>
                    <span>Filter Products : </span>
                    <select name="filter" id="">
                        <option value="Color" disabled selected>Color</option>
                        <option value="White" >White</option>
                        <option value="Black">Black</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                    </select>
                    <select name="filter" id="">
                        <option value="SIze" disabled selected>SIze</option>
                        <option value="XS" >XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </Filter>
                <Filter>
                    <span>Sort Products :</span>
                    <select name="sort" id="">
                        <option value="Newest" selected>Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    );
}

export default ProductList;
