

import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 30%;
    background-color: #fff;
    padding: 20px 40px;
    box-shadow: 0px 0px 10px 5px rgba(0, 128, 128, 0.335);

    header{
        font-size: 35px;
        text-align: center;
        margin-bottom: 15px;
        font-weight: 300;
        color: teal;
    }

    h1{
        font-size: 30px;
        font-weight: 300;
    }

    form{
        display: flex;
        margin: 20px 0;
        flex-direction: column;

        label{
            opacity: .9;
            font-weight: 500;
        }

        input{
            margin: 5px 0 10px;
            padding: 5px;
            padding-left: 15px;
            outline: none;
        }
        
        p{
            font-size: 13px;
        }

        button{
            width: 50%;
            padding: 8px 12px;
            margin: 10px 0;
            border: 2px solid rgb(0, 128, 128);
            cursor: pointer;

        }
    }

    #save{
        width: 15px;
        height: 15px;
        cursor: pointer;
    }

    span{
        font-size: 18px;
    }

    h3{
        font-weight: 300;
        font-size: 15px;
        text-decoration: underline;
        cursor: pointer;
        margin: 5px 0;
    }
`


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <header>
                    Welcome to LAMA.
                </header>
                <hr />
                <h1>Sign In</h1>
                <form action="">

                    <label htmlFor="email">Email :</label>
                    <input type="email" id='email' placeholder='Email'/>

                    <label htmlFor="password">Password :</label>
                    <input type="password" id='password' placeholder='Enter Password'/>

                    <button type="submit">SIGN IN</button>

                </form>
                <input type="checkbox" name="" id="save" /> <span>Save Password?</span>
                <br />
                <h3>Forgot Password?</h3>
                <h3>Don't have an account? Sign Up!</h3>
            </Wrapper>
        </Container>
    );
}

export default Login;
