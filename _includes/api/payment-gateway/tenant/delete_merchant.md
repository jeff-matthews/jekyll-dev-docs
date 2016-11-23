Delete Merchant
---------------

    DELETE /v1/merchants/{merchantId}

A [Merchant](types#merchant-section) is deleted by issuing an empty DELETE
request to `/v1/merchants/{merchantId}`. Once deleted, the Merchant's
credentials can no longer be used, thus preventing any
Merchant-initiated APIs from succeeding. The deleted merchant is
returned in the response.

<div class="bs-callout bs-callout-warning">If the Merchant has any outstanding authorized live-mode transactions, the
deletion request is rejected. The Tenant can suspend or deactivate the Merchant
while waiting for the transactions to clear, after which the deletion can be
performed.</div>

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X DELETE --user username:password -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/merchants/wKgeRDynFnyBPKdn4XIAAQ</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgeRDynFnyBPKdn4XIAAQ",
    "name": "Biz1 Updated",
    "auth_user": "m_wKgeRDynFnyBPKdn4VwAAA",
    "status": "DELETED",
    ...
}</pre>
</div>
