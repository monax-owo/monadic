import { logger } from "$lib/util/logger";
import { page } from "$app/stores";

// クラスじゃなくてstoreとnamespaceがいいな

type Page = {
  path: string | URL;
  title: string;
  desc: string;
};

class Pages {
  static pages: Page[] = [];

  /**
   * pages配列から合致するPageオブジェクトが合った場合trueを返す
   * 合致しなかった場合falseを返す
   */
  private static search(item: Page): boolean {
    return this.pages.some(
      (v) => v.path === item.path && v.title === item.title && v.desc === item.desc
    );
  }

  /**
   * add
   * Page型のオブジェクトからページを追加する
   */
  public static addPage(item: Page) {
    this.search(item) || this.pages.push(item);
  }

  /**
   * addPage
   * path,title,descを指定してページを追加する
   */
  public static add(path: string | null, title: string, desc: string) {
    const unsubscribe = page.subscribe((v) => {
      path = v.route.id;
    });
    if (!path) throw logger.error("path is nullish.");
    this.addPage({ path, title, desc });
    unsubscribe();
  }

  /**
   * addPage
   */
  public static get value(): Page[] {
    if (this.pages.length === 0) logger.error("pages is undefined");
    return this.pages;
  }
}

export { Pages };
export type { Page };
