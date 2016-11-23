<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/banks</span></p>

      <p>A Merchant creates a saved <a href="#bank" style="font-family:monospace">bank</a> on behalf of a user by POSTing
      the bank details to <span class="code-green">/v1/banks</span>. Alternatively, a previously created
      <a href="#token" style="font-family:monospace">token</a> ID can be provided to convert the token into a
      saved Bank. The saved bank JSON is returned.</p>
    </div>
  </div>

  <blockquote>Creating a saved bank</blockquote>

  <pre><code>curl -X POST --user secret_key: -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/banks -d '
  {
      "routing_number": "000000013",
      "account_number": "10333257392394",
      "account_type": "CHECKING",
      "name": "Some Customer",
      "description": "Corporate Checking",
      "reference": "Customer123"
  }'</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "vU42KZWhTd2iiGLhjfJR6A",
      "type": "bank",
      "description": "Corporate Checking",
      "reference": "Customer123",
      "name": "Some Customer",
      "routing_number": "******013",
      "account_number": "**********2394",
      "account_type": "CHECKING",
      "fingerprint": "j_RBZuzITtssQF8dhRvs",
      "bank_name": "FIRST BANK OF TESTING"
  }</code>
  </pre>

  <blockquote>Charging a customer using the saved bank</blockquote>

  <pre><code>curl -X POST --user secret_key: -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/charges -d '
  {
      "amount": "41099",
      "method": "vU42KZWhTd2iiGLhjfJR6A"
  }'</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "ezpET0X4TNmj1DVf7IkS2Q",
      "type": "CHARGE",
      "account_id": "SryXugNuEeO2jfIPcQrePg",
      "status": "AUTHORIZED",
      "amount": 41099,
      "currency": "USD",
      "method": {
          "type": "bank",
          "routing_number": "******013",
          "account_number": "**********2394",
          "account_type": "CHECKING",
          "fingerprint": "j_RBZuzITtssQF8dhRvs",
          "bank_name": "FIRST BANK OF TESTING",
          "name": "Some Customer"
      }
  }</code>
  </pre>
</div>
