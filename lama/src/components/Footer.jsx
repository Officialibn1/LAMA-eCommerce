import styled from 'styled-components'
import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";


const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

    h1{
        font-size: 40px;
        opacity: .85;
    }

    p{
        font-size: 18px;
        letter-spacing: 1.5px;
        margin: 15px 0;
    }
`

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;


`

const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${({bg}) => bg};
    color: #fff;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        transform: scale(1.1);
    }
`
const Center = styled.div`
    flex: 1;
    padding: 20px;

    h3{
        margin-bottom: 25px;
    }

    ul{
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        flex-wrap: wrap;

        li{
            width: 50%;
            margin-bottom: 5px;
        }
    }
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    
    div{
        display: flex;
        margin: 15px 0;

        p{
            margin-left: 15px;
        }
    }

    img{
        width: 50%;
    }
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <h1>LAMA.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae perferendis ad consequuntur dolorum consequatur expedita laboriosam quibusdam pariatur! Voluptatum.</p>
                <SocialContainer>
                    <SocialIcons bg='3b5999'>
                        <Facebook />
                    </SocialIcons>
                    <SocialIcons bg='e4405f'>
                        <Instagram />
                    </SocialIcons>
                    <SocialIcons bg='55acee'>
                        <Twitter />
                    </SocialIcons>
                    <SocialIcons bg='e60023'>
                        <Pinterest />
                    </SocialIcons>
                    <SocialIcons bg='2846b2'>
                        <LinkedIn />
                    </SocialIcons>
                </SocialContainer>
            </Left>

            <Center>
                <h3>Usefull Links.</h3>

                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Man Fasion</li>
                    <li>Woman Fasion</li>
                    <li>Accessories</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Terms & Conditions</li>
                </ul>
            </Center>
            <Right>
                <h1>Contact</h1>
                
                <div>
                    <Room /> <p>456, 3rd Avenue, Life Camp, Abuja</p>
                </div>
                
                <div>
                    <Phone /> <p>lama@lamacontact.com</p>
                </div>
                
                <div>
                    <MailOutline /> <p>+234 2243 2247 224</p>
                </div>
                
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            </Right>
        </Container>
    );
}

export default Footer;
