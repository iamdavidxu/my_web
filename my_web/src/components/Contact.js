import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Define the template parameters to match the template fields in EmailJS
		const templateParams = {
			name: formData.name,
			email: formData.email,
			subject: formData.subject,
			message: formData.message,
		};

		// Send the email with the form data
		emailjs
			.send(
				'service_mrn31y2',
				'template_rnxtbg8',
				templateParams,
				'e2-98B61pxDGohcX6'
			)
			.then(
				(result) => {
					console.log('Email successfully sent:', result.text);
					alert('Message sent successfully!');
				},
				(error) => {
					console.error('Error sending email:', error.text);
					alert('Failed to send message, please try again.');
				}
			);
	};

	return (
		<div className='contact'>
			<h3>Contact</h3>
			<div className='conBox'>
				<div className='contact-box'>
					<h2>Contact Me</h2>
					<form onSubmit={handleSubmit}>
						<div className='input-box'>
							<input
								type='text'
								name='name'
								required
								value={formData.name}
								onChange={handleChange}
							/>
							<label>Full Name</label>
						</div>
						<div className='input-box'>
							<input
								type='email'
								name='email'
								required
								value={formData.email}
								onChange={handleChange}
							/>
							<label>Email</label>
						</div>
						<div className='input-box'>
							<input
								type='text'
								name='subject'
								required
								value={formData.subject}
								onChange={handleChange}
							/>
							<label>Subject</label>
						</div>
						<div className='input-box'>
							<textarea
								name='message'
								required
								value={formData.message}
								onChange={handleChange}
							></textarea>
							<label>Your Message</label>
						</div>
						<input type='submit' value='Send' />
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
