import ProductionTitle from "@/components/production-title/production-title";
import { Breadcrumb } from "antd";
import { getFrontProductDetail, getFrontProductRelated } from "./actions";
import Head from "next/head";
import FeaturedListContainer from "@/components/featured-list/featured-list-container";
import RelatedProductList from "@/components/related-product-list/related-product-list";

const ArticleDetail = async ({
  params,
}: {
  params: Promise<{
    articleName: string;
    articleId: string;
  }>;
}) => {
  const { articleId } = await params;
  const [articleDetail, relatedProductList] = await Promise.all([
    getFrontProductDetail({ id: Number(articleId) }),
    getFrontProductRelated({ id: Number(articleId) }),
  ]);
  return (
    <>
      <Head>
        <title>{articleDetail.title}</title>
        <meta name="description" content={articleDetail.description} />
        <meta
          name="keywords"
          content={(articleDetail.focus_keyword || []).join(", ")}
        />
        <meta property="og:title" content={articleDetail.title} />
        <meta property="og:description" content={articleDetail.description} />
        <meta name="permalink" content={articleDetail.permalink} />
      </Head>
      <div className="px-60 py-24">
        <div className="mb-24">
          <Breadcrumb
            items={[
              {
                title: "Home",
              },
            ]}
          />
        </div>

        <ProductionTitle articleDetail={articleDetail} />
        <div className="flex mt-40 sticky top-173 right-60">
          <div className="flex-1">
            <div
              dangerouslySetInnerHTML={{ __html: articleDetail.content || "" }}
            ></div>
          </div>
          <FeaturedListContainer />
        </div>
        <RelatedProductList relatedProductList={relatedProductList || []} />
      </div>
    </>
  );
};
export default ArticleDetail;
