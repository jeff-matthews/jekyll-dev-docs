Reactivate Merchant
-------------------

    POST /v1/merchants/{merchantId}/reactivate

A suspended or deactivated [Merchant](types#merchant-section) can be placed
back into service via an empty POST to `/v1/merchants/{merchantId}/reactivate`.
The updated Merchant is returned.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/merchants/wKgeRDynFnyBPKdn4XIAAQ/reactivate</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgeRDynFnyBPKdn4XIAAQ",
    "name": "Biz1 Updated",
    "auth_user": "m_wKgeRDynFnyBPKdn4VwAAA",
    "status": "ACTIVE",
    ...
}</pre>
</div>
