<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>When a transaction is successfully authorized to collect payment for a recurring charge occurrence,
      a <span class="code-green">recurring_charge.occurrence.paid</span> event is created. The event's <span class="code-green">data</span> property contains the content of the recurring charge occurrence, which includes the authorized transaction in the occurrence's <span class="code-green">transactions</span> property.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "6ld6VsL9TJaSU_kRYCJUFA",
      "created": "2014-07-01T02:05:13.621Z",
      "type": "recurring_charge.occurrence.paid",
      "data": {
          "id": "LDJtMP40T6WXLPYJxlsMQQ",
          "recurring_charge_id": "DUPzt5y7RVGmnSW4BJegbQ",
          "amount": 150,
          "status": "PAID",
          "due_date": "2020-01-01",
          "attempts": 2,
          "last_attempt": "2014-07-01T02:05:13.402Z",
          "transactions": [ {
              "id": "-EMvccWnR523IY1UIPIb6g",
              "account_id": "D5qNOhlwSNK7IV2-HtSAdA",
              "status": "AUTHORIZED",
              "auto_capture": true,
              "amount": 150,
              "currency": "USD",
              "method": {
                  "type": "card",
                  "number": "************4242",
                  "fingerprint": "GunPelYVthifNV63LEw1",
                  "card_type": "VISA",
                  "exp_month": 8,
                  "exp_year": 2018,
                  "name": "Test Customer",
                  "address1": "123 Main St",
                  "postal_code": "78730"
              },
              "amount_refunded": 0,
              "recurring_charge_id": "DUPzt5y7RVGmnSW4BJegbQ",
              "recurring_charge_occurrence_id": "LDJtMP40T6WXLPYJxlsMQQ",
              "type": "CHARGE"
          } ]
      }
  }</code>
  </pre>
</div>
