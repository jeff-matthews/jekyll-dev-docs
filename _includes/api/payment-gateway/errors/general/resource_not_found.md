<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A resource, such as a charge or merchant account, was specified in the
      request, but not found. If available, the type and identity of the resource
      is included in the <span class="code-green">context</span> key, in the format <span class="code-green">"resource-type" [ "identity" ]</span>.</p>

      <p>This message is also returned if an invalid URL is specified; in this case, no
      <span class="code-green">context</span> is included in the response.</p>
      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>404</dd>
      </dl>
    </div>
  </div>

  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "messages": [
          {
              "context": "Account[wKgFeD0XFtWBPRxEVWcAmg]",
              "code": "resource_not_found",
              "level": "error",
              "message": "Requested resource not found",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
