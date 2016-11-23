<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The TransactionsByClientId type describes transactions counts and volumes for an individual
      client ID, broken down by payment type and transaction status.</p>

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
            <td>client_id</td><td>String</td><td>The client ID associated with the access token which created the transactions summarized in the object</td>
          </tr>
          <tr>
            <td>start_date</td><td><a href="#timestamp-section">Timestamp</a></td><td>The starting timestamp, inclusive, of the interval over which the statistics are calculated</td>
          </tr>
          <tr>
            <td>end_date</td><td><a href="#timestamp-section">Timestamp</a></td><td>The ending timestamp, exclusive, of the interval over which the statistics are calculated</td>
          </tr>
          <tr>
            <td>summaries</td><td>Array of <a href="#transactionsbyclientidsummary-section">Summary</a></td><td>Summaries of transactions by payment type and transaction status</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-striped table-condensed">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>payment_type</td><td>String</td><td>Payment type. Enumeration of:
              <dl>
                <dt>CARD</dt>
                <dd>Credit card transaction</dd>
                <dt>BANK</dt>
                <dd>Bank/ACH transaction</dd>
              </dl>
            </td>
          </tr>
          <tr>
            <td>status</td><td>String</td><td>Transaction status. Enumeration of:
              <dl>
                <dt>PENDING</dt>
                <dd>The Gateway is awaiting confirmation from the processor of the transaction's creation</dd>
                <dt>AUTHORIZED</dt>
                <dd>The transaction has been authorized</dd>
                <dt>COMPLETED</dt>
                <dd>The Gateway has completed processing the transaction</dd>
                <dt>VOIDED</dt>
                <dd>The transaction has been voided</dd>
                <dt>FAILED</dt>
                <dd>The transaction failed</dd>
              </dl>
            </td>
          </tr>
          <tr>
            <td>count</td><td>Number</td><td>Count of transactions having the payment type and status</td>
          </tr>
          <tr>
            <td>volume</td><td>Number</td><td>Total amount, in terms of the currency's smallest unit, of transactions having the payment type and status</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
