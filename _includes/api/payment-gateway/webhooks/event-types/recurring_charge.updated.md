<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Following an update to a recurring charge, a <span class="code-green">recurring_charge.updated</span> event is generated. The event's <span class="code-green">data</span> property contains the contents of the updated recurring charge.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "ekJpirwHRfOCN05P2jKEUA",
      "created": "2014-07-01T01:59:36.664Z",
      "type": "recurring_charge.updated",
      "data": {
          "id": "DUPzt5y7RVGmnSW4BJegbQ",
          "status": "ACTIVE",
          "account_id": "D5qNOhlwSNK7IV2-HtSAdA",
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
          "schedule": {
              "interval_unit": "MONTH",
              "interval_delay": 1,
              "start": "2020-01-01"
          },
          "description": "New Recurring Charge",
          "amount": 150,
          "currency": "USD",
          "total_occurrences": 0,
          "total_amount": 0,
          "next_payment": "2020-01-01"
      }
  }</code>
  </pre>
</div>
