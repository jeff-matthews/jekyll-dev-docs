<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">PUT</span> <span class="code-green">/v1/accounts/{accountId}</span></p>

      <p>A Merchant may update the name, primary status, and policy configuration of a <a href="#merchant_account" style="font-family:monospace">merchant_account</a> via a PUT to <span class="code-green">/v1/accounts/{accountId}</span>.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre id="put-merchant-account"><code class="json">curl -X PUT -H "Content-Type:application/json" --user secret_key: https://api.chargeio.com/v1/accounts/wKgFeDz5HF-BPPl08dcADQ -d '
  {
      "name": "Operating",
      "primary": true,
      "required_payment_fields": "name,cvv",
      "cvv_policy": "REQUIRE_MATCH_LENIENT",
      "avs_policy": "ADDR_OR_POSTAL_CODE_STRICT",
      "ignore_avs_failure_if_cvv_match": true
  }'</code></pre>

  <blockquote><button id="btn" class="btn copy api" data-clipboard-target="#put-merchant-account" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFeDz5HF-BPPl08dcADQ",
      "status": "ACTIVE",
      "name": "Operating",
      "primary": true,
      "currency": "USD",
      "required_payment_fields": "name,cvv",
      "cvv_policy": "REQUIRE_MATCH_LENIENT",
      "avs_policy": "ADDR_OR_POSTAL_CODE_STRICT",
      "ignore_avs_failure_if_cvv_match": true,
      "transaction_allowed_countries": "US,CA"
  }</code></pre>
</div>
