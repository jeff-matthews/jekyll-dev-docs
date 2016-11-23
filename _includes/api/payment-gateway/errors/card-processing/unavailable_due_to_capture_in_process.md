<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A <span class="code-green">unavailable_due_to_capture_in_process</span> error is returned if an attempt is made to capture a transaction while other transactions associated with the same merchant account are already in the process of being captured.</p>
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
              "code": "unavailable_due_to_capture_in_process",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
