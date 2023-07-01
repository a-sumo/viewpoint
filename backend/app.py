from flask import Flask, request, jsonify
import openai
import os 
app = Flask(__name__)

openai.api_key = os.getenv("OPENAI_API_KEY")

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

    return jsonify(response['choices'][0]['message']['content'])