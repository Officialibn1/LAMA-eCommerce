import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;


    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    p{
        font-size: 30px;
        color: #fff;
        margin: 20px 0;
        font-weight: 600;
    }

    button{
        padding: 10px;
        font-size: 18px;
        font-weight: 500;
        border: none;
        cursor: pointer;
    }
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <img src={item.img} alt="" />
            <Info>
                <p>{item.title}</p>
                <button>SHOP NOW</button>
            </Info>
        </Container>
    );
}

export default CategoryItem;
