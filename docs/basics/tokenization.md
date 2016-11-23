---
layout: default
title: "Securing Payment Details"
permalink: /basics/tokenization.html
---

Use our REST APIs and JavaScript tokenization library to securely integrate payments on your website without the cost and liability of building and maintaining your own <a href="https://www.pcisecuritystandards.org/" target="&#95;blank">Payment Card Industry Data Security Standard (PCI DSS)-compliant  environment</a>.

PCI DSS requirements include, but are not limited to:

  - Building and maintaining a secure networks
  - Protecting cardholder data
  - Maintaining a vulnerability management program
  - Implementing strong access control measures
  - Regularly monitoring and testing networks
  - Maintaining an information security policy

Potential PCI DSS liabilities include, but are not limited to:

  - Financial losses due to fraud
  - Fines, penalties, court settlements/judgements
  - Termination of ability to accept credit cards

{{site.data.notes.note.tokenization-definition}}

<span class="panel-note"><b>Note:</b> If you decide not to use tokenization and handle all sensitive payment information yourself, you'll need to implement robust security policies and become PCI compliant.</span>

## Tokenization Flow

<img class="center" width="100%" src="../images/tokenizationFlow.svg">

## Other Uses for Payment Tokens

Although the main use for payment tokens is to process a charge, you can also use them in a couple other scenarios:

  1. <a href="../reference/api.html#PaymentMethods" target="&#95;blank"><b>To save a card/bank account for later use</b></a>. The flow is almost identical to processing a charge, but instead of sending a POST request to the <span class="code-green">https://api.chargeio.com/v1/charges</span> endpoint, your application sends the request to the <span class="code-green">https://api.chargeio.com/v1/cards</span> or <span class="code-green">https://api.chargeio.com/v1/banks</span> endpoint. A saved card or bank account **id** will be returned, which your application can store for running charges at a later time.
  2. <a href="../reference/api.html#RecurringCharges" target="&#95;blank"><b>To create a recurring charge</b></a>. Again, the flow is almost identical to processing a charge, but instead of sending a POST request to the <span class="code-green">https://api.chargeio.com/v1/charges</span> endpoint, your application sends the request to the <span class="code-green">https://api.chargeio.com/v1/recurring/charges</span> endpoint.

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#tokenization-flow">Tokenization Flow</a></li>
      <li><a href="#other-uses-for-payment-tokens">Other Uses for Payment Tokens</a></li>
  </ul>
  </div>
</div>
</scrollspy-toc>
