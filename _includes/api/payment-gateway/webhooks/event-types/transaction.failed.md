<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If a transaction fails for any reason after initial authorization (for example, due to a capture failure),
      the Gateway generates a <span class="code-green">transaction.failed</span> event. The corresponding transaction is included in the content of the event's <span class="code-green">data</span> property.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "-vScpwCpQimM274I5L_l6A",
      "created": "2016-10-25T20:59:39.123Z",
      "type": "transaction.failed",
      "data": {
          "id": "Jw0ckpWdQRWznCa3LrLVig",
          "created": "2016-10-25T20:59:39.071Z",
          "modified": "2016-10-25T20:59:39.115Z",
          "account_id": "E9EK1fr_ScilXxuEmXmjDg",
          "status": "FAILED",
          "failure_code": "settlement_failed",
          "amount": 34,
          "currency": "USD",
          "auto_capture": false,
          "amount_refunded": 0,
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
