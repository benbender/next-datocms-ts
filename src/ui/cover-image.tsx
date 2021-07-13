import cn from "clsx";
import type { ResponsiveImage } from "lib/graphql";
import Link from "next/link";
import { Image } from "react-datocms";

export default function CoverImage({
  title,
  responsiveImage,
  slug,
}: {
  title: string;
  responsiveImage: ResponsiveImage;
  slug?: string;
}) {
  const image = (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      data={{
        ...responsiveImage,
        title: responsiveImage.title || undefined,
        base64: responsiveImage.base64 || undefined,
        bgColor: responsiveImage.bgColor || undefined,
        alt: `Cover Image for ${title}`,
      }}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );

  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
