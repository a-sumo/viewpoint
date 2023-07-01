from flask import Flask, request, jsonify
import openai
import os 
from transformers import pipeline

app = Flask(__name__)

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
conversational_pipeline = pipeline("conversational")

@app.route('/api/conversation', methods=['POST'])
def conversation():
    data = request.json
    message = data.get('message')

    # Generate a response using the conversational pipeline
    responses = conversational_pipeline([message])

    # The generated response will be the last one in the list
    response = responses[-1]['generated_text']

    return jsonify(response)