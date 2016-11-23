<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/cards/{cardId}</span></p>

      <p>A previously saved <a href="#card" style="font-family:monospace">card</a> can be retrieved by sending a GET to
      <span class="code-green">/v1/cards/{cardId}</span>, substituting the ID of the card. The Gateway responds with the
      JSON representation of the card with sensitive properties masked.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/cards/RNZyuzAPTK2TSS6hPKafDA</code>
  </pre>

  <pre><code>{
      "id": "RNZyuzAPTK2TSS6hPKafDA",
      "type": "card",
      "reference": "Customer123",
      "description": "Corporate VISA",
      "name": "Some Customer",
      "number": "************4242",
      "fingerprint": "GunPelYVthifNV63LEw1",
      "card_type": "VISA",
      "exp_month": 10,
      "exp_year": 2017
  }</code>
  </pre>
</div>
