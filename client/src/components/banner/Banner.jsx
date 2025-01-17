
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background:  blue;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 80px;
    color: #FFFFFF;
    line-height: 1;
    font-weight: bold;
`;

const SubHeading = styled(Typography)`
    margin: 10px;
    font-size: 20px;
    background: blue;
    color: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Create Your Portfolio</Heading>
            <SubHeading>SHUVRAJIT DEB ROY</SubHeading>
        </Image>
    )
}

export default Banner;