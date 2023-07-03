import psycopg2
import openai
from flask import Flask, request, jsonify
from transformers import pipeline, Conversation
from flask_cors import CORS
import os

db_password = os.getenv("DB_PASSWORD")
# Get the OpenAI API key from the environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")

app = Flask(__name__)
CORS(app, resources={r"/api/conversation": {"origins": "*"}})


# # Connect to your postgres DB
# conn = psycopg2.connect(
#     dbname="database-viewpoint",
#     user="postgres",
#     password=db_password,
#     host="database-viewpoint.cbkxaouat9kh.eu-north-1.rds.amazonaws.com",
#     port="5432"
# )

# # Open a cursor to perform database operations
# cur = conn.cursor()

# @app.route('/api/conversation', methods=['POST'])
# def conversation():
#     data = request.json
#     message = data.get('message')

#     # Create a Conversation object from the message
#     conversation = Conversation(message)

#     # Generate a response using the conversational pipeline
#     responses = conversational_pipeline(conversation)

#     # The generated response will be the last one in the list
#     response = responses.generated_responses[-1]

#     # # Save the conversation to the database
#     # cur.execute("INSERT INTO conversations (user, message, response) VALUES (%s, %s, %s)", 
#     #             ('user1', message, response))
#     # conn.commit()

#     return jsonify(response)

@app.route('/api/conversation', methods=['POST'])
def conversation():
    data = request.json
    message = data.get('message')

    # Call the OpenAI API with the message
    response = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[
          {
            "role": "user",
            "content": message
          }
      ]
    )

    # Return the model's response
    return jsonify(response['choices'][0]['message']['content'])

if __name__ == '__main__':
    app.run(port=5432)
