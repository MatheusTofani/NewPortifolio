import { Container } from "../../components/container/style"
import { Image } from "../../components/image/style"
import { HomeButtons, HomeContainer, HomeContent, HomeTitle, HomeWriter, ImageContainer } from "./style"
import ReactLogo from "../../assets/react.png"
import Typewriter from "typewriter-effect";
import { Button } from "../../components/buttons/style";

const Home = () => {
    return (
        <>
            <HomeContainer id="inicio">
                <Container displayMobile="flex" display="flex" justiify="space-between" align="center" height="100%">
                    <HomeContent>
                        <HomeTitle>
                            Matheus Tófani
                        </HomeTitle>
                        <HomeWriter>
                            <Typewriter
                                options={{
                                    strings: ["Desenvolvedor Front-End", "Desenvolvedor React", "Web Designer"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}
                            />
                        </HomeWriter>
                        <HomeButtons>
                            <Button background="linear-gradient(90deg, #442494 0%, #5A30C5 100%)" color="white" hoverBackground="linear-gradient(90deg, #755ab9 0%, #5A30C5 100%)"><a href="/curriculo.pdf" download style={{textDecoration: "none", color: "white"}}>Baixar CV</a></Button>
                            <Button backgroundColor="transparent" border="1px solid #5A30C5" color="white" hoverBackgroundColor="#5A30C5"><a target="_blank" href="https://wa.me/5531991580240" download style={{textDecoration: "none", color: "white"}}>Entrar em contato</a></Button>
                        </HomeButtons>
                    </HomeContent>

                    <ImageContainer>
                        <Image heightMobile="200px" src={ReactLogo} />
                    </ImageContainer>
                </Container>
            </HomeContainer>
        </>
    )
}

export default Home