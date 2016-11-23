Delete ACH Account
-----------------------

    DELETE /v1/ach-accounts/{accountId}

Sending an empty DELETE request to `/v1/ach-accounts/{accountId}` deletes an
existing Merchant [ACH Account](types#achaccount-section). The deleted account is
returned in the response.

<div class="bs-callout bs-callout-warning">The request is rejected if the to-be-deleted account is
the primary account, but other non-primary accounts remain.</div>

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X DELETE --user username:password -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/ach-accounts/Cn9j655rSem_QzRQXLsbhw</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "Cn9j655rSem_QzRQXLsbhw",
    "status": "DELETED",
    "type": "TEST",
    "name": "ACH Account Updated",
    ...
}</pre>
</div>
