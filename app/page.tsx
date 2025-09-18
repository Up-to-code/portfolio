import Link from "next/link";
import { Repo } from "@/types";

import { siteConfig } from "@/config/site";
import { getPopularRepos } from "@/lib/utils";

export default async function Home() {
  const popularRepos = await getPopularRepos();

  return (
    <div className="mt-3 text-right"> {/* اتجاه النص لليمين */}
      <p className="text-pretty text-lg font-medium text-muted-foreground">
        أهلاً! أنا <span className="font-bold">أحمد</span>، مهتم بالمصادر المفتوحة
        وعندي شغف بواجهات الاستخدام. 
      </p>

      <h2 className="mb-3 mt-10 text-2xl font-bold md:mt-14">المشاريع</h2>

      <p className="text-balance text-lg font-medium text-muted-foreground">
        بالأسفل بعض المشاريع اللي اشتغلت عليها. ممكن تلاقي أغلب شغلي على{" "}
        <Link
          className="font-semibold underline underline-offset-2 transition hover:text-primary"
          href={siteConfig.links.github}
          target="_blank"
        >
          GitHub
        </Link>
        .
      </p>

      <ul className="-mx-4 mt-8 flex flex-col gap-5 px-1 sm:px-0">
        {popularRepos.map((repo: Repo) => (
          <li key={repo.id}>
            <Link
              className="-my-2 flex select-none items-center justify-between gap-2.5 rounded-xl px-4 py-2 text-lg font-medium transition-colors duration-300 hover:bg-accent"
              href={repo.html_url}
              target="_blank"
            >
              <p>{repo.name}</p>
              <span className="mx-2 h-px flex-1 bg-muted-foreground/20" />
              <p>{repo.stargazers_count} ⭐</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
