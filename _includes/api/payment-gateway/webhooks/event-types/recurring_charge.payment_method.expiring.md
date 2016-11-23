<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Similar to the <span class="code-green">payment_method.expiring</span> event for saved payment methods, the Gateway generates
      <span class="code-green">recurring_charge.payment_method.expiring</span> events to notify merchants of the upcoming expiration of the payment method associated with a recurring charge. These events are sent on the first day of the month in which the payment method expires. The <span class="code-green">data</span> property of the event contains the JSON content of the affected recurring charge.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "Gd2iejn8SemQ7gYfxb1aaQ",
      "created": "2014-06-01T00:00:00.277Z",
      "type": "recurring_charge.payment_method.expiring",
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
          "total_occurrences": 1,
          "total_amount": 2500,
          "next_payment": "2014-06-01"
      }
  }</code>
  </pre>
</div>
