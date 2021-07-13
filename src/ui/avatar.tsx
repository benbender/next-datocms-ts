import type { FileField } from "lib/graphql";
import Image from "next/image";

export default function Avatar({
  name,
  picture,
}: {
  name: string;
  picture: FileField;
}) {
  return (
    <div className="flex items-center">
      <Image
        src={picture.url}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
        width={48}
        height={48}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
