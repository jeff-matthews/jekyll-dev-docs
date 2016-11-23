<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A <span class="code-green">not_authorized</span> error is returned if an API is invoked with incorrect or missing
      credentials, or with credentials that do not permit access to the requested operation or
      resource.</p>

      <dl class="dl-horizontal">
      <dt>Level</dt>
      <dd>error</dd>
      <dt>HTTP Status Code</dt>
      <dd>401</dd>
      </dl>
    </div>
  </div>

  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
  "messages": [
      {
          "code": "not_authorized",
          "level": "error",
          "message": "Not authorized",
          "facility": "gateway"
      }
  ]
  }</code>
  </pre>
</div>
