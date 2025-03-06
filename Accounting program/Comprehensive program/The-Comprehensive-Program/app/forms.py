from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, DecimalField, DateField, SelectField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length, Email, NumberRange

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20)])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Sign Up')

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

class AccountForm(FlaskForm):
    account_name = StringField('Account Name', validators=[DataRequired()])
    account_type = SelectField('Account Type', choices=[('asset', 'Asset'), ('liability', 'Liability'), ('equity', 'Equity')], validators=[DataRequired()])
    balance = DecimalField('Balance', validators=[DataRequired(), NumberRange(min=0)])
    submit = SubmitField('Create Account')

class InvoiceForm(FlaskForm):
    customer_name = StringField('Customer Name', validators=[DataRequired()])
    invoice_date = DateField('Invoice Date', format='%Y-%m-%d', validators=[DataRequired()])
    amount = DecimalField('Amount', validators=[DataRequired(), NumberRange(min=0)])
    description = TextAreaField('Description')
    submit = SubmitField('Create Invoice')