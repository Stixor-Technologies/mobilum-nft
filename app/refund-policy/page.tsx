import React from "react";

const RefundPolicy = () => {
  return (
    <section className="container  my-10 text-white">
      <h2 className="page_heading">Payment and Refund Policy</h2>
      <p className="text-center sm:text-left">
        Welcome to our website. It&apos;s essential to understand our payment
        and refund policies when you conduct transactions on our platform.
        Please carefully review the following terms to ensure you are fully
        informed before making a purchase.
      </p>

      <ul>
        <li>
          <h4 className="terms_subheading">Payment Methods</h4>
          <p className="term_text">
            We offer a range of payment options to make our services accessible
            and convenient. You can use major credit and debit cards, including
            VISA and Mastercard, along with alternative payment methods such as
            various cryptocurrencies. Our goal is to provide you with secure,
            efficient, and flexible payment solutions.
          </p>
        </li>

        <li>
          <h4 className="terms_subheading">Refunds</h4>
          <p className="term_text">
            Please be aware that all payments made on our platform are final and
            non-refundable. Once a payment is processed, it cannot be refunded
            or exchanged. We advise you to thoroughly review your purchase
            before completing it to ensure it meets your expectations.
          </p>

          <p className="term_text">
            In the rare case of a technical error on our part or if a service is
            not provided correctly, we are dedicated to customer satisfaction
            through our refund policy. You may qualify for a full refund if:
          </p>

          <ul className=" mt-4 list-inside list-disc pl-3 sm:pl-9">
            <li>
              The service you received was significantly different from its
              description or not provided at all.
            </li>

            <li>
              You encountered a technical error during the payment process that
              impacted the transaction.
            </li>
          </ul>

          <p className="term_text">
            To be eligible for a refund, you must submit a claim within 14 days
            of the transaction. Please provide detailed information about the
            issue and any supporting evidence. Our team will assess your claim
            and, if approved, process your refund within a specified timeframe.
          </p>

          <p className="term_text">
            This refund policy only applies to technical errors and service
            mismanagement. We encourage you to contact our support team
            immediately if you face any issues.
          </p>
        </li>

        <li>
          <h4 className="terms_subheading">Payment Security</h4>
          <p className="term_text">
            We prioritize the safety of your transactions and personal
            information. Our platform implements strong security measures to
            protect your data and ensure the integrity of your payments.
            However, you are also responsible for keeping your payment
            information secure and for using a secure internet connection while
            making transactions.
          </p>
        </li>

        <li>
          <h4 className="terms_subheading">Changes to Payment Methods</h4>
          <p className="term_text">
            We reserve the right to change or stop accepting any payment method
            at any time without prior notice. We will make efforts to keep you
            updated about the available payment methods through our website.
          </p>
        </li>

        <li>
          <h4 className="terms_subheading">Contact Us</h4>
          <p className="term_text">
            If you have any questions or concerns regarding our Payment and
            Refund Policy, please feel free to reach out to our support team. We
            are here to assist you with any inquiries or issues you may have.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default RefundPolicy;
