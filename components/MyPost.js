import Image from "next/image";
import Mypost from "../public/MyPost.png";
import InfoPost from "./InfoPost";
import Link from "next/link";

export default function MyPost() {
  return (
    <article>
      <div className="flex -mx-4 items-center flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href="/detail">
            <a>
              <img
                src="./MyPost.png"
                alt="Picture of the author"
                className="w-full rounded-xl"
              />
            </a>
          </Link>
        </div>

        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            category="UI DESIGN"
            date="3 Juli 2020"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="/author.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
}
