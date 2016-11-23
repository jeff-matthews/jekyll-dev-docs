<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/transactions/{transactionId}</span></p>

      <p>A Merchant may retrieve any transaction created through one of its own
      Accounts by performing a GET to <span class="code-green">/v1/transactions/{transactionId}</span>,
      where <span class="code-green">transactionId</span> is the ID of the transaction of interest. The Gateway returns
      the JSON for the transaction. The JSON <span class="code-green">type</span> attribute indicates the kind of
      transaction (<a href="#charge" style="font-family:monospace">charge</a> or <a href="#refund" style="font-family:monospace">refund</a>).
      Charges returned via this API include any subsequent Refunds.</p>
    </div>
  </div>

  <blockquote>Retrieving a credit card Charge with Refunds</blockquote>

  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/transactions/wKgBZTynEtOBPKjE2VAACA</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgBZTynEtOBPKjE2VAACA",
      "type": "CHARGE",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      "status": "AUTHORIZED",
      "amount": 95,
      "currency": "USD",
      "auto_capture": true,
      "amount_refunded": 20,
      "authorization_code": "YXXLPC",
      "method": {
          "type": "card",
          "number": "************4242",
          "fingerprint": "CmsP3lYV4akuOz12pFa8",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2017,
          "name": "Sample Customer",
          "address1": "123 Main St",
          "postal_code": "78730"
      },
      "refunds": [
          {
              "id": "wKgFnjz8GamBPP0S54gACA",
              "type": "REFUND",
              "account_id": "wKgFeDz5HF-BPPl08dcADQ",
              "status": "AUTHORIZED",
              "amount": 20,
              "currency": "USD",
              "method": {
                  "type": "card",
                  "number": "************4242",
                  "fingerprint": "CmsP3lYV4akuOz12pFa8",
                  "card_type": "VISA",
                  "exp_month": 10,
                  "exp_year": 2017,
                  "name": "Sample Customer",
                  "address1": "123 Main St",
                  "postal_code": "78730"
              }
          }
      ]
  }</code>
  </pre>

  <blockquote>Retrieving a credit to a bank account</blockquote>

  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/transactions/wKgBZTynEtOBPKjE2VAACA</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "OHqxGhSTT3KckThAEhX57A",
      "type": "CREDIT",
      "account_id": "7eyWpvRpEeKcOfUBJK8FBw",
      "status": "COMPLETED",
      "amount": 18000,
      "currency": "USD",
      "method": {
          "type": "bank",
          "routing_number": "******013",
          "account_number": "******0003",
          "account_type": "SAVINGS",
          "fingerprint": "4LPFVT7k2aQB3J70ZBGH",
          "bank_name": "FIRST BANK OF TESTING",
          "name": "Some Customer"
      }
  }</code>
  </pre>
</div>
