Disable Non-Originating Refund
----------------

    POST /v1/charges/{chargeId}/disable_nonoriginating_refund

Having enabled non-originating refund operations on an individual Charge for a Merchant, the Tenant
can revert the Charge to preventing non-originating refunds by sending an empty POST to
`/v1/charges/{chargeId}/disable_nonoriginating_refund`. The Gateway responds with
the Charge JSON having `nonoriginating_refund_enabled=false`.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password {{site.data.variables.apiurl.gateway}}/v1/charges/pKA9qo0dSRmnc4u1kN8P2w/disable_nonoriginating_refund</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "pKA9qo0dSRmnc4u1kN8P2w",
    "type": "CHARGE",
    "account_id": "wKgFeDz5HF-BPPl08dcADQ",
    "status": "AUTHORIZED",
    ...
    "nonoriginating_refund_enabled": false
}</pre>
</div>
