<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Using a <span class="code-green">TEST</span> bank account, you can capture ACH transfers using the routing numbers <span class="code-green">000000000</span> or <span class="code-green">000000013</span> with any account number. The following exceptions return ACH errors useful for testing purposes:</p>

      <table>
        <thead>
          <tr>
            <th>Routing Number</th>
            <th>Account Number</th>
            <th>Error Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>000000013</td>
            <td>1000000001</td>
            <td>ach_declined</td>
          </tr>
          <tr>
            <td>000000013</td>
            <td>1000000002</td>
            <td>ach_declined_hold</td>
          </tr>
          <tr>
            <td>000000013</td>
            <td>1000000003</td>
            <td>ach_declined_duplicate</td>
          </tr>
          <tr>
            <td>000000013</td>
            <td>1000000004</td>
            <td>ach_invalid_account_number</td>
          </tr>
          <tr>
            <td>000000013</td>
            <td>1000000005</td>
            <td>ach_insufficient_funds</td>
          </tr>
          <tr>
            <td>000000013</td>
            <td>1000000006</td>
            <td>ach_account_not_found</td>
          </tr>
          <tr>
            <td>000000013</td>
            <td>1000000007</td>
            <td>ach_account_closed</td>
          </tr>
          <tr>
            <td>000000013</td>
            <td>1000000008</td>
            <td>ach_account_frozen</td>
          </tr>
          <tr>
            <td>000000013</td>
            <td>1000000009</td>
            <td>ach_limit_exceeded</td>
          </tr>
          <tr>
            <td>000000001</td>
            <td>Any</td>
            <td>ach_invalid_routing_number</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
