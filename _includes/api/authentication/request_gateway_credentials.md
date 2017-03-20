<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">v1/chargeio_credentials</span></p>

      <p>This endpoint returns a list of the test and live accounts associated with the authenticated user’s merchant account. Included in this information are the necessary keys for making calls to the {{site.data.variables.brand.gateway-api}}. Save these credentials securely so your application can manage transactions on behalf of merchant users.</p>
    </div>
  </div>

<blockquote>Example request</blockquote>
<pre id="gw-credentials"><code class="json">curl -X GET -H "Authorization: Bearer &lt;access_token>" https://secure.affinipay.com/api/v1/chargeio_credentials
</code></pre>

<blockquote><button id="btn" class="btn copy" data-clipboard-target="#gw-credentials" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

<blockquote>Example response</blockquote>
<pre><code>{
    "application": "Example App",
    "user": {
        "first_name": "Dave",
        "last_name": "Bowman",
        "email": "dave@techwritersarecool.com",
        "owner": true,
        "abilities": [
            "admin",
            "charge",
            "schedule_charge",
            "refund",
            "tag_transactions",
            "view_reports"
        ]
    },
    "merchant": {
        "name": "Acme Inc.",
        "address": "123 Main Street",
        "additional_address": "Suite 300",
        "city": "Austin",
        "state": "TX",
        "postal_code": "02360",
        "country": "US",
        "phone": "9789879878",
        "timezone": "Eastern Time (US & Canada)",
        "website": "http://www.example.com",
        "support_email": "support@example.com",
        "support_phone": "(978) 987-9878",
        "email_success_to": "admin@example.com",
        "email_failure_to": "admin@example.com",
        "reference_required": true,
        "reference_label": "New Reference Label Name"
    },
    "test_accounts": [
        {
            "name": "Operating",
            "type": "MerchantAccount",
            "currency": "USD",
            "recurring_charges_enabled": false,
            "id": "&#95;DVA8TyeQ9qreE_a0vpv5w",
            "public_key": "m_7LwaBGj6T52TyR60xvjgzg",
            "secret_key": "tccsidx6bf3e15blzlbtztvkx6m2v39ulrstbg5c1fgtaykf9lyzkz9nb1fcavx",
            "trust_account": "false"
        },
        {
            "name": "Trust",
            "type": "MerchantAccount",
            "currency": "USD",
            "recurring_charges_enabled": false,
            "id": "Icw6sdURR_CGF3ch3zbfrQ",
            "public_key": "m_7LwaBGj6T52TyR60xvjgzg",
            "secret_key": "tccsidx6bf3e15blzlbtztvkx6m2v39ulrstbg5c1fgtaykf9lyzkz9nb1fcavx",
            "trust_account": "true"
        },
        {
            "name": "Bank ACH",
            "type": "AchAccount",
            "currency": "USD",
            "recurring_charges_enabled": false,
            "id": "P4L8ytrISoKp39xecKa_Nw",
            "public_key": "m_7LwaBGj6T52TyR60xvjgzg",
            "secret_key": "tccsidx6bf3e15blzlbtztvkx6m2v39ulrstbg5c1fgtaykf9lyzkz9nb1fcavx",
            "trust_account": "false"
        }
    ],
    "live_accounts": []
}</code></pre>
</div>
