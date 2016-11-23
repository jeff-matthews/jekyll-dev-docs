<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A payment token is created in exchange for a customer's credit card and/or bank details,
      and can later be used in a <a href="#charge" style="font-family:monospace">charge</a> or <a href="#refund" style="font-family:monospace">refund</a> to provide payment
      information. Payment tokens are used to allow merchant systems to process
      payments on behalf of their customers without storing sensitive payment information on their
      own systems. Tokens are automatically deleted after use, and after 24 hours if never used.
      Support for longer-term reusable payment mechanisms is available through saved <a href="#bank" style="font-family:monospace">bank</a>
      and <a href="#card" style="font-family:monospace">card</a>.</p>

      <p>Payment tokens can be created with either credit card information (for credit transactions),
      or bank information (for ACH transfers). The token's <span class="code-green">type</span> property determines how the data
      is used to create a payment method.</p>

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
            <td>id</td>
            <td>String</td>
            <td>The ID of the token, which can be passed in a future Charge or Refund request <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>created</td>
            <td>Timestamp</td>
            <td>Date/time the entity was created <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>modified</td>
            <td>Timestamp</td>
            <td>Date/time the entity was last modified <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>messages</td>
            <td>Array of Strings</td>
            <td>Validation or warning messages associated with an operation requested on this entity <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>type</td>
            <td>String</td>
            <td>Type of the payment method. Enumeration of:
              <ul>
                <li>bank</li>
                <li>card</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>number</td>
            <td>String</td>
            <td>Customer's credit card number <em>(optional)</em></td>
          </tr>
          <tr>
            <td>card_type</td>
            <td>String</td>
            <td>Type of the credit card <em>(optional)</em>. Enumeration of:
              <ul>
                <li>MASTERCARD</li>
                <li>VISA</li>
                <li>AMERICAN_EXPRESS</li>
                <li>DISCOVER</li>
                <li>DINERS_CLUB</li>
                <li>JCB</li>
                <li>UNKNOWN</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>exp_month</td>
            <td>Number, 1-12</td>
            <td>Card expiration month <em>(optional)</em></td>
          </tr>
          <tr>
            <td>exp_year</td>
            <td>Number</td>
            <td>2 or 4-digit card expiration year <em>(optional)</em></td>
          </tr>
          <tr>
            <td>cvv</td>
            <td>String</td>
            <td>Card CVV <em>(optional)</em></td>
          </tr>
          <tr>
            <td>routing_number</td>
            <td>String</td>
            <td>9-digit routing number of the customer's bank <em>(optional)</em></td>
          </tr>
          <tr>
            <td>account_number</td>
            <td>String</td>
            <td>Customer's bank account number. The value may be 4-17 digits, with no punctuation or other characters. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>account_type</td>
            <td>String</td>
            <td>The type of the customer bank account specified, either checking or savings <em>(optional)</em>. Enumeration of:
              <ul>
                <li>CHECKING</li>
                <li>SAVINGS</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>name</td>
            <td>String</td>
            <td>Customer name <em>(optional)</em></td>
          </tr>
          <tr>
            <td>address1</td>
            <td>String</td>
            <td>Customer address <em>(optional)</em></td>
          </tr>
          <tr>
            <td>address2</td><td>String</td><td>Additional address line <em>(optional)</em></td>
          </tr>
          <tr>
            <td>city</td><td>String</td><td>Customer city <em>(optional)</em></td>
          </tr>
          <tr>
            <td>state</td><td>String</td><td>Customer state. For US and Canada, this must be the 2-letter state or
            province code. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>postal_code</td><td>String</td><td>Customer zip or postal code, consisting of 3 to 9 alphanumeric characters,
            as well as spaces and dashes. The total length of the postal code cannot exceed 10 characters. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>country</td><td>String</td><td>Customer 2-letter ISO 3166 country code <em>(optional)</em></td>
          </tr>
          <tr>
            <td>email</td><td>String</td><td>Customer email address <em>(optional)</em></td>
          </tr>
          <tr>
            <td>phone</td><td>String</td><td>Customer phone number. No specific format is required, but the total length cannot exceed 22 characters. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>reference</td><td>String</td><td>An external reference for the payment details, such as a customer ID. The length may not exceed 64 characters. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>description</td><td>String</td><td>Description for the payment details, limited to 64 characters <em>(optional)</em></td>
          </tr>
          <tr>
            <td>form_data</td><td>JSON hash</td><td><p>A JSON hash containing any additional FORM parameters that were
            posted with the payment token. Each parameter is a key in the hash, and the value is either the String FORM
            value for the parameter, or an Array of Strings (if the key was present multiple times in the FORM POST).</p>
            <p>The form data is provided to ease validation for integrating Merchant systems with more complicated payment forms.
            The payment form can contain arbitrary data beyond just the payment details, and all this data is included with
            the token. Following the exchange of the token for the card details, the integrating system can retrieve the token
            (along with all the additional form parameters) and perform server-side validation within the Merchant system
            before choosing whether to proceed with issuing the charge request to the Gateway.</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
