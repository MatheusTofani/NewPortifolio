import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../store/modalSlice";
import Card from "../../components/card";
import Modal from "../../components/modal/index";
import { Container } from "../../components/container/style";
import { Link, LinkContainer, ModalContaier, ModalContent, ModalFerramentas, ModalIcons, ProjectTitle, ProjetosGrid } from "./style";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiSass, SiBootstrap, SiTypescript, SiFigma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


const iconMapping = {
  React: <FaReact />,
  JavaScript: <SiJavascript />,
  SASS: <SiSass />,
  Bootstrap: <SiBootstrap />,
  TypeScript: <SiTypescript />,
  Figma: <SiFigma />,
};

const Projetos = () => {
  const dispatch = useDispatch();
  const { isModalVisible, selectedProject } = useSelector(
    (state) => state.modal
  );

  const handleOpenModal = (project) => {
    dispatch(openModal(project));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Container id="projetos" margin="100px auto" displayMobile="flex">
      <ProjectTitle>Projetos</ProjectTitle>
      <ProjetosGrid>
        <Card onClick={handleOpenModal} />
      </ProjetosGrid>

      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        {selectedProject && (
          <>
            <ModalContaier>
              <ModalContent border="1px solid white">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
               <LinkContainer>
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar Projeto
                </Link>
                

              
                <Link color="white" backgroundColor="#24292e" hoverBackgroundColor="#2b3137"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FaGithub className="github" />  Repositorio
                </Link>
                </LinkContainer>
              </ModalContent>
              <ModalContent>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <ModalFerramentas>
                  <strong> Ferramentas:</strong>
                  <ModalIcons>
                    {selectedProject.tools.map(tool => iconMapping[tool])}
                  </ModalIcons>
                </ModalFerramentas>

                <p>
                  <strong>Data:</strong> {selectedProject.data}
                </p>
              </ModalContent>
            </ModalContaier>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default Projetos;
