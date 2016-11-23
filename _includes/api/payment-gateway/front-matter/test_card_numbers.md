<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Successful charges can be created using the following card numbers in conjunction with the test-mode secret key and a card expiration in the future:</p>

      <table>
        <thead>
          <tr>
            <th>Card Number</th>
            <th>Card Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>378282246310005</td>
            <td>American Express</td>
          </tr>
          <tr>
            <td>371449635398431</td>
            <td>American Express</td>
          </tr>
          <tr>
            <td>5105105105105100</td>
            <td>MasterCard</td>
          </tr>
          <tr>
            <td>5499740000000057</td>
            <td>MasterCard</td>
          </tr>
          <tr>
            <td>30569309025904</td>
            <td>Diners Club</td>
          </tr>
          <tr>
            <td>38520000023237</td>
            <td>Diners Club</td>
          </tr>
          <tr>
            <td>6011111111111117</td>
            <td>Discover</td>
          </tr>
          <tr>
            <td>6011000990139424</td>
            <td>Discover</td>
          </tr>
          <tr>
            <td>3530111333300000</td>
            <td>JCB</td>
          </tr>
          <tr>
            <td>3566002020360505</td>
            <td>JCB</td>
          </tr>
          <tr>
            <td>4242424242424242</td>
            <td>Visa</td>
          </tr>
          <tr>
            <td>4012888888881881</td>
            <td>Visa</td>
          </tr>
          <tr>
            <td>4012000010000</td>
            <td>Visa</td>
          </tr>
        </tbody>
      </table>

      <p>Failure scenarios can be tested using the following card numbers and the test-mode secret key:</p>

      <table>
        <thead>
          <tr>
            <th>Card Number</th>
            <th>Error Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4000000000000002</td>
            <td>card_declined</td>
          </tr>
          <tr>
            <td>4000000000000044</td>
            <td>card_declined_insufficient_funds</td>
          </tr>
          <tr>
            <td>4000000000000051</td>
            <td>card_declined_limit_exceeded</td>
          </tr>
          <tr>
            <td>4000000000000069</td>
            <td>card_expired</td>
          </tr>
          <tr>
            <td>4000000000000119</td>
            <td>card_declined_processing_error</td>
          </tr>
          <tr>
            <td>4000000000000127</td>
            <td>card_declined_hold</td>
          </tr>
          <tr>
            <td>4242424242424241</td>
            <td>card_number_invalid</td>
          </tr>
          <tr>
            <td>4000000000000135</td>
            <td>card_type_not_accepted</td>
          </tr>
        </tbody>
      </table>

      <p>CVV and AVS checks can be tested against various account policies using the following card numbers and the test-mode secret key. Note that depending on the policy in effect, the CVV and AVS results may or may not result in an error code being returned. For example, if the CVV policy is set to <span class="code-green">DISABLED</span>, a CVV Not Matched response will not cause a failure, whereas it would if the CVV policy were set to <span class="code-green">REQUIRE_MATCH_LENIENT</span>.</p>

      <table>
        <thead>
          <tr>
            <th>Card Number</th>
            <th>CVV/AVS Response</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4000000000000077</td>
            <td>CVV Unavailable</td>
          </tr>
          <tr>
            <td>4000000000000101</td>
            <td>CVV Not Matched</td>
          </tr>
          <tr>
            <td>4000000000000010</td>
            <td>AVS Not Matched</td>
          </tr>
          <tr>
            <td>4000000000000085</td>
            <td>AVS Unavailable</td>
          </tr>
          <tr>
            <td>4000000000000093</td>
            <td>AVS Error</td>
          </tr>
          <tr>
            <td>4000000000000028</td>
            <td>If card postal code is null or empty, AVS returns Not Matched. Otherwise, an AVS Postal Code Match is returned.</td>
          </tr>
          <tr>
            <td>4000000000000036</td>
            <td>If card address is null or empty, AVS returns Not Matched. Otherwise an AVS Address Match is returned.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
