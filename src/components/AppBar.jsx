import PageContainer from "./common/Container";
import { Box } from "@chakra-ui/react";
import Logo from "./Logo/Logo";

const AppBar = () => {
  return (
    <Box as="header" minH="72px" bg="var(--gray)" border="1px solid #F2F4F7">
      <PageContainer>
        <Logo />
      </PageContainer>
    </Box>
  );
};

export default AppBar;
