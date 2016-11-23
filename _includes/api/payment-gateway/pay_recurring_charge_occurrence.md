<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/recurring/charges/{id}/occurrences/{occurrenceId}/pay</span></p>

      <p>A Merchant may pre-pay an <a href="#recurringchargeoccurrence" style="font-family:monospace">recurring_charge_occurrence</a>  (attempting to collect payment
      in advance of the scheduled due date, at which time the Gateway would automatically attempt to collect payment) or
      re-try a previously ignored or failed payment by issuing an empty POST to <span class="code-green">/v1/recurring/charges/{id}/occurrences/{occurrenceId}/pay</span>,
      substituting the ID of the owning recurring charge for <span class="code-green">id</span> and the ID of the occurrence to pay for <span class="code-green">occurrenceId</span>.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre><code>curl -X POST --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/recurring/charges/xicilh0vTAeZiThRtHU2Ow/occurrences/&#95;LIG1tsDQZ21oBgPYTRJdQ/pay</code></pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "&#95;LIG1tsDQZ21oBgPYTRJdQ",
      "recurring_charge_id": "xicilh0vTAeZiThRtHU2Ow",
      "amount": 1250,
      "status": "PAID",
      "due_date": "2016-01-01",
      "attempts": 1,
      "last_attempt": "2014-06-27T19:23:49.422Z",
      "transactions": [ {
          "id": "UvGF3iMEQwObZN0hxikByg",
          "type": "CHARGE"
          "account_id": "&#95;gpv9uWxEeOajNb7ZxMrnA",
          "status": "AUTHORIZED",
          "auto_capture": true,
          "amount": 1250,
          "currency": "USD",
          "method": {
              "type": "card"
              "number": "************4242",
              "fingerprint": "GunPelYVthifNV63LEw1",
              "card_type": "VISA",
              "exp_month": 10,
              "exp_year": 2020,
              "name": "Test Customer"
          },
          "amount_refunded": 0,
          "authorization_code": "R9IFPH",
          "recurring_charge_id": "xicilh0vTAeZiThRtHU2Ow",
          "recurring_charge_occurrence_id": "&#95;LIG1tsDQZ21oBgPYTRJdQ"
      } ]
  }</code>
  </pre>
</div>
