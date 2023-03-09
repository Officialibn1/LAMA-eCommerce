import styled from "styled-components";

const Container = styled.div`
    padding: 4px 0;
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`
const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50!!
        </Container>
    );
}

export default Announcement;
