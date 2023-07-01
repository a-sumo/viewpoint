import psycopg2
from flask import Flask, request, jsonify
from transformers import pipeline
import os

db_password = os.getenv("DB_PASSWORD")


app = Flask(__name__)

conversational_pipeline = pipeline("conversational")

# Connect to your postgres DB
conn = psycopg2.connect(
    dbname="database-viewpoint",
    user="postgres",
    password=db_password,
    host="database-viewpoint.cbkxaouat9kh.eu-north-1.rds.amazonaws.com",
    port="5432"
)

# Open a cursor to perform database operations
cur = conn.cursor()

@app.route('/api/conversation', methods=['POST'])
def conversation():
    data = request.json
    message = data.get('message')

    # Generate a response using the conversational pipeline
    responses = conversational_pipeline([message])

    # The generated response will be the last one in the list
    response = responses[-1]['generated_text']

    # Save the conversation to the database
    cur.execute("INSERT INTO conversations (user, message, response) VALUES (%s, %s, %s)", 
                ('user1', message, response))
    conn.commit()

    return jsonify(response)

if __name__ == '__main__':
    app.run(port=5432)

# openai.api_key = os.getenv("OPENAI_API_KEY")

# @app.route('/api/conversation', methods=['POST'])
# def conversation():
#     data = request.json
#     message = data.get('message')

#     # Call the OpenAI API with the message
#     response = openai.ChatCompletion.create(
#       model="gpt-3.5-turbo",
#       messages=[
#           {
#             "role": "user",
#             "content": "Say this is a conversation"
#           }
#       ]
#     )

#     return jsonify(response['choices'][0]['message']['content'])