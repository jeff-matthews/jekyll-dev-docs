<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/recurring/charges/{id}</span></p>

      <p>A Merchant may retrieve an existing <a href="#recurringcharge" style="font-family:monospace">recurring_charge</a> created through one
      of its own accounts by sending a GET request to <span class="code-green">/v1/recurring/charges/{id}</span> where <span class="code-green">id</span> is the ID of the recurring charge. The Gateway returns the JSON contents of the recurring charge.</p>

      <p><span class="panel-note"><b>Note:</b> <a href="#recurringchargeoccurrence" style="font-family:monospace">Occurrences</a> must be retrieved separately via their own <a href="#get-occurrence">API</a>.</span></p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/recurring/charges/xicilh0vTAeZiThRtHU2Ow</code>
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
      "next_payment": "2016-01-01"
  }</code>
  </pre>
</div>
