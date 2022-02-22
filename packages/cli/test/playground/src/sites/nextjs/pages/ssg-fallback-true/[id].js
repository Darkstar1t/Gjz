import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
  return {
    props: {
      postData: {
        id: params.id,
        title: params.id,
      },
      envUrl: process.env.NEXT_PUBLIC_API_URL,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: true,
  };
}

export default function Post({ postData, envUrl }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>
          Server Side Rendering (Fallback true)
        </h1>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <h1 className={utilStyles.headingXl}>
          Env in jsx: {process.env.NEXT_PUBLIC_API_URL}
        </h1>
        <h1 className={utilStyles.headingXl}>
          Env in getStaticProps: {envUrl}
        </h1>
      </article>
    </Layout>
  );
}
