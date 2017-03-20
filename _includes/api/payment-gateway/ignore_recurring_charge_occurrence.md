<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/recurring/charges/{id}/occurrences/{occurrenceId}/ignore</span></p>

      <p>A Merchant may optionally mark an <a href="#recurring_charge_occurrence" style="font-family:monospace">recurring_charge_occurrence</a> of a recurring charge
      as ignored, provided the occurrence has not already been paid. This will prevent the Gateway from attempting to collect
      payment for this specific occurrence of the schedule. This mechanism can be used to handle scenarios in which a customer
      uses an alternative mechanism to make a payment (for example, sending a check) or a Merchant wishes to forgo a payment.
      Occurrences marked ignored can still be collected at a later time using the <a href="#pay-occurrence">Pay Occurrence</a>
      endpoint.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre id="ignore-occur"><code class="json">curl -X POST --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/recurring/charges/xicilh0vTAeZiThRtHU2Ow/occurrences/Vj91nLgbSg61pzHqYb06VQ/ignore</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#ignore-occur" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "Vj91nLgbSg61pzHqYb06VQ",
      "recurring_charge_id": "xicilh0vTAeZiThRtHU2Ow",
      "amount": 1250,
      "status": "IGNORED",
      "due_date": "2016-02-01",
      "attempts": 0
  }</code>
  </pre>
</div>
