---
layout: default
title: "Payment Form Development"
permalink: /guides/payment-form-getting-started.html
---

Use this guide to securely integrate payments on your website using our JavaScript tokenization library.

<span class="panel-note"><b>Note:</b> Click [here](../basics/tokenization.html) to learn more about tokenization.</span>

Integrating payments on your website using a web form requires the following steps:

1. Obtain {{site.data.variables.brand.gateway}} credentials that your web form can use to submit payment details to the {{site.data.variables.brand.gateway}}.
2. Enable your web page to use the AffiniPay JavaScript tokenization library.
3. Create a payment form on your web page so you can collect customer payment details.
4. Exchange customer payment details for a one-time payment token.
5. Send token and non-sensitive payment information (everything except the card number) to your web server in order to record the payment.
6. Send a POST request to create a charge to the {{site.data.variables.brand.gateway}}.

<span class="panel-tip"><b>Tip:</b> If you just want to request a token using our JavaScript library, and skip all these other steps, refer to <a href="../basics/tokenization.html#request-a-payment-token"><code>create_token()</code></a>.</span>

## Obtain Credentials
You'll need the following information from an [authorized application](../basics/account-management.html#authorized-applications) to complete this guide:

 - **Public Key** - The JavaScript library needs to know your merchant identity in order to create payment tokens that can be exchanged in payments your web server submits to the {{site.data.variables.brand.gateway}}. You identify yourself by providing your public key, which is safe to expose in web pages (as opposed to your secret key, which must be safeguarded).
 - **Secret Key** - Used to authenticate requests from your web server when running charges and performing other operations.
 - **Account ID** - Specifies the merchant credit or ACH account to be used to process a transaction.

To authorize your website application and access your keys:

<ol>
  <li>Log in to <a href="https://secure.affinipay.com/login" target="&#95;blank">https://secure.affinipay.com/login</a>.<i class="fa fa-info-circle superscript tooltipped" data-position="top" data-delay="50" data-tooltip="LawPay users should go to https://secure.lawpay.com/login"></i></li>
  <li>Click your name in the top-right corner and click <b>Developers</b>.

    <p><img width="30%" src="../images/developers.png"></p></li>

  <li>Click <b>Authorize Application</b>, select <b>My Website</b> from the drop-down list, and click <b>Authorize Application</b>.

    <p><img width="70%" src="../images/authorizeApplication.png"></p></li>

  <li>Locate <b>My Website</b> in the <b>Authorized Applications</b> grid and click <b>Show Credentials</b> to see your:
    <ul>
      <li>Public Key</li>
      <li>Secret Key</li>
      <li>Account ID</li>
    </ul>
      <p>You need all three of these to create a charge through the {{site.data.variables.brand.gateway-api}}.</p>
      </li>
</ol>

## Configure Your Web Page

The following steps are required to enable payments on your page:

<ol>
  <li><b>Include the tokenization library</b> - Add the following script include to your web page:
    <pre id="include"><code>&lt;script type="text/javascript" src="https://api.chargeio.com/assets/api/v1/chargeio.min.js">&lt;/script></code></pre>
    <button id="btn" class="btn copy" data-clipboard-target="#include" onclick="Materialize.toast('Copied!', 2000)">Copy</button>
  </li>
  <li><b>Initialize the tokenization library</b> - The library needs to know your merchant identity in order to handle requests from your payment form. Identify yourself by providing your merchant <b>public key</b>, which is safe to expose in web pages (as opposed to your secret keys, which must be safeguarded).
    <pre id="initialize"><code>&lt;script type="text/javascript">ChargeIO.init({public_key: 'your merchant public key'});&lt;/script></code></pre>    
    <button id="btn" class="btn copy" data-clipboard-target="#initialize" onclick="Materialize.toast('Copied!', 2000)">Copy</button>
    <span class="panel-note"><b>Note:</b> You must add this <span class="code-green">&lt;script></span> element <i>after</i> the script include element from the previous step.</span>
  </li>
</ol>

## Create a Payment Form

Design and build a form to collect payment details. If you support both credit card and Automated Clearing House (ACH) payment methods, make sure your design offers options for entering both types of payment details.

The following HTML is a basic payment form example based on the <a href="http://getbootstrap.com/" target="&#95;blank">Bootstrap</a> front-end framework. You must follow these additional guidelines when creating your own payment form:

- Include all required payment fields defined in your AffiniPay merchant account configuration (e.g., address, city, state, ZIP code, country, email, phone, etc).
- Don't define any actions in your HTML form.
- Provide a button to submit payment information to the gateway. In the next section, you'll learn how to hook this button up to our JavaScript tokenization library.

<pre id="sample-form"><code class="html">&lt;div class="row">
  &lt;h2>Enter your payment information:</h2>

  &lt;div id="messages" class="alert alert-danger" style="display: none">
    &lt;ul></ul>
  &lt;/div>

  &lt;form>
    &lt;div class="form-group">
      &lt;label>Name</label>
      &lt;input type="text" name="name">
    &lt;/div>
    &lt;div class="form-group">
      &lt;label>Card Number</label>
      &lt;input type="text" name="number">
    &lt;/div>
    &lt;div class="form-group">
      &lt;label>CVV</label>
      &lt;input type="text" name="cvv">
    &lt;/div>
    &lt;div class="form-group">
      &lt;label>Exp Month</label>
      &lt;input type="text" name="exp_month">
    &lt;/div>
    &lt;div class="form-group">
      &lt;label>Exp Year</label>
      &lt;input type="text" name="exp_year">
    &lt;/div>

    &lt;button type="submit" id="pay" disabled>Submit</button>
  &lt;/form>
&lt;/div>
</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#sample-form" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

## Handle Payment Requests

You must add a JavaScript event handler and bind it to the form action you're using to submit the payment details to the gateway. In this example, we're binding the event handler to the button with ID "pay" click event. The event handler must:

- Exchange payment details for a token from the {{site.data.variables.brand.gateway}} using the <span class="code-green">ChargeIO.create_token()</span> function. In the sample provided below, the variable you pass this function is composed of the payment form's field values. The function that sets this variable assumes your form field names match the <a href="../reference/api.html#token" target="&#95;blank">`token`</a> API properties.
- <span class="api-operation">POST</span> the token and payment amount to your server, which must submit the charge to the {{site.data.variables.brand.gateway}} using your protected secret key.
- Handle the payment response returned from your web server, displaying any errors or updating the page with a receipt.
<span class="panel-warning"><b>Important:</b> It's critical that the payment form event handler prevent propagation of the JavaScript click event to ensure that sensitive payment information is only passed to the AffiniPay tokenization library. Refer to [Sample Form Handler](#sample-form-handler) for an example.</span>

### Sample Form Handler

The following is an example payment form event handler that works with the  [HTML payment form](#create-a-payment-form) described above and <a href="https://github.com/affinipay/chargeio-example-php" target="&#95;blank">AffiniPay's sample PHP application</a>.

<span class="panel-note"><b>Note:</b> Click [here](#code-comments) to see code comments.</span>

<pre id="sample-handler">
<code class="js">01 &lt;script type="text/javascript" src="https://api.chargeio.com/assets/api/v1/chargeio.min.js"></script>
02 &lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
03 &lt;script type="text/javascript">
04  ChargeIO.init({ public_key: 'your merchant public key' });
05
06   function processErrorMessages(messages) {
07     var msgList = $('#messages ul');
08     $(msgList).empty();
09     $.each(messages, function(index, item) {
10       $(msgList).append("&lt;li>" + item.message + "</li>");
11     });
12	  
13     $('#messages').show();
14     $('#pay').prop("disabled", false);
15   }
16
17   ChargeIO.ready(function() {
18     $('#pay').prop("disabled", false);
19     $('#pay').click(function(event) {
20       event.preventDefault();
21       $('#pay').prop("disabled", true);
22       var amount = parseInt($('#total').text().replace(/\D/g,''));
23       var paymentJson = ChargeIO.payment_params($('form'));
24       ChargeIO.create_token(paymentJson, function(token) {
25         $.post('/chargeio-example-php/Purchase.php', { 'amount': amount, 'token_id': token.id }).done(function(data) {
26           if (data.messages) {
27             processErrorMessages(data.messages);
28           }
29           else {
30             window.location = '/chargeio-example-php/Receipt.php';
31           }
32         }).fail(function(xhr) {
33           processErrorMessages([ { "message": "An unexpected error occurred" } ]);
34         });
35       });
36     });
37   });
38 &lt;/script>
</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#sample-handler" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

#### Code Comments

- 01: Include tokenization library
- 02: Include jQuery
- 04: Initialize library
- 06-15: Display messages for any errors received processing the payment and re-enable form submit button for retry.
- 17: Ensure tokenization library is ready before binding event handlers and enabling the submit button.
- 18: Enable payment submit button in form.
- 19: Add click event to payment form button.
- 20: Prevent event propagation to ensure form content is not POSTed back to the hosting page.
- 21: Disable submit button to prevent duplicate payment attempts.
- 22: Define the payment amount.
- 23: Use the payment form fields to create the 'token' JSON request object. The ChargeIO.payment_params() function assumes your form field names match the 'token' API properties. If this isn't the case in your form, you need to programmatically create this JSON object.
- 23: Request a token from the AffiniPay Payment Gateway.
- 25: POST the received token ID and amount to the web server.
- 26-28: Process error messages that were returned.
- 29-31: Transition to receipt page on success.
- 32-34: Handle failures to run the payment from the web server.

## Submit a Charge from Your Server
After securely collecting and tokenizing your customers' payment information, your web server must send a <a href="../reference/api.html#charges" target="&#95;blank">charge request</a> to the {{site.data.variables.brand.gateway-api}} using your merchant [secret key](#obtain-credentials) for authentication.

<span class="panel-note"><b>Note:</b> {{site.data.notes.use-tokens}}</span>

{% include concepts/charge-properties.md %}

<pre id="charge"><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;secret_key>: https://api.chargeio.com/v1/charges -d '
{
  "amount":"50000",
  "method":"wKgFaj72F3aBPvZneEsBew",
  "account_id":"diON4KOPnesamprmrxA8Iuo"
}'
</code></pre>

<button id="btn" class="btn copy" data-clipboard-target="#charge" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

Our <a href="https://github.com/affinipay/chargeio-example-php/blob/master/Purchase.php" target="&#95;blank">sample PHP application</a> provides a working example you can use to get started.

<span class="panel-tip"><b>Tip:</b> The {{site.data.variables.brand.gateway}} uses <a href="http://en.wikipedia.org/wiki/Basic_access_authentication" target="&#95;blank">HTTP Basic Authentication</a>. Use your test or live-mode secret key as your username and an empty string for the password.</span>

### Test and Live Mode Secret Keys

{% include concepts/test-live-mode-keys.md %}

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#obtain-credentials">Obtain Credentials</a></li>
      <li><a href="#configure-your-web-page">Configure Your Web Page</a></li>
      <li><a href="#create-a-payment-form">Create a Payment Form</a></li>
      <li><a href="#handle-payment-requests">Handle Payment Requests</a></li>
      <li><a href="#submit-a-charge-from-your-server">Submit a Charge from Your Server</a></li>
    </ul>
  </div>
</div>
</scrollspy-toc>
