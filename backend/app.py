# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pandas as pd

# app = Flask(__name__)
# CORS(app)

# CSV_PATH = "data.csv"

# @app.route('/groom', methods=['GET'])
# def get_groom_profiles():
  
#     df = pd.read_csv(CSV_PATH)

   
#     min_age = request.args.get('minAge', type=int)
#     max_age = request.args.get('maxAge', type=int)
#     religion = request.args.get('religion', '').lower()
#     profession = request.args.get('profession', '').lower()

  
#     if min_age is not None:
#         df = df[df['age'] >= min_age]
#     if max_age is not None:
#         df = df[df['age'] <= max_age]
#     if religion:
#         df = df[df['religion'].str.lower() == religion]
#     if profession:
#         df = df[df['profession'].str.lower() == profession]

  
#     result = df.fillna("").to_dict(orient='records')
#     return jsonify(result)

# if __name__ == '__main__':
#     app.run(debug=True)




# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import mysql.connector

# app = Flask(__name__)
# CORS(app)


# @app.route('/groom', methods=['GET'])
# def get_filtered_grooms():
#     conn = mysql.connector.connect(
#         host="localhost",
#         user="root",
#         password="Mahesh@123",
#         database="matrimony"
#     )
#     cursor = conn.cursor(dictionary=True)


#     query = "SELECT id,name,age,profession,city,image,timestamp,password,home_town,gender,dob, education,mother_tongue, martial_status, phone_number,email,religion,salary,height,zodiac_sign,father_occupation,mother_occupation,bio FROM groom WHERE 1=1"
#     params = []


#     min_age = request.args.get('minAge', type=int)
#     max_age = request.args.get('maxAge', type=int)
#     religion = request.args.get('religion', '').strip().lower()
#     profession = request.args.get('profession', '').strip().lower()
# # this is vulnerable to sql injection 
#     if min_age is not None:
#         query += " AND age >= %s"
#         params.append(min_age)
#     if max_age is not None:
#         query += " AND age <= %s"
#         params.append(max_age)
#     if religion:
#         query += " AND LOWER(religion) = %s"
#         params.append(religion)
#     if profession:
#         query += " AND LOWER(profession) = %s"
#         params.append(profession)

#     cursor.execute(query, params)
#     results = cursor.fetchall()

#     cursor.close()
#     conn.close()

#     return jsonify(results)


# @app.route('/bride', methods=['GET'])
# def get_filtered_brides():
#     conn = mysql.connector.connect(
#         host="localhost",
#         user="root",
#         password="Mahesh@123",
#         database="matrimony"
#     )
#     cursor = conn.cursor(dictionary=True)

#     query = "SELECT * FROM bride WHERE 1=1"
#     params = []

#     min_age = request.args.get('minAge', type=int)
#     max_age = request.args.get('maxAge', type=int)
#     religion = request.args.get('religion', '').strip().lower()
#     profession = request.args.get('profession', '').strip().lower()

#     if min_age is not None:
#         query += " AND age >= %s"
#         params.append(min_age)
#     if max_age is not None:
#         query += " AND age <= %s"
#         params.append(max_age)
#     if religion:
#         query += " AND LOWER(religion) = %s"
#         params.append(religion)
#     if profession:
#         query += " AND LOWER(profession) = %s"
#         params.append(profession)

#     cursor.execute(query, params)
#     results = cursor.fetchall()

#     cursor.close()
#     conn.close()

#     return jsonify(results)

# if __name__ == "__main__":
#     app.run(debug=True)



from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])

GROOM_COLUMNS = "id,name,age,profession,city,image,timestamp,password,home_town,gender,dob,education,mother_tongue,marital_status,phone_number,email,religion,salary,height,zodiac_sign,father_occupation,mother_occupation,bio"
BRIDE_COLUMNS = "id,name,age,profession,city,image,timestamp,password,home_town,gender,dob,education,mother_tongue,marital_status,phone_number,religion,salary,height,zodiac_sign,father_occupation,mother_occupation,bio"  # Remove 'email' if not present in bride table

@app.route('/groom', methods=['GET'])
def get_filtered_grooms():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Mahesh@123",
        database="matrimony"
    )
    cursor = conn.cursor(dictionary=True)

    query = f"SELECT {GROOM_COLUMNS} FROM groom WHERE 1=1"
    params = []

    min_age = request.args.get('minAge', type=int)
    max_age = request.args.get('maxAge', type=int)
    religion = request.args.get('religion', '').strip().lower()
    profession = request.args.get('profession', '').strip().lower()

    if min_age is not None:
        query += " AND age >= %s"
        params.append(min_age)
    if max_age is not None:
        query += " AND age <= %s"
        params.append(max_age)
    if religion:
        query += " AND LOWER(religion) = %s"
        params.append(religion)
    if profession:
        query += " AND LOWER(profession) = %s"
        params.append(profession)

    cursor.execute(query, params)
    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(results)

@app.route('/bride', methods=['GET'])
def get_filtered_brides():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Mahesh@123",
        database="matrimony"
    )
    cursor = conn.cursor(dictionary=True)

    # Remove 'email' from BRIDE_COLUMNS if it does not exist in your bride table!
    query = f"SELECT {BRIDE_COLUMNS} FROM bride WHERE 1=1"
    params = []

    min_age = request.args.get('minAge', type=int)
    max_age = request.args.get('maxAge', type=int)
    religion = request.args.get('religion', '').strip().lower()
    profession = request.args.get('profession', '').strip().lower()

    if min_age is not None:
        query += " AND age >= %s"
        params.append(min_age)
    if max_age is not None:
        query += " AND age <= %s"
        params.append(max_age)
    if religion:
        query += " AND LOWER(religion) = %s"
        params.append(religion)
    if profession:
        query += " AND LOWER(profession) = %s"
        params.append(profession)

    cursor.execute(query, params)
    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)