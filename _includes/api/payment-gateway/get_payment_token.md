<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/tokens/{tokenId}</span></p>

      <p>An existing payment token may be retrieved by performing a GET to <span class="code-green">/v1/tokens/{tokenId}</span>
      where <span class="code-green">tokenId</span> is the ID of a payment token created previously by the merchant. The
      API returns a JSON representation of the <a href="#token" style="font-family:monospace">token</a>, with all sensitive data masked.</p>

      <p>When used with a redirect-based payment form, this API can be used to re-populate
      payment forms with the customer's data following a submitted transaction that
      is rejected, for example, due to validation errors.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/tokens/wKgFaj72F3aBPvZneEsBew</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFaj72F3aBPvZneEsBew",
      "type": "card",
      "number": "************4242",
      "fingerprint": "GunPelYVthifNV63LEw1",
      "exp_month": 12,
      "exp_year": 2017,
      "cvv": "&#42;&#42;&#42;",
      "name": "Some User",
      "address1": "123456",
      "postal_code": "78730"
  }</code>
  </pre>
</div>
