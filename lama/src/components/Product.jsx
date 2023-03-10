import styled from "styled-components";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    background-color: rgba(61, 61, 61, 0.294);
    width: 100%;
    height: 100%;
    opacity: 0;

    div{
        background-color: #fff;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        transition: all .5s ease;
        background-color: rgba(255, 255, 255, 0.82);
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
        }
    }
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
        transition: all 1s ease;
    }

    img{
        height: 75%;
        z-index: 1;
    }

`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`




const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <img src={item.img} alt="" />
            <Info>
                <div>
                    <ShoppingCartOutlined />
                </div>
                <div>
                    <SearchOutlined />
                </div>
                <div>
                    <FavoriteBorderOutlined />
                </div>
            </Info>
        </Container>
    );
}

export default Product;
