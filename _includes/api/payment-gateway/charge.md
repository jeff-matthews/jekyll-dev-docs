<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/charges</span></p>

      <p>The <span class="code-green">/v1/charges</span> API submits a payment request from a customer using the payment method included in the request. The payment method can be a <a href="../reference/api.html#card" style="font-family:monospace">card</a> or <a href="../reference/api.html#bank" style="font-family:monospace">bank</a>, or the ID of a stored payment method or one-time token. The operation performs an authorize for the funds specified and returns the Charge in the response.</p>

      <p>If no account ID is specified in the request, the Gateway automatically selects the primary merchant or ACH account, depending on the type of payment method specified; for example, providing a bank method results in the primary ACH account being selected. If no matching account is found, or if an account ID is provided but does not match the payment method, the charge is rejected.</p>

      <p>By default, all successful authorizations are captured automatically daily for
      all the Merchant's accounts at a time configured by the Merchant's Tenant. For credit card payments, separate authorization and capture can be performed by specifying <span class="code-green">auto_capture: false</span> in the JSON request, resulting in a hold being placed on the customer's funds without automatic
      capture. The ability to perform "auth-only" transactions must be specifically enabled by the Tenant, and must be <a href="../reference/api.html#capture">captured</a> or <a href="../reference/api.html#voids">voided</a> using the corresponding APIs; otherwise they are automatically voided by the Gateway after 7 days.</p>
    </div>
  </div>

  <blockquote>Creating a credit card Charge with automatic capture</blockquote>
  <pre id="charge"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/charges -d '
  {
      "amount": "100",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "method": {
          "type": "card",
          "number": "4242424242424242",
          "exp_month": 10,
          "exp_year": 2017,
          "cvv": "123",
          "name": "Some Customer"
      }
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy api" data-clipboard-target="#charge" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFnjz8GamBPPzKzIsAAA",
      "type": "CHARGE",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "status": "AUTHORIZED",
      "amount": 100,
      "currency": "USD",
      "auto_capture": true,
      "amount_refunded": 0,
      "authorization_code": "MFIADB",
      "method": {
          "type": "card",
          "number": "************4242",
          "fingerprint": "CmsP3lYV4akuOz12pFa8",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2017,
          "name": "Some Customer"
      }
  }</code>
  </pre>


  <blockquote>Creating an authorization-only credit card Charge</blockquote>

  <pre id="charge2"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/charges -d '
  {
      "amount": "100",
      "auto_capture": false,
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "method": {
          "type": "card",
          "number": "4242424242424242",
          "exp_month": 10,
          "exp_year": 2017,
          "cvv": "123",
          "name": "Sample Customer",
          "address1": "123 Main St",
          "city": "Austin",
          "state": "TX",
          "postal_code": "78730"
      }
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy api" data-clipboard-target="#charge2" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFnjz8GamBPP0ASxIABA",
      "type": "CHARGE",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "status": "AUTHORIZED",
      "amount": 100,
      "currency": "USD",
      "auto_capture": false,
      "amount_refunded": 0,
      "authorization_code": "DSFCCO",
      "method": {
          "type": "card",
          "number": "************4242",
          "fingerprint": "CmsP3lYV4akuOz12pFa8",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2017,
          "name": "Sample Customer",
          "address1": "123 Main St",
          "city": "Austin",
          "state": "TX",
          "postal_code": "78730"
      },
      "cvv_result" : "MATCHED",
      "avs_result" : "ADDRESS_AND_ZIP5"
  }</code>
  </pre>


  <blockquote>Creating a credit card charge using a saved card ID or one-time token</blockquote>

  <pre id="charge3"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/charges -d '
  {
      "amount": "100",
      "method": "RNZyuzAPTK2TSS6hPKafDA",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ"
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy api" data-clipboard-target="#charge3" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFnjz8GamBPPzKzIsAAA",
      "type": "CHARGE",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "status": "AUTHORIZED",
      "amount": 100,
      "currency": "USD",
      "auto_capture": true,
      "amount_refunded": 0,
      "authorization_code": "RLQMEA",
      "method": {
          "type": "card",
          "number": "************4242",
          "fingerprint": "GunPelYVthifNV63LEw1",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2017,
          "name": "Some Customer"
      },
      "cvv_result" : "MATCHED"
  }</code>
  </pre>


  <blockquote>Creating a Charge debiting a customer bank account</blockquote>

  <pre id="charge4"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/charges -d '
  {
      "amount": "39088",
      "account_id": "7eyWpvRpEeKcOfUBJK8FBw",
      "method": {
          "type": "bank",
          "routing_number": "000000013",
          "account_number": "1100000002",
          "account_type": "CHECKING",
          "name": "Some Customer"
      }
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy api" data-clipboard-target="#charge4" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "GflPgzrBQsGu333bcBDDeA",
      "type": "CHARGE",
      "account_id": "7eyWpvRpEeKcOfUBJK8FBw",
      "status": "AUTHORIZED",
      "amount": 39088,
      "currency": "USD",
      "auto_capture": "true",
      "amount_refunded": 0,
      "authorization_code": "ZGBAIF",
      "method": {
          "type": "bank",
          "routing_number": "******013",
          "account_number": "******0002",
          "account_type": "CHECKING",
          "fingerprint": "0R21SqvPDfkxagx8hkAE",
          "bank_name": "FIRST BANK OF TESTING",
          "name": "Some Customer"
      }
  }</code>
  </pre>
</div>
