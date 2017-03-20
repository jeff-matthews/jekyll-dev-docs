---
layout: default
title: "Overview"
permalink: /basics/overview.html
---

AffiniPay is a payment processing platform that caters specifically to attorneys, accounting professionals, associations, and non-profits. Our dedicated focus to these industries gives us unique insight into what professionals are looking for in a payment processing platform.

The platform is built on a suite of APIs that enable partners and developers to integrate their solutions with the AffiniPay platform. We designed our APIs to support flexible payment integration options, so whether you need to provide payment processing to AffiniPay merchants through your application or accept direct payments on your website, we've got you covered. Use the same APIs that AffiniPay developers are using to build new features.

## Security
Security is our top priority. We've made significant investments to ensure our platform infrastructure is secure. Save development time and infrastructure overhead by using our [JavaScript library](../basics/tokenization.html) to seamlessly collect and store cardholder data on our servers instead of your own.

### PCI Compliance
Storing and transmitting cardholder data makes your infrastructure a target for attacks, which is why any organization that processes credit card transactions must certify compliance with the <a href="https://www.pcisecuritystandards.org/" target="&#95;blank">Payment Card Industry Data Security Standard (PCI DSS)</a>.

We maintain a Level 1 PCI certification, which requires annual audits, but we also encourage our security auditor to audit us randomly throughout the year. We pride ourselves in aspiring to a higher security standard than the minimum requirements of PCI compliance.

Let us worry about PCI compliance so you can focus on building great solutions for your customers. All you need to do is fill out a <a href="https://www.pcisecuritystandards.org/documents/SAQ_A_v3.pdf" target="&#95;blank">PCI Self Assessment Questionnaire (SAQ) Version A</a>.

<span class="panel-note"><b>Note:</b> If you choose not to use our JS library and you either store or transmit cardholder data on your servers, you'll need to fill out version D of the SAQ, which asks you to answer questions such as, "Are video cameras and/or access-control mechanisms in place to monitor individual physical access to sensitive areas?" and "Are logs for all system components reviewed at least daily?" You will also need to perform quarterly external vulnerability scans and report the results to your credit card processor.
<span>

### Fraud Prevention Tools
To help ensure only authorized users are making purchases, the major credit card networks (e.g., Visa, MasterCard, American Express, Discover) provide <a href="https://en.wikipedia.org/wiki/Address_Verification_System" target="&#95;blank">Address Verification System (AVS)</a> and <a href="https://en.wikipedia.org/wiki/Card_security_code" target="&#95;blank">Card Verification Value (CVV)</a> security checks.
Payment processors, like AffiniPay, can use these security checks to validate credit card transactions, especially for <a href="https://en.wikipedia.org/wiki/Card_not_present_transaction" target="&#95;blank">card-not-present</a> transactions like online payments.

Leveraging AVS/CVV security checks to prevent fraud can help reduce the probability of chargebacks and, in some cases, lower your transaction fee rates. Take advantage of these basic tools by configuring custom AVS/CVV policies for your AffiniPay merchant account(s). Refer to [AVS and CVV Policies](../basics/account-management.html#avs-and-cvv-policies) for more information.

### Contacting AffiniPay Securely
If you'd like to report a security vulnerability, discuss confidential customer information, or migrate customer data to AffiniPay, you can use our [PGP key](../downloads/ap_security.asc) to encrypt your communications:

-   **Key ID:** CAC99C88
-   **Key type:** RSA
-   **Key size:** 4096
-   **Fingerprint:** 009E 3D30 9DF4 D563 CD0D 7ADD C871 FC54 CAC9 9C88
-   **User ID:** security@affinipay.com


Refer to [GPG](https://www.gnupg.org/) to learn more about using encryption keys.

## Integration Methods
Integrations fall into two categories:

-   **Partner applications ([OAuth](../basics/authentication.html))** - Use this method if you want to process payments on behalf of AffiniPay merchants through an existing commercial application. Click [here](../guides/app-dev-getting-started.html) to get started.

-   **Payment forms** - Use this method if you're an AffiniPay merchant and want to accept payments on your website. Options include:

    -   [**Hosted payment pages**](../guides/hosted-payment-page-link.html) - The easiest way to collect a payment online is to provide a link to one of our pre-built hosted payment pages. If you want to host a payment page inside an <span class="code-green">iframe</span> element, you'll have to contact support. Refer to **Can I embed a hosted payment page in my website using an <iframe>?** in the <a href="../resources/faq.html">FAQ</a> for more information.
    -   [**Custom HTML and AffiniPay JS library**](../guides/payment-form-getting-started.html) - Collect and store sensitive payment details without passing the data through your servers. The script passes the card details collected on your payment form directly to the {{site.data.variables.brand.gateway}} and exchanges them for a one-time token. This token can then be safely stored on your server and passed to the {{site.data.variables.brand.gateway}} in any operation that takes credit card details, such as a <a href="../reference/api.html#charge" target="&#95;blank">`charge`</a>.

## Resources and Support
The developer guides on this site and the <a href="../reference/api.html" target="&#95;blank">API reference</a> are helpful development resources. We also offer a growing set of [code libraries and example applications](../resources/libraries-sample-code.html) for most languages (e.g., Ruby, PHP, and .NET).

Still have questions? Check out our [FAQ](../resources/faq.html) or just send us an email at <a href="mailto:devsupprot@affinipay.com">devsupport@affinipay.com</a>. We're here to help!

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#security">Security</a></li>
      <li><a href="#integration-methods">Integration Methods</a></li>
      <li><a href="#resources-and-support">Resources and Support</a></li>
  </ul>
  </div>
</div>
</scrollspy-toc>
