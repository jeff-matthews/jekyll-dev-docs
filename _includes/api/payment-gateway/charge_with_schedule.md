<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Merchants can provide an optional <span class="code-green">recur</span> element to a charge request to create a <a href="../reference/api.html#recurring_charge" target="&#95;" style="font-family:monospace">recurring_charge</a>. This is often useful when you want to start a new scheduled payment starting immediately, but want to ensure the first payment is successful first, or need to prorate an initial payment. When a <span class="code-green">recur</span> element is
      provided, the Gateway validates the schedule information and then performs the charge.</p>

      <p>If the authorization is declined, the failure reason is returned and no recurring charge is created. If, on the other hand, the charge is successfully authorized, a new recurring charge is created for which the initial <a href="../reference/api.html#recurring_charge_occurrence" target="&#95;" style="font-family:monospace">recurring_charge_occurrence</a> is marked <span class="code-green">PAID</span> by the charge. The Gateway returns the new charge in the response JSON with a <span class="code-green">recurring_charge_id</span> attribute containing the ID of the new recurring charge and a
      <span class="code-green">recurring_charge_occurrence_id</span> attribute containing the ID of the paid occurrence.</p>

      <p><span class="panel-note"><b>Note:</b> Only auto-capture charges can
      provide a <span class="code-green">recur</span> structure. To use this feature, make sure to set <span class="code-green">auto_capture</span> to <span class="code-green">true</span> on the charge parameters.</span></p>

      <p>The <span class="code-green">recur</span> element is a JSON hash consisting of the following properties:</p>

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
            <td>description</td>
            <td>String</td>
            <td>Description to be applied to the recurring charge <i>(optional)</i></td>
          </tr>
          <tr>
            <td>amount</td>
            <td>Integer</td>
            <td>The recurring amount to charge, in terms of the Charge's currency's smallest unit.
            For USD, this is the amount in cents. This property should only be set if the scheduled amount to collect differs
            from the initial payment amount specified on the charge. If not specified, the recurring charge amount will match
            the charge amount.</td>
          </tr>
          <tr>
            <td>interval_unit</td>
            <td>String</td>
            <td>The interval unit of the schedule. Enumeration of:
              <ul>
                <li><b>DAY</b> - Scheduled payments are performed every n <b>days</b>, based on the <span class="code-green">interval_delay</span></li>
                <li><b>WEEK</b> - Scheduled payments are performed every n <b>weeks</b>, based on the <span class="code-green">interval_delay</span></li>
                <li><b>MONTH</b> - Scheduled payments are performed every n <b>months</b>, based on the <span class="code-green">interval_delay</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>interval_delay</td>
            <td>Number</td>
            <td>The frequency with which the schedule is executed, in terms of the
              <span class="code-green">interval_unit</span>. For example, if the interval unit is DAY, an interval delay of 1 means the schedule is executed every day; an interval delay of 2 means execution every other day; and an interval delay of 30 would mean the schedule is executed every 30 days.</td>
          </tr>
          <tr>
            <td>end</td>
            <td>Date</td>
            <td>The end date for the schedule such that the last occurrence is executed on or before this date <i>(optional)</i></td>
          </tr>
          <tr>
            <td>days</td>
            <td>Array of String</td>
            <td>Schedules for specific days of the week or month are created by defining the <span class="code-green">days</span> property. This property can only be used with an <span class="code-green">interval_unit</span> of <span class="code-green">WEEK</span> or <span class="code-green">MONTH</span> and an <span class="code-green">interval_delay</span> of 1.
            <p>For weekly schedules, the values of this property are the ISO numeric days of the week: "1" for Monday, "2" for Tuesday, through "6" for Saturday and "7" for Sunday. For example, a schedule to be executed Mondays and Fridays would specify an array containing the values "1" and "5".</p>
            <p>For monthly schedules, the values of this property are the days of the month, starting from "1", on which the schedule is executed. The keyword <span class="code-green">LAST</span> can be used to indicate the last day of the month. For example, a schedule to be executed on the 15th and last days of each month would specify an array containing the values "15" and "LAST".</p></td>
          </tr>
          <tr>
            <td>max_occurrences</td>
            <td>Number</td>
            <td>The maximum number of scheduled payments that will be attempted before the recurring charge is automatically marked completed. Note that maximum occurrences tracks scheduled payments, and not actual transactions created to collect on those scheduled payments. For example, a Charge associated with an occurrence may initially fail if the credit card associated with the recurring charge is declined or expired; however, after the payment details are updated, a subsequent Charge associated with the same occurrence may succeed. In this scenario, however, only a single occurrence is counted towards the <span class="code-green">max_occurrences</span> limit.</td>
          </tr>
          <tr>
            <td>max_amount</td>
            <td>Number</td>
            <td>The maximum amount the recurring charge will attempt to collect before the
              recurring charge is automatically marked completed. This value must be greater than or equal to <span class="code-green">amount</span>.
              The final occurrence of a recurring charge will be the lesser of <span class="code-green">amount</span> and the remainder of
              <span class="code-green">max_amount</span> less <span class="code-green">total_amount</span>. For example, a recurring charge with a scheduled amount
              of $100 and a maximum amount of $150 will result in an initial occurrence for $100 followed by a final occurrence
              of $50. Note that <span class="code-green">max_amount</span>, just like <span class="code-green">max_occurrences</span>, tracks scheduled payments,
              and not actual transactions created to collect on those scheduled payments.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <blockquote>Create a monthly recurring charge from a saved Card for $20.00 starting today</blockquote>

  <pre id="recur-monthly"><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;secret_key>: {{site.data.variables.apiurl.gateway}}/v1/charges -d '
  {
      "amount": "2000",
      "method": "K_5tUK78SKKpNKu9F8fvIw",
      "account_id": "diON4KOPnesamprmrxA8Iuo",
      "reference": "Donation Plan #1234",
      "recur": {
          "description": "Monthly donation from Sample Customer",
          "interval_unit": "MONTH",
          "interval_delay": 1
      }
  }'</code></pre>
    <blockquote><button id="btn" class="btn copy" data-clipboard-target="#recur-monthly" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "PUZt8B_fTCWCO25SJfMY6A",
      "account_id": "diON4KOPnesamprmrxA8Iuo",
      "status": "AUTHORIZED",
      "auto_capture": true,
      "amount": 2000,
      "currency": "USD",
      "reference": "Donation Plan #1234",
      "authorization_code": "FLCF19",
      "method": {
          "number": "************4242",
          "fingerprint": "GunPelYVthifNV63LEw1",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2017,
          "name": "Sample Customer",
          "address1": "123 Main St",
          "city": "Austin",
          "state": "TX",
          "postal_code": "78730",
          "type": "card"
      },
      "amount_refunded": 0,
      "cvv_result": "MATCHED",
      "avs_result": "ADDRESS_AND_POSTAL_CODE",
      "recurring_charge_id": "Ou5d_4XxTBi1hWKKF1iY5g",
      "recurring_charge_occurrence_id": "tO6EA6oPRtSa7mX3vaupuQ",
      "type": "CHARGE"
}</code>
</pre>

  <blockquote>Create a bi-weekly recurring charge from a saved Card for $75.00 with an initial payment of $250 starting today</blockquote>

  <pre id="recur-biweekly"><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;secret_key>: {{site.data.variables.apiurl.gateway}}/v1/charges -d '
  {
      "amount": "25000",
      "method": "K_5tUK78SKKpNKu9F8fvIw",
      "account_id": "diON4KOPnesamprmrxA8Iuo",
      "recur": {
          "amount": 7500,
          "interval_unit": "WEEK",
          "interval_delay": 2
      }
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#recur-biweekly" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "XvUHFfZlQpur0QFABEF0Pw",
      "account_id": "diON4KOPnesamprmrxA8Iuo",
      "status": "AUTHORIZED",
      "auto_capture": true,
      "amount": 25000,
      "currency": "USD",
      "authorization_code": "EMAOYY",
      "method": {
          "number": "************4242",
          "fingerprint": "GunPelYVthifNV63LEw1",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2017,
          "name": "Sample Customer",
          "address1": "123 Main St",
          "city": "Austin",
          "state": "TX",
          "postal_code": "78730",
          "type": "card"
      },
      "amount_refunded": 0,
      "cvv_result": "MATCHED",
      "avs_result": "ADDRESS_AND_POSTAL_CODE",
      "recurring_charge_id": "V9Sg2WcJSca-gZWYrYQ13w",
      "recurring_charge_occurrence_id": "mNrrlHgNRjS0T8dc-uL1dQ",
      "type": "CHARGE"
}</code></pre>
</div>
