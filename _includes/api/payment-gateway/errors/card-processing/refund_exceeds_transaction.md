<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">

      <p>If a refund or credit is applied to a charge such that the amount to be refunded
      exceeds the remaining amount of the charge (having deducted all previous refunds
      and credits), the Gateway returns a <span class="code-green">refund_exceeds_transaction</span> error
      code and rejects the request.</p>
      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>422</dd>
      </dl>
    </div>
  </div>

  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "messages": [
          {
              "code": "refund_exceeds_transaction",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
