from flask import Blueprint, render_template, request, redirect, url_for, flash

app_routes = Blueprint('app_routes', __name__)

@app_routes.route('/')
def index():
    return render_template('index.html')

@app_routes.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Handle login logic here
        username = request.form['username']
        password = request.form['password']
        # Validate credentials and log in user
        flash('Login successful!', 'success')
        return redirect(url_for('app_routes.index'))
    return render_template('login.html')

@app_routes.route('/accounts')
def accounts():
    # Logic to display accounts
    return render_template('accounts.html')

@app_routes.route('/invoices')
def invoices():
    # Logic to display invoices
    return render_template('invoices.html')

@app_routes.route('/reports')
def reports():
    # Logic to generate and display reports
    return render_template('reports.html')