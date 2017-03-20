---
layout: default
title: "Create a Charge"
permalink: /guides/create-charge.html
---

After you [collect](../guides/payment-form-getting-started.html#create-a-payment-form) and <a href="../reference/api.html#One-TimeTokens" target="&#95;blank">secure</a> payment details using our JavaScript tokenization library, call the {{site.data.variables.brand.gateway-api}} to charge a customer's credit card or debit their bank account (if you support ACH payments).

<span class="panel-note"><b>Note:</b> You must use your merchant [secret key](../guides/payment-form-getting-started.html#obtain-credentials) for authentication.</span>

{% include concepts/charge-properties.md %}

<span class="panel-note"><b>Note:</b> {{site.data.notes.use-tokens}}</span>

<blockquote>Example request</blockquote>
<pre id="charge"><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;secret_key>: {{site.data.variables.apiurl.gateway}}/v1/charges -d '
{
  "amount":"50000",
  "method":"wKgFaj72F3aBPvZneEsBew",
  "account_id":"diON4KOPnesamprmrxA8Iuo"
}'
</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#charge" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

Refer to the <a href="../reference/api.html#Charges" target="&#95;blank">charges</a> API reference for more information.
