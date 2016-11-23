<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Contains details to submit a credit card number to the Gateway
      blacklist, to be rejected in future [Authorize](#charge),
      [Charge](#charge), and [Credit](#credit) requests.</p>

      <table class="table table-striped table-condensed">
        <colgroup>
          <col span="1" class="col_types_name"/>
          <col span="1" class="col_types_type"/>
          <col span="1" class="col_types_desc"/>
        </colgroup>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>card_number</td><td>String</td><td>The credit card number</td>
          </tr>
          <tr>
            <td>reason</td><td>String</td>
            <td>Reason code indicating why the card number has been submitted. Enumeration of:
              <dl>
                <dt>STOLEN_OR_LOST</dt>
                <dd>Card was reported stolen or lost</dd>
                <dt>FRAUDULENT_USE</dt>
                <dd>Card was used fraudulently</dd>
                <dt>EXCESSIVE_CHARGEBACKS</dt>
                <dd>Too many transactions involving the card number have been disputed</dd>
                <dt>PROCESSOR_DECLINED_HOLD</dt>
                <dd>The card processor indicated the card should be held when presented. This code is used
                  by the Gateway when card numbers are automatically blacklisted.</dd>
              </dl>
            </td>
          </tr>
          <tr>
            <td>comment</td><td>String</td><td>Comment describing the reason the card number has been submitted to the blacklist <em>(optional)</em></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
