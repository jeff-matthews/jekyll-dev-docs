<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A credit returns funds to the customer [Bank](#bank) or [Card](#card) provided in the payment method,
      without requiring a parent Charge.</p>

      <table>
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
            <td>id</td><td>String</td><td>The ID of the entity <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>created</td><td><a href="#timestamp-section">Timestamp</a></td><td>Date/time the entity was created <em>(read-only)</em></td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>created_by</td><td>String</td><td>User or remote IP that created the entity <em>(read-only)</em></td>
          </tr>
          {% endif %}
          <tr>
            <td>modified</td><td><a href="#timestamp-section">Timestamp</a></td><td>Date/time the entity was last modified <em>(read-only)</em></td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>modified_by</td><td>String</td><td>User or remote IP that last modified the entity <em>(read-only)</em></td>
          </tr>
          {% endif %}
          <tr>
            <td>messages</td><td>Array of Strings</td><td>Validation or warning messages associated with an operation requested on this entity <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>type</td><td>String</td><td>Type of the transaction, used to differentiate Charges, Refunds, and Credits in transaction search results.
            For Credits, the value is always <code>CREDIT</code>. <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>account_id</td><td>String</td><td>The ID of the account to receive payment from the Charge
              <em>(set at creation of the Charge, read-only thereafter)</em>
            </td>
          </tr>
          <tr>
            <td>status</td><td>String</td>
            <td>Status of the credit <em>(read-only)</em>. Enumeration of:
              <dl>
                <dt>PENDING</dt>
                <dd>The Gateway is awaiting confirmation from the processor of the transaction's creation</dd>
                <dt>AUTHORIZED</dt>
                <dd>The transaction has been authorized</dd>
                <dt>COMPLETED</dt>
                <dd>The Gateway has completed processing the transaction. Depending on the configuration and type of underlying Merchant or ACH Account,
                  settlement is either in process or complete.</dd>
                <dt>VOIDED</dt>
                <dd>The transaction has been voided</dd>
                <dt>FAILED</dt>
                <dd>The transaction failed. Consult the failure code for details.</dd>
              </dl>
            </td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>archived</td>
            <td>Boolean</td>
            <td>Whether or not the transaction has been archived, restricting the available operations</td>
          </tr>
          {% endif %}
          <tr>
            <td>failure_code</td>
            <td>String</td>
            <td>Failure code indicating the reason a credit's status was marked FAILED. The defined failure codes are the error message codes
            listed in <a href="errors">Messages and Errors</a>.</td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>failure_details</td>
            <td>String</td>
            <td>Additional details providing context for the failure, usually in the form of response codes from external payment processors</td>
          </tr>
          {% endif %}
          <tr>
            <td>amount</td><td>Number</td><td>The amount to credit, in terms of the currency's smallest unit. For USD, this is the amount in cents. The maximum
            value is 10^14 - 1.</td>
          </tr>
          <tr>
            <td>currency</td><td>String</td><td>3-letter ISO 4217 code representing the currency in which the amount is denominated <em>(optional, defaults to USD)</em></td>
          </tr>
          <tr>
            <td>auto_capture</td><td><a href="#boolean">Boolean</a></td><td>Whether or not the Credit will be automatically captured by the
            Gateway. At present, this value is always <code>true</code>. <em>(Read-only)</em></td>
          </tr>
          <tr>
            <td>method</td><td>Payment method or ID</td><td>Details of the <a href="#card">Card</a> or <a href="#bank">Bank</a> to which funds
            are transferred. The contents of the payment details must be specified as a JSON hash or the String ID of a saved payment method
            or one-time token must be specified. When returned in a response, sensitive card details are either omitted (CVV) or masked (card
            number).</td>
          </tr>
          <tr>
            <td>data</td><td>JSON hash</td><td>A JSON hash containing any additional data to be included on the credit.
            Storage charges may apply based on the amount of data saved.</td>
          </tr>
          <tr>
            <td>auto_capture</td><td><a href="#boolean">Boolean</a></td><td>Whether the Credit will be automatically captured by the Gateway.
            At present, this is always <code>true</code>.</td>
          </tr>
          <tr>
            <td>reference</td><td>String</td><td>An optional reference provided by the Merchant when creating the
            credit. This field is not used by the Gateway, but may be used by Merchant systems for correlation with invoices,
            etc. Maximum length is 128 characters.</td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>authorization_code</td><td>String</td><td>The authorization code provided by the payment processor following
            a successful authorization <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>authorization_timestamp</td><td><a href="#timestamp-section">Timestamp</a></td><td>The date/time the Credit was
            successfully authorized via the payment processor associated with the account <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>completion_timestamp</td><td><a href="#timestamp-section">Timestamp</a></td><td>The date/time the credit was completed <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>void_timestamp</td><td><a href="#timestamp-section">Timestamp</a></td><td>The date/time the credit was cancelled <em>(read-only)</em></td>
          </tr>
          {% endif %}
          <tr>
            <td>void_reference</td><td>String</td><td>An optional reference provided by the Merchant when canceling the credit.
            Maximum length is 128 characters.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
