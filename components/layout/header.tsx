import Link from "next/link";
 
import BlurImage from "@/components/blur-image";
import Image from "next/image";

export function Header() {
  return (
    <div className="flex items-center gap-4 py-4">
      <Link href="/" className="size-16 shrink-0 overflow-hidden rounded-full">
        <Image
          className="size-full object-cover"
          src={"https://avatars.githubusercontent.com/u/78514942?v=4"}
          alt="avatar"
          width={100}
          height={100}
          
        />
      </Link>

      <div>
        <h1 className="text-3xl font-bold">احمد منصور</h1>
        <p className="text-lg font-medium text-muted-foreground">
          مهندس برمجي 
        </p>
      </div>
    </div>
  );
}
