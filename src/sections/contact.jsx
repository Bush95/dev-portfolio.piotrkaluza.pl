import { useState } from 'react'
import "../scss/sections/contact.scss"
import Form from '../components/form'
import sgMail from '@sendgrid/mail'

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sendEmail = async (msg) => {
    try {
      setStatus('loading');

      // setTimeout(() => { 
      //   setStatus('submitted');
      //   console.log('sent!'); 
      // }, 5000);

      const response = await sgMail.send(msg);
      console.log(response);
    } catch (error) {
      setStatus('error');
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    }
  }

  const formFields = [
    {
      id: 1,
      nodeType: 'input',
      type: 'text',
      name: 'name',
      label: 'Name',
      placeholder: '',
      required: true
    },
    {
      id: 2,
      nodeType: 'input',
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: '',
      required: true
    },
    {
      id: 3,
      nodeType: 'textarea',
      type: 'text',
      name: 'message',
      label: 'Message',
      placeholder: '',
      required: true
    }
  ];

  const submitForm = e => {
    e.preventDefault();

    const SG_API_KEY = process.env.REACT_APP_SENDGRID_API_KEY;
    const emailReceiver = 'kontakt@piotrkaluza.pl';
    const emailSender = 'website@piotrkaluza.pl';
    const emailSubject = 'Formularz webdev.piotrkaluza.pl';
    const msg = {
      to: emailReceiver,
      from: emailSender,
      subject: emailSubject,
      text: '',
      html: '',
    };

    sgMail.setApiKey(SG_API_KEY);

    formFields.forEach(field => {
      msg.text += field.label + ': ' + values[field.name] + ', ';
      msg.html += '<p><strong>' + field.label + '</strong>: ' + values[field.name] + '</p>';
    });

    sendEmail(msg);
  }

  const onFieldChange = e => {
    setValues(prev => { return {...prev, [e.target.name]: e.target.value} });
  }

  return (
    <div className="contact">
      <h2 className="heading-underline">Contact</h2>
      <Form action={submitForm} onFieldChange={onFieldChange} fields={formFields} status={status} />
    </div>
  )
}
