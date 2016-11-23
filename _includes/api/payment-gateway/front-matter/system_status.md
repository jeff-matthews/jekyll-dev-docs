<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/status</span></p>

      <p>Integrating systems can retrieve the current status of the Gateway by issuing a GET request to <span class="code-green">/status</span>. The operation returns an enumeration indicating the basic status, as detailed in the table below. This operation, which requires no authentication, can be used to check connectivity to the Gateway as well as to identify potential problems that may impact payment processing.</p>

      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NORMAL</td>
            <td>The gateway is functioning normally.</td>
          </tr>
          <tr>
            <td>EXCESSIVE_LATENCY</td>
            <td>API request durations are exceeding expected thresholds.</td>
          </tr>
          <tr>
            <td>SERVICE_UNRELIABLE</td>
            <td>Recent intermittent failures are impacting payment processing.</td>
          </tr>
          <tr>
            <td>SERVICE_UNAVAILABLE</td>
            <td>The system us experiencing problems that prevent payment processing.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

<blockquote><p>Example Request</p></blockquote>
<pre><code class="json">curl https://api.chargeio.com/status</code></pre>

<blockquote><p>Example Response</p></blockquote>
<pre><code class="json">{
  "status":"NORMAL"
}</code></pre>
</div>
