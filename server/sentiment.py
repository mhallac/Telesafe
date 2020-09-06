from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
import json

from collections import OrderedDict

from math import floor


def scaledColor(sentimentScore):
    scaled = int(floor(((sentimentScore + 1) / 2.0) * 255))

    r = 255 - scaled
    g = scaled
    b = 0

    return "#%02x%02x%02x" % (r, g, b)



patientDict = OrderedDict();
patientDict["rweasley"] = [0.5, 1, scaledColor(0.5)]
patientDict["hpotter"] = [-0.2, 2, scaledColor(-0.2)]
patientDict["hgranger"] = [0.7, 10, scaledColor(0.7)]
patientDict["adumbledore"] = [1.0, 100, scaledColor(1.0)]
patientDict["tvoldemort"] = [-1.0, 100, scaledColor(-1.0)]



def dict2json():
    return json.dumps(patientDict)

app = Flask(__name__)
CORS(app)

'''
patientDict = {
    "hpotter": [0.2, 2],
	"rweasley": [-0.8, 1],
	"hgranger": [0.7, 10]
}
'''

@app.route('/')
def hello_world():
    return patientDict

@app.route('/analyze', methods=['GET', 'POST'])
def analyze():
    # POST request
    if request.method == 'POST':
        input_data = request.get_json()
        uname = input_data["uname"]
        msg = input_data["msg"]
        updateDict(uname, msg)
        return 'OK', 200
    # GET request
    else:
        return dict2json()


def lang_anal(text):
	# instatiates client
	client = language.LanguageServiceClient()
	
	# setup document
	document = types.Document(content=text, type=enums.Document.Type.PLAIN_TEXT)

	# analyze sentiment
	sentiment = client.analyze_sentiment(document=document).document_sentiment

	return sentiment.score


def updateDict(uname, msg):
    # get patient sentiment data
    avgSent = patientDict[uname][0]
    numMsg = patientDict[uname][1]

    # analyze sentiment of current message
    thisSent = lang_anal(msg)

    # calculate new average sentiment
    avgSent = ((avgSent * numMsg) + thisSent) / (numMsg + 1)

    # store new sentiment data
    patientDict[uname][0] = avgSent
    patientDict[uname][1] = numMsg + 1

