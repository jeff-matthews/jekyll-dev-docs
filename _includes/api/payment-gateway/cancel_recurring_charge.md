<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/recurring/charges/{id}/cancel</span></p>

      <p>A recurring charge may be cancelled at any time by the Merchant. Once cancelled, no further attempts are made to
      collect payments for the recurring charge and the status of the recurring charge is set to <span class="code-green">COMPLETED</span>. The
      <span class="code-green">status_reason</span> property is also set to <span class="code-green">user_canceled</span> to indicate the recurring charge completed due to cancellation.
      Unlike <a href="#delete-recurring-charge">deleting</a>, cancelled recurring charges still appear in the results when
      <a href="#list-recurring-charges">listing</a> recurring charges.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre><code>curl -X POST --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/recurring/charges/xicilh0vTAeZiThRtHU2Ow/cancel</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "xicilh0vTAeZiThRtHU2Ow",
      "status": "COMPLETED",
      "status_reason": "user_canceled",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "method": {
          "type": "card",
          "number": "************4242",
          "fingerprint": "GunPelYVthifNV63LEw1",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2020,
          "name": "Test Customer"
      },
      "schedule": {
          "interval_unit": "MONTH",
          "interval_delay": 1,
          "start": "2016-01-01"
      },
      "description": "Monthly recurring charge",
      "amount" : 1250,
      "currency": "USD",
      "total_occurrences": 0,
      "total_amount": 0,
      "next_payment": "2016-04-01"
  }</code>
  </pre>
</div>
