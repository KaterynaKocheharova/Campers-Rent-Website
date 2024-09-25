import { Container } from "@chakra-ui/react";

const PageContainer = ({ children }) => {
  return (
    <Container maxW="1312px" mr="auto" ml="auto" pr="15px" pl="15px">
      {children}
    </Container>
  );
};

export default PageContainer;
