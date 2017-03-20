<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The completion of a recurring charge, either due to attempted payment of all scheduled occurrences or user cancellation,
      creates a <span class="code-green">recurring_charge.completed</span> event. The event's <span class="code-green">data</span> property contains the content of the completed recurring charge.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "aN1pQwDBS1CPAinoYHLrpg",
      "created": "2016-07-01T03:10:54.236Z",
      "type": "recurring_charge.completed",
      "data": {
          "id": "DUPzt5y7RVGmnSW4BJegbQ",
          "status": "COMPLETED",
          "status_reason": "user_canceled",
          "account_id": "D5qNOhlwSNK7IV2-HtSAdA",
          "method": {
              "type": "card",
              "number": "************4242",
              "fingerprint": "GunPelYVthifNV63LEw1",
              "card_type": "VISA",
              "exp_month": 10,
              "exp_year": 2020,
              "name": "Test Customer",
              "address1": "123 Main St",
              "postal_code": "78730"
          },
          "schedule": {
              "interval_unit": "MONTH",
              "interval_delay": 1,
              "start": "2020-01-01"
          },
          "description": "New Recurring Charge",
          "amount": 150,
          "currency": "USD",
          "total_occurrences": 2,
          "total_amount": 300,
          "next_payment": "2020-03-01"
      }
  }</code>
  </pre>
</div>
