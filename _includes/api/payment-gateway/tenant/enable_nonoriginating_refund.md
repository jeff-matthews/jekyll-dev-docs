Enable Non-Originating Refund
----------------

    POST /v1/charges/{chargeId}/enable_nonoriginating_refund

Merchants' accounts often disable refunding charges to payment methods different from
the originating payment method due to the heightened risk for fraud and abuse. A
Merchant operating in such an environment may request the Tenant to enable non-originating
refunds on a per-Charge basis to override this policy. The Tenant enables non-originating
refunds operations on a Charge by sending an empty POST to `/v1/charges/{chargeId}/enable_nonoriginating_refund`.
The Gateway responds with the Charge JSON having `nonoriginating_refund_enabled=true`.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password {{site.data.variables.apiurl.gateway}}/v1/charges/pKA9qo0dSRmnc4u1kN8P2w/enable_nonoriginating_refund</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "pKA9qo0dSRmnc4u1kN8P2w",
    "type": "CHARGE",
    "account_id": "wKgFeDz5HF-BPPl08dcADQ",
    "status": "AUTHORIZED",
    ...
    "nonoriginating_refund_enabled": true
}</pre>
</div>
