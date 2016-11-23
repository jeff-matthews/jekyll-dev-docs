<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An authorize or charge request for which the amount, when combined with the total value of all transactions on the same
      account over the previous 30 days, exceeds the maximum monthly amount defined on the merchant account, is rejected with
      a <span class="code-green">merchant_trans_monthly_amount_exceeded</span> error.</p>
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
              "code": "merchant_trans_monthly_amount_exceeded",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
