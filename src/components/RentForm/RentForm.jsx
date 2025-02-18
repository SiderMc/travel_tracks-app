import Button from '../Button/Button';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RentForm.module.css';
import { useState } from 'react';
import Notification from '../Notification/Notification';

const ValidateSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short, minimum 3 letters.')
    .max(50, 'Name is too long, maximum 50 letters.')
    .required('Name field is required.')
    .trim(),
  email: Yup.string()
    .email('Email is invalid.')
    .required('Email field is required.')
    .trim(),
  date: Yup.string().required('Date field is required.'),
  comment: Yup.string()
    .min(5, 'Comment is too short.')
    .required('Comment field is required.')
    .trim(),
});

export default function RentForm() {
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });
  const text = `Thank you, ${formData.name}! We received your request.`;

  const handleContacts = (values, actions) => {
    setFormData(values);
    setMessage(true);
    actions.resetForm();
  };

  return (
    <div className={css.rent}>
      {message && <Notification type={'success'} text={text} />}
      <div className={css.rent__content}>
        <h2 className={css.rent__title}>Book your campervan now</h2>
        <p className={css.rent__desc}>
          Stay connected! We are always ready to help you.
        </p>
        <Formik
          initialValues={formData}
          onSubmit={handleContacts}
          validationSchema={ValidateSchema}>
          {({ values }) => (
            <Form className={css.rent__form}>
              <Field
                type="text"
                name="name"
                className={css.rent__input}
                placeholder="name*"
                autoComplete="off"
              />
              <ErrorMessage component="span" name="name" />
              <Field
                type="text"
                name="email"
                className={css.rent__input}
                placeholder="Email*"
                autoComplete="off"
              />
              <ErrorMessage component="span" name="email" />
              <Calendar
                dateFormat="dd/mm/yy"
                name="date"
                placeholder="Booking date*"
                inputClassName={css.rent__input}
                value={values.date}
                onChange={e => {
                  values.date = e.value;
                }}
              />
              <ErrorMessage component="span" name="date" />
              <Field
                name="comment"
                className={css.rent__comment}
                placeholder="Comment*"
                autoComplete="off"
              />
              <ErrorMessage component="span" name="comment" />
              <Button name={'Send'} variant={'primary'} type={'submit'} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
