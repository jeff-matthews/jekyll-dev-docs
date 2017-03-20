<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>After the Gateway successfully completes the processing on a transaction, a <span class="code-green">transaction.completed</span>
      Event is generated. This Event indicates the transaction has been captured by the payment processing
      network associated with the transaction's Account and funds settlement initiated. The corresponding
      Transaction is included in the content of the Event's <span class="code-green">data</span> property.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "gSebwTS4TSCDDAINhYVirA",
      "created": "2016-10-25T18:08:22.811Z",
      "type": "transaction.completed",
      "data": {
          "id": "KZ785OcOT9eKrd9vYUHSIg",
          "created": "2016-10-25T05:00:00.322Z",
          "modified": "2016-10-25T05:00:00.322Z",
          "account_id": "TU0BOD2gEeOfvhLxg70sog",
          "status": "COMPLETED",
          "amount": 100,
          "currency": "USD",
          "charge_id": "1N6tYslhQ-GBj7y2hxcCoA",
          "reference": "credit ref",
          "type": "REFUND",
          "method": {
              "name": "Some Customer",
              "type": "card",
              "number" : "***********0005",
              "fingerprint": "wwJwEqfK1cM6fnqKeb2K",
              "card_type": "AMERICAN_EXPRESS",
              "exp_month": 10,
              "exp_year": 2020,
              "cvv": "&#42;&#42;&#42;"
          }
      }
  }</code>
  </pre>
</div>
