<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A <span class="code-green">transaction.voided</span> Event is generated whenever a transaction is voided, either by the caller or automatically by the Gateway. The corresponding Transaction is included in the content of the event's <span class="code-green">data</span> property.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "LMvWZZ8MTYyVBr7hjoohEg",
      "created": "2013-10-25T20:48:21.814Z",
      "type": "transaction.voided",
      "data": {
          "id": "A-TyJgSnTiCGVP6qYdovFw",
          "created": "2013-10-25T20:48:21.713Z",
          "modified": "2013-10-25T20:48:21.754Z",
          "account_id": "NRnwSWCzRy69rIyvkVRIUA",
          "status": "VOIDED",
          "amount": 100,
          "currency": "USD",
           "authorization_code": "FZTINF",
          "void_reference": "void ref",
          "auto_capture": true,
          "amount_refunded": 0,
          "type": "CHARGE",
          "method": {
              "name": "Some Customer",
              "type": "card",
              "number": "&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;4242",
              "fingerprint": "GunPelYVthifNV63LEw1",
              "card_type": "VISA",
              "exp_month": 10,
              "exp_year": 2020
          }
      }
  }</code>
  </pre>
</div>
