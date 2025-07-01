import Layout from "../components/layout";
import React from "react";
import EmptyPagePlaceholder from "../components/EmptyPagePlaceholder";
import Fees from "../components/Fees";
import PaymentDetails from "../components/PaymentDetails";
import {getAllFees} from "../libs/fees";

const SupportPage = ({fees}) => (
  <Layout pageTitle="Support | DCCN'2025" active="support">
    <section className="mb-12 pb-12" id="payment">
      <div className="container mx-auto px-4 md:w-1/2">
        <h2 className="h2">Payment Details</h2>
        <Fees className="pt-6 mt-8" fees={fees}/>
        <PaymentDetails className="mt-8" fees={fees}/>
      </div>
    </section>

    <section className="pb-12 pt-8 bg-gray-100" id="contact">
      <div className="container mx-auto px-4 pb-8 md:w-1/2">
        <h2 className="h2">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/images/undraw_envelope_n8lc.svg"
            alt="Undraw guy with an envolope"
            className="w-32 md:w-48 mb-8 md:mb-0 md:mr-8"
          />
          <div>
            <p className="text-gray-800 text-xl text-center md:text-left px-4 md:px-0">
              If you have any questions, please write us:
              <br/>
              <a href="mailto:org@dccn.ru" className="text-blue-600 hover:underline">org@dccn.ru</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export const getStaticProps = () => {
  const fees = getAllFees();
  return {
    props: {fees}
  }
};

export default SupportPage;
