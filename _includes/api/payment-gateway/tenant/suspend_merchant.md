Suspend Merchant
----------------

    POST /v1/merchants/{merchantId}/suspend

A Merchant can be suspended by POSTing an empty request to
`/v1/merchants/{merchantId}/suspend`. Once suspended, the Merchant is
prevented from processing any further transactions. Suspension may be
used to enforce business policy between the Tenant and Merchant (such as
failure to meet payment obligations, etc), or as a means of mitigating
compromised security credentials. Suspension is intended to be a
short-term solution. To disable Merchants for longer terms, the
[Deactivate](#deactivate-merchant-section) API should be used. A
suspended Merchant can be brought back into an active state via the
[Reactivate](#reactivate-merchant-section) API.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/merchants/wKgeRDynFnyBPKdn4XIAAQ/suspend</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgeRDynFnyBPKdn4XIAAQ",
    "name": "Biz1 Updated",
    "auth_user": "m_wKgeRDynFnyBPKdn4VwAAA",
    "status": "SUSPENDED",
    ...
}</pre>
</div>
