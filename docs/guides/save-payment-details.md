---
layout: default
title: "Save Payment Details for Future Use"
permalink: /guides/save-payment-details.html
---

Use the <span class="code-green">/v1/cards</span> and <span class="code-green">/v1/banks</span> API endpoints to store customer credit card and bank account details for future payments (e.g., scheduled billing, re-populating form fields following a rejected transaction due to validation errors).

Although you can store and retrieve full credit card and bank account details, we recommend using one-time token IDs instead to protect cardholder data.

You must first <a href="../reference/api.html#CreateaToken" target="&#95;blank">exchange payment details for a one-time token</a> before creating a charge and attempting to save them for future use. Following the POST request to create a token, the gateway returns an <span class="code-green">id</span> property in the response JSON that you can use to convert the token into a saved credit card or bank account.

<blockquote>Creating a saved credit card from a one-time token</blockquote>
<pre><code>curl -X POST --user secret_key: -H "Content-Type: application/json" https://api.chargeio.com/v1/cards -d '
{
    "token_id": "lUi5VesmStiZo0ss5I0t5w"
}'</code>
</pre>

<blockquote>Example response</blockquote>
<pre><code>{
      "id": "iwinxWe9T_OXinD5oOqYBQ",
      "type": "card",
      "name": "Some Customer",
      "number": "************4242",
      "fingerprint": "GunPelYVthifNV63LEw1",
      "card_type": "VISA",
      "exp_month": 10,
      "exp_year": 2017
  }</code>
</pre>

<span class="panel-tip"><b>Tip:</b> Create a saved bank account the same way by tokenizing the bank account details and sending the POST request to the <span class="code-green">/v1/banks</span> endpoint instead.</span>

Using saved payment details to create a charge is as simple as sending a POST request to the <span class="code-green">/v1/charges</span> endpoint with the amount and ID in the request body:

<pre><code>curl -X POST --user secret_key: -H "Content-Type: application/json" https://api.chargeio.com/v1/charges -d '
{
    "amount": "110",
    "method": "iwinxWe9T_OXinD5oOqYBQ"
}'</code>
</pre>
