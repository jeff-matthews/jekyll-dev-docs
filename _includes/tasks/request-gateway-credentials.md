Your OAuth access token allows your application to make calls to the {{site.data.variables.brand.vt-api}} at {{site.data.variables.apiurl.vt}}. The {{site.data.variables.brand.gateway-api}}, however, requires separate credentials for access.

To request these credentials, send a <span class="api-operation">GET</span> request to the <span class ="code-green">https://secure.affinipay.com/api/v1/chargeio_credentials</span> endpoint using your <span class="code-green">access_token</span>.
<h4>Example request</h4>
<pre id="credentials"><code>curl -X GET -H "Authorization: Bearer &lt;access_token>" https://secure.affinipay.com/api/v1/chargeio_credentials
</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#credentials" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

<h4>Example response</h4>
<pre><code>{
    "application": "Example App",
    "user": {
        "first_name": "Jeff",
        "last_name": "Matthews",
        "email": "jeff@techwritersarecool.com",
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
}
</code></pre>

This API will return a list of the test and live accounts associated with the authenticated user’s merchant account. Included in this information are the necessary keys for making calls to the {{site.data.variables.brand.gateway-api}}. Save these credentials securely so your application can manage transactions on behalf of merchant users.

<span class="panel-note"><b>Note:</b> If this call is unsuccessful, refer to [Test Your Web Server Authentication Flow](../basics/test-web-server-oauth-flow.html) and see if you can identify the problem.</span>
