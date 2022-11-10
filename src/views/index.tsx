import { faBehance, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Container from "../components/container";
import Content from "../components/content";
import Flex from "../components/flex";
import Grid from "../components/Grid";
import GridItems from "../components/GridItems";
import ArrowHand from "../components/icons/arrow-hand";
import Eclipse from "../components/icons/eclipse";
import Sparkle from "../components/icons/sparkle";
import WelcomeIcon from "../components/icons/welcome";
import WindLine from "../components/icons/wind-line";
import ImageContainer from "../components/imagePrarallax";
import Title from "../components/title";
import { colors } from "../constants/styleConstants";
import Loader from "./loader";

function Index() {
  const [loading, setLoading] = React.useState(true);
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const LinkText = styled.h4`
    margin-left: 1.5rem;
    font-size: 1.5rem;
    font-weight: 400;
    color: ${colors.primary};
    font-family: "Cantata One";
    cursor: pointer;
    &:hover {
      color: ${colors.light};
    }
  `;

  const LinkButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: ${colors.primary};
    font-family: "Cantata One";
  `;
  const ProjectTitle = styled.h3`
    font-size: 3rem;
    color: "black";
    font-weight: bold;
    font-family: "Emilea";
  `;
  const ProjectDescribtion = styled.p`
    font-size: 0.9rem;
    color: #5e616b;
    font-family: "Cantata One";
  `;
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />{" "}
        </motion.div>
      ) : (
        <div>
          {" "}
          <Flex
            alignItems="center"
            justifyContent="center"
            width="100vw"
            height="100vh"
            backgroundImage="/assets/pictures/backgroundOverlay.png"
            backgroundColor={colors.secondary}
          >
            {" "}
            <motion.div
              style={{
                position: "absolute",
                top: "2rem",
                scale: 0.5,
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
            >
              {" "}
              <motion.svg width="254" height="79" viewBox="0 0 254 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <motion.path
                  d="M43.7032 38.144C56.9512 33.344 61.2712 27.584 61.2712 18.752C61.2712 7.52 53.3032 0.223999 36.7912 0.223999H0.887207V0.415997H2.42321C7.12721 0.415997 9.91121 0.992001 9.91121 5.504V72.8C9.91121 77.408 7.12721 77.888 2.42321 77.888H0.887207V78.08H42.2632C60.0232 78.08 67.4152 68.768 67.4152 58.016C67.3192 42.944 51.4792 36.704 43.7032 38.144ZM36.7912 0.703999C47.8312 0.703999 53.5912 7.52 53.5912 18.752C53.5912 28.64 50.1352 35.84 38.7112 39.296C30.5512 41.792 19.8952 45.92 17.7832 52.928V0.703999H36.7912ZM42.2632 77.792H17.6872V55.52C17.6872 51.584 19.8952 45.536 38.9032 39.68L39.1912 39.584C39.3832 39.488 39.4792 39.392 39.6712 39.392C48.0232 37.184 59.5432 44.192 59.5432 58.112C59.5432 68.864 53.3032 77.792 42.2632 77.792Z"
                  fill="#5E616B"
                />{" "}
                <motion.path
                  d="M105.788 0.223999V0.512001H107.228C112.028 0.512001 114.716 0.992001 114.716 5.6V72.8C114.716 77.504 112.028 77.984 107.228 77.984H105.788V78.176H131.516V77.984H130.076C125.276 77.984 122.588 77.408 122.588 72.8V5.6C122.588 0.992001 125.276 0.512001 130.076 0.512001H131.516V0.223999H105.788Z"
                  fill="#5E616B"
                />{" "}
                <motion.path
                  d="M236.356 0.223999L208.132 47.36C204.676 41.312 186.724 10.016 181.156 0.223999H165.124V0.512001H166.564C171.364 0.512001 174.052 0.992001 174.052 5.6V72.8C174.052 77.504 171.364 77.984 166.564 77.984H165.124V78.176H183.46V77.984H182.02C177.22 77.984 174.532 77.408 174.532 72.8V4.352C181.06 15.968 199.684 48.224 202.564 53.312C202.852 53.888 203.236 54.464 203.524 55.04C200.452 60.224 197.092 66.56 197.092 70.496C197.092 75.2 199.972 78.272 204.484 78.272C211.78 78.272 215.332 73.376 215.332 66.272C215.332 61.28 212.26 54.752 208.324 47.84L236.26 1.088V72.896C236.26 77.504 233.572 77.984 228.772 77.984H227.332V78.272H253.06V77.984H251.62C246.82 77.984 244.132 77.504 244.132 72.896V5.6C244.132 0.992001 246.82 0.512001 251.62 0.512001H253.06V0.223999H236.356ZM204.484 77.792C200.26 77.792 197.572 75.2 197.572 70.496C197.572 66.848 200.836 60.704 203.812 55.52C207.364 61.568 210.34 67.232 210.34 70.88C210.34 75.104 208.132 77.792 204.484 77.792Z"
                  fill="#5E616B"
                />{" "}
              </motion.svg>{" "}
            </motion.div>{" "}
            <motion.div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
                zIndex: 1,
              }}
            >
              {" "}
              <Eclipse />{" "}
            </motion.div>{" "}
            <motion.div style={{ position: "absolute", bottom: "-5rem", left: "0", zIndex: 1 }}>
              <WindLine />
            </motion.div>
            <motion.div
              style={{
                position: "absolute",
                top: "-3rem",
                right: "0",
                zIndex: 1,
              }}
            >
              <Sparkle />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              style={{
                zIndex: 2,
              }}
            >
              <WelcomeIcon />
            </motion.div>
          </Flex>
          <motion.div
            style={{
              position: "absolute",
              bottom: "-4rem",
              right: "50%",
              translateX: "50%",
              zIndex: 1,
            }}
            whileInView={{
              y: [0, -30, 0],
              transition: {
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <ArrowHand />
          </motion.div>
          <Container backgroundColor={colors.primary} minHeight="100vh" pX="2rem" pTop="1rem" pBottom="4rem">
            <Title title="ABOUT ME" />
            <Grid cols={2} gap="2rem" alignItems="center">
              <Content pLeft="12rem" color="#5E616B" fontFamily="Cantata One" lineHeight="177%" fontSize="1rem">
                I&rsquo;m Hoang Anh and I really enjoy artworks, especially that involve 3d. My ambition is to become a
                3d artist so I equipped myself with the capability to use 3d programs such as Maya, 3dsmax, and Blender.
                Out of those programs, Maya is the one that I put the most effort into. I may be a newbie but that is
                not gonna stop me from finding new challenges to sharpen my skills and knowledge.
              </Content>
              <ImageContainer />
            </Grid>
          </Container>
          <Container backgroundColor={colors.secondary} minHeight="100vh" p="1rem 2rem">
            <Title title="Gallery" />
            <Grid cols={5} gap="2rem" justifyContent="flex-start" mTop="4rem">
              <GridItems src="assets/painting/postcard.jpg" />
              <GridItems src="assets/painting/mockup.jpg" />
              <GridItems src="assets/painting/Page0006.jpg" />
              <GridItems src="assets/painting/Page0002.jpg" />
              <GridItems src="assets/painting/Page0007.jpg" />
              <GridItems src="assets/painting/Page0009.jpg" />
              <GridItems src="assets/painting/views.jpg" />
              <GridItems src="assets/painting/Page0010.jpg" />
              <GridItems src="assets/painting/pl-01.png" />
              <GridItems src="assets/painting/thuyen.png" />
              <GridItems src="assets/painting/nhanhcayvabantay.jpg" />
              <GridItems src="assets/painting/handwithflower2.jpg" />
              <GridItems src="assets/painting/jolly.png" />
              <GridItems src="assets/3d/ao1.jpg" />
              <GridItems src="assets/3d/ao2.jpg" />
              <GridItems src="assets/3d/aoquan.jpg" />
              <GridItems src="assets/3d/model.jpg" />
              <GridItems src="assets/3d/nha.jpg" />
              <GridItems src="assets/3d/nha2.jpg" />
              <GridItems src="assets/3d/roboto.jpg" />
              <GridItems src="assets/3d/roboto2.jpg" />
              <GridItems src="assets/3d/roboto3.jpg" />
              <GridItems src="assets/3d/roboto4.jpg" />
            </Grid>
          </Container>
          <Container backgroundColor={colors.primary} minHeight="100vh" pX="2rem" pTop="1rem" pBottom="4rem">
            <Title title="Project" />
            <Grid cols={3} gap="2rem" alignItems="center">
              <GridItems colSpan={2} src="\assets\truyện tranh\1.png" p="3rem" />
              <Flex justifyContent="center" alignItems="center" flexDirection="column">
                <ProjectTitle>May ve que ngoai</ProjectTitle>
                <hr
                  style={{
                    width: "50%",
                    border: "1px solid #fff",
                  }}
                />
                <ProjectDescribtion>
                  The story is about a little girl named May. She was bornt and raised in a big modern city and
                  surrounded by technology, especially smartphones. Due to always keeping her eyes glued to her phone,
                  her parents decided to sent her to grandma house in the countryside, hoping that she can be apart with
                  her phone. After the first meal at grandma place, May discovered that there was no Internet connection
                  anywhere around. Will she be upset or will she find something that the never witness before?
                  Let&rsquo;s wait and find out!
                </ProjectDescribtion>
              </Flex>
            </Grid>
            <Grid cols={3} gap="2rem" alignItems="center">
              <Flex justifyContent="center" alignItems="center" flexDirection="column">
                <ProjectTitle>3D Project</ProjectTitle>
                <hr
                  style={{
                    width: "50%",
                    border: "1px solid #fff",
                  }}
                />
                <ProjectDescribtion>
                  This is the model and a small house in my final project. This model is a combination of a girl and a
                  plant, she will be the master of the world I built: build a house, plant a tree, raise a sheep and she
                  can change her own outfit. When you want to go back to where your tree house is still there, my game
                  is the place to return.
                </ProjectDescribtion>
              </Flex>
              <GridItems colSpan={2} src="\assets\3d\summary.png" p="3rem" />
            </Grid>
          </Container>
          <Container backgroundColor={colors.secondary} minHeight="100vh" pX="2rem" pTop="1rem" pBottom="4rem">
            <Title title="Contact" />
            <Grid cols={1} gap="2rem" alignItems="center">
              <Flex justifyContent="center" alignItems="center" flexDirection="column" width="100%">
                <LinkButton
                  onClick={() => {
                    openInNewTab("https://www.facebook.com/64.enter");
                  }}
                >
                  <FontAwesomeIcon icon={faFacebook} size={"7x"} color={colors.primary} />
                  <LinkText>Nguyễn Hoàng Anh</LinkText>
                </LinkButton>
                <LinkButton
                  onClick={() => {
                    openInNewTab("https://www.instagram.com/bim.nah/");
                  }}
                >
                  <FontAwesomeIcon icon={faInstagram} size={"7x"} color={colors.primary} />
                  <LinkText>64.enter</LinkText>
                </LinkButton>
                <LinkButton
                  onClick={() => {
                    openInNewTab("mailto:hoanganhn6402@gmail.com");
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} size={"7x"} color={colors.primary} />
                  <LinkText>hoanganhn6402@gmail.com</LinkText>
                </LinkButton>
                <LinkButton
                  onClick={() => {
                    openInNewTab("https://www.behance.net/NHoangAnh");
                  }}
                >
                  <FontAwesomeIcon icon={faBehance} size={"7x"} color={colors.primary} />
                  <LinkText>Nguyen Hoang Anh</LinkText>
                </LinkButton>
              </Flex>
            </Grid>
          </Container>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Index;
