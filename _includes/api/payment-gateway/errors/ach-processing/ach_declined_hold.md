<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An ACH request that is declined due to the processor indicating possible fraudulent use of the bank account or account details returns a <span class="code-green">ach_declined_hold</span> error code.</p>
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
              "code": "ach_declined_hold",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
