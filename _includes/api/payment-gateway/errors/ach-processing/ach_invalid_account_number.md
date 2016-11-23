<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An account number provided for an ACH transaction that is structurally invalid (for example, due to a checksum mismatch) results in the Gateway returning an <span class="code-green">ach_invalid_account_number</span> error code.</p>
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
              "code": "ach_invalid_account_number",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
