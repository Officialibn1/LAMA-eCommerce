import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';

// Styles using styled components
const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: .8px solid rgba(85, 85, 85, 0.513);
    
    input{
        padding: 8px;
        border: none;
        outline: none;
    }

`

const Center = styled.div`
    flex: 1;
    text-align: center;

    h1{
        font-weight: bold;
    }
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 15px;

    a{
        color: #000;
        text-decoration: none;
    }
`

// -----Styles ends here--------

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <input type="search"/>
                        <Search style={{cursor: 'pointer', color: 'grey', fontSize: '25px'}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <h1>LAMA.</h1>
                </Center>
                <Right>
                    <MenuItem><a href="#">REGISTER</a></MenuItem>
                    <MenuItem><a href="#">SIGN IN</a></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color='primary' >
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
