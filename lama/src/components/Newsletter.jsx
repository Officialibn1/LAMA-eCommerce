import styled from 'styled-components'
import { Send } from "@material-ui/icons";


const Container = styled.div`
    height: 45vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size: 60px;
        opacity: .85;
        font-weight: 400;
    }

    p{
        font-size: 22px;
        margin: 20px 0;
    }

    div{
        display: flex;
        justify-content: space-between;
        width: 50%;
        height: 40px;
        border: 1px solid grey;

        input{
            padding-left: 20px;
            flex: 9;
            border: none;
            outline: none;
        }

        button{
            flex: 1;
            border: none;
            background-color: teal;
            cursor: pointer;
            color: #fff;
        }
    }

`

const Newsletter = () => {
    return (
        <Container>
            <h1>Newsletter</h1>
            <p>Get timely updates from your favourite products.</p>
            <div>
                <input type="email" placeholder='Enter Email' />
                <button>
                    <Send />
                </button>
            </div>
        </Container>
    );
}

export default Newsletter;
