import PageContainer from "./common/Container";
import { Box } from "@chakra-ui/react";

const AppBar = () => {
  return (
    <Box as="header" minH="72px" bg="var(--gray)" border="1px solid #F2F4F7">
      <PageContainer>APP BAR</PageContainer>
    </Box>
  );
};

export default AppBar;

// !!!! icon moon - create sprite - add sprite to public
