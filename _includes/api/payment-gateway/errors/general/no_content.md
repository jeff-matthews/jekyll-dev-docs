<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A <span class="code-green">no_content</span> error is returned if an API is invoked that requires JSON
      request content to be provided (for example, a charge request), but no content was
      sent in the request.</p>

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
              "code": "no_content",
              "level": "error",
              "message": "No JSON content received",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
