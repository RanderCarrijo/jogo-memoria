import styled from 'styled-components';

export const Container = styled.div`
    width: 100;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0;

    //Responsive mode
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    //Responsive mode
    @media (max-width:750px) {
        margin-bottom: 50px;
    }
`;

export const LogoLink = styled.a`
    display: block;
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;
    
    //Responsive mode
    @media (max-width: 750px) {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }

`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    //Responsive mode
    @media (max-width: 750px) {
        justify-content: center;
        margin: 0 20px;
    }
`;

    export const grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    //Responsive mode
    @media (max-width: 750px) {
        grid-template-columns: repeat(3, 1fr);

    }
`;
