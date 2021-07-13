import type { AuthorRecord, ResponsiveImage } from "lib/graphql";
import Avatar from "ui/avatar";
import CoverImage from "ui/cover-image";
import Date from "ui/date";
import PostTitle from "ui/post-title";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
}: {
  title: string;
  coverImage: {
    responsiveImage: ResponsiveImage;
  };
  date: string;
  author: AuthorRecord;
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {author.name && author.picture ? (
          <Avatar name={author.name} picture={author.picture} />
        ) : null}
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author.name && author.picture ? (
            <Avatar name={author.name} picture={author.picture} />
          ) : null}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
