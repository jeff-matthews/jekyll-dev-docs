<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/banks/{bankId}</span></p>

      <p>A previously saved <a href="#bank" style="font-family:monospace">bank</a> can be retrieved by sending a GET to
      <span class="code-green">/v1/banks/{bankId}</span>, substituting the ID of the Bank. The Gateway responds with the
      JSON representation of the bank with sensitive properties masked.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre id="get-bank"><code class="json">curl -X GET --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/banks/vU42KZWhTd2iiGLhjfJR6A</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#get-bank" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "vU42KZWhTd2iiGLhjfJR6A",
      "type": "bank",
      "description": "Corporate Checking",
      "reference": "Customer123",
      "name": "Some Customer",
      "routing_number": "******013",
      "account_number": "**********2394",
      "account_type": "CHECKING",
      "fingerprint": "j_RBZuzITtssQF8dhRvs",
      "bank_name": "FIRST BANK OF TESTING"
  }</code>
  </pre>
</div>
