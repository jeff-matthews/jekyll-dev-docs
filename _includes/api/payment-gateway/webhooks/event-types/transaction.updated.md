<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Any change made to a transaction that does not also change the status of the transaction results in a
      <span class="code-green">transaction.updated</span> event being created. (For example, conversion of a manual capture transaction to auto-capture.) The content of the transaction is included in the event's <span class="code-green">data</span> property.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "pEloF72XTaOyKfANlEecYg",
      "created": "2016-05-19T21:01:44.574Z",
      "type": "transaction.updated",
      "data": {
          "id": "Op5rO2BMSLGaIxrgxWAHXQ",
          "created": "2016-05-19T21:01:44.528Z",
          "modified": "2016-05-19T21:01:44.538Z",
          "account_id": "1XjA19cTScWXYjvmQF3LNA",
          "status": "AUTHORIZED",
          "amount": 5500,
          "currency": "USD",
          "authorization_code": "DIIL4A",
          "auto_capture": true,
          "type": "CHARGE",
          "method": {
              "name": "Some Customer",
              "type": "card",
              "number": "************0010",
              "fingerprint": "b2HMkkyEWX8uLCb-CSJH",
              "card_type": "VISA",
              "exp_month": 10,
              "exp_year": 2020
          }
      }
  }</code>
  </pre>
</div>
