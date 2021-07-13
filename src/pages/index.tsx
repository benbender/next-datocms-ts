import { sdk } from "lib/datocms";
import { AllPostsDocument } from "lib/graphql";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import type { QueryListenerOptions } from "react-datocms";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import HeroPost from "ui/hero-post";
import Intro from "ui/intro";
import Layout from "ui/layout";
import MoreStories from "ui/more-stories";

export const getStaticProps = async ({ preview }: GetStaticPropsContext) => {
  const subscription: QueryListenerOptions<any, any> = preview
    ? {
        query: AllPostsDocument.loc?.source.body!,
        initialData: await sdk.AllPosts(),
        token: process.env.NEXT_CMS_DATOCMS_API_TOKEN!,
        environment: process.env.NEXT_DATOCMS_ENVIRONMENT || undefined,
        enabled: true,
      }
    : {
        enabled: false,
        query: AllPostsDocument.loc?.source.body,
        initialData: await sdk.AllPosts(),
      };

  return {
    props: {
      subscription,
    },
  };
};

const IndexPage = ({
  subscription,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    data: { allPosts, site, blog },
  } = useQuerySubscription(subscription);

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const metaTags = blog.seo.concat(site.favicon);

  return (
    <>
      <Layout preview={subscription.enabled ?? false}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Layout>
    </>
  );
};

export default IndexPage;
