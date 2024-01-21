import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Testimonial = (props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function LeaderBoard({  score, question,score2, question2,score3, question3 }) {
    console.log( score, question)
  const navigate = useNavigate();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} >
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Leader Board</Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Score Board</TestimonialHeading>
              <TestimonialText>
                You scored {score} out of {question}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Student-A"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Score Board</TestimonialHeading>
              <TestimonialText>
                You scored {score2} out of {question2}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Student-B"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Score Board</TestimonialHeading>
              <TestimonialText>
                You scored {score3} out of {question3}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Student-C"}
            />
          </Testimonial>
        </Stack>
        <Button width="20rem" m="auto" onClick={() => navigate("/")}>Go To Dashboard</Button>
      </Container>
    </Box>
  );
}
