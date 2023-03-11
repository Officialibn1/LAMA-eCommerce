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
    padding: 10px 40px;
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
            margin: 8px 0;
            border: 2px solid rgb(0, 128, 128);
            cursor: pointer;

        }
    }
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <header>
                    Welcome to LAMA.
                </header>
                <hr />
                <h1>Create an Account</h1>
                <form action="">
                    <label htmlFor="name">Name :</label>
                    <input type="text" id='name' placeholder='Name'/>
                    <label htmlFor="last">Last Name :</label>
                    <input type="text" id='last' placeholder='Last Name'/>
                    <label htmlFor="username">Username :</label>
                    <input type="text" id='username' placeholder='Username'/>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id='email' placeholder='Email'/>
                    <label htmlFor="password">Password :</label>
                    <input type="password" id='password' placeholder='Create Password'/>
                    <label htmlFor="confirm">Confirm Password :</label>
                    <input type="password" id='confirm' placeholder='Confirm Password'/>
                    <p>
                        By creating an account, I concent to the processing of my 
                        personal data in accordance with the <b>Privacy Policy</b>
                    </p>
                    <button type="submit">SIGN UP</button>
                </form>
            </Wrapper>
        </Container>
    );
}

export default Register;
