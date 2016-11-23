---
layout: default
title: "Frequently Asked Questions"
permalink: /resources/faq.html
---

<ul class="collapsible faq-border" data-collapsible="accordion">
  <li>
    <div class="collapsible-header faq">How do I integrate payments with my website?</div>
    <div class="collapsible-body"><p>The easiest way to integrate payments on your website is to <a href="../guides/hosted-payment-page-link.html">link</a> to one of our pre-built hosted payment pages. We also have a <a href="https://github.com/affinipay/affinipay-woocommerce" target="	&#95;blank">WooCommerce plugin</a> you can use if you have a WordPress site. If you need to build a custom payment page, refer to our <a href="../guides/payment-form-getting-started.html">Getting Started Guide</a>.</p></div>
  </li>
</ul>

<ul class="collapsible faq-border" data-collapsible="accordion">
  <li>
    <div class="collapsible-header faq">Can I embed a hosted payment page in my website using an &lt;iframe>?</div>
    <div class="collapsible-body"><p>Yes, but first you have to <a href="mailto:devsupport@affinipay.com">contact</a> AffiniPay support and provide us with your site's domain name. An administrator must enable <span class="code-green">iframes</span> in your merchant account and send you a code snippet to embed in your site's HTML.</p>

    <p>Here's an example code snippet:</p>
    <pre style="margin: 0 13px 0 13px;"><code>&lt;div id="amp-embed">&lt;/div>
&lt;script src="https://cdn.affinipay.com/libs/ampp-embed.min.js">&lt;/script>
&lt;script>
  AMP.Embed.init({
    publicKey: 'm_7LwaBGj6T52TyR60xvjgzg'
    containerID: 'amp-embed'
  });
&lt;/script></code></pre>
    <p>The script generates an <span class="code-green">iframe</span> inside the <span class="code-green">#amp-embed</span> element. However, you must add a <span class="code-green">?page=payment-page-path</span> parameter to the end of the page URL. For example, the page <code>secure.affinipay.com/pages/merchant/payment</code> requires <span class="code-green">?page=payment</span> at the end of the URL.</p>
    </div>
  </li>
</ul>
<ul class="collapsible faq-border" data-collapsible="accordion">
  <li>
    <div class="collapsible-header faq">How do I integrate payments with my application?</div>
    <div class="collapsible-body"><p>First, you need a <a href="../basics/account-management.html#partner-applications">registered AffiniPay partner application</a>, which provides a client ID and secret necessary for initiating an <a href="../basics/authentication.html">OAuth</a> flow. The OAuth flow is what enables users to grant your application access to their AffiniPay merchant account and perform actions on their behalf (e.g., running charges). Refer to the <a href="../guides/app-dev-getting-started.html">Getting Started Guide</a> for more information.</p></div>
  </li>
</ul>
<ul class="collapsible faq-border" data-collapsible="accordion">
  <li>
    <div class="collapsible-header faq">What do I do after tokenizing payment details with your JS library?</div>
    <div class="collapsible-body"><p>POST the token and payment amount to your server, which must submit the charge to the AffiniPay Payment Gateway using your protected secret key. Refer to <a href="../guides/create-charge.html">Create a Charge</a> for more information.</p></div>
  </li>
</ul>
<ul class="collapsible faq-border" data-collapsible="accordion">
  <li>
    <div class="collapsible-header faq">Where can I find my API keys?</div>
    <div class="collapsible-body"><p>To submit API requests to the AffiniPay Payment Gateway, you must use credentials from an <a href="../basics/account-management.html">authorized AffiniPay application</a>. By default, AffiniPay creates an application for you when you sign up for a merchant account called <b>My Website</b>. This application contains the credentials you must use to submit charges to the payment gateway. Refer to <a href="../guides/payment-form-getting-started.html#obtain-credentials">Obtain Credentials</a> for more information.</p></div>
  </li>
</ul>
<ul class="collapsible faq-border" data-collapsible="accordion">
  <li>
    <div class="collapsible-header faq">How do I update a saved credit card?</div>
    <div class="collapsible-body"><p>To change a property on a saved credit card, send a POST request to the <span class="code-green">/v1/cards/{cardId}</span> endpoint with the <span class="code-green">cardID</span> in the query string and the updated field(s) in the request body. The response body will contain a new <span class="code-green">cardID</span>. This operation migrates all unmodified fields from the original saved card object to the new card object.</p></div>
  </li>
</ul>
