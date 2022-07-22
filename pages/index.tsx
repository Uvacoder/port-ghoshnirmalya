import Articles from "components/Articles";
import Projects from "components/Projects";
import Publications from "components/Publications";
import { GetStaticProps, NextPage } from "next";
import projects from "public/data/projects.json";
import publications from "public/data/publications.json";
import { ArticleStatus, IArticle } from "types/article";
import IProject from "types/project";
import IPublication from "types/publication";
import fetchAllArticles from "utils/fetch-all-articles";

interface IProps {
  articles: IArticle[];
  projects: IProject[];
  publications: IPublication[];
}

const IndexPage: NextPage<IProps> = ({ articles, projects, publications }) => {
  return (
    <div className="space-y-16">
      <Projects projects={projects} />
      <Articles articles={articles} />
      <Publications publications={publications} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchAllArticles();
  const publishedArticles = articles.filter(
    (article: IArticle) => article.status === ArticleStatus.Published
  );

  const lastFiveProjects = projects.slice(0, 5);
  const lastFivePublications = publications.slice(0, 5);
  const lastFiveArticles = publishedArticles.slice(0, 5);

  return {
    props: {
      articles: lastFiveArticles,
      projects: lastFiveProjects,
      publications: lastFivePublications,
    },
    revalidate: 60,
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default IndexPage;
