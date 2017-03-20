Update Merchant
---------------
---------------

    PUT /v1/merchants/{merchantId}

A Tenant may modify any of the properties of a [Merchant](types#merchant-section)
by sending the updated JSON content via a PUT to `/v1/merchants/{merchantId}`,
where `merchantId` is the `id` associated with the Merchant. The modified Merchant
is returned in the JSON response.

Note that this API does **not** modify the Merchant's Accounts.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X PUT --user username:password -H "Content-Type:application/json" {{site.data.variables.apiurl.gateway}}/v1/merchants/wKgFeDz-H6WBPP5YjHcAAg -d '
{
    "name": "Biz1 Updated",
    "contact_name": "Biz1 Contact",
    "contact_email": "admin@biz1.com",
    "contact_phone": "9876543210",
    "address1": "97 Hammond St",
    "address2":"Suite 155",
    "city": "Bangor",
    "state": "ME",
    "postal_code": "04401",
    "country": "US",
    "timezone": "America/New_York",
    "api_allowed_ip_address_ranges": "198.51.100.1/24"
}'</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgFeDz-H6WBPP5YjHcAAg",
    "name": "Biz1 Updated",
    "auth_user": "m_wKgFeDz-H6WBPP7wFEEABQ",
    "status": "ACTIVE",
    "contact_name": "Biz1 Contact",
    "contact_email": "admin@biz1.com",
    "contact_phone": "9876543210",
    "address1": "97 Hammond St",
    "address2": "Suite 155",
    "city": "Bangor",
    "state": "ME",
    "postal_code": "04401",
    "country": "US",
    "timezone": "America/New_York",
    "api_allowed_ip_address_ranges": "198.51.100.1/24",
    "merchant_accounts": [
        ...
    ]
}</pre>
</div>
