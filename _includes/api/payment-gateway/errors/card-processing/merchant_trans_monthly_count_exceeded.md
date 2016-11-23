<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If the monthly maximum number of transactions defined on a merchant account would be exceeded by an authorize or charge request to that account, the Gateway rejects the request with a <span class="code-green">merchant_trans_monthly_count_exceeded</span> error.</p>
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
              "code": "merchant_trans_monthly_count_exceeded",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
