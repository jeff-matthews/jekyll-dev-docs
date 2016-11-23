<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A transaction that cannot be settled is marked as failed, and its failure code is set to <span class="code-green">settlement_failed</span>.</p>
      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>500</dd>
      </dl>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "messages": [
          {
              "code": "settlement_failed",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
