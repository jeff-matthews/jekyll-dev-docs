<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An attempt to perform an ACH transaction against an account that has been frozen due to legal proceedings or other reasons is marked failed and returns an <span class="code-green">ach_account_frozen</span> error code.</p>
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
              "code": "ach_account_frozen",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
