<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/charges/{chargeId}/schedule</span></p>
      <p>Merchants can use this endpoint to create a recurring charge that uses the same details as a previously processed payment (e.g., payment method, customer information).</p>
      <p>Whereas <a href="../reference/api.html#charge-with-recurrence">Charge with Recurrence</a> allows you to define a recurring charge <em>plus</em> an initial payment and <a href="../reference/api.html#create-recurring-charge">Create Recurring Charge</a> allows you to define a recurring charge for future payments only, <b>Schedule a Charge</b> allows you to reuse an existing transaction to define a new recurring charge schedule.</p>
      <p><span class="panel-tip"><b>Tip:</b> <a href="../reference/api.html#search-transactions">Search</a> for previously processed payments using the <span class="code-green">/transactions</span> endpoint.</span></p>
      <p>The following parameters are required:</p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>amount</td>
            <td>Integer</td>
            <td>The recurring amount to charge, in terms of the currency's smallest unit. For USD, this is the amount in cents.</td>
          </tr>
          <tr>
            <td>schedule</td>
            <td><a href="../reference/api.html#schedule-object">Schedule</a></td>
            <td>The schedule indicating when payments are due. The following properties are required:
              <ul>
                <li><span class="code-green">start</span></li>
                <li><span class="code-green">interval_unit</span></li>
                <li><span class="code-green">interval_delay</span></li>
              </ul>
            <p>All other <a href="../reference/api.html#schedule-object" style="font-family:monospace">schedule</a> properties are optional.</p>
            <p>Upon creation or update of a recurring charge, the Gateway calculates the next payment using the given schedule along with the configured start date and current date. For start dates occurring before the current date, the next payment is defined as the next eligible date (based on the schedule) on or after the current date.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <blockquote>Create a monthly recurring charge from an existing payment for $100 starting on 2017-04-01</blockquote>

  <pre id="schedule"><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;secret_key>: {{site.data.variables.apiurl.gateway}}/v1/charges/2wB4BNIRQMyaSrMBbYrW-Q//schedule -d '
  {
      "amount": "10000",
      "schedule": {
        "start": "2017-04-01",
        "interval_unit": "MONTH",
        "interval_delay": "1"
      }
  }'</code></pre>
    <blockquote><button id="btn" class="btn copy" data-clipboard-target="#schedule" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
  "id": "r0LMZjzLTBSMyvYFWT55-A",
  "created": "2017-03-28T13:45:24.824Z",
  "modified": "2017-03-28T13:45:24.824Z",
  "status": "ACTIVE",
  "account_id": "diON4KOPnesamprmrx-Iuo",
  "schedule": {
    "interval_unit": "MONTH",
    "interval_delay": 1,
    "start": "2017-04-01"
  },
  "amount": 10000,
  "currency": "USD",
  "total_occurrences": 0,
  "total_amount": 0,
  "next_payment": "2017-04-01",
  "occurrences": [
    {
      "id": "YVvhsTBBQNa9kM3j18CiZg",
      "created": "2017-03-28T13:45:24.824Z",
      "modified": "2017-03-28T13:45:24.824Z",
      "recurring_charge_id": "r0LMZjzLTBSMyvYFWT55-A",
      "amount": 10000,
      "status": "PENDING",
      "due_date": "2017-04-01",
      "attempts": 0
    }
  ],
  "method": {
    "name": "Dave Bowman",
    "address1": "2001 Space Odyssey Ln",
    "postal_code": "78750",
    "email": "devsupport@affinipay.com",
    "type": "card",
    "number": "************4242",
    "fingerprint": "GunPelYVthifNV63LEw1",
    "card_type": "VISA",
    "exp_month": 10,
    "exp_year": 2017
  }
}</code>
</pre>
</div>
