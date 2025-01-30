import { CardContainer, CardContent, CardImage, CardTitle } from "./style";
import { Button } from "../buttons/style";
import { data } from "../../data/projetos";

const Card = ({ onClick }) => {
    return (
        <>
            {data.map((item) => (
                <CardContainer key={item.id} onClick={() => onClick(item)}>
                    <CardImage src={item.image} alt={item.title} />
                    <CardContent className="card-content">
                        <CardTitle >{item.title}</CardTitle>
                        <Button
                            backgroundColor="#a588f0"
                            color="white"
                            fontSize="13px"
                            padding="4px 10px"
                        >
                            Ver detalhes
                        </Button>
                    </CardContent>
                </CardContainer>
            ))}
        </>
    );
};

export default Card;
