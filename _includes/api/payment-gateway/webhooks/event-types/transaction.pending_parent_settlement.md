<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Authorization of ACH Refunds is deferred until the parent Charge is settled. This ensures that funds are not returned
      until they are guaranteed to have been available. As a result, unlike with other transactions, no initial
      <span class="code-green">transaction.authorized</span> event is created. Instead, a <span class="code-green">transaction.pending_parent_settlement</span> event is created to mark
      the creation of the deferred refund. The refund is included in the content of the event's <span class="code-green">data</span> property.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "monKKds7TgumHbbf0rQXmw",
      "created": "2015-05-19T11:32:18.024Z",
      "type": "transaction.pending_parent_settlement",
      "data": {
          "id": "gq5YQllXSEihD_7Pqthovg",
          "created": "2015-05-19T11:32:17.967Z",
          "modified": "2015-05-19T11:32:18.012Z",
          "account_id": "E9EK1fr_ScilXxuEmXmjDg",
          "status": "PENDING",
          "amount": 1200,
          "currency": "USD",
          "authorization_code": "DIIL4A",
          "auto_capture": true,
          "type": "REFUND",
          "method": {
              "name": "Some Customer",
              "type": "bank",
              "routing_number": "******013",
              "account_number": "******7890",
              "account_type": "CHECKING",
              "bank_name": "FIRST BANK OF TESTING",
              "fingerprint": "8c-uVB-K0R8KnItE1Ri4"
          }
      }
  }</code>
  </pre>
</div>
