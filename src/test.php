<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	require_once dirname(__FILE__) . '/eXcentralInternationalAPI.php';

	$affiliateID = '';
	$partnerID = '';
	$affiliate = new eXcentralInternationalAPI($affiliateID, $partnerID);

	$createLead = $affiliate->request('createLead', array(
		'email' => $_POST['email'],
		'firstName' => $_POST['firstName'],
		'lastName' => $_POST['lastName'],
		'phone' => $_POST['phone'],
		'language' => $_POST['language'],
		'country' => $_POST['country'],
	));

	var_dump($createLead);
	die();
}

?>

<form action="form.php" method="post">
	<p>email: <input type="text" name="email" /></p>
	<p>first name: <input type="text" name="firstName" /></p>
	<p>last name: <input type="text" name="lastName" /></p>
	<p>phone: <input type="text" name="phone" /></p>
	<p>language: <input type="text" name="language" /></p>
	<p>country: <input type="text" name="country" /></p>
	<p><input type="submit" /></p>
</form>


