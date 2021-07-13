import type { FileField, ImageBlockRecord } from "lib/graphql";
import { Image, StructuredText, StructuredTextDocument } from "react-datocms";

export default function PostBody({
  content,
}: {
  content: StructuredTextDocument;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (
              record.__typename === "ImageBlockRecord" &&
              (record as ImageBlockRecord).image &&
              (record as ImageBlockRecord).image?.responsiveImage
            ) {
              return (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image
                  data={(record.image as FileField).responsiveImage as any}
                />
              );
            }

            return (
              <>
                <p>Don&apos;t know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
