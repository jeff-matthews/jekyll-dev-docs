Enable Merchant Account
----------------

    POST /v1/accounts/{accountId}/enable

An inactive [Merchant Account](types#merchantaccount-section) may
be re-enabled via a POST to `/v1/accounts/{accountId}/enable`.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password {{site.data.variables.apiurl.gateway}}/v1/accounts/wKgFeDz5HF-BPPl08dcADA/enable</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgFeDz5HF-BPPl08dcADA",
    "status": "ACTIVE",
    "type": "TEST",
    "name": "Trust",
    "primary": false,
    ...
}</pre>
</div>
