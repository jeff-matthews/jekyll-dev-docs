<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/recurring/charges/{id}/occurrences/{occurrenceId}</span></p>

      <p>An individual <a href="#recurring_charge_occurrence" style="font-family:monospace">recurring_charge_occurrence</a>  is retrieved by performing a GET request to
      <span class="code-green">/v1/recurring/charges/{id}/occurrences/{occurrenceId}</span>, where <span class="code-green">id</span> is the ID of the owning recurring charge and
      <span class="code-green">occurrenceId</span> is the ID of the occurrence to retrieve.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre id="recur-occur"><code class="json">curl -X GET --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/recurring/charges/xicilh0vTAeZiThRtHU2Ow/occurrences/&#95;LIG1tsDQZ21oBgPYTRJdQ</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#recur-occur" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "&#95;LIG1tsDQZ21oBgPYTRJdQ",
      "recurring_charge_id": "xicilh0vTAeZiThRtHU2Ow",
      "amount": 1250,
      "status": "PAID",
      "due_date": "2016-01-01",
      "attempts": 1,
      "last_attempt": "2016-06-27T19:23:49.422Z",
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
