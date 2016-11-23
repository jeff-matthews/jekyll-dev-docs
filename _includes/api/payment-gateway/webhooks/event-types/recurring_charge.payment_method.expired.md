<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Upon expiration of the payment method associated with a recurring charge, the Gateway creates a
      <span class="code-green">recurring_charge.payment_method.expired</span> event to notify merchants of the need to update the payment method. Without an update to the payment details, future scheduled attempts to collect payment for the recurring charge are likely to fail. These events are sent on the first day of the month following the expiration of the payment method. The <span class="code-green">data</span> property of the Event contains the JSON content of the affected recurring charge.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "07RRZ2aESqedDKcyqfEWMQ",
      "created": "2014-07-01T00:00:00.193Z",
      "type": "recurring_charge.payment_method.expired",
      "data": {
          "id": "OAe6YaS7TPiRtJiM1USqDg",
          "status": "ACTIVE",
          "account_id": "D5qNOhlwSNK7IV2-HtSAdA",
          "method": {
              "type": "card",
              "number": "************4242",
              "fingerprint": "GunPelYVthifNV63LEw1",
              "card_type": "VISA",
              "exp_month": 6,
              "exp_year": 2014
              "name": "Test Customer",
              "address1": "123 Main St",
              "postal_code": "78730"
          },
          "schedule": {
              "interval_unit": "MONTH",
              "interval_delay": 1,
              "start": "2014-05-01"
          },
          "description": "New Recurring Charge",
          "amount": 2500,
          "currency": "USD",
          "total_occurrences": 2,
          "total_amount": 2500,
          "next_payment": "2014-07-01"
      }
  }</code>
  </pre>
</div>
