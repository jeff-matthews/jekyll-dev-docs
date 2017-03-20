<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/charges/{chargeId}/refund</span></p>

      <p>A <a href="#refund" style="font-family:monospace">refund</a> returns funds to a customer's account for a specified Charge. Multiple refunds may be performed up to the total amount authorized. Refunds can be applied to any auto-capture Charges for which the status is either <span class="code-green">AUTHORIZED</span> or <span class="code-green">COMPLETED</span>. Non-auto-capture
      Charges must be <span class="code-green">COMPLETED</span> by a <a href="#capture">capture</a> before refunds
      may be applied.</p>

      <p>Refunds are always captured automatically by the Gateway. Refunds are queued up until the daily capture occurs, at which point the refunds are settled following any pending authorized Charges. The new Refund entity is returned in the response content.</p>

      <p><span class="panel-warning">By default, funds are returned to the payment method specified in the Charge (either a Card or Bank). If enabled by the Tenant, Refunds can be applied to a different credit card or bank account; however, the type of payment method cannot be changed. For example, a Charge to a credit card cannot be refunded to a bank account.</span></p>

      <p><span class="panel-warning">Refunds of Charges using a Bank as the payment method are queued until the status of the parent Charge is <span class="code-green">COMPLETED</span>. This ensures that funds are properly deposited before the refund is performed. In this case, the status of the returned Refund is <span class="code-green">PENDING</span>. The Gateway automatically performs the refund once settlement details for the parent Charge are received. In the event of a settlement failure, the status of the Refund is changed to <span class="code-green">FAILED</span> and the failure code is updated. Note that a refund applied to a <span class="code-green">COMPLETED</span> Bank Charge is performed immediately.</span></p>
    </div>
  </div>

  <blockquote>Applying a refund to a credit card charge</blockquote>

  <pre id="refund-credit"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/charges/wKgFnjz8GamBPPzKzIsAAA/refund -d '
  {
      "amount":"20"
  }'</code></pre>

  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#refund-credit" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFnjz8GamBPPzVF2kAAg",
      "type": "REFUND",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "status": "AUTHORIZED",
      "amount": 20,
      "currency": "USD",
      "auto_capture": true,
      "charge_id": "wKgFnjz8GamBPPzKzIsAAA",
      "method": {
          "type": "card",
          "number": "************4242",
          "fingerprint": "CmsP3lYV4akuOz12pFa8",
          "type": "VISA",
          "exp_month": 10,
          "exp_year": 2017,
          "name": "Sample Customer"
      }
  }</code>
  </pre>


  <blockquote>Applying a refund to a settled bank charge</blockquote>

  <pre id="refund-bank"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/charges/GflPgzrBQsGu333bcBDDeA/refund -d '
  {
      "amount":"135"
  }'</code></pre>

  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#refund-bank" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "rXNUi7WXSkeyEvIuMPOaOw",
      "type": "REFUND",
      "account_id": "7eyWpvRpEeKcOfUBJK8FBw",
      "status": "AUTHORIZED",
      "amount": 135,
      "currency": "USD",
      "auto_capture": true,
      "charge_id": "GflPgzrBQsGu333bcBDDeA",
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


  <blockquote>Applying a refund to an authorized (unsettled) bank charge</blockquote>

  <pre id="refund-unsettled"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/charges/TUd8PkY3TwmsXcYeqoWsEA/refund -d '
  {
      "amount":"350"
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#refund-unsettled" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "BO2ykwKDSRSzlvP7NTc9hw",
      "type": "REFUND",
      "account_id": "7eyWpvRpEeKcOfUBJK8FBw",
      "status": "PENDING",
      "amount": 350,
      "currency": "USD",
      "auto_capture": true,
      "charge_id": "TUd8PkY3TwmsXcYeqoWsEA",
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
