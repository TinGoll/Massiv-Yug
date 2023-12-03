import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Banner } from "../features/banner";
import Layout from "../layouts/layout";
import CarouselBlock from "../features/carousel-block";
import { OrderProcessBlock } from "../features/order-process-block";
import AdvantagesBlock from "../features/advantages-block";
import PartnerBlock from "../features/partner-block";
import { AboutCompanyBlock } from "../features/about-company-block";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <Banner />
        <CarouselBlock />
        <AdvantagesBlock />
        <OrderProcessBlock />
        <PartnerBlock />
        <AboutCompanyBlock />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Массив Юг - Главная</title>;
