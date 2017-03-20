<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/cards</span></p>

      <p>A merchant creates a saved <a href="#card" style="font-family:monospace">card</a> on behalf of a user, for use in
      future payments, by POSTing the card details to <span class="code-green">/v1/cards</span>. Alternatively, a
      previously created <a href="#token" style="font-family:monospace">token</a> ID can be provided to convert
      the token into a saved card. The saved card JSON is returned.</p>

      <p>Following a FORM POST to create a <a href="#token" style="font-family:monospace">token</a>, the <span class="code-green">id</span> property of the returned token JSON can be used as the value of a Card <span class="code-green">token_id</span> to convert the token into a saved card:</p>
    </div>
  </div>

  <blockquote>Creating a saved card</blockquote>
  <pre id="card-create"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/cards -d '
  {
      "number": "4242424242424242",
      "exp_month": 10,
      "exp_year": 2017,
      "name": "Some Customer",
      "description": "Corporate VISA",
      "reference": "Customer123"
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#card-create" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
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

  <blockquote>Creating a saved card from a one-time token</blockquote>

  <pre id="token-card"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/cards -d '
  {
      "token_id": "lUi5VesmStiZo0ss5I0t5w"
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#token-card" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "iwinxWe9T_OXinD5oOqYBQ",
      "type": "card",
      "name": "Some Customer",
      "number": "************4242",
      "fingerprint": "GunPelYVthifNV63LEw1",
      "card_type": "VISA",
      "exp_month": 10,
      "exp_year": 2017
  }</code>
  </pre>

  <blockquote>Charging using the saved card</blockquote>
  <pre id="card-charge"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/charges -d '
  {
      "amount": "110",
      "method": "RNZyuzAPTK2TSS6hPKafDA"
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#card-charge" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "zMToetuTSC2KlIZmJEYr8Q",
      "type": "CHARGE",
      "account_id": "SrxWOANuEeO2jfIPcQrePg",
      "status": "AUTHORIZED",
      "amount": 110,
      "currency": "USD",
      "auto_capture": true,
      "amount_refunded": 0,
      "method": {
          "type": "card",
          "name": "Some Customer",
          "number": "************4242",
          "fingerprint": "GunPelYVthifNV63LEw1",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2017
      }
  }</code>
  </pre>
</div>
