<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway returns an <span class="code-green">invalid_request</span> error if the request cannot be processed due to factors unrelated to the request's JSON content. Typical scenarios in which this error is returned include requesting an unsupported HTTP method for a REST URL (such as a POST to a URL that only supports GET) and using an unsupported HTTP Content-Type for a REST URL (such as "application/x-www-form-urlencoded" rather than "application/json").</p>

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
              "code": "invalid_request",
              "level": "error",
              "message" : "Invalid request",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
