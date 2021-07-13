import { sdk } from "lib/datocms";
import { PostBySlugDocument } from "lib/graphql";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import type { QueryListenerOptions } from "react-datocms";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Header from "ui/header";
import Layout from "ui/layout";
import MoreStories from "ui/more-stories";
import PostBody from "ui/post-body";
import PostHeader from "ui/post-header";
import SectionSeparator from "ui/section-separator";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await sdk
      .AllPostsSlugs()
      .then((data) => data.allPosts.map((post: any) => `/posts/${post.slug}`)),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
  preview = false,
}: GetStaticPropsContext<{ slug: string }>) => {
  const graphqlRequest = {
    query: PostBySlugDocument.loc?.source.body!,
    initialData: await sdk.PostBySlug({ slug: params?.slug ?? "" }),
    preview,
    variables: {
      slug: params?.slug,
    },
  };

  const subscription: QueryListenerOptions<any, any> = preview
    ? {
        ...graphqlRequest,
        token: process.env.NEXT_CMS_DATOCMS_API_TOKEN!,
        enabled: true,
      }
    : {
        ...graphqlRequest,
        enabled: false,
      };

  return {
    props: {
      preview,
      subscription,
    },
  };
};

const PostPage = ({
  subscription,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useQuerySubscription(subscription);

  const { site, post, morePosts } = data;

  const metaTags = post.seo.concat(site.favicon);

  return (
    <Layout preview={preview}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Header />
      <article>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </article>
      <SectionSeparator />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Layout>
  );
};

export default PostPage;
