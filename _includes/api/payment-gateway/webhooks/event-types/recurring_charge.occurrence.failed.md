<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A <span class="code-green">recurring_charge.occurrence.failed</span> event is generated when an attempt to pay (either automatically by the Gateway on the occurrence's due date, or as a result of the Merchant pre-paying the occurrence via the API) fails. A failure to collect payment is any case in which a transaction could not be successfully authorized for the scheduled amount. The event's <span class="code-green">data</span> property contains the content of the recurring charge occurrence. The failing transaction is included in the occurrence's <span class="code-green">transactions</span> property.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "P3o15YPsStGFinlee7Z2Lg",
      "created": "2014-07-01T02:03:21.808Z",
      "type": "recurring_charge.occurrence.failed",
      "data": {
          "id": "LDJtMP40T6WXLPYJxlsMQQ",
          "recurring_charge_id": "DUPzt5y7RVGmnSW4BJegbQ",
          "amount": 150,
          "status": "FAILED",
          "due_date": "2020-01-01",
          "attempts": 1,
          "last_attempt": "2014-07-01T02:03:21.649Z",
          "transactions": [ {
              "id": "In0wV4VtRRqLieI0N6L1Jg",
              "account_id": "D5qNOhlwSNK7IV2-HtSAdA",
              "status": "FAILED",
              "failure_code": "card_declined",
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
