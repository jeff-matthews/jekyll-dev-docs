<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/transactions/{transactionId}/void</span></p>

      <p>Until an authorized transaction has been captured or settled, it may be voided,
      preventing any capture of funds from occurring and releasing any hold, by POSTing
      a request to <span class="code-green">/v1/transactions/{transactionId}/void</span>. The updated transaction is
      returned in the response, its status changed to <span class="code-green">VOIDED</span>.
      Charges, Refunds, and Credits may all be voided. However, once a Charge has been Refunded, it may no
      longer be voided unless all the Refunds are voided.</p>

      <p>The request may optionally include a JSON hash containing the following
      properties:</p>

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
            <td>reference</td><td>String</td><td>A reference to be applied to the transaction for the void operation
              <em>(optional, maximum length is 128 characters)</em></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <blockquote>Voiding a transaction</blockquote>

  <pre id="void"><code class="json">curl -X POST --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/transactions/wKgFnjz8GamBPP0ASxIABA/void</code></pre>

  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#void" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFnjz8GamBPP0ASxIABA",
      "type": "CHARGE",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "status": "VOIDED",
      "amount": 100,
      "currency": "USD",
      "auto_capture": false,
      "amount_refunded": 0,
      "authorization_code": "DSFCCO",
      "method": {
          "type": "card",
          "number": "************4242",
          "fingerprint": "CmsP3lYV4akuOz12pFa8",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2017,
          "name": "Sample Customer",
          "address1": "123 Main St",
          "city": "Austin",
          "state": "TX",
          "postal_code": "78730"
      }
  }</code>
  </pre>


  <blockquote>Voiding a transaction with a reference</blockquote>

  <pre id="void-ref"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/transactions/wKgFnjz8GamBPP0ASxIABA/void -d '
  {
      "reference": "An explanation for why the charge was voided"
  }'</code></pre>

  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#void-ref" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFnjz8GamBPP0ASxIABA",
      "type": "CHARGE",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "status": "VOIDED",
      "amount": 100,
      "currency": "USD",
      "auto_capture": false,
      "amount_refunded": 0,
      "authorization_code": "DSFCCO",
      "void_reference": "An explanation for why the charge was voided",
      "method": {
          "type": "card",
          "number": "************4242",
          "fingerprint": "CmsP3lYV4akuOz12pFa8",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2017,
          "name": "Sample Customer",
          "address1": "123 Main St",
          "city": "Austin",
          "state": "TX",
          "postal_code": "78730"
      }
  }</code>
  </pre>
</div>
