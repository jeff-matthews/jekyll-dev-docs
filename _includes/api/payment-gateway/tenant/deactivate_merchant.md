Deactivate Merchant
----------------

    POST /v1/merchants/{merchantId}/deactivate

A Merchant can be placed into an inactive state by POSTing an empty
request to `/v1/merchants/{merchantId}/deactivate`. Once deactivated,
the Merchant is prevented from processing any further transactions.
Deactivation may be used to mark Merchants as inactive for long
term periods while still allowing the Tenant to perform searches and
reporting on the Merchant. A deactivated Merchant can be brought back
into an active state via the [Reactivate](#reactivate-merchant-section)
API.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password -H "Content-Type:application/json" {{site.data.variables.apiurl.gateway}}/v1/merchants/wKgeRDynFnyBPKdn4XIAAQ/deactivate</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgeRDynFnyBPKdn4XIAAQ",
    "name": "Biz1 Updated",
    "auth_user": "m_wKgeRDynFnyBPKdn4VwAAA",
    "status": "INACTIVE",
    ...
}</pre>
</div>
