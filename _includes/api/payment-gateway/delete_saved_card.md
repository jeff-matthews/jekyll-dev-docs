<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">DELETE</span> <span class="code-green">/v1/cards/{cardId}</span></p>

      <p>A previously saved <a href="#card" style="font-family:monospace">card</a> can be deleted by sending a DELETE to
      <span class="code-green">/v1/cards/{cardId}</span>, substituting the ID of the card. The Gateway responds with the
      JSON representation of the deleted card with sensitive properties masked. After
      deletion, the card ID can no longer be used to perform payments.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre><code>curl -X DELETE --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/cards/RNZyuzAPTK2TSS6hPKafDA</code>
  </pre>

  <blockquote>Example resonse</blockquote>
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
