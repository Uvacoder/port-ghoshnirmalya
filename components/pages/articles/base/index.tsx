import { Box, Grid, SlideFade } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import IArticle from "types/article";
import IPublication from "types/publication";

const Articles = dynamic(
  () => import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);

interface Props {
  articles: (IArticle & IPublication)[];
  publications: any;
}

const Page: FC<Props> = ({ articles = [], publications = [] }) => {
  const allArticlesAndPublications = [...articles, ...publications];

  const sortedAllArticlesAndPublications: (IArticle & IPublication)[] =
    allArticlesAndPublications.sort(
      (a: IArticle & IPublication, b: IArticle & IPublication) => {
        return Number(new Date(b.data?.date)) - Number(new Date(a.data?.date));
      }
    );

  return (
    <SlideFade in>
      <Box maxW="2xl" mx="auto" px={4} py={8}>
        <Grid templateColumns="1fr">
          <Box as="section">
            <Articles
              articles={sortedAllArticlesAndPublications}
              hideViewAllLinksNode
            />
          </Box>
        </Grid>
      </Box>
    </SlideFade>
  );
};

export default Page;
