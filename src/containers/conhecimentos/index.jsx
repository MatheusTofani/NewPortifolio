import { Container } from "../../components/container/style";
import { ConhecimentosTitle, Grid, GridItem, GridItemContent, IconContent } from "./style";
import { data } from "../../data/conhecimentos";

const Conhecimentos = () => {
    return (
        <Container margin="100px auto">
            <ConhecimentosTitle>Conhecimentos</ConhecimentosTitle>
            <Grid>
                {data.map((item) => (
                    <GridItem key={item.id}>
                        <IconContent>{<item.icon />}</IconContent> 
                        <GridItemContent>{item.title}</GridItemContent>
                    </GridItem>
                ))}
            </Grid>
        </Container>
    );
};

export default Conhecimentos;