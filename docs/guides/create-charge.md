---
layout: default
title: "Create a Charge"
permalink: /guides/create-charge.html
---

After you [collect](../guides/payment-form-getting-started.html#create-a-payment-form) and <a href="../reference/api.html#One-TimeTokens" target="&#95;blank">secure</a> payment details using our JavaScript tokenization library, call the {{site.data.variables.brand.gateway-api}} to charge a customer's credit card or debit their bank account (if you support ACH payments):

<span class="panel-note"><b>Note:</b> You must use your merchant [secret key](../guides/payment-form-getting-started.html#obtain-credentials) for authentication.</span>

<blockquote>Example request</blockquote>
<pre><code>curl -X POST --user secret_key: -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/charges -d '
{
  "account_id":"&lt;Account ID>",
  "amount":"100",
  "token_id":"&lt;Payment Token ID>"
}'</code>
</pre>

Refer to the <a href="../reference/api.html#Charges" target="&#95;blank">charges</a> API reference for more information.
