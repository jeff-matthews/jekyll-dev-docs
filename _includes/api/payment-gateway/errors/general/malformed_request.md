<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A <span class="code-green">malformed_request</span> error is returned if an API is invoked with request content that
      cannot be parsed as a JSON request on the server.</p>

      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>400</dd>
      </dl>
    </div>
  </div>

  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "messages": [
          {
              "code": "malformed_request",
              "level": "error",
              "message" : "Unable to process JSON content",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
