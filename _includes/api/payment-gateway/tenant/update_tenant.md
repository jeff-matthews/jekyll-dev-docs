Update Tenant
--------------------------------------

    PUT /v1/tenant

A Tenant may update their name, contact information, and configuration via a
a PUT of a JSON [Tenant](types#tenant-section) containing the updated information
to the `/v1/tenant` URL. The updated [Tenant](types#tenant-section) is returned.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X PUT --user username:password -H "Content-Type:application/json" {{site.data.variables.apiurl.gateway}}/v1/tenant -d '
{
    "name": "Sample Tenant Updated",
    "contact_name": "New ContactName",
    "contact_email": "admin@example.com",
    "contact_phone": "5121112233",
    "address1": "123 Main St",
    "address2": "Suite 5-A",
    "city": "Austin",
    "state": "TX",
    "postal_code": "78730",
    "country": "US",
    "auto_capture_hour": 1,
    "api_allowed_ip_address_ranges": "10.14.2.0/28",
    "events_url": "https://api.example.com/events"
}'</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgFeDz4GvqBPPgbDW4AAA",
    "name": "Sample Tenant Updated",
    "contact_name": "New ContactName",
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
    "auto_capture_hour": 1,
    "api_allowed_ip_address_ranges": "10.14.2.0/28",
    "events_url": "https://api.example.com/events"
}</pre>
</div>
