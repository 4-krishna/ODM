from flask import Flask, render_template, request, redirect, url_for, flash, session
import os
from auth import register_user, login_user

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Change this to a secure key

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        action = request.form.get("action")  # Check if it's login or signup

        if action == "signup":
            username = request.form['username']
            email = request.form['email']
            password = request.form['password']

            if register_user(username, email, password):
                flash('Registration successful! You can now log in.', 'success')
            else:
                flash('Username or email already exists!', 'danger')

        elif action == "login":
            username = request.form['username']
            password = request.form['password']

            if login_user(username, password):
                session['username'] = username  # Store session data
                flash('Login successful!', 'success')
                return redirect(url_for('dashboard'))
            else:
                flash('Invalid credentials! Try again.', 'danger')

    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    if 'username' not in session:  # Restrict access if not logged in
        flash('Please log in first!', 'warning')
        return redirect(url_for('login'))
    return render_template('dashboard.html', username=session['username'])

@app.route('/logout')
def logout():
    session.pop('username', None)  # Remove session data
    flash('You have been logged out.', 'info')
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True, port=5080)
