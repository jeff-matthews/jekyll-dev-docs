<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/recurring/charges</span></p>

      <p>A new recurring charge is created by POSTing a <a href="#recurringcharge" style="font-family:monospace">recurring_charge</a>
      to <span class="code-green">/v1/recurring/charges</span>. The Gateway schedules the first payment
      <a href="#recurringchargeoccurrence" style="font-family:monospace">recurring_charge_occurrence</a> and returns the new recurring charge in the
      response.</p>

      <p><span class="panel-note"><b>Note:</b> recurring charges cannot be scheduled to start
      on the same day they are created. Doing so will result in a <span class="code-green">first_occurrence_due_immediately</span>
      error being returned.</span></p>
    </div>
  </div>

  <blockquote>Creating a monthly recurring charge from a saved credit card:</blockquote>

  <pre><code>curl -X POST --user secret_key: -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/recurring/charges -d '
  {
      "description": "Monthly recurring charge",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "amount": "1250",
      "method": "OtmNJP6YRpKrcJ0RdZxGcw",
      "schedule": {
          "start": "2016-01-01",
          "interval_unit": "MONTH",
          "interval_delay": 1
      }
  }'</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "xicilh0vTAeZiThRtHU2Ow",
      "status": "ACTIVE",
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
      "next_payment": "2016-01-01",
      "occurrences" : [ {
          "id": "&#95;LIG1tsDQZ21oBgPYTRJdQ",
          "amount": 1250,
          "status": "PENDING",
          "due_date": "2016-01-01",
          "attempts": 0
      } ]
  }</code>
  </pre>

  <blockquote>Creating a bi-weekly recurring charge from a saved bank with a maximum amount</blockquote>

  <pre><code>curl -X POST --user secret_key: -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/recurring/charges -d '
  {
      "description": "Bi-weekly recurring charge",
      "account_id": "7eyWpvRpEeKcOfUBJK8FBw",
      "amount": "1000",
      "method": "g5GCyDzaSJaHsSxmlYXCZw",
      "schedule": {
          "start": "2016-01-01",
          "interval_unit": "WEEK",
          "interval_delay": 2
      },
      "max_amount": 50000
  }'</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "&#95;8T2uDMQSjeU-YD_w6aAJQ",
      "status": "ACTIVE",
      "account_id": "7eyWpvRpEeKcOfUBJK8FBw",
      "method": {
          "type": "bank"
          "routing_number": "******013",
          "account_number": "**********2394",
          "account_type": "CHECKING",
          "bank_name": "FIRST BANK OF TESTING",
          "fingerprint": "U_5z8WAcO7VsoikzR7r1",
          "name": "Some Customer"
      },
      "schedule": {
          "interval_unit": "WEEK",
          "interval_delay": 2,
          "start": "2016-01-01"
      },
      "description": "Bi-weekly recurring charge",
      "amount": 1000,
      "currency": "USD",
      "max_amount": 50000,
      "total_occurrences": 0,
      "total_amount": 0,
      "next_payment": "2016-01-01",
      "occurrences": [ {
          "id": "MVzDNme3T3avwTm8syOZWg",
          "amount": 1000,
          "status": "PENDING",
          "due_date": "2016-01-01",
          "attempts": 0
      } ]
  }'</code>
  </pre>
</div>
