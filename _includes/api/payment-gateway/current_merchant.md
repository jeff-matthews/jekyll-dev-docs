<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">

      <p><span class="api-operation">GET</span> <span class="code-green">/v1/merchant</span></p>

      <p>Returns the currently-authenticated <a href="#merchant" style="font-family:monospace">merchant</a>. This operation can be used to test authenticating to the Gateway using a Merchant's credentials. Note that the merchant and ACH accounts returned are filtered based on whether a live or test-mode secret key was provided. Only <span class="code-green">TEST</span> accounts are returned if a test-mode secret key is used, while a live-mode secret key only returns live accounts.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre><code class="json">curl --user secret_key: https://api.chargeio.com/v1/merchant</code></pre>

  <blockquote>Example response</blockquote>
  <pre><code class="json">{
      "id": "wKgFeDz5HF-BPPl08dcACw",
      "name": "Biz1",
      "public_key": "m_wKgFeD0hHlaBPSGgaAQAAA",
      "contact_name": "Merchant Contact",
      "contact_email": "admin@biz1.com",
      "contact_phone": "9876543210",
      "address1": "97 Hammond St",
      "city": "Bangor",
      "state": "ME",
      "postal_code": "04401",
      "country": "US",
      "timezone": "America/New_York",
      "api_allowed_ip_address_ranges": "127.0.0.1/32,198.51.100.1/24",
      "merchant_accounts": [
          {
              "id": "wKgFeDz5HF-BPPl08dcADQ",
              "status": "ACTIVE",
              "name": "Operating",
              "primary": true,
              "required_payment_fields": "name",
              "cvv_policy": "REQUIRE_MATCH_LENIENT",
              "avs_policy": "ADDR_OR_POSTAL_CODE_LENIENT",
              "ignore_avs_failure_if_cvv_match": false,
              "transaction_allowed_countries": "US,CA"
          }, {
              "id": "wKgFeDz5HF-BPPl08dcADA",
              "status": "ACTIVE",
              "name": "Trust",
              "primary": false,
              "required_payment_fields": "name",
              "cvv_policy": "REQUIRE_MATCH_LENIENT",
              "avs_policy": "ADDR_OR_POSTAL_CODE_LENIENT",
              "ignore_avs_failure_if_cvv_match": false,
              "transaction_allowed_countries": "US,CA"
          }
      ],
      "ach_accounts": [
          {
              "id": "5A299P9oEeKcOfUBJK8FBw",
              "status": "ACTIVE",
              "routing_number": "******013",
              "account_number": "*****8932",
              "account_type": "CHECKING",
              "bank_name": "FIRST BANK OF TESTING",
              "name": "Test Bank Account",
              "primary": true,
              "required_payment_fields": "name",
              "transaction_allowed_countries": "US"
          }
      ]
  }</code>
  </pre>
</div>
