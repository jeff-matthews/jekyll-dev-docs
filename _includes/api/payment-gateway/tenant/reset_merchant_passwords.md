Reset Merchant Passwords
------------------------

    POST /v1/merchants/{merchantId}/password_reset

The live and test passwords used by a Merchant to authenticate via the
API are reset by sending an empty POST to
`/v1/merchants/{merchantId}/password_reset`. The updated Merchant is
returned, including the cleartext reset passwords.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/merchants/wKgeRDynFnyBPKdn4XIAAQ/password_reset</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgeRDynFnyBPKdn4XIAAQ",
    "name": "Biz1 Updated",
    "auth_user": "m_wKgeRDynFnyBPKdn4VwAAA",
    "status": "ACTIVE",
    ...
    "live_pass": "gBa6YKsLdGdWRowj9pnIYJgxk6iVpzAk",
    "test_pass": "6xlVRlbiAi6dQZsmruOlEaD8pV87GQMS,
    ...
}</pre>
</div>
