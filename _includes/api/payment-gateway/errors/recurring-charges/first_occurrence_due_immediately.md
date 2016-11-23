<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If the schedule provided for the creation of a new recurring charge would result in a payment due today,
      the Gateway returns a <span class="code-green">first_occurrence_due_immediately</span> error and rejects the request.
      The schedule must be updated such that the first occurrence is due no sooner than the day following the
      current day.</p>
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
      ...
      "messages": [
          {
              "code": "first_occurrence_due_immediately",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
