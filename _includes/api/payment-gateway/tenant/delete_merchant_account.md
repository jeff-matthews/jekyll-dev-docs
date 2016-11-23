Delete Merchant Account
-----------------------

    DELETE /v1/accounts/{accountId}

Sending an empty DELETE request to `/v1/accounts/{accountId}` deletes an
existing [Merchant Account](types#merchantaccount-section). The deleted account is
returned in the response.

<div class="bs-callout bs-callout-warning">If the account has any outstanding authorized live-mode transactions, the
deletion request is rejected. The request is also rejected if the to-be-deleted account is
the primary account, but other non-primary accounts remain.</div>

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X DELETE --user username:password -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/accounts/wKgBZTynEtOBPKgGmXAAAA</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgBZTynEtOBPKgGmXAAAA",
    "status": "DELETED",
    "type": "TEST",
    "name": "New Enterprise Updated",
    ...
}</pre>
</div>
