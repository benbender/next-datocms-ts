import { AuthorRecord, ResponsiveImage } from "lib/graphql";
import Link from "next/link";
import Avatar from "ui/avatar";
import CoverImage from "ui/cover-image";
import Date from "ui/date";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: {
    responsiveImage: ResponsiveImage;
  };
  excerpt: string;
  slug: string;
  date: string;
  author: AuthorRecord;
}) {
  return (
    <article>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h2 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h2>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author.name && author.picture ? (
            <Avatar name={author.name} picture={author.picture} />
          ) : null}
        </div>
      </div>
    </article>
  );
}
