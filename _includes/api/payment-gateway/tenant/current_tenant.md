Current Tenant
--------------

    GET /v1/tenant

The `/v1/tenant` URL returns the currently-authenticated [Tenant](types#tenant-section).
This operation can be used to test authenticating to the Gateway using a
Tenant's credentials.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl --user username:password {{site.data.variables.apiurl.gateway}}/v1/tenant</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgFeDz4GvqBPPgbDW4AAA",
    "name": "Sample Tenant",
    "contact_name": "Tenant Admin",
    "contact_email": "admin@example.com",
    "contact_phone": "5121112233",
    "address1": "123 Main St",
    "address2": "Suite 5-A",
    "city": "Austin",
    "state": "TX",
    "postal_code": "78730",
    "country": "US",
    "auth_user": "t_admin",
    "status": "ACTIVE",
    "auto_capture_hour": 0,
    "api_allowed_ip_address_ranges": "1.0.0.0/1"
}</pre>
</div>
