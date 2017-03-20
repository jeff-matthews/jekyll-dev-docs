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
    <pre id="iframe" style="margin: 0 13px 0 13px;"><code>&lt;div id="amp-embed">&lt;/div>
&lt;script src="https://cdn.affinipay.com/libs/amp-embed.min.js">&lt;/script>
&lt;script>
  AMP.Embed.init({
    publicKey: 'm_7LwaBGj6T52TyR60xvjgzg'
    containerID: 'amp-embed'
  });
&lt;/script></code></pre>
<button id="btn" class="btn copy" style="margin: 13px 13px 0 13px;" data-clipboard-target="#iframe" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

    <p>The script generates an <span class="code-green">iframe</span> inside the <span class="code-green">#amp-embed</span> element. However, you must add a <span class="code-green">?page=payment-page-path</span> parameter to the end of the page URL. For example, the page <code>secure.affinipay.com/pages/merchant/payment</code> requires <span class="code-green">?page=payment</span> at the end of the URL.</p>
    <p><span class="panel-warning"><b>Important:</b> When using WordPress or another Content Management System (CMS), if you're using a text field to embed the iframe script code snippet, make sure the snippet is being added to the bottom of the page and not inside the <span class="code-green">header</span> element.</span></p>
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
    <div class="collapsible-body"><p>Currently, we only support creating a new saved card/bank from an existing card/bank or one-time token and not directly updating or patching an existing saved card/bank.</p>

    <p>You can achieve the desired result, however, by first creating a new one-time token using the existing saved card/bank ID (along with the updated properties) and then creating a new saved card/bank from this one-time token. Click <a href="../guides/save-payment-details.html#update-a-saved-card-or-bank">here</a> for instructions.</p></div>
  </li>
</ul>
<ul class="collapsible faq-border" data-collapsible="accordion">
  <li>
    <div class="collapsible-header faq">How do I report security issues?</div>
    <div class="collapsible-body"><p>Although we do our best to ensure that our software meets rigorous security requirements, bugs and vulnerabilities are inevitable. If you think you've discovered a vulnerability in our platform, please email us: <a href="mailto:security@affinipay.com">security@affinipay.com</a>. You can also use our <a href="../basics/overview.html#contacting-affinipay-securely">PGP key</a> to contact us securely. We ask that you allow us an opportunity to address any issues before disclosing them to the public.</p></div>
  </li>
</ul>
