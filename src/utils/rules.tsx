export const RULES={
    Required: "Field is Required",
    PASSWORD: 'Password Required',
    NEW_PASSWORD: 'New Password Required',
    CONFIRM_PASSWORD: 'Confirm Password Required',
    CURRENT_PASSWORD: 'Current Password Required',
    FULL_NAME: 'Full Name Required',
    SUBJECT: 'Subject Required',
    MESSAGE: 'Message Required',
    NAME: 'Name Required',
    LAST_NAME: 'Last Name Required',
    CONFIRM_NEW_PASSWORD: {
      required: 'Confirm New Password Required',
      notMatch: 'New Password and Confirm New Password should match.',
    },
    EMAIL_PHONE_MRNO: 'Email/Phone/MR No Required',
    MOBILE: {
        required: 'Mobile No Required',
        minLength: { value: 10, message: 'Mobile number minimum 10 characters.'},
        maxLength: { value: 10, message: 'Mobile number contain maximum 10 characters.' },
    },
    EMAIL: {
      required: `Email is required!`,
      minLength: {value: 5, message: 'Email contain minimum 5 characters.'},
      maxLength: {value: 50, message: 'Email contain maximum 50 characters.'},
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Please enter valid email',
      },
    },
}