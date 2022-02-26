import { Box } from "@chakra-ui/react";
import { Article } from "contentlayer/generated";
import React, { FC } from "react";
import Project from "types/project";

interface IProps {
  articles: Article[];
  projects: Project[];
}

const Page: FC<IProps> = () => {
  return <Box>Dashboard</Box>;
};

export default Page;
