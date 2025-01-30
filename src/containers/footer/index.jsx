import { Container } from "../../components/container/style"
import { FooterContainer, FooterRedes, FooterText, Redes } from "./style"
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
const Footer = () => {
    return (
        <FooterContainer id="contato">
            <Container height="100%" display="flex" justiify="space-between" align="center" flexDirectionMobile="column-reverse" displayMobile="flex">
                <FooterText>  Desenvolvido por Matheus Tófani</FooterText>

                <FooterRedes>
                    <Redes target="_blank" href="https://wa.me/5531991580240"><FaWhatsapp /> </Redes>
                    <Redes target="_blank" href="https://www.instagram.com/matheus.tofani/"><FaInstagram /></Redes>
                    <Redes target="_blank" href="https://www.linkedin.com/in/matheustofani/"><FaLinkedin /></Redes>
                    <Redes target="_blank" href="https://github.com/MatheusTofani"><FaGithub /></Redes>
                    <Redes target="_blank" href="mailto:tofanimatheus@gmail.com"><IoMailSharp /></Redes>
                </FooterRedes>
            </Container>
        </FooterContainer>
    )
}

export default Footer