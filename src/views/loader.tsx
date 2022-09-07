import { motion } from "framer-motion";
import styled from "styled-components";
import Flex from "../components/flex";
import { ContainerAnimation, FloatInAnimation } from "../constants/animationConstants";
import { colors } from "../constants/styleConstants";
type Props = {
  setLoading: (loading: boolean) => void;
};
function Loader({ setLoading }: Props) {
  const itemMain = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      top: "2rem",
      scale: 0.5,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
      backgroundImage="/assets/pictures/backgroundOverlay.png"
      backgroundColor={colors.secondary}>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
        }}
        variants={ContainerAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}>
        <motion.div
          variants={itemMain}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}>
          <motion.svg width="254" height="79" viewBox="0 0 254 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M43.7032 38.144C56.9512 33.344 61.2712 27.584 61.2712 18.752C61.2712 7.52 53.3032 0.223999 36.7912 0.223999H0.887207V0.415997H2.42321C7.12721 0.415997 9.91121 0.992001 9.91121 5.504V72.8C9.91121 77.408 7.12721 77.888 2.42321 77.888H0.887207V78.08H42.2632C60.0232 78.08 67.4152 68.768 67.4152 58.016C67.3192 42.944 51.4792 36.704 43.7032 38.144ZM36.7912 0.703999C47.8312 0.703999 53.5912 7.52 53.5912 18.752C53.5912 28.64 50.1352 35.84 38.7112 39.296C30.5512 41.792 19.8952 45.92 17.7832 52.928V0.703999H36.7912ZM42.2632 77.792H17.6872V55.52C17.6872 51.584 19.8952 45.536 38.9032 39.68L39.1912 39.584C39.3832 39.488 39.4792 39.392 39.6712 39.392C48.0232 37.184 59.5432 44.192 59.5432 58.112C59.5432 68.864 53.3032 77.792 42.2632 77.792Z"
              fill="white"
            />
            <motion.path
              d="M105.788 0.223999V0.512001H107.228C112.028 0.512001 114.716 0.992001 114.716 5.6V72.8C114.716 77.504 112.028 77.984 107.228 77.984H105.788V78.176H131.516V77.984H130.076C125.276 77.984 122.588 77.408 122.588 72.8V5.6C122.588 0.992001 125.276 0.512001 130.076 0.512001H131.516V0.223999H105.788Z"
              fill="white"
            />
            <motion.path
              d="M236.356 0.223999L208.132 47.36C204.676 41.312 186.724 10.016 181.156 0.223999H165.124V0.512001H166.564C171.364 0.512001 174.052 0.992001 174.052 5.6V72.8C174.052 77.504 171.364 77.984 166.564 77.984H165.124V78.176H183.46V77.984H182.02C177.22 77.984 174.532 77.408 174.532 72.8V4.352C181.06 15.968 199.684 48.224 202.564 53.312C202.852 53.888 203.236 54.464 203.524 55.04C200.452 60.224 197.092 66.56 197.092 70.496C197.092 75.2 199.972 78.272 204.484 78.272C211.78 78.272 215.332 73.376 215.332 66.272C215.332 61.28 212.26 54.752 208.324 47.84L236.26 1.088V72.896C236.26 77.504 233.572 77.984 228.772 77.984H227.332V78.272H253.06V77.984H251.62C246.82 77.984 244.132 77.504 244.132 72.896V5.6C244.132 0.992001 246.82 0.512001 251.62 0.512001H253.06V0.223999H236.356ZM204.484 77.792C200.26 77.792 197.572 75.2 197.572 70.496C197.572 66.848 200.836 60.704 203.812 55.52C207.364 61.568 210.34 67.232 210.34 70.88C210.34 75.104 208.132 77.792 204.484 77.792Z"
              fill="white"
            />
          </motion.svg>
        </motion.div>
        <Image
          variants={FloatInAnimation}
          src="/assets/painting/views.jpg"
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            width: "20%",
          }}
        />

        <Image
          variants={FloatInAnimation}
          src="/assets/painting/Page0007.jpg"
          style={{
            position: "absolute",
            bottom: "15%",
            left: "20%",
            height: "30%",
          }}
        />
        <Image
          variants={FloatInAnimation}
          src="/assets/painting/handwithflower2.jpg"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "20%",
            height: "35%",
            zIndex: 1,
          }}
        />

        <Image
          variants={FloatInAnimation}
          src="/assets/painting/Page0010.jpg"
          style={{
            position: "absolute",
            top: "15%",
            right: "10%",
            width: "20%",
          }}
        />
      </motion.div>
    </Flex>
  );
}
type ImageProps = {
  src: string;
  variants: any;
  style: any;
};
const Image = (props: ImageProps) => {
  const ClipContainer = styled.div`
    overflow: hidden;
    max-width: fit-content;
    max-height: fit-content;
  `;
  return (
    <ClipContainer>
      <motion.img variants={props.variants} src={props.src} style={props.style} />
    </ClipContainer>
  );
};
export default Loader;
