<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/charges/{chargeId}/capture</span></p>

      <p>Merchants use the capture API to control the settlement of <a href="../reference/api.html#authorization-holds">authorization-only Charges</a> (those Charges created with <span class="code-green">auto_capture: false</span>), which initiates the transfer of funds from the credit card holder's bank to the Merchant's account. This feature is only available for credit card transactions, and must be enabled by the Tenant on a per-account basis.</p>

      <p>Charges created with <span class="code-green">auto_capture: true</span>, or without specifying any value for this property,
      are captured automatically by the Gateway daily, and require no Merchant interaction to initiate settlement. When a Charge is created with <span class="code-green">auto_capture: false</span>, however, a hold is placed on the customer's funds for the amount specified, but the transaction will not be settled unless the Merchant issues a capture request for the funds.</p>

      <p>Authorization-only Charges are typically used when the final amount of the transaction is not known in advance, or if further charges may be incurred. For example, a reservation or rental for some product may include the base rate, as well as a deposit to cover any damages. The Merchant may create an authorization-only Charge for an amount including both the base rate and the deposit, but then later capture just the base rate, or some amount up to the originally authorized amount.</p>

      <p>A capture is performed by issuing a POST to <span class="code-green">/v1/charges/{chargeId}/capture</span>. The updated transaction is returned in the JSON response. The request content consists of a JSON hash including the following properties:</p>

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
            <td>amount</td><td>Integer</td>
            <td>The amount to capture, in terms of the Charge's currency's smallest unit. For USD, this is the amount in cents.
              The captured amount must be greater than 0 and less than or equal to the originally authorized amount. (A
              Merchant can capture less than the originally authorized amount, but may not capture more.)</td>
          </tr>
          <tr>
            <td>reference</td><td>String</td><td>A reference to be applied to the transaction for the capture operation
              <em>(optional, maximum length is 128 characters)</em></td>
          </tr>
          <tr>
            <td>capture_time</td><td>String</td><td>When the capture should be performed. If no value is specified, the default
              behavior is <span class="code-green">IMMEDIATE</span> (funds are captured immediately within the current request). Enumeration of:
              <ul>
                <li><b>IMMEDIATE</b> - The funds are captured immediately within the current request</li>
                <li><b>NEXT_AUTO_CAPTURE</b> - The <span class="code-green">auto_capture</span> property of the Charge is changed to <span class="code-green">true</span> and the Charge is captured during the next scheduled automatic capture for the underlying Merchant Account</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre id="post-capture"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/charges/wKgFnjz8GamBPP0HTv0ABQ/capture -d '
  {
      "amount":"95"
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#post-capture" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFnjz8GamBPP0HTv0ABQ",
      "type": "CHARGE",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "status": "COMPLETED",
      "amount": 95,
      "currency": "USD",
      "auto_capture": false,
      "amount_refunded": 0,
      "authorization_code": "VXQEJU",
      "method": {
          "type": "card",
          "number": "************4242",
          "fingerprint": "CmsP3lYV4akuOz12pFa8",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2017
      }
  }</code>
  </pre>
</div>
