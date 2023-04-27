import React from "react";

const TermsAndConditions = () => {
  return (
    <div>
      <div className="container lg:text-center lg:mt-44 mt-16 px-4  py-8">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-2 text-lg font-semibold">
          By using our website, you agree to the following terms and conditions:
        </p>
        <ul className="flex flex-col gap-3 text-start lg:text-center">
          <li className="lg:text-lg lg:font-semibold">1. You must be at least 18 years old to use our website.</li>
          <li className="lg:text-lg lg:font-semibold">
            2. You are solely responsible for the content you post on our website.
          </li>
          <li className="lg:text-lg lg:font-semibold">
            3. We reserve the right to remove any content that violates our terms
            and conditions.
          </li>
          <li className="lg:text-lg lg:font-semibold">
            4. We are not responsible for any losses or damages that may result
            from using our website.
          </li>
          <li className="lg:text-lg lg:font-semibold">
            5. We may modify or update these terms and conditions at any time
            without notice.
          </li>
        </ul>
        <p className="lg:text-lg mt-4 lg:font-semibold">
          If you have any questions or concerns about our terms and conditions,
          please contact us.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
