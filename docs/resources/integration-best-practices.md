---
layout: default
title: "Integration Best Practices"
permalink: /resources/integration-best-practices.html
---

A successful integration makes payment processing within your application seamless and easy for customers to use. There are many elements that contribute to a successful application integration with the {{site.data.variables.brand.gateway}}. At a minimum, you must provide methods for:
-   Collecting credit card details
-   Submitting credit card details to the {{site.data.variables.brand.gateway}}

This topic describes additional data collection and feature best practices (beyond the minimum requirements) that you should consider before you begin developing an integration. After reading this topic, check out the [Application Development Getting Started Guide](../guides/app-dev-getting-started.html) for next steps.

<span class="panel-note"><b>Note:</b> This topic is intended for third-party application developers submitting payments on behalf of other AffiniPay merchants. If you're an AffiniPay merchant trying to accept payments directly from clients through a website or email link, refer to the [Payment Form Getting Started Guide](../guides/payment-form-getting-started.html) or [Hosted Payment Pages](../guides/hosted-payment-page-link.html), respectively, for more information.</span>

## Transaction Data
The only credit card details you need to run a transaction are a card number and expiration date, but there are several other details you should collect to ensure you're following best practices, such as:
-   Cardholder name
-   Card verification value (CVV)
-   Address verification system (AVS)

<span class="panel-tip"><b>Tip:</b> We highly recommend masking payment details you collect using tokenization. {{site.data.notes.use-tokens}}</span>

### Cardholder Name
While optional, names make reconciling transactions with customers much easier. If you're using an external system to manage customers, be sure to map the "name" field in that system to the <span class="code-green">name</span> property on [card](../reference/api.html#card){:target="&#95;blank"} or [bank](../reference/api.html#bank){:target="&#95;blank"} objects in the AffiniPay system, otherwise, transactions will show up in the AffiniPay system without a name. Refer to the following screenshot for an example:

![no name](../images/name-field.png)

### Card Verification Value (CVV)
Collecting <a href="https://en.wikipedia.org/wiki/Card_security_code" target="&#95;blank">CVV</a> helps prevent fraud and reduce the probability of chargebacks. If you don't collect CVV and the cardholder disputes a charge, the chargeback committee will likely rule in favor of the cardholder and return funds. Refer to [Fraud Prevention Tools](../basics/overview.html#fraud-prevention-tools) for more information.

### Address Verification System (AVS)
Collecting (or not collecting) <a href="https://en.wikipedia.org/wiki/Address_Verification_System" target="&#95;blank">AVS</a> information influences your processing rates. If you don't collect and submit AVS information, transactions will automatically “downgrade” (i.e., fall into a more expensive processing tier). The only fields required to avoid downgraded rates are <span class="code-green">address1</span> and <span class="code-green">postal_code</span>.

By default, your AffiniPay account submits AVS information but won't void or cancel transactions if there's an AVS mismatch. Refer to [Fraud Prevention Tools](../basics/overview.html#fraud-prevention-tools) for more information.

## Feature Recommendations
Consider including one or more of the following optional features as part of your integration:
-   Multi-account support
-   Failure code translation
-   Void/refund
-   Save a payment method for future use

### Multi-Account Support
{% include concepts/merchant-accounts.md %}

### Failure Code Translation
If a transaction fails, AffiniPay receives a generic response from the issuing bank indicating why it failed (e.g., `card_expired`, `card_cvv_incorrect`). We recommend mapping generic responses to more informative custom messages to create a better user experience. For example, replace _"card_cvv_incorrect"_, with _"The CVV you provided is invalid."_ Refer to [Messages and Errors](../reference/api.html#MessagesandErrors88){:target="&#95;blank"} for more information.

### Void/Refund
Provide users with a method to cancel a transaction or request a refund using our [`void`](../reference/api.html#Voids){:target="&#95;blank"} and [`refund`](../reference/api.html#Refunds){:target="&#95;blank"} API endpoints. Programmatically canceling payments or issuing refunds is more efficient than logging in to the {{site.data.variables.dashboard}} and manually processing voids/refunds.

Things to remember:
-   Voids cancel payments, can only be performed on the same day that the original transaction was run (before midnight eastern time), and _aren't_ subject to processing fees.
-   Full or partial refunds can be issued up to six months after the original transaction date and _are_ subject to processing fees.

### Save a Payment Method
Store credit card and/or bank account details for future use, such as scheduled billing or re-populating form fields following a rejected transaction due to validation errors. Refer to [Save Payment Details for Future Use](../guides/save-payment-details.html) for more information.

<div class="panel-tip"><b>Tip:</b> You have several options for setting up scheduled billing:
  <ul>
    <li><a href="../reference/api.html#ChargewithRecurrence" target="&#95;blank"><b>Charge with recurrence</b></a> - Define a recurring charge <em>plus</em> an initial payment.</li>
    <li><a href="../reference/api.html#CreateRecurringCharge" target="&#95;blank"><b>Create a recurring charge</b></a> - Define a recurring charge for future payments only.</li>
    <li><a href="../reference/api.html#ScheduleaCharge" target="&#95;blank"><b>Schedule a charge</b></a> - Reuse an existing transaction to define a new recurring charge schedule.</li>
  </ul>
</div>

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#transaction-data">Transaction Data</a></li>
      <li><a href="#feature-recommendations">Feature Recommendations</a></li>
  </ul>
  </div>
</div>
</scrollspy-toc>
