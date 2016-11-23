Disable Merchant Account
----------------

    POST /v1/accounts/{accountId}/disable

A [Merchant Account](types#merchantaccount-section) may be disabled via a POST to
`/v1/accounts/{accountId}/disable`. Once disabled, any attempt to create or
modify transactions via the account is rejected. Transactions may still
be retrieved and searched by Merchants from the account, however. Disabled
accounts can be re-enabled via the [enable](#enable-merchant-account-section) API.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password {{site.data.variables.apiurl.gateway}}/v1/accounts/wKgFeDz5HF-BPPl08dcADA/disable</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgFeDz5HF-BPPl08dcADA",
    "status": "INACTIVE",
    "type": "TEST",
    "name": "Trust",
    "primary": false,
    ...
}</pre>
</div>
