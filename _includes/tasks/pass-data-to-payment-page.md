URL parameters are also useful in more complex scenarios, like passing data from one form to another. For example, you can use a custom page to collect customer contact details as part of a sign-up workflow, then pass those details to a payment page so your customers don't have to enter the same information twice.

To pass data from one form to another:

1. Create a custom HTML sign-up form.
2. Create an event handler to build payment page URLs based on customer input and bind it to the HTML form action.

### Create a Sign-Up Form
Design and build a form to collect customer information. The information you collect depends on your workflow, but most commonly includes:

- Name
- Address
- Phone number
- Email

<span class="panel-note"><b>Note:</b> You can only pass certain data to a payment page to pre-populate fields. Refer to [Payment Page URL Parameters](../guides/hosted-payment-page-link.html#payment-page-url-parameters) for a complete list.</span>

The following HTML is a basic sign-up form example based on the <a href="http://getbootstrap.com/" target="&#95;blank">Bootstrap</a> front-end framework. You must follow these additional guidelines when creating your own sign-up form:

- Don't define any actions in your HTML form.
- Provide a button to submit customer contact information.
- Make sure <span class="code-green">&lt;input></span> element name attributes match the syntax in [Payment Page URL Parameters](../guides/hosted-payment-page-link.html#payment-page-url-parameters).
- Add event handlers and bind them to the **submit** form action. You'll need at least two event handlers, one to store customer form input in your database and one to parse form input, add URL parameters, and open a link to a pre-populated payment page. This example focuses on adding URL parameters based on form input.

<pre id="sample-form"><code class="html">&lt;!-- Include jQuery -->
&lt;script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
&lt;!-- Include the example event handler -->
&lt;script type="text/javascript" src="addUrlParameters.js"></script>

&lt;h2>Enter your contact information:</h2>
&lt;form id="sign-up">
  &lt;div class="form-group">
    &lt;label>Name</label>
    &lt;input type="text" name="name">
  &lt;/div>
  &lt;div class="form-group">
    &lt;label>Phone</label>
    &lt;input type="text" name="phone">
  &lt;/div>
  &lt;div class="form-group">
    &lt;label>Email</label>
    &lt;input type="text" name="email">
  &lt;/div>
  &lt;div class="form-group">
    &lt;label>Address Line 1</label>
    &lt;input type="text" name="address1">
  &lt;/div>
  &lt;div class="form-group">
    &lt;label>Address Line 2</label>
    &lt;input type="text" name="address2">
  &lt;/div>
  &lt;div class="form-group">
    &lt;label>City</label>
    &lt;input type="text" name="city">
  &lt;/div>
  &lt;div class="form-group">
    &lt;label>State</label>
    &lt;input type="text" name="state">
  &lt;/div>
  &lt;div class="form-group">
    &lt;label>ZIP</label>
    &lt;input type="text" name="postal_code">
  &lt;/div>

  &lt;button class="btn btn-primary" type="submit" id="sign-up">Sign Up</button>
&lt;/form>
</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#sample-form" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

### Create an Event Handler

You must add event handlers and bind them to the form action you're using to register new customers (e.g., the <b>Sign Up</b> button). In this example, we're using jQuery to:

1. Build payment page URLs based on customer input.
2. Open a link to a hosted payment page with pre-populated fields when a customer clicks **Sign Up**.

<span class="panel-note"><b>Note: </b>You must write a separate event handler and bind it to the form action to store customer information in your database.</span>

<pre id="sample-handler">
<code class="js">//Ensure the page has loaded before binding the event handler and enabling the sign-up button
$(document).ready(function () {
    var form = document.getElementById("sign-up");
    //Enable the sign up button in the form
    $(form).submit(function () {
        //Paste the link to your hosted payment page here
        var domain = "https://secure.affinipay.com/pages/test-page/test-merchant?";
        //Get URL parameters based on all form input fields. Replace '+' whitespace characters with '%20' to prevent + from appearing in pre-populated fields.
        var data = $(this).serialize().replace(/\+/g,'%20');
        //Open a new browser window and append parameters to the payment page URL
        window.open(domain + data);
        return false;
    });
});
</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#sample-handler" onclick="Materialize.toast('Copied!', 2000)">Copy</button>
