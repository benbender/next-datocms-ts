import cn from "clsx";
import Link from "next/link";

const Alert = ({ preview }: { preview: boolean }): JSX.Element => {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <div className="py-2 text-center text-sm container">
        {preview ? (
          <>
            <Link href="/api/exit-preview">
              <a className="underline hover:text-cyan duration-200 transition-colors">
                This is page is showing draft content. Click here to exit
                preview mode.
              </a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/api/preview">
              <a className="underline hover:text-cyan duration-200 transition-colors">
                This is page is showing published content. Click here to enter
                preview mode!
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Alert;
