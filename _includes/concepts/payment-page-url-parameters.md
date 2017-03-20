Pre-populating fields on a hosted payment page requires you to add parameters to the end of the payment page URL. For example, the following URL pre-populates a payment page with a name and address:

<pre style="background:#f1efee;">
https://secure.affinipay.com/pages/test-page/test-merchant?name=Dave%20Bowman&address1=2001%20Odyssey%20Ln&address2=Suite%20200&city=Austin&state=TX&postal_code=78727&country=US
</pre>

### Payment Page URL Parameters
Refer to the following table for a comprehensive list of URL parameters and how to use them. Some parameters may not work on payment pages that use custom fields.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>URL Syntax</th>
    </tr>
    <tbody>
      <tr>
        <td><span class="code-green">name</span></td>
        <td>name=Dave%20Bowman</td>
      </tr>
      <tr>
        <td><span class="code-green">amount</span></td>
        <td>amount=1000</td>
      </tr>
      <tr>
        <td><span class="code-green">address1</span></td>
        <td>address=2001%20Odyssey%20Ln</td>
      </tr>
      <tr>
        <td><span class="code-green">address2</span></td>
        <td>address2=Suite%20200</td>
      </tr>
      <tr>
        <td><span class="code-green">city</span></td>
        <td>city=Austin</td>
      </tr>
      <tr>
        <td><span class="code-green">state</span></td>
        <td>state=TX</td>
      </tr>
      <tr>
        <td><span class="code-green">postal_code</span></td>
        <td>postal_code=78727</td>
      </tr>
      <tr>
        <td><span class="code-green">country</span></td>
        <td>country=US</td>
      </tr>
      <tr>
        <td><span class="code-green">phone</span></td>
        <td>phone=5123214321</td>
      </tr>
      <tr>
        <td><span class="code-green">reference</span></td>
        <td>reference=1968</td>
      </tr>
      <tr>
        <td><span class="code-green">email</span></td>
        <td>email=devsupport@affinipay.com</td>
      </tr>
    </tbody>
  </thead>
</table>

<div class="panel-tip"><b>Tips:</b>
  <ul>
    <li>Precede the first query parameter with a question mark (<b>?</b>) and separate subsequent parameters with an ampersand (<b>&</b>).</li>
    <li>Be sure to follow UTF-8 encoding standards when building URLs. For example, to represent a space between characters, use <b>%20</b>.</li>
    <li>To prevent a user from modifying one or more pre-populated fields, add the following string to the URL: <b>&readOnlyFields=<param></b>. Comma separate multiple fields (e.g., <b>&readOnlyFields=amount, reference, name</b>).</li>
  </ul>
</div>
