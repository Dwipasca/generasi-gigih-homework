import React from "react";

// ? style import css
import { Flex } from "@chakra-ui/react";

import Sidebar from "../sidebar";

const Layout = ({ component: Component }) => {
  return (
    <Flex>
      <Sidebar />
      <Component />
    </Flex>
  );
};

export default Layout;
