<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An Event records the occurrence of a change in the Gateway system's state. The content of the event,
      available via the <span class="code-green">data</span> property, is dictated by the <span class="code-green">type</span> of the event.</p>

      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td><td>String</td><td>The ID of the entity <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>created</td><td>Timestamp</td><td>Date/time the entity was created <em>(read-only)</em></td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>created_by</td><td>String</td><td>User or remote IP that created the entity <em>(read-only)</em></td>
          </tr>
          {% endif %}
          <tr>
            <td>type</td><td>String</td><td>The type of the event <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>data</td><td>JSON hash</td><td>The content of the event <em>(read-only)</em></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
