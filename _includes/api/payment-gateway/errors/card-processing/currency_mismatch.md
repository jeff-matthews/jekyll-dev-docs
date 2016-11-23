<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway returns a <span class="code-green">currency_mismatch</span> error if the currency specified on a credit or refund (if present) does not match the currency of the target charge.</p>

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
              "code": "currency_mismatch",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
