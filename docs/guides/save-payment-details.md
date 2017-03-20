---
layout: default
title: "Save Payment Details for Future Use"
permalink: /guides/save-payment-details.html
---

Use the following {{site.data.variables.brand.gateway-api}} endpoints to store customer credit card and bank account details for future use, such as scheduled billing or re-populating form fields following a rejected transaction due to validation errors:

-   <span class="code-green">https://api.chargeio.com/v1/cards</span>
-   <span class="code-green">https://api.chargeio.com/v1/banks</span>

<span class="panel-tip"><b>Tip:</b> We highly recommend masking payment details you collect using tokenization. {{site.data.notes.use-tokens}}</span>

## Create a Saved Card or Bank
To create a saved credit card from a one-time token:

1. Create a one-time token using card details:
    <pre id="token"><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;public_key>: https://api.chargeio.com/v1/tokens -d '
    {
        "type": "card",
        "number": "4242424242424242",
        "exp_month": 10,
        "exp_year": 2017,
        "cvv": "123",
        "name": "Dave Bowman",
        "address1": "2001 Odyssey Ln",
        "address2": "Suite 100",
        "city": "Austin",
        "state": "TX",
        "postal_code": "78750"
    }'</code></pre>
    <button id="btn" class="btn copy" data-clipboard-target="#token" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

    {{site.data.notes.required-payment-fields}}

    <blockquote>Example response</blockquote>
    <pre><code>{
      "id": "olxSbEDSRN6RxIURjOxKTw",
      "created": "2017-02-28T17:41:02.206Z",
      "modified": "2017-02-28T17:41:02.206Z",
      "name": "Dave Bowman",
      "address1": "2001 Odyssey Ln",
      "address2": "Suite 100",
      "city": "Austin",
      "state": "TX",
      "postal_code": "78750",
      "type": "card",
      "number": "************4242",
      "exp_month": 10,
      "exp_year": 2017,
      "cvv": "&#42;&#42;&#42;"
    }</code></pre>

2. Create a saved credit card using a one-time token ID:
    <pre id="save"><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;secret_key>: https://api.chargeio.com/v1/cards  -d '
    {
      "token_id": "olxSbEDSRN6RxIURjOxKTw"
    }'</code></pre>
    <button id="btn" class="btn copy" data-clipboard-target="#save" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

    <blockquote>Example response</blockquote>
    <pre><code>{
      "id": "RhX6GEGcS8SogoXMPD85xA",
      "created": "2017-02-28T17:46:31.267Z",
      "modified": "2017-02-28T17:46:31.267Z",
      "name": "Dave Bowman",
      "address1": "2001 Odyssey Ln",
      "address2": "Suite 100",
      "city": "Austin",
      "state": "TX",
      "postal_code": "78750",
      "type": "card",
      "number": "************4242",
      "fingerprint": "GunPelYVthifNV63LEw1",
      "card_type": "VISA",
      "exp_month": 10,
      "exp_year": 2017
    }</code></pre>

<span class="panel-tip"><b>Tip:</b> Create a saved bank account the same way by tokenizing the bank account details and sending the <span class="api-operation">POST</span> request to the <span class="code-green">https://api.chargeio.com/v1/banks</span> endpoint instead.</span>

## Create a Charge with a Saved Card
Using saved payment details to create a charge is as simple as sending a <span class="api-operation">POST</span> request to the <span class="code-green">https://api.chargeio.com/v1/charges</span> endpoint. {% include concepts/charge-properties.md %}

<pre id="charge"><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;secret_key>: https://api.chargeio.com/v1/charges -d '
{
  "amount": "50000",
  "method": "RhX6GEGcS8SogoXMPD85xA",
  "account_id": "diON4KOPnesamprmrxA8Iuo"
}'</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#charge" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

## Update a Saved Card or Bank
Currently, we only support creating a new saved card/bank from an existing card/bank or one-time token and not directly updating or patching an existing saved card/bank.

You can achieve the desired result, however, by first creating a new one-time token using the existing saved card/bank ID (along with the updated properties) and then creating a new saved card/bank from this one-time token.

For example, to update the address on the saved card we [previously created](#create-a-saved-card-or-bank):

1. Create a new one-time token from the saved card, overriding the address properties:
    <span class="panel-note"><b>Note:</b> You can specify any of the properties for a one-time token on this request. Any properties you don't specify will default to the value on the saved card.</span>

    <pre id="update1"><code class="json">curl -X POST -H "Content-Type: application/json" --user &lt;secret_key>: https://api.chargeio.com/v1/tokens -d '
{
  "token_id": "RhX6GEGcS8SogoXMPD85xA",
  "address1": "&lt;new address1>",
  "city": "&lt;new city>",
  "state": "&lt;new state>",
  "postal_code": "&lt;new postal code>"
}'</code></pre>
    <button id="btn" class="btn copy" data-clipboard-target="#update1" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

    <blockquote>Example response</blockquote>
    <pre><code>{
      "id": "zmJ9l9FpRRm-dJS6YkOy0A",
      "created": "2017-02-28T17:49:24.151Z",
      "modified": "2017-02-28T17:49:24.151Z",
      "name": "Dave Bowman",
      "address1": "&lt;new address1>",
      "address2": "Suite 100",
      "city": "&lt;new city>",
      "state": "&lt;new state>",
      "postal_code": "&lt;new postal code>",
      "type": "card",
      "number": "************4242",
      "card_type": "VISA",
      "exp_month": 10,
      "exp_year": 2017
    }</code></pre>

2. Create a new saved card from the one-time token:
    <pre id="update2"><code class="json">curl -X POST -H "Content-Type: application/json" --user &lt;secret_key>: https://api.chargeio.com/v1/cards -d '
    {
    "token_id": "zmJ9l9FpRRm-dJS6YkOy0A"
    }'</code></pre>
    <button id="btn" class="btn copy" data-clipboard-target="#update2" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

    <blockquote>Example response</blockquote>
    <pre><code>{
      "id": "EOxH4UW2RLOpDxRUAreCmw",
      "created": "2017-02-28T17:51:03.432Z",
      "modified": "2017-02-28T17:51:03.432Z",
      "name": "Dave Bowman",
      "address1": "&lt;new address1>",
      "address2": "Suite 100",
      "city": "&lt;new city>",
      "state": "&lt;new state>",
      "postal_code": "&lt;new postal code>",
      "type": "card",
      "number": "************4242",
      "fingerprint": "GunPelYVthifNV63LEw1",
      "card_type": "VISA",
      "exp_month": 10,
      "exp_year": 2017
    }</code></pre>
3. Use the new token ID to run a charge:
    <pre id="charge2"><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;secret_key>: https://api.chargeio.com/v1/charges -d '
    {
      "amount": "50000",
      "method": "EOxH4UW2RLOpDxRUAreCmw",
      "account_id": "diON4KOPnesamprmrxA8Iuo"
    }'</code></pre>
    <button id="btn" class="btn copy" data-clipboard-target="#charge2" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#create-a-saved-card-or-bank">Create a Saved Card or Bank</a></li>
      <li><a href="#create-a-charge-with-a-saved-card">Create a Charge with a Saved Card</a></li>
      <li><a href="#update-a-saved-card-or-bank">Update a Saved Card or Bank</a></li>
    </ul>
  </div>
</div>
</scrollspy-toc>
