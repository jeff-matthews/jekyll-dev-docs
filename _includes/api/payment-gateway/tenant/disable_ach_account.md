Disable ACH Account
----------------

    POST /v1/ach-accounts/{accountId}/disable

A Merchant [ACH Account](types#achaccount-section) may be disabled via a POST to
`/v1/ach-accounts/{accountId}/disable`. Once disabled, any attempt to create or
modify transactions via the account is rejected. Transactions may still
be retrieved and searched by Merchants from the account, however. Disabled
accounts can be re-enabled via the [enable](#enable-ach-account-section) API.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password {{site.data.variables.apiurl.gateway}}/v1/ach-accounts/Cn9j655rSem_QzRQXLsbhw/disable</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "Cn9j655rSem_QzRQXLsbhw",
    "status": "INACTIVE",
    "type": "TEST",
    ...
}</pre>
</div>
