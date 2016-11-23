Enable ACH Account
----------------

    POST /v1/ach-accounts/{accountId}/enable

An inactive Merchant [ACH Account](types#achaccount-section) may
be re-enabled via a POST to `/v1/ach-accounts/{accountId}/enable`.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password {{site.data.variables.apiurl.gateway}}/v1/ach-accounts/Cn9j655rSem_QzRQXLsbhw/enable</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "Cn9j655rSem_QzRQXLsbhw",
    "status": "ACTIVE",
    "type": "TEST",
    ...
}</pre>
</div>
