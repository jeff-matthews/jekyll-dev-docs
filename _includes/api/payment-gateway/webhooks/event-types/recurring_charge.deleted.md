<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A <span class="code-green">recurring_charge.deleted</span> event is generated following the deletion of a recurring charge. The latest content of the recurring charge instance is included in the content of the event's <span class="code-green">data</span> property.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "aN1pQwDBS1CPAinoYHLrpg",
      "created": "2016-07-01T03:14:08.919Z",
      "type": "recurring_charge.deleted",
      "data": {
          "id": "DUPzt5y7RVGmnSW4BJegbQ",
          "status": "DELETED",
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
