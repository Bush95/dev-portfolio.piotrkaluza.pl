import { useState } from 'react'
import "../scss/sections/contact.scss"
import Form from '../components/form'
import axios from 'axios'

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sendEmail = async (msg) => {
    setStatus('loading');

    axios.post('https://webdev.piotrkaluza.pl/handlecontact/', null,
    {
      params: {
        msg
      }
    })
      .then(res => setStatus('submitted'))
      .catch(error => {
        setStatus('error');
        console.error(error);

        if (error.response) {
          console.error(error.response.body)
        }
      })
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

    let html = '';
    formFields.forEach(field => {
      html += '<p><strong>' + field.label + '</strong>: ' + values[field.name] + '</p>';
    });

    sendEmail(html);
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
