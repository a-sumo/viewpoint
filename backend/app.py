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
    response = openai.Completion.create(
      engine="text-davinci-002",
      prompt=message,
      max_tokens=150
    )

    return jsonify(response.choices[0].text.strip())