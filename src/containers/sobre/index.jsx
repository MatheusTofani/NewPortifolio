import { Tilt } from 'react-tilt'
import { Container } from "../../components/container/style";
import Profile from "../../assets/profile.png";
import { Image } from "../../components/image/style";
import { SobreContainer, SobreDescription, SobreTitle } from "./style";

const defaultOptions = {
    reverse: true,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: false,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

const Sobre = () => {
    return (
        <Container id='sobre' displayMobile="flex" flexDirectionMobile="column-reverse" display="flex" justiify="space-between" align="center" height="100%">
            <Tilt options={defaultOptions} >
                <Image heightMobile="300px"
                    borderRadius="50%"
                    height="400px"
                    border="10px solid #5A30C5"
                    src={Profile}
                />
            </Tilt>
            <SobreContainer>
                <SobreTitle>Sobre mim</SobreTitle>
                <SobreDescription>Meu nome é Matheus, sou desenvolvedor front-end com experiência em React, Redux e Styled-Components. Procuro sempre entregar designs bons, responsivos e que proporcionem uma ótima experiência ao usuário. Estou sempre desenvolvendo minhas habilidades e aprendendo novas tecnologias para informar sobre soluções modernas.</SobreDescription>
            </SobreContainer>
        </Container>
    );
};

export default Sobre;
