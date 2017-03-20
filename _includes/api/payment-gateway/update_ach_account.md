<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">PUT</span> <span class="code-green">/v1/ach-accounts/{accountId}</span></p>

      <p>A Merchant may update the name, primary status, and policy configuration of an <a href="#ach_account" style="font-family:monospace">ach_account</a>.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre id="put-ach-account"><code class="json">curl -X PUT -H "Content-Type:application/json" --user secret_key: https://api.chargeio.com/v1/ach-accounts/5A299P9oEeKcOfUBJK8FBw -d '
  {
      "name": "Test Bank Account",
      "primary": true,
      "required_payment_fields": "name",
      "transaction_allowed_countries": "US"
  }'</code></pre>

  <blockquote><button id="btn" class="btn copy api" data-clipboard-target="#put-ach-account" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
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
  }</code></pre>
</div>
