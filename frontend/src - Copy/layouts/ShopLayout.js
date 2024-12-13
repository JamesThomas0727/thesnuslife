// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Link, Divider, Container, Typography, Box } from '@material-ui/core';
import ProductCard from '../components/productcard/ProductCard';
//

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
    return (
        <RootStyle>
            <Divider />
            <Container maxWidth="lg" sx={{ pt: 10 }}>
                <Box
                    sx={{
                        py: 4,
                        textAlign: 'center',
                        position: 'relative',
                        bgcolor: 'background.default'
                    }}
                >
                </Box>
            </Container>
            <Container maxWidth="lg" sx={{ pt: 10 }}>
                <Box
                    sx={{
                        py: 8,
                        textAlign: 'center',
                        position: 'relative',
                        bgcolor: 'background.default'
                    }}
                >
                    <ProductCard></ProductCard>
                </Box>
            </Container>
        </RootStyle>
    );
}