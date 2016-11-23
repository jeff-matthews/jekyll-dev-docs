<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An attempt was made to update a resource, but another party modified the same resource prior to commit, moving the version ahead.</p>

      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>409</dd>
      </dl>
    </div>
  </div>

  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "messages": [
          {
              "code": "version_conflict",
              "level": "error",
              "message": "Version conflict",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
