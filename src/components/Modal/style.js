import styled from "styled-components";

export const Container = styled.div`
    display: ${({toggleModal})=>toggleModal?'block':'none'};
    z-index: 20;
    padding-top: 100px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
`;


