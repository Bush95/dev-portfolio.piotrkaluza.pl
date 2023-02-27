import PropTypes from 'prop-types';
import FormInput from './formInput';
import '../scss/components/form.scss';

function Form({ action, onFieldChange, fields, status, submit, successmsg, errormsg }) {
    const formFields = fields.map(el => {
        return <div className="form-row" key={el.id}><FormInput onFieldChange={onFieldChange} {...el} /></div>
    });

    let formClass = '';

    return (
        <form onSubmit={action} className={'form ' + formClass}>
            {status === 'error' &&
                <p className="form__error-msg">{errormsg}</p>
            }
            { status !== 'submitted' &&  formFields}
            <div className="form__actions">
                {status === 'submitted' &&
                    <p class="form__success-msg">{successmsg}</p>
                }
                {(status === 'idle' || status === 'error') &&
                    <button type="submit" className={submit.classname}>{submit.text}</button>
                }
                {status === 'loading' &&
                    <button type="submit" disabled className={'loading ' + submit.classname}>{submit.sendingText}</button>
                }
            </div>
        </form>
    )
}

Form.propTypes = {
    action: PropTypes.func,
    onFieldChange: PropTypes.func,
    fields: PropTypes.array,
    submit: PropTypes.object,
    successmsg: PropTypes.string,
    errormsg: PropTypes.string
}

Form.defaultProps = {
    submit: {
        classname: 'btn',
        text: 'submit',
        sendingText: 'Sending...'
    },
    successmsg: 'Your message has been sent.',
    errormsg: 'An error occurred while sending the form. Please try again'
}

export default Form;