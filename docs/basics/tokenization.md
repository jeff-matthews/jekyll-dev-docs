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

<span class="panel-note"><b>Note:</b> {{site.data.notes.use-tokens}}</span>

## Tokenization Flow
<img class="center" width="100%" src="../images/tokenizationFlow.svg">

## Request a Payment Token
If you need to generate a payment token from JavaScript as
opposed to relying on the tokenization library's payment form submit handler (as described in [Payment Form Getting Started Guide](../guides/payment-form-getting-started.html)), use the <code>create_token()</code> function:

<ol>
  <li><b>Include the library</b> - Add the following script include to your web page:
    <pre id="include"><code>&lt;script type="text/javascript" src="https://api.chargeio.com/assets/api/v1/chargeio.min.js">&lt;/script></code></pre>
    <button id="btn" class="btn copy" data-clipboard-target="#include" onclick="Materialize.toast('Copied!', 2000)">Copy</button>
  </li>
  <li><b>Initialize the library</b> - The library needs to know your merchant identity in order to handle requests from your payment form. Identify yourself by providing your merchant <a href="../guides/payment-form-getting-started.html#obtain-credentials"><b>public key</b></a>, which is safe to expose in web pages (as opposed to your secret keys, which must be safeguarded).
    <pre id="initialize"><code>&lt;script type="text/javascript">ChargeIO.init({public_key: 'your merchant public key'});&lt;/script></code></pre>    
    <button id="btn" class="btn copy" data-clipboard-target="#initialize" onclick="Materialize.toast('Copied!', 2000)">Copy</button>
</li>
<li><b>Call the <code>create_token()</code> function</b> - Pass the card details and a callback to receive the token and/or any error messages.
  <pre id="call"><code class="javascript">ChargeIO.ready(function() {
    ChargeIO.create_token({
      type: 'card',
      number: '4242424242424242',
      exp_month: 8,
      exp_year: 2016,
      cvv: '123',
      name: 'Dave Bowman',
      address1: '123 Main St',
      address2: 'Suite 6-C',
      phone: '512-111-2345',
      city: 'Austin',
      state: 'TX',
      postal_code: '78730',
      country: 'US'
    }, function(token) {      
        // Handle processing the transaction using the generated payment token ID
        // available via token.id. You would typically make an AJAX request to your
        // server, passing the transaction details and payment token.  
        console.log(token);  
  });
})</code></pre>    
  <button id="btn" class="btn copy" data-clipboard-target="#call" onclick="Materialize.toast('Copied!', 2000)">Copy</button>
</li>
</ol>

{{site.data.notes.required-payment-fields}}

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
      <li><a href="#request-a-payment-token">Request a Payment Token</a></li>
      <li><a href="#other-uses-for-payment-tokens">Other Uses for Payment Tokens</a></li>
  </ul>
  </div>
</div>
</scrollspy-toc>
