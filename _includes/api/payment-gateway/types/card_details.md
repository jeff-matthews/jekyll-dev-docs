<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Provides details for a credit card and the card holder. For recurring payments, card instances
      can be saved and reused in future <a href="#charges">Charges</a> and <a href="#refunds">Refunds</a> by specifying just the saved card's ID.</p>

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
            <td>modified</td><td>Timestamp</td><td>Date/time the entity was last modified <em>(read-only)</em></td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>modified_by</td><td>String</td><td>User or remote IP that last modified the entity <em>(read-only)</em></td>
          </tr>
          {% endif %}
          <tr>
            <td>type</td><td>String</td><td>The type of the payment method. For card details, this is always <span class="code-green">card</span>.</td>
          </tr>
          <tr>
            <td>token_id</td><td>String</td><td>ID of a one-time payment token from which to create the Card <em>(optional)</em></td>
          </tr>
          <tr>
            <td>number</td><td>String</td><td>The credit card number <em>(required unless track1 or track2 stripe data is provided, in
            which case the value is ignored)</em></td>
          </tr>
          <tr>
            <td>fingerprint</td><td>String</td><td>A unique fingerprint for the card number used. This fingerprint
            may be used to find other transactions with the merchant that used the same card. <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>card_type</td><td>String</td>
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
            <td>exp_month</td><td>Number, 1-12</td><td>Card expiration month <em>(required unless track1 or track2 stripe data is provided, in
            which case the value is ignored)</em></td>
          </tr>
          <tr>
            <td>exp_year</td><td>Number</td><td>2 or 4-digit card expiration year <em>(required unless track1 or track2 stripe data is provided, in
            which case the value is ignored)</em></td>
          </tr>
          <tr>
            <td>cvv</td><td>String</td><td>Card CVV <em>(optional)</em></td>
          </tr>
          <tr>
            <td>track1</td>
            <td>String</td>
            <td>Card magnetic stripe track 1 data. The value should only include the contents of the stripe date between the track's start (<span class="code-green">%</span> or <span class="code-green">;</span>) and end (<span class="code-green">?</span>) sentinels.
            <p>For example, if the magnetic stripe reader returns <span class="code-green">%B4788250000028291^SOMEUSER^05121015432112345678?;
            4788250000028291=05121015432112345678?</span>, the track1 property would be set to <span class="code-green">B4788250000028291^SOME USER^05121015432112345678</span>. <em>(Optional)</em>.</p></td>
          </tr>
          <tr>
            <td>track2</td>
            <td>String</td>
            <td>Card magnetic stripe track 2 data. The value should only include the contents of the
            stripe date between the track's start (<span class="code-green">%</span> or <span class="code-green">;</span>) and end (<span class="code-green">?</span>) sentinels.
            <p>For example, if the magnetic stripe reader returns <span class="code-green">%B4788250000028291^SOMEUSER^05121015432112345678?;
            4788250000028291=05121015432112345678?</span>, the track1 property would be set to <span class="code-green">4788250000028291=05121015432112345678</span>. <em>(Optional)</em>.</p></td>
          </tr>
          <tr>
            <td>name</td><td>String</td><td>Card holder name <em>(optional)</em></td>
          </tr>
          <tr>
            <td>address1</td><td>String</td><td>Card holder address <em>(optional)</em></td>
          </tr>
          <tr>
            <td>address2</td><td>String</td><td>Additional card holder address line <em>(optional)</em></td>
          </tr>
          <tr>
            <td>city</td><td>String</td><td>Card holder city <em>(optional)</em></td>
          </tr>
          <tr>
            <td>state</td><td>String</td><td>Card holder state. For US and Canada, this must be the 2-letter state or
            province code. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>postal_code</td><td>String</td><td>Billing zip or postal code, consisting of 3 to 9 alphanumeric characters,
            as well as spaces and dashes. The total length of the postal code cannot exceed 10 characters. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>country</td><td>String</td><td>Card holder 2-letter ISO 3166 country code <em>(optional)</em></td>
          </tr>
          <tr>
            <td>email</td><td>String</td><td>Customer email address <em>(optional)</em></td>
          </tr>
          <tr>
            <td>phone</td><td>String</td><td>Customer phone number. No specific format is required, but the total length cannot exceed 22 characters. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>reference</td><td>String</td><td>A reference for the card details, limited to 64 characters. This property
            is only used when creating a saved Card instance, and can be used to retrieve the instance. For example, the
            reference can be set to a customer ID within the integrating merchant system, allowing all saved Cards for a
            given customer to be retrieved. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>description</td><td>String</td><td>Description for the card details, limited to 64 characters. Only used
            when creating a saved Card instance. <em>(Optional)</em></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
