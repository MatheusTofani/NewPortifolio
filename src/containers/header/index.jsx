import { Container } from "../../components/container/style";
import { Branding, HeaderContainer, HeaderList, HeaderListItem, HeaderListLink } from "./style";
import { Link } from "react-scroll"; 

const Header = () => {
  return (
    <HeaderContainer>
      <Container displayMobile="flex" display="flex" justiify="space-between" align="center" height="100%">
        <Branding>MatheusTófani</Branding>
        <HeaderList>
          <HeaderListItem>
            <Link to="inicio" smooth={true} duration={500}>
              <HeaderListLink>Início</HeaderListLink>
            </Link>
          </HeaderListItem>
          <HeaderListItem>
            <Link to="sobre" smooth={true} duration={500}>
              <HeaderListLink>Sobre</HeaderListLink>
            </Link>
          </HeaderListItem>
          <HeaderListItem>
            <Link to="projetos" smooth={true} duration={500}>
              <HeaderListLink>Projetos</HeaderListLink>
            </Link>
          </HeaderListItem>
          <HeaderListItem>
            <Link to="contato" smooth={true} duration={500}>
              <HeaderListLink>Contato</HeaderListLink>
            </Link>
          </HeaderListItem>
        </HeaderList>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
